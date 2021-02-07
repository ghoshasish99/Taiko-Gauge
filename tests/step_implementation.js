"use strict";
const {openBrowser,write, closeBrowser, goto, text, textBox} = require('taiko')
const assert = require('assert')

beforeSuite(async () => {
    await openBrowser(/*{ headless: false }*/)
});

afterSuite(async () => {
    await closeBrowser();
});

step("User launched eshop login page", async () => {
    //await openBrowser();
    await goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login');
});

step("User logged in eshop using the invalid emailid <EmailID> and the invalid password <Password>", async (username,password) => {
    await write(username,into(textBox('Email')),{force:true});
    await write(password,into(textBox('password')),{force:true});
    await click('LOG IN');
});

step("User should not get logged in", async () => {
    assert.ok(await text('Customer not found').exists());
});

step("User create account with <FirstName>, <LastName>, <EmailID> and <Password>", async (fname, lname, email, password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Ashish','Ashish'+random);
    await click('CREATE YOUR E-SHOP ACCOUNT');
    await write(fname,into(textBox('first name')));
    await write(lname,into(textBox('last name')));
    await write(email,into(textBox('email')));
    await write(password,into(textBox('password')));
    await write(password,into(textBox('confirm password')));
    await click('CREATE YOUR E-SHOP ACCOUNT');
});

step("User account should get created", async () => {
    assert.ok(await textBox('search product').exists());
});