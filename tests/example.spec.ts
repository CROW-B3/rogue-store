import { expect, test } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");

  // Expect the page title to contain "Rouge Store"
  await expect(page).toHaveTitle(/Rouge Store/);

  // Check if the header is visible
  await expect(page.locator("header")).toBeVisible();

  // Check if the hero section heading is visible
  await expect(
    page.getByRole("heading", { name: /Elevate Your Style/i }),
  ).toBeVisible();
});

test("products page displays products", async ({ page }) => {
  await page.goto("/products");

  // Expect products page to have products grid
  await expect(page.locator('[data-testid="product-grid"]')).toBeVisible();

  // Check if at least one product card is visible (within the product grid)
  const productCards = page.locator(
    '[data-testid="product-grid"] a[href^="/products/"]',
  );
  await expect(productCards.first()).toBeVisible();
});

test("can navigate to product detail page", async ({ page }) => {
  await page.goto("/products");

  // Click on the first product within the grid
  await page
    .locator('[data-testid="product-grid"] a[href^="/products/"]')
    .first()
    .click();

  // Wait for navigation to product detail page
  await page.waitForURL(/\/products\/.+/);

  // Check if product title is visible
  await expect(page.locator("h1")).toBeVisible();

  // Check if add to cart button is visible
  await expect(
    page.getByRole("button", { name: /Add to Cart/i }),
  ).toBeVisible();
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
