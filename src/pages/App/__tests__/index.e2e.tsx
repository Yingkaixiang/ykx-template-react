import puppeteer from "puppeteer";

test("title is correct", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  const title = await page.title();
  expect(title).toBe("React App");
  await browser.close();
});
