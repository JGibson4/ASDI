
var db = Ti.Database.open("contacts");
db.execute("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, user TEXT)");

var rows = require("row");
var data = rows.rows();

var tableView = Ti.UI.createTableView({
	data: data,
	editable: false,
});

var tabGroup = Ti.UI.createTabGroup();

var mainWindow = Ti.UI.createWindow({
    title:'Contact Form',
    backgroundColor:'#D7DADB'
});
var tab1 = Ti.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Form',
    window:mainWindow
});

var entriesWindow = Ti.UI.createWindow({
    title:'Contact List',
    backgroundColor:'#D7DADB'
});
var tab2 = Ti.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Contacts',
    window:entriesWindow
});

var firstName = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "*First Name",
	textAlign: "left",
	color: "#000",
	top: 5,
	height: 60,
	width: 300,
});

var lastName = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "*Last Name",
	textAlign: "left",
	color: "#000",
	top: (firstName.top)+65,
	height: 60,
	width: 300,
});

var phoneNumber = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	hintText: "Phone Number",
	textAlign: "left",
	color: "#000",
	top: (lastName.top)+65, 
	width: 300, 
	height: 60,
});

var submit = Ti.UI.createButton({
	top: 200,
	title: "Submit",
	color: "#fff",
	height: 60,
	width: 300,
	backgroundColor: "#BF3D28",
});

var requiredLabel = Ti.UI.createLabel({
	text: "*Denotes required",
	top: 265,
	left: 10,
	color: "#BF3D28",
	font: {fontSize:10,fontFamily:'arial'}
});


var editWindow = Ti.UI.createWindow({
	title: "Edit Contact",
	backgroundColor: "#D7DADB",
	layout: "vertical"
});

var editFname = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	textAlign: "left",
	hintText: "First Name",
	color: "#000",
	width: 300,
	height: 60,
	top: 45,
	
});

var editLname = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	textAlign: "left",
	hintText: "Last Name",
	color: "#000",
	width: 300,
	height: 60,
	top: 5,

});

var editPhone = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	textAlign: "left",
	hintText: "Phone Number",
	color: "#000",
	width: 300,
	height: 60,
	top: 5,
	
});

var save = Ti.UI.createButton({
	title: "Save",
	color: "#fff",
	backgroundColor: "#BF3D28",
	top: 30,
	width: 300,
	height: 60,
});

var cancel = Ti.UI.createButton({
	title: "Cancel",
	color:"#BF3D28",
	backgroundColor: "#f6f6f6",
	top: 5,
	width: 300,
	height: 60,
});

var editOptions = {
	cancel: 2,
	options: ["Edit", "Delete", "Cancel"],
	selectedIndex: 2,
	destructive: 1,
	title: "Edit Or Delete Contact?"
};

var confirm = {
	cancel: 1,
	options: ["Yes", "No"],
	selectedIndex: 1,
	destructive: 0,
	title: "Are you sure you want to delete this contact? This operation cannot be un-done"
};

var req = require("crud");

editWindow.add(editFname, editLname, editPhone, save, cancel);
mainWindow.add(firstName, lastName, phoneNumber, requiredLabel, submit);
entriesWindow.add(tableView);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
