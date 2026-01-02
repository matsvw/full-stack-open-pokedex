const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('navigation to pokemon page works', async ({ page }) => {
    await page.goto('pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
    const row = page.getByRole('row', {
      name: /special attack 80/i,
    })
    await expect(row).toBeVisible()
  })
})
