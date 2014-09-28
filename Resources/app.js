
Titanium.UI.setBackgroundColor('#000');

var win2 = Titanium.UI.createWindow({
    title: "Project 4 The Final Frontier",
    //backgroundColor:'#fff',
    backgroundImage: "BGImage3.png"
    //title: 'Red Window'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: win2
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Moon Pictures'
});

var win4 = Titanium.UI.createWindow({
    backgroundColor: 'Red',
    title: 'Moon Landings'
});

var win5 = Titanium.UI.createWindow({
    backgroundColor: 'Yellow',
    title: 'Moon Messages'
});

var button = Titanium.UI.createButton({
    title: 'Images from the Moon'
});
button.addEventListener('click', function(){
	"use strict";
    win1.openWindow(win3, {animated:true});
});

var button4 = Titanium.UI.createButton({
    title: 'Moon Landings'
});
button4.addEventListener('click', function(){
	"use strict";
    win1.openWindow(win4, {animated:true});
});

var button5 = Titanium.UI.createButton({
    title: 'Moon Messages'
});
button5.addEventListener('click', function(){
	"use strict";
    win1.openWindow(win5, {animated:true});
});



var View1 = Ti.UI.createView({
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

var View2 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#826",
	width: 275,
	bottom: 75,
	height: 33,
	//top: 30,
	zIndex: 1
	
});

var View3 = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#826",
	width: 275,
	bottom: 115,
	height: 33,
	//top: 30,
	zIndex: 1
	
});

	var SecondView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#846",
	width: 300,
	bottom: "30%",
	//height: 455,
	top: 20,
	zIndex: 0
});
	

//Labels and Text

var Text1 = Ti.UI.createLabel({
	text: "Welcome to my App!",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 33
});

var Text2 = Ti.UI.createLabel({
	text: "Brought to you by Michael Camarata and Full Sail University.",
	color: "#fff",
	font: {fontSize: 13, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	left: 22,
	right: 22,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 133
});




View1.add(button5);
View2.add(button4);
View3.add(button);




var button9 = Titanium.UI.createButton({
    title: 'Close Blue Window'
});

/*button2.addEventListener('click', function(){
	"use strict";
    win1.closeWindow(win3, {animated:true});
});
*/

var loadFile = require("part2");

//win3.add(button2);
win2.add(View1);
win2.add(View2);
win2.add(View3);
win1.open();

// Starting window

/*
var Window1 = Ti.UI.createWindow({  
    title: "Project 1 Quotes App",
    backgroundColor:'#fff',
    backgroundImage: "BGImage3.png"
    
});

var View1 = Ti.UI.createView({
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
	
	var SecondView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 18,
	borderWidth: 3,
	borderColor: "#846",
	width: 300,
	bottom: "30%",
	//height: 455,
	top: 20,
	zIndex: 0
});
	

//Labels and Text

var Text1 = Ti.UI.createLabel({
	text: "Welcome to my App!",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 33
});

var Text2 = Ti.UI.createLabel({
	text: "Brought to you by Michael Camarata and Full Sail University.",
	color: "#fff",
	font: {fontSize: 13, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	left: 22,
	right: 22,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 133
});

var Text3 = Ti.UI.createLabel({
	text: "Project 4 - Please press button below to start!",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Gill Sans", fontStyle: "italic"},
	left: 22,
	right: 22,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 233
});

var Text4 = Ti.UI.createLabel({
	text: "Start",
	color: "#fff",
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER

});


//Window Adds

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: Window1
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Blue Window'
});

var button = Titanium.UI.createButton({
    title: 'Open Blue Window'
});
button.addEventListener('click', function(){
	"use strict";
    win1.openWindow(win3, {animated:true});
});





//var loadFile = require("part2");
//var loadFile = require("Test");


	*/

//Window1.add(View1);
//View1.add(button);
//Window1.add(SecondView);
//SecondView.add(Text2);
//SecondView.add(Text1);
//SecondView.add(Text3);
//Window1.open();
