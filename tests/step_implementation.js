"use strict";

const {openBrowser,write, closeBrowser, goto, text, textBox,click,$,into} = require('taiko')

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
<<<<<<< HEAD

step("User logged in eshop using the valid emailid <EmailID> and the valid password <Password>", async (email, password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Ashish','Ashish'+random);
    await click('CREATE YOUR E-SHOP ACCOUNT');
    await write('Ashish',into(textBox('first name')));
    await write('Ghosh',into(textBox('last name')));
    await write(email,into(textBox('email')));
    await write(password,into(textBox('password')));
    await write(password,into(textBox('confirm password')));
    await click('CREATE YOUR E-SHOP ACCOUNT');
});

step("User searches for the <Product>", async (product) => {
    await write(product,into(textBox('search product')));
    await click($('button[aria-label="Search"]'));
});

step("User adds <Product> product to the cart", async (product) => {
    await click(product);
    await click('Add to your basket');
});

step("User should be able to view and add the listed product <Product>", async (product) => {
    await click($('#basket'))
    assert.ok(await text('Proceed to checkout').exists());
});

step("User enters Address details with <Title>,<FirstName>, <LastName>, <Line1>,<Line2>,<City>,<State>, <Zipcode>", async (title,fname,lname,addr1,addr2,city,state,zip) => {
    await click('Proceed to checkout');
    await write(title,into(textBox('Title')));
    await write(fname,into(textBox('First name')));
    await write(lname,into(textBox('Last name')));
    await write(addr1,into(textBox('Address line1')));
    await write(addr2,into(textBox('Address line2')));
    await write(city,into(textBox('City')));
    await write(state,into(textBox('State')));
    await write(zip,into(textBox('Zip')));
});

step("User enters Payment details with <CardNumber>, <CardName>, <Year>,<Month>,<SecurityCode>", async (cardNo,name,month,year,code) => {
    await click('Next');
    await write(cardNo,into(textBox('Card number')));
    await write(name,into(textBox('Name on card')));
    await write(month,into(textBox('Expiry month')));
    await write(year,into(textBox('Expiry year')));
    await write(code,into(textBox('Security code')));    
});

step("User should get the Confirmation of Order", async () => {
    await click('Confirm');
});
=======
>>>>>>> b943cf024b77a05242bbaa4523e846a0c3e6729e
