import { test as base } from 'playwright-bdd';
import { LoginPage } from '../src/pages/Login/LoginPage';
import { posPages } from '../src/pages/POS/posPages';


export const test = base.extend<{
  loginPage: LoginPage;
  posPages: posPages;
}>({
  /** Share satu LoginPage instance per test scenario */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  /** Share satu posPages instance per test scenario */
  posPages: async ({ page }, use) => {
    await use(new posPages(page));
  },
});
