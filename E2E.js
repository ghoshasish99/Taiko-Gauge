const { openBrowser, goto, click, near, textBox, into, write, clear, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://screenplay-contacts.herokuapp.com/");
        await click('New');
        await write("Taiko1",into(textBox(near("Name"))));
        await write("Taiko@user.com",into(textBox(near("Email"))));
        await write("98989898989898",into(textBox(near("Mobile"))));
        await write("2020202020202",into(textBox(near("Work"))));
        await click("Create");
        await goto("http://screenplay-contacts.herokuapp.com/");
        await click("Taiko1");
        await clear(textBox(near("Name")));
        await write("Taiko2",into(textBox(near("Name"))));
        await click("Update");
        await goto("http://screenplay-contacts.herokuapp.com/");
        await click("Taiko1");
        await click("Delete");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
