
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';


export class posPage extends BasePage {
  readonly path = '/';
  readonly pluInput: Locator;
  readonly popUpProductSearch: Locator;
  readonly qtyInput: Locator;
  readonly headerOnlinePos: Locator; 
  readonly addItemToListBtn: Locator; 
  readonly valueDefaultCustomer: Locator;
  readonly customerSearchBtn: Locator;
  readonly doctorSearchBtn: Locator;
  readonly pluSearchBtn: Locator;
  readonly headerListCustomer: Locator;
  readonly searchCustomerField: Locator;
  readonly listCustomerSearchResult: Locator;
  readonly addCustomerBtn: Locator;
  readonly valueFadhilCustomer: Locator;

  constructor(page: Page) {
    super(page);
    
    this.pluInput = page.locator("[name='item_name']");
    this.popUpProductSearch = page.locator('td', { hasText: 'THROMBOPHOB GEL 20 GR' })
    this.qtyInput = page.locator('[name="qty"]');
    this.headerOnlinePos = page.locator('//span[contains(text(),"GPOS MINI 3 PROD DEP")]');
    this.addItemToListBtn = page.locator('[title="Add Item To List"]');
    this.valueDefaultCustomer = page.locator('[value="Regular"]');
    this.customerSearchBtn = page
      .locator('.form-group')
      .filter({ has: page.locator('label', { hasText: 'Customer' }) })
      .locator('button.btn-primary')
    this.doctorSearchBtn = page
      .locator('.form-group')
      .filter({ has: page.locator('label', { hasText: 'Doctor' }) })
      .locator('button.btn-primary')
  this.pluSearchBtn = page.locator('button[title="Search Item"]')
  this.headerListCustomer = page.locator('h6', { hasText: 'List Customer' });
  this.searchCustomerField = page
  .locator('#table-customer-modal_filter')
  .locator('input[type="search"]')
  this.listCustomerSearchResult = page.getByText('Fadh');
  this.addCustomerBtn = page
  .locator('tr')
  .filter({ hasText: 'Fadh' })
  .locator('a.btn-insert')
  this.valueFadhilCustomer = page.locator('[value="Fadhil"]');
  }
}
