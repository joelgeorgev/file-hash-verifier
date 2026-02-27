import { test, expect } from '@playwright/test'

test('renders a header', async ({ page }) => {
  await page.goto('')

  await expect(page).toHaveTitle(/File Hash Verifier/)
})
