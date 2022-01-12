/**
  Build the custom toolbar
**/

// Add marker, polygon drawing functionality to custom toolbar
const markerDrawer = new L.Draw.Marker(map, drawControl.options.draw.marker);
const polyDrawer = new L.Draw.Polygon(map, drawControl.options.draw.polygon);
const rectDrawer = new L.Draw.Rectangle(map, drawControl.options.draw.rectangle);

// Draw function (de)activation steps to take when toggling toolbar items
$('.toolbarButton').click(function() {
    const id = $(this).attr('id');
    // If this toolbar button was already activated, deactivate toolbar
    if ($(this).hasClass("leaflet-draw-toolbar-button-enabled")){
      deactivateDrawing();
    } else {
    // Otherwise, deactivate any other active drawers and activate selected one
      deactivateDrawing();
      switch(id) {
        case 'markerButton':
          markerDrawer.enable();
          break;
        case 'polygonButton':
          polyDrawer.enable();
          break;
        case 'rectangleButton':
          rectDrawer.enable();
          break;
        default:
          console.log(`missing action for toolbar button id ${id}`);

      }
      activateDrawButton(`#${id}`);
    }
});

// Remove all styling when any draw feature is created
map.on('draw:created', function(e) {
  deactivateDrawing();
});
