import { test as login } from "@playwright/test";

const authFile = ".auth/login.json";
const USERNAME = process.env.USERNAME || "standard_user";
const PASSWORD = process.env.PASSWORD || "secret_sauce";
login("Save  Storage state", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("username").fill(USERNAME);
  await page.getByTestId("password").fill(PASSWORD);
  await page.getByTestId("login-button").click();
  await page.context().storageState({
    path: authFile,
  });
});
