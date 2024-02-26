import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5 em relação à ontem')).toBeVisible()

  await page.waitForTimeout(500)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.getByText('200')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(500)
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('+20% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(500)
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.getByText('R$ 5.000,00')).toBeVisible()
  await expect(page.getByText('+35% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(500)
})
