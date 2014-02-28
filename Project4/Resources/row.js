
exports.rows = function getRowData() {
	var newContact = [];
	var rows = db.execute("SELECT * FROM contacts");
	while (rows.isValidRow()) {
	var parsedData = unescape(rows.fieldByName("user"));
	var displayData = JSON.parse(parsedData);

newContact.push({
	title: displayData.first_name + " " + displayData.last_name + " - " + displayData.phone_number,
	first_name: displayData.first_name,
	last_name: displayData.last_name,
	phone_number: displayData.phone_number,
	id: rows.fieldByName("id")
});

rows.next();
}

return newContact;
};