import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

class InputsPage extends BasePage {
  get input() { return $("input[type='number']"); }

  async open() {
    await super.open("inputs");
  }

  async enterNumber(num) {
    await this.input.waitForDisplayed();
    await this.input.clearValue();
    await this.input.setValue(num);
  }

  async getValue() {
    return this.input.getValue();
  }
}

export default new InputsPage();