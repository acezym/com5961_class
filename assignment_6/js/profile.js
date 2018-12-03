$(document).ready(function(){
  $("button#roll_up").click(function() {
    var table1_items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/15%20Famous%20WTA%20Players?api_key=keyGHT4s0GhgAfOSe";
    var table1_dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               table1_items = [];
                   table1_items.push(value.fields.Name);
                   table1_items.push(value.fields.Rank);
                   table1_items.push(value.fields.Nationality);
                   table1_items.push(value.fields.Birthday);
                   table1_dataSet.push(table1_items);
                   console.log(table1_items);
            }); // end .each
            console.log(table1_dataSet);

            $('table1').DataTable({
              data: table1_dataSet,
              retrieve: true,
              columns: [
                  { title: "Name",
                    defaultContent:""},
                  { title: "Current Rank",
                      defaultContent:"" },
                  { title: "Nationality",
                    defaultContent:"" },
                  { title: "Birthday",
                    defaultContent:""},
              ]
    }); // end .getJSON
});     // Get a list of record (GET https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements)

});
});
