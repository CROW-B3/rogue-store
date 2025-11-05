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

test("dark mode toggle works", async ({ page }) => {
  await page.goto("/");

  const themeToggle = page.locator('[data-testid="theme-toggle"]');
  const html = page.locator("html");
  const initialTheme = await html.getAttribute("class");

  await themeToggle.click();
  await page.waitForTimeout(500);

  const newTheme = await html.getAttribute("class");
  expect(initialTheme).not.toEqual(newTheme);
});
