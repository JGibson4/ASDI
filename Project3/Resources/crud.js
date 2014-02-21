
submit.addEventListener("click", function(e){

	if (lastName.value == "" && firstName.value == "") {
	alert("Please complete the first name and last name.");
	} else if (lastName.value == "") {
	alert("Please enter last name");
	} else if (firstName.value == "") {
	alert("Please enter first name.");
	} else {
	var userInput = {};

	userInput.first_name = firstName.value;
	userInput.last_name = lastName.value;
	if (phoneNumber.value == "") {
	phoneNumber.value = "Add Phone Number";
	userInput.phone_number = phoneNumber.value;
	} else {
	userInput.phone_number = phoneNumber.value;
	}

var saveData = escape(JSON.stringify(userInput));

	db.execute("INSERT INTO contacts (user) VALUES(?)", saveData);

	firstName.value = "";
	lastName.value = "";
	phoneNumber.value = "";

	firstName.blur();
	lastName.blur();
	phoneNumber.blur();

	data = rows.rows();
	tableView.setData(data);

	alert("Contact Saved");
}

});


tableView.addEventListener("click", function(e){
	var id = e.rowData.id;
	var firstName = e.rowData.first_name;
	var lastName = e.rowData.last_name;
	var phoneNumber = e.rowData.phone_number;

	var dialog = Ti.UI.createOptionDialog(editOptions);
	var dialogConfirm = Ti.UI.createOptionDialog(confirm);


dialog.addEventListener("click", function(e){
	if(e.index === 0) {
	
	editFname.value = firstName;
	editLname.value = lastName;
	editPhone.value = phoneNumber;

	editWindow.open();

var saveChanges = function() {
	if (editFname.value == "" && editLname.value == "") {
	alert("First Name is a required field.");
	} else if (editLname.value == "") {
	alert("Last Name is a required field.");
	} else if (editFname.value == "") {
	alert("First Name and Last Name are required fields.");
	} else {
	var userInput = {};
	userInput.first_name = editFname.value;
	userInput.last_name = editLname.value;
	userInput.phone_number = editPhone.value;

var saveData = escape(JSON.stringify(userInput));

db.execute("UPDATE contacts SET user=? WHERE id=?",saveData,id);

	editFname.value = "";
	editLname.value = "";
	editPhone.value = "";

	editFname.blur();
	editLname.blur();
	editPhone.blur();


data = rows.rows();
tableView.setData(data);

save.removeEventListener("click", saveChanges);
	editWindow.close();
	alert("Contact updated");
}
};

save.addEventListener("click", saveChanges);

var cancelChanges = function() {
	cancel.removeEventListener("click", cancelChanges);
	editWindow.close();
};
cancel.addEventListener("click", cancelChanges);

editWindow.open();
	} else if(e.index === 1) {
	dialogConfirm.addEventListener("click", function(e){
	if(e.index === 0) {
	db.execute("DELETE FROM contacts WHERE id=?", id);
	
	data = rows.rows();
	tableView.setData(data);
	
	alert("Contact deleted");	
}
});

dialogConfirm.show();
}
});

dialog.show();
});