$(document).ready(function () {
  let submitBtn = document.getElementById("submitBtn");
  let resultTitle = document.getElementById("resultTitle");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let eyeColor = document.getElementById("eyeColor");
  let hairColor = document.getElementById("hairColor");

  submitBtn.addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1",
      contentType: "application/json",
      type: "get",

      success: function (response) {
        let responseObject = response;
        
        resultTitle.innerText = responseObject.name;
        height.innerText = responseObject.height;
        weight.innerText = responseObject.mass;
        eyeColor.innerText = responseObject.eye_color;
        hairColor.innerText = responseObject.hair_color;

        console.log("success");
      },

      error: function (error) {
        console.log(error);
      },
    });
  });
});
