/**
  Configure draw control from https://github.com/Leaflet/Leaflet.draw,
  but don't add default toolbar to map
**/

const editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

const drawControlOptions = {
  position: 'topleft',
  draw: {
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects
        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
      },
      shapeOptions: {
        color: '#bada55'
      }
    },
    rectangle: {
        shapeOptions: {
            clickable: false
        }
    },
    polyline: false,
    circle: false,
    circlemarker: false
  },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: editableLayers
  }
};

const drawControl = new L.Control.Draw(drawControlOptions);

// When created event fired, add item to 'editableLayers'
map.on(L.Draw.Event.CREATED, function(e) {
  const type = e.layerType,
    layer = e.layer;
  editableLayers.addLayer(layer);
});
