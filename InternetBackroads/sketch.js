console.log("Extension running");

var url = ["http://savbladet.dk/Index.htm", "https://neave.tv/", "http://www.windows93.net/", "https://www.spacejam.com/",
          "http://manhole-covers.net/galerie/slide.php3?f=0", "https://www.nobodyhere.com/justme/me.here",
          "https://www.biodiversitet.nu/", "http://encyclopedia.uia.org/en", "https://youtu.be/AHrCI9eSJGQ",
          "https://skins.webamp.org/", "https://timberfestival.org.uk/soundsoftheforest-soundmap/", "https://pointerpointer.com/", "http://make-everything-ok.com/", "https://graphics.reuters.com/ENVIRONMENT-PLASTIC/0100B275155/index.html?",];
var link = url[Math.floor(Math.random() * url.length)];
var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = window.innerWidth;
// var arrow_position = [Math.random() * width, Math.random() * height];
var arrow_position = [100, 100];

//Code for displaying <extensionDir>/images/myimage.png:
  //var imgURL = chrome.runtime.getURL("images/myimage.png");
  //document.getElementById("someImage").src = imgURL;

var arrowdest = "images/arrowbutton.png";
var arrow = document.createElement("img");
arrow.src = chrome.extension.getURL(arrowdest);
arrow.position = arrow_position;


console.log(url);
// location.replace(link);

document.addEventListener("click", check_position);

function check_position(event) {
  if (Math.sqrt(Math.pow((event.clientX - arrow_position[0]), 2) + Math.pow((event.clientY - arrow_position[1]), 2)) < 55) {
  window.location.href = link;
  }
}

// //1. create button
// var button = document.createElement("button");
// button.innerHTML = "Do Something";
//
// // 2. Append somewhere
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);
//
// // 3. Add event handler
// button.addEventListener ("click", function() {
//   window.location.href = "http://savbladet.dk/Index.htm";
// });

//console.log(button.function);
