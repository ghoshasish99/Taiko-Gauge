# Taiko with Gauge

![Taiko Tests](https://github.com/ghoshasish99/Taiko/workflows/Taiko%20Tests/badge.svg)  [![Build Status](https://dev.azure.com/AutomationsTools/Execution/_apis/build/status/Taiko-Gauge?branchName=master)](https://dev.azure.com/AutomationsTools/Execution/_build/latest?definitionId=7&branchName=master)


#### Taiko is a javascript based test automation framework built by the [Thoughtworks](https://www.thoughtworks.com/) team. who are responsible for giving the world, [Selenium.](https://www.selenium.dev/) Taiko is open source and can be used for building end to end tests.

Taiko is very different from Selenium. Selenium uses WebDriver a W3C standard. Taiko uses Chrome DevTools Protocol. Taiko does not need a driver (like ChromeDriver) to connect to and automate the browser. Taiko bundles the latest version of Chromium, however it can automate any browser that supports the Chrome DevTools Protocol.

### Getting started
* To install `taiko` run this : `npm install taiko --save-dev`

Taiko will also download `chromium` along with it.

Taiko comes with a built in REPL (Read–Eval–Print Loop) interactive shell that can be used to generate test scripts.

`$ taiko` will open up the REPL window.
One can begin by entering the following :
```shell
> openBrowser()
> goto("http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login")
```
With Taiko there’s no need for id/css/xpath selectors as you would interact with the web pages as you see them. 
For example, 
* If you want to click on any element with the text 'Submit' (a button on the page), simply type this in the REPL :
```shell
> click('Submit')
```
* If you want to write into an element that’s currently in focus, use
```shell
> write('something')
```
* If you want to write into an element that’s not in focus, use
```shell
> write('something',into(textBox('username'))
```
* You can also use Xpath and CSS, like so :
```shell
> click({id: "elementId"})
> click($(`//*[text()='text']`))
```
Once you have created you code or user journey using the REPL commands, simply use `.code mytestfile.js` to save all the code in a file.

This will create a well formatted code for you like this :
```javascript
const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    await openBrowser();
    await goto("http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login");
    await write("username",into(textBox('Email'));
    await write("password",into(textBox('password'));
    await click('LOG IN');
})();
```
In order to run this test, you can use the following command :
```shell
npx taiko mytestfile.js
```
For more on Taiko, read [here.](https://taiko.dev/)