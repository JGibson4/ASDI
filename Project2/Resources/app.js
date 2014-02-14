
var win = Ti.UI.createWindow({
	title: "Remote Data",
	backgroundColor: "#D7DADB",
	modal: true,
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win

});

var scrollView = Ti.UI.createScrollView ({
	showVerticleScaleIndicator: true,
	layout: "vertical"
});

var remoteData = require('remote_data');

win.add(scrollView);
navWindow.open();