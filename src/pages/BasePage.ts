import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  abstract readonly path: string;

  constructor(page: Page) {
    this.page = page;
  }

  async open(options?: { timeout?: number }) {
    await this.page.goto(this.path, options);
  }

  async click(locator: Locator | string) {
    if (typeof locator === 'string') {
      await this.page.locator(locator).click();
    } else {
      await locator.click();
    }
  }

  async fill(locator: Locator | string, value: string) {
    if (typeof locator === 'string') {
      await this.page.locator(locator).fill(value);
    } else {
      await locator.fill(value);
    }
  }

  async assertTextVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}
