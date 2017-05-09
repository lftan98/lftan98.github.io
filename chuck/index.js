// API EndPoint
var url =  "https://api.icndb.com/jokes/random";

// Get Ordered List Element
var ol = document.getElementById("jokes");

// Create Request
var request = new XMLHttpRequest();
request.open("GET", url, true);

request.onload = function(){

  // Handle Response

	if(request.status == 200) {
	console.log(request); // To see the request
	console.log(typeof(request.response)); // TO see the response
	var jsonObject = JSON.parse(request.response);
	console.log(jsonObject.value.joke);  // JSONObject


	var li = document.createElement("li");
	
	li.innerHTML = jsonObject.value.joke;

	ol.appendChild(li);
	}
}

// Send Request
request.send();