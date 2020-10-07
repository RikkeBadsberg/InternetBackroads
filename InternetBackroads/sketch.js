console.log("Extension running");

var url = ["http://savbladet.dk/Index.htm", "https://neave.tv/", "http://www.windows93.net/", "https://www.spacejam.com/",
           "https://www.nobodyhere.com/justme/me.here",
          "https://www.biodiversitet.nu/", "http://encyclopedia.uia.org/en", "https://youtu.be/AHrCI9eSJGQ",
          "https://skins.webamp.org/", "https://timberfestival.org.uk/soundsoftheforest-soundmap/", "http://make-everything-ok.com/",
          "https://graphics.reuters.com/ENVIRONMENT-PLASTIC/0100B275155/index.html?","https://ikeamuseum.com/sv/ikea-kataloger/",
          "https://imisstheoffice.eu/", "http://www.fallingfalling.com/", "http://pixelsfighting.com/", "https://www.harald-nyborg.dk/",
          "http://grishaverse.com/", "https://www.theinspiration.com/2020/08/pencil-artworks-by-bashir-sultani/", "https://archiveofourown.org/",
          "https://www.funkbrewing.com/elizabethtown/", "https://blacklivesmatters.carrd.co/", "http://isitfridayyet.net/", "https://www.dndbeyond.com/",
          "https://aartdevos.dk/", "https://www.foxnews.com/"," https://www.msnbc.com/", "https://politiken.dk/", "https://itch.io/",
          "https://driveandlisten.herokuapp.com/", "https://musescore.com/", "http://astronaut.io/", "https://hex.frvr.com/",
          "https://www.photopea.com/", "https://www.flickeringmyth.com/", "http://www.welcometonightvale.com/",
          "https://www.lexilogos.com/english/index.htm", "https://www.oldbookillustrations.com/",
          "https://www.nerdfitness.com/blog/a-beginners-guide-to-handstands/", "https://da.wikipedia.org/wiki/Ymerdrys"];
var link = url[Math.floor(Math.random() * url.length)];
var body = document.body,
    html = document.documentElement;
// var height = window.innerHeight;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var width = window.innerWidth;
var arrow_x = Math.random() * width;
var arrow_y = Math.random() * height;

//Code for displaying <extensionDir>/images/myimage.png:
  //var imgURL = chrome.runtime.getURL("images/myimage.png");
  //document.getElementById("someImage").src = imgURL;


  var arrow = new Image();
  arrow.src = chrome.runtime.getURL("images/arrowbutton.png");
  arrow.style.position = "absolute";
  arrow.style.left = (arrow_x - 50).toString() + "px";
  arrow.style.top = (arrow_y - 50).toString() + "px";
  document.body.appendChild(arrow);

console.log(arrow_x, arrow_y);

document.addEventListener("click", check_position);

function check_position(event) {
  console.log(event.pageX, event.pageY);
  if (Math.sqrt(Math.pow((event.pageX - arrow_x), 2) + Math.pow((event.pageY - arrow_y), 2)) < 55) {
  window.location.href = link;
  }
}
