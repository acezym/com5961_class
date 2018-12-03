$(document).ready(function(){
     $("button#show_summary").click(function() {
       var summary_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/15%20Famous%20WTA%20Players?api_key=keyGHT4s0GhgAfOSe";
       var summary_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  summary_items = [];
                      summary_items.push(value.fields.Name);
                      summary_items.push('<td><img src="' + value.fields.profile_url + '" style="width: 90px;"/></td>');
                      summary_items.push(value.fields.Rank);
                      summary_items.push(value.fields.Nationality);
                      summary_items.push(value.fields.Birthday);
                      summary_items.push(value.fields.Height);
                      summary_items.push(value.fields.Weight);
                      summary_items.push(value.fields.Pro);
                      summary_dataSet.push(summary_items);
               }); // end .each

            $('#summary').DataTable( {
                data: summary_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Photo",
                      defaultContent:""},
                    { title: "Rank",
                        defaultContent:"" },
                    { title: "Nationality",
                      defaultContent:"" },
                    { title: "Birthday",
                      defaultContent:"" },
                    { title: "Height",
                      defaultContent:""},
                    { title: "Weight",
                        defaultContent:""},
                    { title: "Pro Status",
                      defaultContent:""},
                ]
            } );
       }); // end .getJSON
     });//end summary function
   });
