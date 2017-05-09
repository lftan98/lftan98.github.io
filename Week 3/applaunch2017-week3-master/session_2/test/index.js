var url = "https://testing-api-1.herokuapp.com/api/people";

// Get All Input Elements
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var genderInput = document.getElementById("gender");

// Get Button Element
var button = document.getElementById("submit");

// On Click, POST request
button.addEventListener("click", function(e) {
    axios({
      method: 'post',
      url: url,
      // To communicate with this API,
      // `params` must be used.
      params: { 
        name: nameInput.value,
        age: ageInput.value,
        gender: genderInput.value
      }
    })
    .then(function (response) {
      alert("Success!")
    })
    .catch(function (error) {
      console.log(error);
    });
})
