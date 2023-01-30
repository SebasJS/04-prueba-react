// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const img = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://')).toBeTruthy()
})
