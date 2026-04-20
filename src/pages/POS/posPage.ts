
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
  readonly tanggalLahirFormField: Locator;
  readonly tanggalLahirInputGroup: Locator;
  readonly closeFormCustomerBtn: Locator;
  readonly valueDefaultDoctor: Locator;
  readonly listDoctorSearchResult: Locator
  readonly searchDoctorField: Locator;
  readonly headerFormDoctor: Locator;
  readonly nameDoctorFormField: Locator;
  readonly simpanFormDoctorBtn: Locator;
  readonly closeFormDoctorBtn: Locator;


  constructor(page: Page) {
    super(page);
    const addCustomerFrame = page.frameLocator('iframe[src*="customer/quick-create"]');
    const addDoctorFrame = page.frameLocator('iframe[src*="doctor/create"]');
    
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
  this.tanggalLahirFormField = addCustomerFrame.locator('input[name="birth_date"], input[name="birthdate"], .react-date-picker input').first();
  this.tanggalLahirInputGroup = addCustomerFrame.locator('.react-date-picker__inputGroup');
  this.closeFormCustomerBtn = page.getByText('×', { exact: true }).last();
  this.valueDefaultDoctor = page.locator('[value="Regular"]');
  this.listDoctorSearchResult = page
  .locator('#table-doctor-modal tbody tr')
  .first()
  .locator('button, a.btn');
  this.searchDoctorField = page
      .locator('#table-doctor-modal_filter')
      .locator('input[type="search"]');
  this.headerFormDoctor = addDoctorFrame.locator('h6', { hasText: 'Tambah Data Dokter' });
  this.nameDoctorFormField = addDoctorFrame.locator('[name="doctor_name"], input[name="doctor_name"], input[placeholder*="Nama"]').first();
  this.simpanFormDoctorBtn = addDoctorFrame.locator('input[value="Simpan"], button:has-text("Simpan"), button:has-text("Tambahkan")');
  this.closeFormDoctorBtn = page.getByText('×', { exact: true }).last();

}

async setCustomerBirthDate(tanggalLahir: string) {
    const [year, month, day] = tanggalLahir.split(/[/-]/);
    const normalizedDate = `${year}-${month}-${day}`;

    await this.tanggalLahirFormField.evaluate((element, value) => {
      const input = element as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, normalizedDate);

    const visibleDateInputs = this.tanggalLahirInputGroup.locator('input:not([type="date"])');
    const visibleDateInputCount = await visibleDateInputs.count();

    if (visibleDateInputCount >= 3) {
      await visibleDateInputs.nth(0).fill(year);
      await visibleDateInputs.nth(1).fill(month);
      await visibleDateInputs.nth(2).fill(day);
    }

    await this.tanggalLahirFormField.blur();
    await this.page.keyboard.press('Escape').catch(() => undefined);
    await this.page.locator('body').click({ position: { x: 20, y: 20 } }).catch(() => undefined);
  }
}
