import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import CheckboxesPage from "../pageobjects/checkboxes.page.js";

Given("I am on the checkboxes page", async () => {
  await CheckboxesPage.open();
});

When(/^I select checkbox (\d+)$/, async (num) => {
  await CheckboxesPage.select(num);
  this.checkbox = await CheckboxesPage.checkbox(num);
});

Then("The checkbox should be checked", async function () {
  await expect(this.checkbox).toBeSelected();
});