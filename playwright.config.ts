import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  paths: ['features/**/*.feature'],
  steps: ['steps/fixtures.ts', 'steps/pages/**/*.ts'],
});

export default defineConfig({
  testDir,
  timeout: 30_000, 
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: process.env.BASE_URL ?? 'https://mini3.gpos-efarmasi.com',
    headless: process.env.HEADLESS !== 'false',
    viewport: null, 
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      ...(process.platform === 'linux' && {
        executablePath: '/home/node/.cache/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-linux64/chrome-headless-shell',
      }),
      args: ['--start-maximized'],
    },
  },
  reporter: [
    ['list'],
    ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: false,
    }],
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
  ],
});
