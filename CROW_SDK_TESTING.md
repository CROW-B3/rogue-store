# Crow SDK Testing Guide - Rogue Store

## ✅ Setup Complete

The Crow SDK has been successfully integrated into the Rogue Store application for testing.

### What's Configured

**SDK Installation:**

- ✅ Local SDK linked: `@b3-crow/website-hook-sdk` → `../website-hook-sdk`
- ✅ Integration point: `/components/interaction-tracker.tsx`
- ✅ Test project API key: `pk_test_abc123def456`

**SDK Configuration:**

```typescript
{
  projectId: "pk_test_abc123def456",
  apiEndpoint: "https://crow-web-ingest-worker-dev.bitbybit-b3.workers.dev",
  capture: {
    pageViews: true,    // ✅ Auto-track page navigation
    clicks: true,       // ✅ Auto-track all clicks
    errors: true,       // ✅ Auto-track JavaScript errors
    forms: false,       // ❌ Form tracking disabled
    performance: false, // ❌ Performance tracking disabled
  },
  batching: {
    enabled: true,
    maxBatchSize: 10,   // Flush after 10 events
    flushInterval: 5000 // Flush every 5 seconds
  },
  debug: true          // ✅ Console logging enabled
}
```

---

## 🧪 How to Test

### 1. Start the Application

The dev server is already running at:

- **Local:** http://localhost:3000
- **Network:** http://192.168.1.7:3000

### 2. Open Browser DevTools

1. Open http://localhost:3000 in your browser
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to the **Console** tab

### 3. Verify SDK Initialization

You should see these console messages:

```
[Crow] SDK initialized { config: {...} }
[Crow] Session started { response: {...} }
[Crow] SDK initialization complete
[Rouge Store] Crow SDK initialized successfully
```

### 4. Test Auto-Tracking

#### Page Views

- Navigate between pages (Home → Products → Men → Women)
- Check console for:
  ```
  [Crow] Event queued { event: { type: 'pageview', ... } }
  ```

#### Click Tracking

- Click anywhere on the page (buttons, links, images)
- Check console for:
  ```
  [Crow] Event queued { event: { type: 'click', ... } }
  ```

#### Batch Sending

- After 10 events OR 5 seconds, check console for:
  ```
  [Crow] Batch sent { eventCount: X, response: {...} }
  ```

### 5. Access Global SDK Instance

The SDK is available globally in the browser console:

```javascript
// Access the SDK
window.crow;

// Track a custom event
window.crow.track("custom", { action: "test", value: 123 });

// Manually flush the queue
await window.crow.flush();

// Identify a user
window.crow.identify("user_test_123", {
  email: "test@example.com",
  plan: "premium",
});
```

---

## 🔍 Verify Data in Database

### Check Events in D1

```bash
# Query recent events
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "SELECT * FROM events ORDER BY created_at DESC LIMIT 10"

# Query sessions
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "SELECT * FROM sessions ORDER BY started_at DESC LIMIT 5"

# Query users
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "SELECT * FROM users ORDER BY last_seen DESC LIMIT 5"

# Count total events
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "SELECT COUNT(*) as total_events FROM events"
```

---

## 🐛 Troubleshooting

### SDK Not Initializing

**Check Console for Errors:**

```javascript
// Look for error messages
[Rouge Store] Failed to initialize Crow SDK: ...
```

**Common Issues:**

1. **CORS Error** - Worker should have CORS enabled (already configured)
2. **Invalid API Key** - Verify test project exists in database
3. **Network Error** - Check Worker deployment status

**Verify Worker is Running:**

```bash
curl https://crow-web-ingest-worker-dev.bitbybit-b3.workers.dev/
# Should return: {"status":"ok","service":"web-ingest-worker","version":"1.0.0"}
```

### Events Not Being Sent

**Check Queue Status:**

```javascript
// In browser console
window.crow.eventQueue.size(); // Should show number of queued events
```

**Manually Flush:**

```javascript
await window.crow.flush();
```

**Check Network Tab:**

- Look for POST requests to `/batch` or `/track`
- Status should be 200
- Response should have `{ success: true }`

### Session Not Created

**Verify Session Start Request:**

```bash
# Check if session was created in database
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "SELECT * FROM sessions WHERE id LIKE 'sess_%' ORDER BY started_at DESC LIMIT 1"
```

**Check Console:**

```javascript
[Crow] Session started { response: { success: true, sessionId: 'sess_...' } }
```

---

## 📊 Expected Behavior

### Timeline of Events

1. **Page Load (t=0s)**
   - SDK initializes
   - Session starts
   - Initial pageview captured and queued

2. **User Interaction (t=1-4s)**
   - Clicks are captured and queued
   - Page views on navigation are queued

3. **First Batch Send (t=5s)**
   - Queue flushes automatically
   - POST /batch request sent
   - Events stored in D1

4. **Subsequent Batches**
   - Every 5 seconds OR when 10 events are queued
   - Whichever comes first

5. **Page Unload**
   - Remaining events flushed
   - Session end request sent

---

## 🧹 Cleanup

### Clear Test Data

```bash
# Delete test events
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "DELETE FROM events WHERE project_id = 'proj_test123'"

# Delete test sessions
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "DELETE FROM sessions WHERE project_id = 'proj_test123'"

# Delete test users
npx wrangler d1 execute crow-web-ingest-service-db-dev --remote \
  --command "DELETE FROM users WHERE project_id = 'proj_test123'"
```

### Clear Browser Storage

```javascript
// In browser console
localStorage.removeItem("crow_anonymous_id");
sessionStorage.removeItem("crow_session_id");
sessionStorage.removeItem("crow_session_expiry");
```

---

## 📝 Next Steps

After successful testing:

1. **Disable Debug Mode** - Set `debug: false` in production
2. **Create Real Projects** - Generate unique API keys per environment
3. **Configure Privacy Settings** - Enable password/credit card masking
4. **Add User Identification** - Call `identify()` when user logs in
5. **Custom Events** - Track business-specific actions (purchases, signups, etc.)
6. **Publish SDK** - Publish to NPM once testing is complete

---

## 🔗 Related Documentation

- **Architecture:** `/web-ingest-worker/ARCHITECTURE_INTEGRATION.md`
- **Implementation:** `/web-ingest-worker/IMPLEMENTATION_SUMMARY.md`
- **Worker Endpoint:** https://crow-web-ingest-worker-dev.bitbybit-b3.workers.dev/

---

## ✅ Success Criteria

Your integration is working correctly if:

- [ ] SDK initializes without errors
- [ ] Session is created in database
- [ ] Page views are tracked automatically
- [ ] Clicks are tracked automatically
- [ ] Events are batched and sent every 5 seconds
- [ ] Data appears in D1 database
- [ ] No CORS or network errors
- [ ] Debug logs show in console

Happy testing! 🎉
