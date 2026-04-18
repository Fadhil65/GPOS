
npx playwright test 

npx bddgen && npx playwright test --project=chromium --grep "@login"

npx bddgen --tags "@login" && npx playwright test --project=chromium --grep "@login"

npx allure generate allure-results -o allure-report      generate allure local tanpa hapus file lama
npx allure generate allure-results --clean -o allure-report  generate allure local tanpa hapus file lama

npx allure open allure-report    open allure report local