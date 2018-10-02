// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.78, lng: -122.44},
          zoom: 8
        });


  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: handleSuccess,
    error: handleError,

  })

});


// function handleSuccess (response) {
//     // console.log('succes running');
//     for (let i = 0; i < response.features.length; i++) {

//         $('#info').append(`<p>${response.metadata.title}   ${response.features[i].geometry.coordinates}</p>`)
//         // $('#info').append(`<p>${response.features[i].geometry.properties.mag} ${response.features[i].geometry.properties.place}</p>`)
//         var coords = response.features[i].geometry.coordinates;
//         var latLng = new google.maps.LatLng(coords[1],coords[0]);
//         var marker = new google.maps.Marker({
//         position: latLng,
//         map: map
//           });
//         console.log(response);
//     }

// }

function handleError (error) {
    console.error(error);
}

window.handleSuccess = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          $('#info').append(`<p>${results.metadata.title}   ${results.features[i].geometry.coordinates}</p>`);
          var marker = new google.maps.Marker({
            position: latLng,
            icon: {
            url: "images/earthquake.png",
            scaledSize: {height: 40, width: 40},
        },
            map: map
          });
        }
      }







