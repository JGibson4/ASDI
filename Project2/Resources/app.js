

var db = Ti.Database.open("contacts");
db.execute("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, user TEXT)");

var rows = require("row");
var data = rows.rows();

var tableView = Ti.UI.createTableView({
	data: data,
	editable: false,
});

var tabGroup = Ti.UI.createTabGroup();


var win = Ti.UI.createWindow({
	title: "Remote Data",
	backgroundColor: "#D7DADB",
	modal: true,
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win

});

var tab1 = Ti.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Form',
    window:win
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



var image = Ti.UI.createImageView ({
	left:15,
	right:15,
});

var scrollView = Ti.UI.createScrollView ({
	showVerticleScaleIndicator: true,
	layout: "vertical"
});

var remoteData = require('remote_data');
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
win.add(image);
win.add(scrollView);
navWindow.open();
entriesWindow.add(tableView);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();