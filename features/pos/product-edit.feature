Feature: product edit
  
  @pos @productedit @positive @high
  Scenario: TC-POS-005 - Edit Qty item yang sudah masuk list penjualan
    Given product detail sudah tampil di pos
    When User input "3" pada kolom Qty
    When User klik button add pada field Subtotal
    Then Perubahan qty tersimpan dan list penjualan diperbarui