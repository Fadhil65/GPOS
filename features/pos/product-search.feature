
Feature: product search
  Background:
    Given User sudah login dan berada di halaman POS

  @pos @product-search @negative @high
  Scenario: TC-POS-001 - Search produk dengan keyword kurang dari 4 karakter
    When User input keyword 3 char "thr" di field PLU Barcode
    Then User tekan Enter
    Then Sistem tidak menampilkan hasil pencarian

  @pos @product-search @positive @high
  Scenario: TC-POS-002 - Search produk dengan keyword minimal 4 karakter
    When User input keyword 4 char "thro" di field PLU Barcode
    Then User tekan Enter
    Then Popup list pencarian item tampil sesuai keyword