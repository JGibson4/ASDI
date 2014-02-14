
var remoteResponse = function() {
    Ti.API.debug(this.responseText);
	var json = JSON.parse(this.responseText);

for (i = 0; i < json.data.children.length; i++) {
	var title = json.data.children[i].data.title;
	var url = json.data.children[i].data.url;
	var author = json.data.children[i].data.author;
	
	var labelText = Ti.UI.createLabel ({
		top: 15,
		left:15,
		right:15,
		font: {fontSize: 14, fontFamily: "arial"},
		textAlign: "center",
		color: "#fff",
		backgroundColor: "#e74c3c",
		height: 20,
		text: author
	});

var image = Ti.UI.createImageView ({
	left:15,
	right:15,
	image: url
});

var authorText = Ti.UI.createLabel ({
	left:15,
	right:15,
	font: {fontSize: 16, fontFamily: "arial"},
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#e74c3c",
	height: 80,
	text: title
});
	scrollView.add(labelText);
	scrollView.add(image);
	scrollView.add(authorText);
};
};


var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload: remoteResponse,
    onerror: remoteError,
    timeout:5000
});

xhr.open("GET", "http://api.reddit.com/r/WQHD_Wallpaper");
xhr.send();