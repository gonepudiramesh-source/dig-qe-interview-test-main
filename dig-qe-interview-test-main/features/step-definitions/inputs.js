import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import InputsPage from "../pageobjects/inputs.page.js";

Given("I am on the inputs page", async () => {
  await InputsPage.open();
});

When(/^I enter (\d+)$/, async (num) => {
  await InputsPage.enterNumber(num);
});

Then(/^I should see (\d+) in the input$/, async (num) => {
  await expect(await InputsPage.getValue()).toBe(num);
});