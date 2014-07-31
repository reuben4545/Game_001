function callPolice(pos){

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "http://data.police.uk/api/crimes-street/all-crime?lat=" + pos[0] + "&lng=" + pos[1], false);

  xmlhttp.send();

  crimeJSON = JSON.parse(xmlhttp.responseText);

  //console.log(xmlhttp.responseText);

  var crimes = [];

  for(var i = 0; i < crimeJSON.length; i++){

    //document.write(crimeJSON[i].category);

    //document.write("<br/>");

    crimes[crimes.length] = crimeJSON[i].category;

  }

  //console.log(crimes);

  game.onload(crimes);


}

function getLocalCrimes() {

  var lat = 0.0;
  var lng = 0.0;



  // Try HTML5 geolocation
  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      lat = position.coords.latitude;
      lng = position.coords.longitude;

      console.log("Dun" + lat);
      console.log("Dun" + lng);

      callPolice([lat, lng]);


    });


  } else {
    postcode = window.prompt("GeoLocation isn't working :S - please enter your postcode: ", "TN224JP");

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?address=" + postcode + "&sensor=true", false);

    xmlhttp.send();

    obj = JSON.parse(xmlhttp.responseText);

    lat = obj.results[0].geometry.location.lat;
    lng = obj.results[0].geometry.location.lng;

    callPolice([lat, lng]);

  } 


}



