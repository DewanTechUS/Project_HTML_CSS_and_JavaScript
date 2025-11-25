// https://ps-lms.vercel.app/curriculum/se/414/option-1
// https://ps-lms.vercel.app/curriculum/se/414/option-1#:~:text=Scroll%20to%20top-,OPTION%201,IP%20Address%20Tracker,-Note
// references to external APIs and libraries
// https://www.youtube.com/watch?v=ly9vOqYFuMI
// https://www.youtube.com/watch?v=Lq6umspUC5c
// IP Geolocation API by IPify: https://geo.ipify.org/
// LeafletJS map library:       https://leafletjs.com/
// api URLs
// IPify service to get our own IP address
// this is my fevorite project ever/
// i was planing to make something like this for a long time
const IP_API_URL = "https://api.ipify.org?format=json";
// IP Geolocation API endpoint
const GEO_API_URL = "https://geo.ipify.org/api/v2/country,city";
// api key from https://geo.ipify.org/
const GEO_API_KEY = "https://geo.ipify.org/api/v2/country?apiKey=at_9ICOwxOKyrjKYENeqW14TfF5DPk2m&ipAddress=8.8.8.8";
// map
// i am calling the map div from html
const mapDiv = document.getElementById("map");

// this will create the map centered at [0, 0] with zoom level 2 (world view) following leafletjs documentation
const map = L.map(mapDiv).setView([0, 0], 2); 

// use OpenStreetMap tiles with Leaflet
// https://leafletjs.com/examples/quick-start/
// https://leafletjs.com/examples/quick-start/#:~:text=L.tileLayer(%27https%3A//tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png%27%2C%20%7B%0A%20%20%20%20maxZoom%3A%2019%2C%0A%20%20%20%20attribution%3A%20%27%26copy%3B%20%3Ca%20href%3D%22http%3A//www.openstreetmap.org/copyright%22%3EOpenStreetMap%3C/a%3E%27%0A%7D).addTo(map)%3B
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// create a default marker at [0, 0]
let marker = L.marker([0, 0]).addTo(map);