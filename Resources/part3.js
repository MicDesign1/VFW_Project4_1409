

//win4 moon landings list



// Array information

var MoonLanding1 = [{title: "Mission 1", description: "Landed successfully"},{title: "Mission 2", description: "Landed successfully"}];


var MoonLanding2 = [{title: "Mission 1", description: "Landed successfully"},{title: "Mission 2", description: "Landed successfully"}];


var MoonLanding3 = [{title: "Mission 1", description: "Landed successfully"},{title: "Mission 2", description: "Landed successfully"}];


//
// create base UI tab and root window
//

//win4.backgroundImage("BGImage3.png");


var mainView = Ti.UI.createView({
	height: 65,
	//backgroundImage: "BGImage2.png", //green,
	top: 6
	
});

var border1 = Ti.UI.createView({
	backgroundColor: "#d4d4d4",
	height: 1,
	top: mainView.height + mainView.top
	
});

var label1 = Ti.UI.createLabel({
	color: '#d4d4d4',
	text: 'Moon Landings',
	font: {fontSize:20,fontFamily:'Helvetica Neue'},
	top: 30,
	textAlign: 'center',
	width: "100%",
	//zIndex: 6
});


var moons = Ti.UI.createTableView({
	top: border1.top + border1.height
	
});


if(Ti.Platform.name === "iPhone OS"){
	moons.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
};




var MoonLanding1 = Ti.UI.createTableViewSection({
	headerTitle: "Earliest Moon Landing Attempts"
	
});

var MoonLanding2 = Ti.UI.createTableViewSection({
	headerTitle: "Successful Moon Missions"
	
});

var MoonLanding3 = Ti.UI.createTableViewSection({
	headerTitle: "Future of Moon Landings"
	
});


var getDetails = function(){
	var detailsWindow = Ti.UI.createWindow({
		backgroundImage: "BGImage3.png"
	});

		var DeetMainView = Ti.UI.createView({
			height: 65,
			//backgroundColor: "#d4d4d4",
			top: 6
			
		});

		var DeetBorder1 = Ti.UI.createView({
			//backgroundColor: "#d4d4d4",
			height: 1,
			top: DeetMainView.height + DeetMainView.top
			
		});

		var DeetLabel1 = Ti.UI.createLabel({
			color:'#d4d4d4',
			text: this.title,
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			top: 20,
			textAlign: 'center',
			width: "100%"
			//zIndex: 6
		});

			var detailText = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize:20,fontFamily:'Helvetica Neue'},
				top: DeetBorder1.height + DeetBorder1.top + 45,

			});


			var closebutton = Ti.UI.createLabel({
			backgroundColor: "#d4d4d4",
			color: "#333",
			text: "Back",
			height: 55,
			left: 10,
			right: 10,
			font:{fontSize: 18, fontFamily:'Helvetica Neue'},
			width: "100%",
			bottom: 0,
			textAlign: "center"

			});

			var closeWindow = function(){
				detailsWindow.close();


			};

			closebutton.addEventListener("click", closeWindow);

			DeetMainView.add(DeetLabel1);
			detailsWindow.add(DeetMainView, DeetBorder1, detailText, closebutton);

			detailsWindow.open();
};




for(var i=0, j=MoonLanding1.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: MoonLanding1[i].title,
		desc: MoonLanding1[i].description,
		hasChild: true
		});
		MoonLanding1.add(aRow);
		aRow.addEventListener("click", getDetails);
}

for(var i=0, j=MoonLanding2.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: MoonLanding2[i].title,
		desc: MoonLanding2[i].description,
		hasChild: true
		});
		MoonLanding2.add(aRow);
		aRow.addEventListener("click", getDetails);
}

for(var i=0, j=MoonLanding3.length; i<j; i++){
		var aRow = Ti.UI.createTableViewRow({
		title: MoonLanding3[i].title,
		desc: MoonLanding3[i].description,
		hasChild: true
		});
		MoonLanding3.add(aRow);
		aRow.addEventListener("click", getDetails);
};


var MoonSections = [MoonLanding1, MoonLanding2, MoonLanding3];

moons.setData(MoonSections);

win4.add(moons);

win4.add(label1);
win4.add(mainView, border1, label1);

//window1.open();



//
// create controls tab and root window
//


