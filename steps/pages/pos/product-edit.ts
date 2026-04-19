 import { createBdd } from 'playwright-bdd';
 import { expect } from '@playwright/test';
 import { test } from '../../fixtures';
 import { TIMEOUT, delay } from '../../../src/utils/delay';
import { posPage } from '../../../src/pages/POS/posPage';

 const { Given, When, Then } = createBdd(test);


Given('product detail sudah tampil di pos',
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
  await posPage.popUpProductSearch.click();
  await expect(posPage.popUpProductSearch).toBeVisible({
      timeout: TIMEOUT.short,
    });
  await expect(posPage.qtyInput).toBeFocused()
});
When('User input {string} pada kolom Qty',
  async ({ posPage },qtyAdd: string) => {
    await posPage.fill(posPage.qtyInput, qtyAdd);
  });
When('User klik button add pada field Subtotal', async ({ posPage }) => {
    await posPage.addItemToListBtn.click();
});
Then('Perubahan qty tersimpan dan list penjualan diperbarui', 
  async ({ page, posPage }) => {
    const [response] = await Promise.all([
      page.waitForResponse(
        res =>
          res.url().includes('/api/v1/margin/check-special-price') &&
          res.request().method() === 'POST'
      ),
      posPage.pluInput.press('Enter'),
    ]);

    const requestBody = JSON.parse(response.request().postData() || '{}');

    expect(response.request().method()).toBe('POST');
    expect(response.status()).toBe(200);
    expect(requestBody.items[0].item_name).toBe('THROMBOPHOB GEL 20 GR');
  }
);