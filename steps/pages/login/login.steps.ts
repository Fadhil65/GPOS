import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../fixtures';
import { TIMEOUT } from '../../../src/utils/delay';

const { Given, When, Then } = createBdd(test);



// ── Given ────────────────────────────────────────────────────────────────────

Given('User berada di halaman login GposLite', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.usernameInput.waitFor({
    state: 'visible',
    timeout: TIMEOUT.short,
  });
});


When('User input username {string}',
  async ({ loginPage }, username: string) => {
    await loginPage.fill(loginPage.usernameInput, username);
  },
);

Then('User input password {string}',
    async ({ loginPage }, password: string) => {
      await loginPage.fill(loginPage.passwordInput, password);
    }
);

Then ('User klik button login', async ({ loginPage }) => {
    await loginPage.loginBtn.click();
});

Then('User berhasil masuk ke dashboard GPOSLite', async ({ loginPage }) => {
    await expect(loginPage.headerOnline).toBeVisible({ 
      timeout: TIMEOUT.default,
    });
});


Then('User melihat error message', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});