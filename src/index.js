console.log('hello worldsssssss')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibGlseWJtb3JpYXJ0eSIsImEiOiJjazE2bTkxajAxN2N1M21vM2VlOHhtc3IxIn0.gi0pTccVj3DivKzO7UkDyg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const el = document.createElement('div');
document.querySelector('body').appendChild(el);


// new mapboxgl.Marker(document.querySelector('#dog')).setLngLat([-74.009151, 40.705086]).addTo(map);

// new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

