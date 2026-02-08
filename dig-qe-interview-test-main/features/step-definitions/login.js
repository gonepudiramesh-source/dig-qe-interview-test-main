import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

Given("I am on the login page", async () => {
  await LoginPage.open();
});

When(/^I login with (.+) and (.+)$/, async (user, pass) => {
  await LoginPage.login(user, pass);
});

Then(/^I should see a flash message saying (.*)$/, async (msg) => {
  await expect(SecurePage.flashAlert).toBeDisplayed();
  await expect(SecurePage.flashAlert).toHaveTextContaining(msg);
});