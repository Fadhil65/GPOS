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
