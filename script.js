$(document).ready(function(){


console.log("I hit")


    $("#search-button").on("click", function() {
        var searchValue = $("#search-value").val();

        $("#search-value").val("");

        searchWeather(searchValue)
    });


    function searchWeather(searchValue){
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=891d6bcf73691e3f5340876c34a589c2&units=imperial",
            dataType: "json",
        }).then(function(data){
        console.log(data)

        //create a history link for the search (look up .push() (this is used to set items in local storage) (do this in the function above)

        $("#today").empty()

        //creating a card for appending weather data
        var title = $("<h3>").addClass("card-title").text(data.name);
        var card = $("<div>").addClass("card");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp)
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed);
        var humid = $("<p>").addClass("card-text").text("humidity: " + data.main.humidity);
        var cardBody = $("<div>").addClass("card-body");

        cardBody.append(title, temp, wind, humid)
        card.append(cardBody);
        $("#today").append(card)






    }

     )};

//function to get a forcast (it is a different URL)
    //use a for loop to loop over all forecasts (by specs)



//function to get UV index (this is another different URL call)

//get current search history, if there is any

//print out search history (needs to be clickable?)


















})
