Feature: Login gpos
  Sebagai user
  Saya ingin bisa login ke sistem gpos
  Agar bisa mengakses layanan perizinan berusaha

  Background:
    Given User berada di halaman login GposLite

  @positive @login @regression
  Scenario: TC-LGN-001 - Login berhasil sebagai testqa2
    When User input username "test.qa2"
    Then User input password "GposLite*"
    Then User klik button login
    Then User berhasil masuk ke dashboard GPOSLite

  @negative @login @regression
  Scenario: TC-LGN-002 - Login tidak input password
    When User input username "test.qa2"
    Then User klik button login
    Then User melihat error message
