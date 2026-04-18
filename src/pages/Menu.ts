import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class Menu extends BasePage {
  readonly path = '';
  readonly menuTransaksi: Locator;


  constructor(page: Page) {
    super(page);
    this.menuTransaksi = page.locator('img[src*="ic-transaksi.svg"]');

  }
}
