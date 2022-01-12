/**
  Map set up
 **/

// Create a new map centered on Quadra Island with default zoom disabled
const mapOptions = {
  zoomControl: false,
}

const map = L.map('map', mapOptions).setView([50.09074123831468, -125.19478797912596], 11);

// Add zoom to bottom right of page
L.control.zoom({
  position: 'bottomright'
}).addTo(map);

// Add map tiles
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
  minZoom: 5,
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
