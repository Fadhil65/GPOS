 import { createBdd } from 'playwright-bdd';
 import { expect } from '@playwright/test';
 import { test } from '../../fixtures';
 import { TIMEOUT, delay } from '../../../src/utils/delay';

 const { Given, When, Then } = createBdd(test);

When('Nilai default customer pada field Pelanggan adalah Regular',
  async ({ posPage }) => {
    await expect(posPage.valueDefaultCustomer).toBeVisible({
      timeout: TIMEOUT.short,
    });
});

When('User klik icon search pada field customer', 
    async ({ posPage }) => {
    await posPage.customerSearchBtn.click();
});
Then('Popup list pelanggan tampil dan menampilkan seluruh data pelanggan', 
    async ({ posPage }) => {
    await expect(posPage.headerListCustomer).toBeVisible({
      timeout: TIMEOUT.default,
    });
});
When('User input keyword {string} minimal 4 karakter di field pelanggan', 
    async ({ posPage }, searchCustomerInput: string) => {
    await posPage.fill(posPage.searchCustomerField, searchCustomerInput);
  });

Then('list data pelanggan tampil sesuai keyword', 
    async ({ posPage }) => {
    await expect(posPage.listCustomerSearchResult).toBeVisible({
      timeout: TIMEOUT.short,
    });
});
When('User klik icon add pada salah satu pelanggan', 
    async ({ posPage }) => {
    await posPage.addListCustomerBtn.click();
});
Then('Customer terpilih dan field pelanggan terisi', 
    async ({ posPage }) => {
    await expect(posPage.valueFadhilCustomer).toBeVisible({
      timeout: TIMEOUT.short,})
    });
When('User klik icon tambah pada field customer', 
    async ({ posPage }) => {
    await posPage.addCustomerBtn.click();
});
Then('Popup form tambah pelanggan tampil', 
    async ({ posPage }) => {
    await expect(posPage.headerFormCustomer).toBeVisible
  });
When('User klik button Simpan',
    async ({ posPage }) => {
    await posPage.simpanFormCustomerBtn.click({timeout: TIMEOUT.short});
});
Then('Muncul validasi customer name',
    async ({ posPage }) => {
    await expect(posPage.validationFormNamaCustomer).toBeVisible
  });
When('User input {string} di field nama',
    async ({ posPage }, namaCustomerInput: string) => {
    await posPage.fill(posPage.namaCustomerFormField, namaCustomerInput);
});
Then('Muncul validasi tipe pelanggan',
    async ({ posPage }) => {
    await expect(posPage.validationTipePelangganTanggalLahir).toBeVisible
  });
When('User pilih reguler pada field tipe pelanggan',
    async ({ posPage }) => {
    await posPage.tipePelangganFormField.click();
    await posPage.regulerTipePelangganOption.click({timeout: TIMEOUT.short});
});
When('User clear tanggal lahir',
    async ({ posPage }) => {
    await posPage.deleteTglLahirFormCustomerBtn.click();
});
Then('Muncul validasi tanggal lahir',
    async ({ posPage }) => {
    await expect(posPage.validationTipePelangganTanggalLahir).toBeVisible
  });