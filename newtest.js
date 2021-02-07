const { openBrowser, goto, textBox, into, click, write, text, press, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login');
        await click('LOG IN');
        await write('Ashish_invalidemail@shop.com',into(textBox('Email')),{force:true});
        await write('password',into(textBox('password')),{force:true});
        await click('LOG IN');
        await text('Customer not found').exists();
        await click('CREATE YOUR E-SHOP ACCOUNT');
        await write('Ashish',into(textBox('first name')));
        await write('Ghosh',into(textBox('last name')));
        await write('Ashishtaiko124@shop.com',into(textBox('email')));
        await write('password123',into(textBox('password')));
        await write('password123',into(textBox('confirm password')));
        await click('CREATE YOUR E-SHOP ACCOUNT');
        await write('Apple iPhone 6s Plus',into(textBox('search product')));
        await click($('button[aria-label="Search"]'))
        await click('Apple iPhone 6s Plus');
        await click('Add to your basket');
        await click($('#basket'))
        await click('Proceed to checkout');
        await write('Mr',into(textBox('Title')));
        await write('Ashish',into(textBox('First name')));
        await write('Ghosh',into(textBox('Last name')));
        await write('Addr1',into(textBox('Address line1')));
        await write('Addr2',into(textBox('Address line2')));
        await write('Ams',into(textBox('City')));
        await write('NL',into(textBox('State')));
        await write('1181',into(textBox('Zip')));
        await click('Next');
        await write('111',into(textBox('Card number')));
        await write('Ashish',into(textBox('Name on card')));
        await write('11',into(textBox('Expiry month')));
        await write('2021',into(textBox('Expiry year')));
        await write('202',into(textBox('Security code')));
        await click('Confirm');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
