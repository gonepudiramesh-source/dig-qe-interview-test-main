import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

class LoginPage extends BasePage {
  get username() { return $("#username"); }
  get password() { return $("#password"); }
  get loginBtn() { return $("button[type='submit']"); }

  async open() {
    await super.open("login");
  }

  async login(user, pass) {
    await this.username.waitForDisplayed();
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();