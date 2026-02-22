import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,

 /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  
  use: {
    
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
    channel: 'chrome',
    trace: 'on',
  },

  
});
