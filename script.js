$(document).ready(function () {

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

        //create a history link for the search (look up .push()

    }

     )};





















})