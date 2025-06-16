if (document.cookie.indexOf("lastVisit") <0 ){
    alert("Welcome to my homepage for the first time");
}   
else
    // TODO: format Date
    alert("Welcome back! Your last visit was " + getCookie("lastVisit"));

document.cookie = "lastVisit=" + new Date();


// Credit: https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} 