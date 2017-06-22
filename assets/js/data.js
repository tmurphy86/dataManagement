var config = {
	apiKey: "AIzaSyBuEVQcL8R7uPoLiDrobj5HJVMfGI4UnX8",
    authDomain: "murphytech-6f573.firebaseapp.com",
    databaseURL: "https://murphytech-6f573.firebaseio.com",
    projectId: "murphytech-6f573",
    storageBucket: "murphytech-6f573.appspot.com",
    messagingSenderId: "158805281949"
};
firebase.initializeApp(config)

var name = "";
var role = "";
var startDate = "";
var datePlus = Utilities.formatDate(new Date(), "EST",  "M/d/yyyy");
var database = firebase.database();
var rate = null
var monthPaid = null
var totalPaid = null
var dateAdded = null

$("#submit-form").on("click", function() {
	event.preventDefault();

	name = $("#name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#startDate").val().trim();
	rate = $("#salary").val().trim();

	empInfo = {
		eName:name
		eRole:role
		eStart:startDate
		eRate:rate
		dateAdded:firebase.database.ServerValue.TIMESTAMP
	}
	database.ref().push(empInfo)

	database.ref().on("child_added", function(childSnapshot) {
		console.log(childSnapshot.val())
		console.log(childSnapshot.val().name)
		console.log(childSnapshot.val().role)
		console.log(childSnapshot.val().startDate)
		console.log(childSnapshot.val().rate)
	}, function(errorObject) {
		console.log("Error logged: " + errorObject.code);
	})

	$("#full-member-list").append("<div class='well'><span id='name'> " + 
		childSnapshot.val().name +
		childSnapshot.val().role +
		childSnapshot.val().startDate +
		childSnapshot.val().rate + 
		//calculations go here for months worked, total pay
		)

	console.log("Employee added to database")

	$("#name").empty()
	$("#role").val("")
	$("#start-year").val("")
	$("#salary").val("")
});

