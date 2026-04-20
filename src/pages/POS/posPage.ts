
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
  readonly addListCustomerBtn: Locator;
  readonly valueFadhilCustomer: Locator;
  readonly addCustomerBtn: Locator;
  readonly addDoctorBtn: Locator;
  readonly headerFormCustomer: Locator;
  readonly simpanFormCustomerBtn: Locator;
  readonly validationFormNamaCustomer: Locator;
  readonly namaCustomerFormField: Locator;
  readonly validationTipePelangganTanggalLahir: Locator;
  readonly tipePelangganFormField: Locator;
  readonly regulerTipePelangganOption: Locator;
  readonly deleteTglLahirFormCustomerBtn: Locator;

  constructor(page: Page) {
    super(page);
    const addCustomerFrame = page.frameLocator('iframe[src*="customer/quick-create"]');
    
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
    this.addCustomerBtn = page.locator('a[href*="customer/quick-create"]');
    this.addDoctorBtn = page.locator('a[href*="doctor/create"]');
  this.pluSearchBtn = page.locator('button[title="Search Item"]')
  this.headerListCustomer = page.locator('h6', { hasText: 'List Customer' });
  this.searchCustomerField = page
  .locator('#table-customer-modal_filter')
  .locator('input[type="search"]')
  this.listCustomerSearchResult = page.getByText('Fadh');
  this.addListCustomerBtn = page
  .locator('tr')
  .filter({ hasText: 'Fadh' })
  .locator('a.btn-insert')
  this.valueFadhilCustomer = page.locator('[value="Fadhil"]');
  this.headerFormCustomer = page.locator('h6', { hasText: 'Tambah Pelanggan' });
  this.simpanFormCustomerBtn = addCustomerFrame.locator('input[value="Simpan"]');
  this.validationFormNamaCustomer = addCustomerFrame.locator('.disabled', { hasText: "should have required property 'customer_name'" });
  this.namaCustomerFormField = addCustomerFrame.locator('[name="customer_name"]');
  this.validationTipePelangganTanggalLahir = addCustomerFrame.locator('.alert-danger', { hasText: "Harap isi bidang yg ditandai!" });
  this.tipePelangganFormField = addCustomerFrame.locator('.css-1mhkxtv-placeholder', { hasText: 'Pilih tipe pelanggan' });
  this.regulerTipePelangganOption = addCustomerFrame.locator('#react-select-2-option-0');
  this.deleteTglLahirFormCustomerBtn = addCustomerFrame.locator('.react-date-picker__clear-button__icon');


  
}
}
