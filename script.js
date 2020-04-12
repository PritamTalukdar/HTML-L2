/*****************Drag and drop app***************/
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text"),
       img = document.getElementById(data),
       imgSrc = img.getAttribute('src'),
       imgW = img.getAttribute('width'),
       imgH = img.getAttribute('height'),
       //calculate X position from event circle
       imgX = ev.target.getAttribute('cx') - ev.target.getAttribute('r') + 45;

  ev.target.parentElement.innerHTML += '<image xlink:href="' + imgSrc + '" x="' + imgX + '" y="60" width="' + imgW + 'px" height="' + imgH + 'px"/>';
  img.parentNode.removeChild(img);
}

/***************** Geo location app *************/
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // Store
  localStorage.setItem('latitude', position.coords.latitude);
  localStorage.setItem('longitude', position.coords.longitude);
  // Retrieve
  if (typeof(Storage) !== "undefined") {
    var x = document.getElementById("demo");
    x.innerHTML = "Longitude: " + localStorage.getItem('longitude')+ "<br>Latitude: "+localStorage.getItem("latitude");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}
//load initial state i.e get from local storage if available 
function initState(){
  var x = document.getElementById("demo");
  var lat = localStorage.getItem('latitude');
  var long = localStorage.getItem('longitude');
  if(lat !== null && long !== null){
    x.innerHTML = "Longitude: " + localStorage.getItem('longitude')+ "<br>Latitude: "+localStorage.getItem("latitude");
  }
}

