const assert = require('assert');
const { openBrowser,into,near,write, click, clear ,closeBrowser, goto, text, textBox} = require('taiko');
const fs = require('fs');
var jsonbody = fs.readFileSync('./testdata/contacts.json');
var inputs = JSON.parse(jsonbody);

//beforeSuite(async ()=>{
//	await openBrowser({headless:false});
//});

//afterSuite(async ()=>{
//	await closeBrowser();
//})

step("Verify the contact is successfully created", async function() {
	assert.ok(await text(inputs.create.name).exists());
});

step("Create a contact", async function() {
	await click(`${inputs.objects.new}`);
	await write(inputs.create.name,into(textBox(near(inputs.objects.name))));
	await write(inputs.create.email,into(textBox(near(inputs.objects.email))));
	await write(inputs.create.mobile,into(textBox(near(inputs.objects.mobile))));
	await write(inputs.create.workphone,into(textBox(near(inputs.objects.work))));
	await click(inputs.objects.create);
});

step("Goto Contacts home page", async function() {
	await goto(inputs.url);
});


step("Update a contact", async function() {
	await click(inputs.create.name);
	await clear(textBox(near(inputs.objects.name)));
	await write(inputs.update.name,into(textBox(near(inputs.objects.name))));
	await click(inputs.objects.update);
});
step("Verify the contact is successfully updated", async function() {
	assert.ok(await text(inputs.update.name).exists());
});

step("Delete a contact", async function() {
	await click(inputs.delete.name);
	await click(inputs.objects.delete);
});

step("Verify the contact is successfully deleted", async function() {
	assert.notEqual(await text(inputs.create.name).exists(),"Exists");
});