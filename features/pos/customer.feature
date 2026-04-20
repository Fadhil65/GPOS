Feature: pos Customer

  # ─────────────────────────────────────────
  # MODULE: POS - CUSTOMER
  # ─────────────────────────────────────────
Background:
    Given User sudah login dan berada di halaman POS

  @pos @customer @positive @high
  Scenario: TC-POS-006 - Default customer adalah Regular
    When Nilai default customer pada field Pelanggan adalah Regular

  @pos @customer-search @positive @medium
  Scenario: TC-POS-007 - Klik icon search customer tanpa keyword
    When User klik icon search pada field customer
    Then Popup list pelanggan tampil dan menampilkan seluruh data pelanggan

  @pos @customer-search @positive @high
  Scenario: TC-POS-008 - Cari pelanggan dengan keyword minimal 4 karakter
    When User klik icon search pada field customer
    When User input keyword "fadh" minimal 4 karakter di field pelanggan
    Then list data pelanggan tampil sesuai keyword

  # ─────────────────────────────────────────
  # MODULE: POS - CUSTOMER SELECT
  # ─────────────────────────────────────────

  @pos @customer-select @positive @high
  Scenario: TC-POS-009 - Pilih customer dari popup list pelanggan
    When User klik icon search pada field customer
    When User input keyword "fadh" minimal 4 karakter di field pelanggan
    Then list data pelanggan tampil sesuai keyword
    When User klik icon add pada salah satu pelanggan
    Then Customer terpilih dan field pelanggan terisi

  @pos @customer-select @positive @high
  Scenario: TC-POS-010 - Klik icon + pada field customer
    When User klik icon tambah pada field customer
    Then Popup form tambah pelanggan tampil

  @pos @customer-select @negative @high
  Scenario: TC-POS-011 - Validasi field mandatory pada form tambah pelanggan
    When User klik icon tambah pada field customer
    Then Popup form tambah pelanggan tampil
    When User klik button Simpan
    Then Muncul validasi customer name
    When User input "Test" di field nama
    When User klik button Simpan
    Then Muncul validasi tipe pelanggan
    When User pilih reguler pada field tipe pelanggan
    When User clear tanggal lahir
    When User klik button Simpan
    Then Muncul validasi tanggal lahir

  # ─────────────────────────────────────────
  # MODULE: POS - ADD CUSTOMER
  # ─────────────────────────────────────────

  @pos @addcustomer1 @positive @high
  Scenario: TC-POS-012 - Tambah pelanggan via Tambah Cepat dengan field mandatory valid
    When User klik icon tambah pada field customer
    Then Popup form tambah pelanggan tampil
    When User input "Test" di field nama
    When User input tanggal lahir "1999/11/16"
    When User pilih reguler pada field tipe pelanggan
    When User klik button Simpan
    Then Data pelanggan baru berhasil tersimpan
  
  @pos @addcustomer2 @negative @medium
  Scenario: TC-POS-013 - Klik icon X untuk membatalkan form tambah pelanggan
    When User klik icon tambah pada field customer
    Then Popup form tambah pelanggan tampil
    When User input "Test" di field nama
    Then User klik icon X pada form tambah pelanggan
    Then Form tertutup dan data tidak tersimpan
