import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

class SecurePage extends BasePage {
  get header() { return $("h2"); }
}

export default new SecurePage();