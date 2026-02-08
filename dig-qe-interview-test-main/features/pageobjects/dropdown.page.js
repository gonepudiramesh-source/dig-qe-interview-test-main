import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

class DropdownPage extends BasePage {
  get dropdown() { return $("#dropdown"); }

  async open() {
    await super.open("dropdown");
  }

  async selectByIndex(index) {
    await this.dropdown.waitForDisplayed();
    await this.dropdown.selectByIndex(Number(index));
  }

  async getSelectedText() {
    return this.dropdown.$("option:checked").getText();
  }
}

export default new DropdownPage();