$(document).ready(function () {
    var searchHistory = JSON.parse(localStorage.getItem("cities")) || [];
    console.log(typeof searchHistory)
    console.log(searchHistory)


    if (searchHistory !== null && typeof searchHistory !== "string") {
        // searchHistory.split(",")
        console.log(searchHistory)
    } else {

        searchHistory = [];
        console.log(searchHistory)
    }

    
    var historyDiv = document.getElementById("search-history")
    console.log(historyDiv)


    searchHistory.forEach(function (searchHistory) {
        var button = document.createElement("BUTTON");
        button.textContent = searchHistory;
        console.log(button)
        historyDiv.appendChild(button);
    });



    //use a conditional to check if the citiesArray has a .length property
    //if (searchHistory) {
    //localstorage.getItem and grab the array
    //} else {
    //may be redundant 

    //}
    // var citiesArray = ["New York", "Philadelphia", "chicago"]
    // localStorage.setItem("cities", citiesArray)


    //if i want to turn searchHistory back into an array I think i have to use?


    $("#search-button").on("click", function () {
        console.log(searchHistory)
        var searchValue = $("#search-value").val();
        searchHistory.push(searchValue)
        localStorage.setItem("cities", JSON.stringify(searchHistory))


        $("#search-value").val("");

        searchWeather(searchValue)
        searchForcast(searchValue)
    });


    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=891d6bcf73691e3f5340876c34a589c2&units=imperial",
            dataType: "json",
        }).then(function (data) {
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


        )
    };

    function searchForcast(searchValue) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=891d6bcf73691e3f5340876c34a589c2&units=imperial",
            dataType: "json",
        }).then(function (data) {
            console.log(data)

            $("#tomorrow").empty()

            //creating a card for appending weather data
            var date = $("<h6>").addClass("card-title").text(data.list[0].dt_txt);
            var card2 = $("<div>").addClass("card");
            var temp2 = $("<p>").addClass("card-text").text("Temp: " + data.list[0].main.temp)
            var humid2 = $("<p>").addClass("card-text").text("humidity: " + data.list[0].main.humidity);
            var cardBody2 = $("<div>").addClass("card-body");

            cardBody2.append(date, temp2, humid2)
            card2.append(cardBody2);
            $("#tomorrow").append(card2)

            $("#next-day").empty()

            //creating a card for appending weather data
            var date3 = $("<h6>").addClass("card-title").text(data.list[8].dt_txt);
            var card3 = $("<div>").addClass("card");
            var temp3 = $("<p>").addClass("card-text").text("Temp: " + data.list[8].main.temp)
            var humid3 = $("<p>").addClass("card-text").text("humidity: " + data.list[8].main.humidity);
            var cardBody3 = $("<div>").addClass("card-body");

            cardBody3.append(date3, temp3, humid3)
            card3.append(cardBody3);
            $("#next-day").append(card3)

            $("#next-day-2").empty()

            //creating a card for appending weather data
            var date4 = $("<h6>").addClass("card-title").text(data.list[16].dt_txt);
            var card4 = $("<div>").addClass("card");
            var temp4 = $("<p>").addClass("card-text").text("Temp: " + data.list[16].main.temp)
            var humid4 = $("<p>").addClass("card-text").text("humidity: " + data.list[16].main.humidity);
            var cardBody4 = $("<div>").addClass("card-body");

            cardBody4.append(date4, temp4, humid4)
            card4.append(cardBody4);
            $("#next-day-2").append(card4)

            $("#next-day-3").empty()

            //creating a card for appending weather data
            var date5 = $("<h6>").addClass("card-title").text(data.list[24].dt_txt);
            var card5 = $("<div>").addClass("card");
            var temp5 = $("<p>").addClass("card-text").text("Temp: " + data.list[24].main.temp)
            var humid5 = $("<p>").addClass("card-text").text("humidity: " + data.list[24].main.humidity);
            var cardBody5 = $("<div>").addClass("card-body");

            cardBody5.append(date5, temp5, humid5)
            card5.append(cardBody5);
            $("#next-day-3").append(card5)

            $("#next-day-4").empty()

            //creating a card for appending weather data
            var date6 = $("<h6>").addClass("card-title").text(data.list[32].dt_txt);
            var card6 = $("<div>").addClass("card");
            var temp6 = $("<p>").addClass("card-text").text("Temp: " + data.list[32].main.temp)
            var humid6 = $("<p>").addClass("card-text").text("humidity: " + data.list[32].main.humidity);
            var cardBody6 = $("<div>").addClass("card-body");

            cardBody6.append(date6, temp6, humid6)
            card6.append(cardBody6);
            $("#next-day-4").append(card6)
        }




        )
    }




    // function to get a forcast (it is a different URL) (does that mean I use a different ajax call?) api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=891d6bcf73691e3f5340876c34a589c2


    //use a for loop to loop over all forecasts (by specs)



    //function to get UV index (this is another different URL call)

    //get current search history, if there is any

    //print out search history (needs to be clickable?)

})
