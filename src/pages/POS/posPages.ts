
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';


export class posPages extends BasePage {
  readonly path = '/';
  readonly pluInput: Locator;

  

  constructor(page: Page) {
    super(page);

    // Navigation
    this.pluInput = page.locator("[name='item_name']");
    
  }
}
