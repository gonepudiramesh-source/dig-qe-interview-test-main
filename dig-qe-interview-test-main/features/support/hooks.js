import { Before, After } from "@wdio/cucumber-framework";

Before(async () => {
  await browser.maximizeWindow();
});

After(async function (scenario) {
  if (scenario.result.status === "FAILED") {
    await browser.takeScreenshot();
  }
});