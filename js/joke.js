function getJoke() {
    $.get("https://v2.jokeapi.dev/joke/Any", 
        function (result) {
            if (result.type == "single") {
                $("#joke").html("<p>" + result.joke + "<p>");
            }
            else if (result.type == "twopart") {
                //TODO: Add a button to reveal delivery
                $("#joke").html("<b>" + result.setup + "</b><br><p>" + 
                    result.delivery + "</p>");
            }
        }
    );
}

//Force joke query when page is first loaded
$(document).ready(getJoke());

// Every Minute
setInterval(getJoke, 60000)
