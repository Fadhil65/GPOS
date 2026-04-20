 import { createBdd } from 'playwright-bdd';
 import { expect } from '@playwright/test';
 import { test } from '../../fixtures';
 import { TIMEOUT, delay } from '../../../src/utils/delay';

 const { Given, When, Then } = createBdd(test);
 let saveCustomerResponsePromise: Promise<any> | null = null;

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
    async ({ page, posPage }) => {
    saveCustomerResponsePromise = page.waitForResponse(
      res =>
        res.url().includes('/api/v1/customer/quick-create') &&
        res.request().method() === 'POST',
      { timeout: TIMEOUT.long }
    );
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
When('User input tanggal lahir {string}',
    async ({ posPage }, tanggalLahir: string) => {
  await posPage.setCustomerBirthDate(tanggalLahir);
});
Then('Data pelanggan baru berhasil tersimpan',
    async () => {
    const response = await saveCustomerResponsePromise;

    const requestBody = JSON.parse(response.request().postData() || '{}');

    expect(response.status()).toBe(200);
    expect(requestBody.customer_name).toBe('Test');
    expect(requestBody.birth_date).toContain('1999');
    }); 
Then('User klik icon X pada form tambah pelanggan',
    async ({ posPage }) => {
    await posPage.closeFormCustomerBtn.click({
      timeout: TIMEOUT.short,
    }); 
    });
Then('Form tertutup dan data tidak tersimpan',
    async ({ posPage }) => {
    await expect(posPage.addCustomerBtn).toBeVisible({
      timeout: TIMEOUT.default,
    });
    });

