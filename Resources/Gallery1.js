
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
//var itemCount = 35;
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "GalleryImages");
var imageFiles = imagesFolder.getDirectoryListing();
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = pWidth-200;
var size = trueCanvasWidth-30;

//var mainWin = Ti.UI.createWindow({
//	backgroundColor: "#fff"
	

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	top: 40,
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-border.height-border.top-40,
	backgroundImage: "BGImage2.png",
	showVerticalScrollIndicator: true,
	//backgroundColor: "#dedede",
	layout: "horizontal"
	
});


var getDetails = function(dataSource){
	var detailsWindow = Ti.UI.createWindow({
		backgroundImage: "BGImage2.png"
	});
		var DeetMainView = Ti.UI.createView({
			height: 65,
			//backgroundColor: "#d4d4d4",
			top: 6,
			
			
		});

		var DeetBorder1 = Ti.UI.createView({
			//backgroundColor: "#d4d4d4",
			height: 33,
			top: DeetMainView.height + DeetMainView.top
			
		});

		var DeetLabel1 = Ti.UI.createLabel({
			color:'#AF0D2D',
			text: dataSource,
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			top: 40,
			textAlign: 'center',
			width: "100%",
			zIndex: 6
		});
			var largeImage = Ti.UI.createImageView({
			image: "GalleryImages/"+ dataSource
			});
		


			var closebutton = Ti.UI.createLabel({
			backgroundColor: "#d4d4d4",
			color: "#333",
			text: "Back",
			height: 55,
			left: 5,
			right: 5,
			font:{fontSize: 18, fontFamily:'Helvetica Neue'},
			width: "100%",
			bottom: 0,
			textAlign: "center"

			});

			var closeWindow = function(){
				detailsWindow.close();


			};

			closebutton.addEventListener("click", closeWindow);

			detailsWindow.add(DeetLabel1);
			detailsWindow.add(largeImage);
			detailsWindow.add(DeetMainView, DeetBorder1, closebutton);

			detailsWindow.open();

	};


viewContainer.addEventListener("click", function(event){
	getDetails(event.source.title);
	//console.log(event.source.title);
});

var label4 = Ti.UI.createLabel({
	//color: '#fff',
	text: "Gallery of Amazing Animals",
	color: "#510BAC",
	top: 20,
	font: {fontSize: 17, fontFamily: "Gill Sans", fontWeight: "bold", fontStyle: "italic"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	//width: "100%",
	//zIndex: 6
});


var displayItems = function(){
	mainView.hide();
	mainView = null;
	label1 = null;
	window1.add(border);
	window1.add(viewContainer);
	//window1.layout = "horizontal";
	mainView2.hide();
	mainView2 = null;
	label2.hide();
	label2 = null;
	window1.add(label4);
};

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#793807",
		top: 10,
		left: 10,
		//margin: 10,
		width: size,
		height: size,
		borderRadius: 25
		
	});
	var newImage = Ti.UI.createImageView({
		image: "GalleryImages/"+ imageFiles[i],
		title: imageFiles[i]
		
		//top: 0,
		//width: 122
		
		
	});
	view.add(newImage);
	//var text = Ti.UI.createLabel({text: i+1, color: "fff"});
	//view.add(text);
	viewContainer.add(view);
};


	

mainView2.addEventListener("click", displayItems);


