
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';


export class posPage extends BasePage {
  readonly path = '/';
  readonly pluInput: Locator;
  readonly popUpProductSearch: Locator;
  readonly qtyInput: Locator;
  readonly headerOnlinePos: Locator;  

  

  constructor(page: Page) {
    super(page);

    // Navigation
    this.pluInput = page.locator("[name='item_name']");
    this.popUpProductSearch = page.locator('td', { hasText: 'THROMBOPHOB GEL 20 GR' })
    this.qtyInput = page.locator('[name="qty"]');
    this.headerOnlinePos = page.locator('//span[contains(text(),"GPOS MINI 3 PROD DEP")]');
  }
}
