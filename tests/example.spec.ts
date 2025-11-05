import { expect, test } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");

  // Expect the page title to contain "Rogue Store"
  await expect(page).toHaveTitle(/Rogue Store/);

  // Check if the header is visible
  await expect(page.locator("header")).toBeVisible();

  // Check if the hero section is visible
  await expect(
    page.getByRole("heading", { name: /Welcome to Rogue Store/i }),
  ).toBeVisible();
});

test("products page displays products", async ({ page }) => {
  await page.goto("/products");

  // Expect products page to have products grid
  await expect(page.locator('[data-testid="product-grid"]')).toBeVisible();

  // Check if at least one product card is visible
  const productCards = page.locator("a[href^='/products/']");
  await expect(productCards.first()).toBeVisible();
});

test("can navigate to product detail page", async ({ page }) => {
  await page.goto("/products");

  // Click on the first product
  await page.locator("a[href^='/products/']").first().click();

  // Wait for navigation to product detail page
  await page.waitForURL(/\/products\/.+/);

  // Check if product title is visible
  await expect(page.locator("h1")).toBeVisible();

  // Check if add to cart button is visible
  await expect(
    page.getByRole("button", { name: /Add to Cart/i }),
  ).toBeVisible();
});

test("cart functionality works", async ({ page }) => {
  await page.goto("/products");

  // Click on first product
  await page.locator("a[href^='/products/']").first().click();

  // Wait for page to load
  await page.waitForURL(/\/products\/.+/);

  // Click add to cart
  await page.getByRole("button", { name: /Add to Cart/i }).click();

  // Check if cart badge updates (should show 1 item)
  await expect(page.locator('[data-testid="cart-badge"]')).toContainText("1");
});

test("dark mode toggle works", async ({ page }) => {
  await page.goto("/");

  // Find the theme toggle button
  const themeToggle = page.locator('[data-testid="theme-toggle"]');

  // Get initial theme
  const html = page.locator("html");
  const initialTheme = await html.getAttribute("class");

  // Toggle theme
  await themeToggle.click();

  // Wait for theme to change
  await page.waitForTimeout(500);

  // Check if theme changed
  const newTheme = await html.getAttribute("class");
  expect(initialTheme).not.toEqual(newTheme);
});
