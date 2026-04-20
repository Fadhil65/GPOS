import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../fixtures';
import { TIMEOUT, delay } from '../../../src/utils/delay';

const { When, Then } = createBdd(test);
let saveDoctorResponsePromise: Promise<any> | null = null;


When('Nilai default dokter pada field Dokter adalah Internal', async ({ posPage }) => {
  await expect(posPage.valueDefaultDoctor).toBeVisible({
    timeout: TIMEOUT.short,
  });
});

When('User klik icon search pada field dokter', async ({ posPage }) => {
  await posPage.doctorSearchBtn.click();
});

When('User input keyword {string} minimal 4 karakter di field dokter', async ({ posPage }, searchDoctorInput: string) => {
  await posPage.fill(posPage.searchDoctorField, searchDoctorInput);
});

Then('list data dokter tampil sesuai keyword', async ({ posPage }) => {
  await expect(posPage.listDoctorSearchResult).toBeVisible({
    timeout: TIMEOUT.short,
  });
});
Then('User klik icon add pada salah satu doctor', async ({ posPage }) => {
  await posPage.addListDoctorBtn.click({timeout: TIMEOUT.short });
});
Then('Doctor terpilih dan field doctor terisi', async ({ posPage }) => {
  await expect(posPage.valueDiniDoctor).toBeVisible({
    timeout: TIMEOUT.default,
  });
});

When('User klik icon tambah pada field dokter', async ({ posPage }) => {
  await posPage.addDoctorBtn.click();
});

Then('Popup form tambah dokter tampil', async ({ posPage }) => {
  await expect(posPage.headerFormDoctor).toBeVisible({
    timeout: TIMEOUT.default,
  });
});

When('User input {string} di field nama dokter', 
    async ({ posPage }, nameDoctorInput: string) => {
  await posPage.fill(posPage.nameDoctorFormField, nameDoctorInput);
  });

When('User klik button Simpan dokter', async ({ page, posPage }) => {
  saveDoctorResponsePromise = page.waitForResponse(
    (res: any) =>
      res.url().includes('/api/v1/doctor/create') &&
      res.request().method() === 'POST',
    { timeout: TIMEOUT.long }
  );
  await posPage.simpanFormDoctorBtn.click({
    timeout: TIMEOUT.short,
  });
});

Then('Data dokter baru berhasil tersimpan', 
    async () => {
        const response = await saveDoctorResponsePromise;
    
        const requestBody = JSON.parse(response.request().postData() || '{}');
    
        expect(response.status()).toBe(200);
        expect(requestBody.doctor_name).toBe('Dini');
}); 
When('User klik X pada form tambah dokter', 
    async ({ posPage }) => {
    await posPage.closeFormDoctorBtn.click({ timeout: TIMEOUT.short });
  });


Then('Form tambah dokter tertutup dan data tidak tersimpan', 
    async ({ posPage }) => {
  await expect(posPage.addDoctorBtn).toBeVisible({
    timeout: TIMEOUT.default,
  });
});