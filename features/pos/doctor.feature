Feature: pos Doctor

Background:
    Given User sudah login dan berada di halaman POS

  @pos @doctor1 @positive @high
  Scenario: TC-POS-014 - Default dokter adalah Internal
    When Nilai default dokter pada field Dokter adalah Internal

  @pos @doctor2 @positive @high
  Scenario: TC-POS-015 - Cari doctor dengan keyword minimal 4 karakter
    When User klik icon search pada field dokter
    When User input keyword "mawl" minimal 4 karakter di field dokter
    Then list data dokter tampil sesuai keyword

  @pos @doctor3 @positive @high
  Scenario: TC-POS-016 - Tambah dokter via form registrasi
    When User klik icon tambah pada field dokter
    Then Popup form tambah dokter tampil
    When User input "Dini" di field nama dokter
    When User klik button Simpan dokter
    Then Data dokter baru berhasil tersimpan

  @pos @doctor4 @negative @medium
  Scenario: TC-POS-017 - Klik Batal pada form tambah dokter
    When User klik icon tambah pada field dokter
    Then Popup form tambah dokter tampil
    When User input "Test Doctor" di field nama dokter
    And User klik X pada form tambah dokter
    Then Form tambah dokter tertutup dan data tidak tersimpan