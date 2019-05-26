// Here https://account.mapbox.com/access-tokens/ -->
// puneeth1996p name 
// puneeth1996p@gmail.com
// https://leafletjs.com/examples/quick-start/

// the mymap variable is used to mount the map object to the #mapid div
var mymap = L.map('mapid').setView([13.066236, 77.559109], 13);
// we are adding the tileLayer with the help of access token taken from my account 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHVuZWV0aDE5OTZwIiwiYSI6ImNqdzFuZTNqdzBjdXI0OG16ZHI1aTltaWkifQ.TaxPrszB4EYLwHAmePjPHA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

// adding the marker to latlong coordinate to the map
var marker = L.marker([13.066236, 77.559109]).addTo(mymap);

// the below three lines helps in showing the message using a simple Popup
marker.bindPopup("<b>Happy Play Kids</b><br>We Are Here.").openPopup();

// adding a additional popup as required at any latlong
var popup = L.popup()
    .setLatLng([13.066236, 77.559109])
    .setContent("Happy Play Kids")
    .openOn(mymap);
// This below method is run right after script loads 
var popup = L.popup();

// onMapClick function is used return the latlong at cursor click event.
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);