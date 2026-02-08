import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import DropdownPage from "../pageobjects/dropdown.page.js";

Given("I am on the dropdown page", async () => {
  await DropdownPage.open();
});

When(/^I select option (\d+)$/, async (index) => {
  await DropdownPage.selectByIndex(index);
});

Then(/^I should see option (.*) selected$/, async (text) => {
  await expect(await DropdownPage.getSelectedText()).toContain(text);
});