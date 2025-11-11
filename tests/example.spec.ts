import { expect, test } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Rouge Store/);
  await expect(page.locator("header")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Elevate Your Style/i }),
  ).toBeVisible();
});

test("products page displays products", async ({ page }) => {
  await page.goto("/products");

  await expect(page.locator('[data-testid="product-grid"]')).toBeVisible();

  const productCards = page.locator(
    '[data-testid="product-grid"] a[href^="/products/"]',
  );
  await expect(productCards.first()).toBeVisible();
});

test("can navigate to product detail page", async ({ page }) => {
  await page.goto("/products");

  await page
    .locator('[data-testid="product-grid"] a[href^="/products/"]')
    .first()
    .click();

  await page.waitForURL(/\/products\/.+/);

  await expect(page.locator("h1")).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Add to Cart/i }),
  ).toBeVisible();
});

test("cart functionality works", async ({ page }) => {
  await page.goto("/products");

  await page
    .locator('[data-testid="product-grid"] a[href^="/products/"]')
    .first()
    .click();

  await page.waitForURL(/\/products\/.+/);

  // Wait for page to load
  await page.waitForLoadState("networkidle");

  // Check if variants exist (Size label indicates variants)
  const sizeLabel = page.locator("label").filter({ hasText: "Size" });
  const hasVariants = (await sizeLabel.count()) > 0;

  if (hasVariants) {
    // Find all variant buttons (exclude Add to Cart button)
    const variantButtons = page.locator(
      'button[type="button"]:not(:has-text("Add to Cart"))',
    );

    // Click first 2 buttons (typically first Size and first Color)
    const buttonCount = await variantButtons.count();
    const clickCount = Math.min(2, buttonCount);

    for (let i = 0; i < clickCount; i++) {
      await variantButtons.nth(i).click();
      await page.waitForTimeout(100); // Small delay between clicks
    }
  }

  // Now add to cart
  const addToCartButton = page.getByRole("button", { name: /Add to Cart/i });
  await addToCartButton.click();

  // Wait for toast message with longer timeout
  await expect(page.getByText(/Added to cart/i)).toBeVisible({
    timeout: 10000,
  });
});
