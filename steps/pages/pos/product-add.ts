 import { createBdd } from 'playwright-bdd';
 import { expect } from '@playwright/test';
 import { test } from '../../fixtures';
 import { TIMEOUT, delay } from '../../../src/utils/delay';

 const { Given, When, Then } = createBdd(test);

 Given('User sudah login, masuk ke halaman pos dan sudah search product',
    async ({ loginPage, sideBarMenu, posPage }) => {
  await loginPage.open();
    await loginPage.usernameInput.waitFor({
      state: 'visible',
      timeout: TIMEOUT.short,
  });

  await loginPage.usernameInput.fill('test.qa2');
  await loginPage.passwordInput.fill('GposLite*');
  await loginPage.loginBtn.click();

  await expect(loginPage.headerOnline).toBeVisible({
    timeout: TIMEOUT.long,
  });
  await sideBarMenu.menuTransaksi.click({
    timeout: TIMEOUT.short,
  });
  await sideBarMenu.transaksiPenjualan.click({});
  await sideBarMenu.penjualanBukaPos.click({});
  await delay.default();
  await posPage.pluInput.fill('thro');
  await posPage.pluInput.press('Enter');
  await expect(posPage.popUpProductSearch).toBeVisible({
      timeout: TIMEOUT.short,
    });
});
When('User klik nama atau kode PLU item yang ingin ditambah',
  async ({ posPage }) => {
    await posPage.popUpProductSearch.click();
  },
);
Then('product detail tampil di pos', 
    async ({ posPage }) => {
    await expect(posPage.popUpProductSearch).toBeVisible({
      timeout: TIMEOUT.short,
    });
});
Then('Cursor auto focus dan block pada field Qty', 
    async ({ posPage }) => {
    await expect(posPage.qtyInput).toBeFocused()
});