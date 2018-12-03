var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})

var map = L.map('map')
.addLayer(mapboxTiles)
.setView([51.507222, -0.1275], 2);

// create custom icon
var tennisIcon = L.icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/1303/1303450.svg',
    iconSize: [15, 30], // size of the icon
    popupAnchor: [0,-15]
    });

var items = [];
   var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Birthplace?api_key=keyGHT4s0GhgAfOSe";
   var data = [];
   $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              items = {};
                  items["name"] = value.fields.Name;
                  items["birthplace"] = value.fields.Birthplace;
                  items["birthday"] = value.fields.Birthday;
                  items["image_url"] = value.fields.Image_url;
                  items["latitud"] = value.fields.Lat;
                  items["longitud"] = value.fields.Lng;
                  data.push(items);
                  console.log(items);
           }); // end .each
   }); // end getJSON

function show_birthplaces(){
 for (var i in data) {
     var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
     L.marker( latlng ,{icon:tennisIcon})
     .bindPopup( '<img src="' + data[i].image_url+'" width = "150px"><br>'+ '' + data[i].name+'<br>' + '' + data[i].birthday+'<br>' + ''+ data[i].birthplace + '<br>')
  .addTo(map);
 }
}
