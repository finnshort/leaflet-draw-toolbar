// Functions to disable drawing and remove active button styling
const deactivateDrawing = () => {
    // disable any activate drawers
    markerDrawer.disable();
    polyDrawer.disable();
    rectDrawer.disable();
    activeButton = "";
    // turn off active button styling
    $(".leaflet-draw-toolbar-button-enabled").removeClass("leaflet-draw-toolbar-button-enabled");
    // remove instructions to cancel drawing
    $("#cancelText").css('visibility', 'hidden');
}

const activateDrawButton = buttonId => {
  activeButton = buttonId;
  $(`#${buttonId}`).addClass("leaflet-draw-toolbar-button-enabled");
  $("#cancelText").css('visibility', 'visible');
}

// Toggle 'switch toolbar' button between default and custom toolbars
$('#toggleToolbarButton').click(function() {
  if ($('#overlay-slide').hasClass("out")) {
    setTimeout(() => {
      map.removeControl(drawControl);
    }, 300);
    ($('#overlay-slide').removeClass('out'));
  } else {
    deactivateDrawing();
    ($('#overlay-slide').addClass('out'));
    setTimeout(() => {
      map.addControl(drawControl)
    }, 700);
  }
})
