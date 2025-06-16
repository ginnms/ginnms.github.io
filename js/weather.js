function getWeather() {
    $.get("https://api.weatherbit.io/v2.0/current?"
        + "city=Cincinnati,OH&"
        + "units=I&" //imperial units
        + "&key=e48e452127f04fb2aeb97493f32e30d1&"
        ,
        function(result) {
            $("#weather").html("<p>It is currently " + 
                                result.data[0].app_temp +
                                "°F in Cincinnati, OH</p>"
            )
        }
    );
}

$(document).ready(getWeather());

// Every Minute
setInterval(getWeather, 60000)