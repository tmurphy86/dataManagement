var config = {
	apiKey: "AIzaSyBuEVQcL8R7uPoLiDrobj5HJVMfGI4UnX8",
    authDomain: "murphytech-6f573.firebaseapp.com",
    databaseURL: "https://murphytech-6f573.firebaseio.com",
    projectId: "murphytech-6f573",
    storageBucket: "murphytech-6f573.appspot.com",
    messagingSenderId: "158805281949"
};
firebase.initializeApp(config)

	$.ajax({
		url: queryURL,
		method: "GET"

	})
		
var name = "";
var role = "";
var startDate = "";
var datePlus = Utilities.formatDate(new Date(), "EST",  "M/d/yyyy");
var database = firebase.database();
var rate = null
var monthPaid = null
var totalPaid = null

$("#submit-form").on("click", function() {

	event.preventDefault();

	name = $("#").val().trim();
	role = $("#").val().trim();
	startDate = $("#").val().trim();
	datePlus = $("#").val().trim();
	//database = $("#").val().trim();
	rate = $("#").val().trim();
	monthPaid = $("#").val().trim();
	totalPaid = $("#").val().trim();	

	empInfo = {
		eName:name
		eRole:role
		eStart:startDate
		eRate:rate
	}
	database.ref().push(empInfo)

	database.ref().on("value", function(snapshot) {
		console.log(snapshot.val())
		console.log(snapshot.val().name)
		console.log(snapshot.val().role)
		console.log(snapshot.val().startDate)
		console.log(snapshot.val().rate)
	})


})