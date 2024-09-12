// --------------- MAPBOX ---------------
// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12", // style URL
//   center: campgroundData.geometry.coordinates, // starting position [lng, lat]
//   zoom: 10, // starting zoom
// });

// map.addControl(new mapboxgl.NavigationControl());

// const marker = new mapboxgl.Marker()
//   .setLngLat(campgroundData.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h5>${campgroundData.title}</h5><p>${campgroundData.location}</p>`
//     )
//   )
//   .addTo(map);
// --------------- MAPBOX ---------------

// --------------- MAPTILER ---------------
maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.BRIGHT,
  center: campgroundData.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

new maptilersdk.Marker()
  .setLngLat(campgroundData.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h3>${campgroundData.title}</h3><p>${campgroundData.location}</p>`
    )
  )
  .addTo(map);
// --------------- MAPTILER ---------------
