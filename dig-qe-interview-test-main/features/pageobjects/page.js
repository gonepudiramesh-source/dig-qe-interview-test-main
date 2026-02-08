import { $ } from "@wdio/globals";

export default class BasePage {
  get flashAlert() {
    return $("#flash");
  }

  async open(path) {
    await browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}