import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class sideBarMenu extends BasePage {
  readonly path = '';
  readonly menuTransaksi: Locator;
  readonly transaksiPenjualan: Locator;
  readonly penjualanBukaPos: Locator;


  constructor(page: Page) {
    super(page);
    this.menuTransaksi = page.locator('img[src*="ic-transaksi.svg"]');
    this.transaksiPenjualan = page
  .locator('li.nav-item.with-sub')
  .filter({ has: page.locator('a[href="/point-of-sales/offline"]') })
  .locator('a', { hasText: 'Penjualan' })
  .first()
    this.penjualanBukaPos = page.getByRole('link', { name: 'Buka POS' });
  }
}
