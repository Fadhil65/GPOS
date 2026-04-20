Feature: product add



@pos @productadd2 @positive @high
  Scenario: TC-POS-003 - Tambah product dari hasil pencarian manual
  TC-POS-004 - Auto focus pada field Qty di popup atribut produk

    Given User sudah login, masuk ke halaman pos dan sudah search product
    When User klik nama atau kode PLU item yang ingin ditambah
    Then product detail tampil di pos
    Then Cursor auto focus dan block pada field Qty