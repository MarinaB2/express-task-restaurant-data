
$(document).ready(function () {
    $.ajax({
       method : "GET",
       url : "/data",
       dataType : "json",

    }).done(function(data){

        document.getElementById("restaurantName").innerHTML = data.name;
        document.getElementById("description").innerHTML = data.description;
        document.getElementById("image").src = "assets/images/restaurant1.png";
        document.getElementById("location").innerHTML = data.location;
        document.getElementById("averageRating").innerHTML = data.averageRating;
    })
  
  
})
