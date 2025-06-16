
function displayTime() {
    document.getElementById('digit-clock').innerHTML = "Current time: " + new Date();
}
setInterval(displayTime, 500);
