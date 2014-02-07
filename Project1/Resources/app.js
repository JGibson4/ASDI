
var buildViews = require("build");

var win = Ti.UI.createWindow({
	title:  "My Favorite Cars",
	backgroundColor: "#D7DADB",
	modal: true,
	// layout: "horizontal"
	
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
        window: win
});

var scrollView = Ti.UI.createScrollView({
	showVerticleScaleIndicator: true,
	layout:"vertical"
});

buildViews.views();
navWindow.open();
win.open();
