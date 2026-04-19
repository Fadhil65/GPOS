import { test as base } from 'playwright-bdd';
import { loginPage } from '../src/pages/Login/loginPage';
import { posPage } from '../src/pages/POS/posPage';
import { sideBarMenu } from '../src/pages/sideBarMenu';


export const test = base.extend<{
  loginPage: loginPage;
  posPage: posPage;
  sideBarMenu: sideBarMenu;
}>({
  /** Share satu LoginPage instance per test scenario */
  loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },

  /** Share satu posPage instance per test scenario */
  posPage: async ({ page }, use) => {
    await use(new posPage(page));
  },
  sideBarMenu: async ({ page }, use) => {
    await use(new sideBarMenu(page));
  },
  
});
