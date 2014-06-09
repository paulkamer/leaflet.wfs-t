var map; // the map object
var layers = {};
var drawControl;

function initMap( config ){
    // create a map in the "map" div, set the view to a given place and zoom
    map = L.map('map', config.map.options).setView(config.map.view.center, config.map.view.zoom);

    // Set the map background to our WMS layer of the world boundaries
    // Replace this with your own background layer
    layers.world = L.tileLayer.wms( config.wms.url, config.wms).addTo(map);

    // Initialize the WFST layer 
    layers.drawnItems = L.wfst(null, config.wfst).addTo(map);

    // Initialize the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: layers.drawnItems
        }
    });

    map.addControl(drawControl);

    map.on('draw:created', function (e) {
        layers.drawnItems.addLayer(e.layer);
    });
    map.on('draw:edited', function (e) {
        layers.drawnItems.wfstSave(e.layers);
    });
}
