$(function(){


<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuEVQcL8R7uPoLiDrobj5HJVMfGI4UnX8",
    authDomain: "murphytech-6f573.firebaseapp.com",
    databaseURL: "https://murphytech-6f573.firebaseio.com",
    projectId: "murphytech-6f573",
    storageBucket: "murphytech-6f573.appspot.com",
    messagingSenderId: "158805281949"
  };
  firebase.initializeApp(config);


				$.ajax({
					url: queryURL,
					method: "GET"

				})


				database.ref().push({
					name: name,


				});

				});
