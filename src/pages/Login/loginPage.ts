import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';


export class loginPage extends BasePage {
  readonly path = '/';
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  
  readonly errorMessage: Locator;
  readonly headerOnline: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[name="email"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginBtn   = page.getByRole('button', { name: 'Masuk' });
    this.errorMessage  = page.locator('[class*="error-bar"]');
    this.headerOnline  = page.locator('span.ml-1.text-uppercase', { hasText: 'Online' });

  }


  
}
