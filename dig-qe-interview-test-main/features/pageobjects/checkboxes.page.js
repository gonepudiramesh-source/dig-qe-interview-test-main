import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

class CheckboxesPage extends BasePage {
  get header() { return $("h3"); }
  checkbox = (num) => $(`#checkboxes input:nth-of-type(${num})`);

  async open() {
    await super.open("checkboxes");
  }

  async select(num) {
    const box = await this.checkbox(num);
    await box.waitForClickable();
    if (!(await box.isSelected())) {
      await box.click();
    }
  }
}

export default new CheckboxesPage();