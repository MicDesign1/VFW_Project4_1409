// win3 moon images 
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var imageFiles = imagesFolder.getDirectoryListing();

var newImage1 = Ti.UI.createImageView({
		image: "photos/moon1.jpg"
});

win3.add(newImage1);

var win3n1 = Titanium.UI.iOS.createNavigationWindow({
   window: win3
});

var button3b = Titanium.UI.createButton({
    title: 'Even More Images from the Moon'
});

var View13 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#826",
	width: 275,
	bottom: 35,
	height: 33,
	//top: 30,
	zIndex: 1
	
});


win3.add(View13);
View13.add(button3b);


/*
	



var newImage2 = Ti.UI.createImageView({
		image: "photos/moon2.jpg"
});

//win3b.add(newImage2);





var win3c = Titanium.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Moon Pictures 2'
});

//var win3n2 = Titanium.UI.iOS.createNavigationWindow({
   window: win3b
});








*/

var loadFile2 = require("part3");

