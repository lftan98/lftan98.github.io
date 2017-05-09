// API EndPoint
var url =  "http://api.icndb.com/jokes/random";
// Get Element Here.
var button=document.getElementById('button_clickme');
var content=document.getElementById('content');
// Add Event Listener of click to button
button.addEventListener('click', function(){
	content.innerText='Bye Bye';
});


// GET Request

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