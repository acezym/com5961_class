$(document).ready(function(){
  $('#profile').DataTable( {
    "ajax" : "profile.json"
    "pageLength" : 5
        "columns" : [
          { "data" : "Name" },
          { "data" : "Nationality" },
          { "data" : "Rank" },
        ]
    }); // end .getJSON
});     // Get a list of record
