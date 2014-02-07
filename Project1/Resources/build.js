
var myInfo = require("data");

exports.views = function infoView() {
	for (i=0; i<myInfo.data.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "#233250",
			height: "100",
			top: 63,
			width: "99%"
		});
		
		var carLabel = Ti.UI.createLabel({
			text: myInfo.data[i].info(),
			textAlign: "center",
			font: {fontSize: 14, fontFamily: "arial"},
			color: "fff",
			top:10
		});
		view.add(carLabel);
		scrollView.add(view);
		navWindow.add(scrollView);
	};
};
