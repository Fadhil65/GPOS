Feature: e2e


  @e2e
  Scenario: end to end
    Given User sudah login dan berada di halaman POS
    When User klik icon tambah pada field customer
    Then Popup form tambah pelanggan tampil
    When User input "Budi" di field nama
    When User input tanggal lahir "1999/11/16"
    When User pilih reguler pada field tipe pelanggan
    When User klik button Simpan
    Then Data pelanggan baru berhasil tersimpan
    Then User klik icon X pada form tambah pelanggan
    When User klik icon search pada field customer
    When User input keyword "Budi" minimal 4 karakter di field pelanggan
    Then list data pelanggan tampil sesuai keyword
    When User klik icon add pada salah satu pelanggan
    Then Customer terpilih dan field pelanggan terisi
    When User klik icon tambah pada field dokter
    Then Popup form tambah dokter tampil
    When User input "Dini" di field nama dokter
    When User klik button Simpan dokter
    Then Data dokter baru berhasil tersimpan
    And User klik X pada form tambah dokter
    When User klik icon search pada field dokter
    When User input keyword "Dini" minimal 4 karakter di field dokter
    Then list data dokter tampil sesuai keyword
    Then User klik icon add pada salah satu doctor
    Then Doctor terpilih dan field doctor terisi
    When User input keyword 4 char "thro" di field PLU Barcode
    Then User tekan Enter
    Then Popup list pencarian item tampil sesuai keyword
    When User klik nama atau kode PLU item yang ingin ditambah
    Then product detail tampil di pos
    Then Cursor auto focus dan block pada field Qty
    When User input "3" pada kolom Qty
    When User klik button add pada field Subtotal
    Then Perubahan qty tersimpan dan list penjualan diperbarui