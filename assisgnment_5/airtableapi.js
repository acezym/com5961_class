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
                      table1_items.push(value.fields.Birthplace);
                      table1_items.push(value.fields.Height(cm));
                      table1_items.push(value.fields.Weight(kg));
                      table1_items.push(value.fields.Play_Hand);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Present Rank",
                        defaultContent:"" },
                    { title: "Nationality",
                      defaultContent:"" },
                    { title: "Birthday",
                      defaultContent:""},
                    { title: "Birthplace",
                      defaultContent:"" },
                    { title: "Height(cm)",
                      defaultContent:"" },
                    { title: "Weight(kg)",
                      defaultContent:"" },
                    { title: "Play Hand",
                      defaultContent:"" },

                ]
            } );
       }); // end .getJSON
      }
      var chart = c3.generate({
                           data: {
                               columns: table1_dataSet,
                               type : 'bar'
                           },
                           axis: {
                             x: {label: 'Name'},
                             y: {label: '2018 Prize'}
                           },
                           bar: {
                               title: "2018 Prize for each players",
                           }
                       });

      var table2_items = [];
               var i = 0;
               var airtable_read_endpoint =
               "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/15%20Famous%20WTA%20Players?api_key=keyGHT4s0GhgAfOSe";
               var table2_dataSet = [];
               $.getJSON(airtable_read_endpoint, function(result) {
                      $.each(result.records, function(key,value) {
                          table2_items = [];
                              table2_items.push(value.fields.Name);
                              table2_items.push(value.fields.Which_Grand_Slams_has_she_won);
                              table2_items.push(value.fields.How_many_Grand_Slams_has_she_win);
                              table2_items.push(value.fields.WTA_Singles_Tiltles);
                              table2_items.push(value.fields.Rank_to_Top_1);
                              table2_dataSet.push(table2_items);
                              console.log(table2_items);
                       }); // end .each
                       console.log(table2_dataSet);
                      $('#table2').DataTable( {
                          data: table2_dataSet,
                          retrieve: true,
                          ordering: false,
                          columns: [
                              { title: "Name",
                                defaultContent:""},
                              { title: "Which Grand Slams has she won?",
                                defaultContent:""},
                              { title: "How many Grand Slams has she win?",
                                defaultContent:""},
                              { title: "WTA Singles Titles",
                                defaultContent:""},
                              { title: "Whether Ranked to No.1",
                                defaultContent:""},
                          ] // rmf columns
                      } ); // end dataTable

                var Airtable = require('airtable');
                var base = new Airtable({apiKey: 'keyGHT4s0GhgAfOSe'}).base('appFLsn4cd5MWKYFV');

                base('Achievements').find('recpx0mwxosmRSYLt', function(err, record) {
                    if (err) { console.error(err); return; }
                    console.log(record);
                });
      }); // end .getJSON
}); // end button
