 import { createBdd } from 'playwright-bdd';
 import { expect } from '@playwright/test';
 import { test } from '../../fixtures';
 import { TIMEOUT, delay } from '../../../src/utils/delay';

 const { Given, When, Then } = createBdd(test);


Given('User sudah login dan berada di halaman POS', async ({ loginPage, sideBarMenu }) => {
  await loginPage.open();
    await loginPage.usernameInput.waitFor({
      state: 'visible',
      timeout: TIMEOUT.default,
  });

  await loginPage.usernameInput.fill('test.qa2');
  await loginPage.passwordInput.fill('GposLite*');
  await loginPage.loginBtn.click();

  await expect(loginPage.headerOnline).toBeVisible({
    timeout: TIMEOUT.default,
  });
  await sideBarMenu.menuTransaksi.click({
    timeout: TIMEOUT.default,
  });
  await sideBarMenu.transaksiPenjualan.click({});
  await sideBarMenu.penjualanBukaPos.click({});
  await delay.default();
});
When('User input keyword 3 char {string} di field PLU Barcode',
  async ({ posPage }, plubarcodeInput: string) => {
    await posPage.fill(posPage.pluInput, plubarcodeInput);
  },
);
Then('User tekan Enter', async ({ page }) => {
    await page.keyboard.press('Enter');
});
Then('Sistem tidak menampilkan hasil pencarian', async ({ posPage }) => {
    timeout: TIMEOUT.short;
});

When('User input keyword 4 char {string} di field PLU Barcode',
  async ({ posPage }, plubarcodeInput: string) => {
    await posPage.fill(posPage.pluInput, plubarcodeInput);
  },
);
Then('Popup list pencarian item tampil sesuai keyword', async ({ posPage }) => {
    await expect(posPage.popUpProductSearch).toBeVisible({
      timeout: TIMEOUT.short,
    });
});