$(document).ready(function(){
  <!--data1-->
  $("button#show_winloss").click(function(){
    var winloss_table2_items=[];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Win-Loss?api_key=keyGHT4s0GhgAfOSe";
    var winloss_table1_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    winloss_table1_items = [];
                        winloss_table1_items.push(value.fields.Name);
                        winloss_table1_items.push(value.fields.TWin);
                        winloss_table1_items.push(value.fields.TLoss);
                        winloss_table1_dataSet.push(winloss_table1_items);
                 }); // end .each

              $('#winloss_table1').DataTable( {
                  data: winloss_table1_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Name",
                        defaultContent:""},
                      { title: "2018 Win",
                        defaultContent:""},
                      { title: "2018 Loss",
                        defaultContent:""},
                  ]
              } );
         }); // end .getJSON;end 2018
         <!--career win and loss-->
         var winloss_table2_items=[];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Win-Loss?api_key=keyGHT4s0GhgAfOSe";
         var winloss_table2_dataSet = [];
              $.getJSON(airtable_read_endpoint, function(result) {
                     $.each(result.records, function(key,value) {
                         winloss_table2_items = [];
                             winloss_table2_items.push(value.fields.Name);
                             winloss_table2_items.push(value.fields.CWin);
                             winloss_table2_items.push(value.fields.CLoss);
                             winloss_table2_items.push(value.fields.CWinLoss);
                             winloss_table2_dataSet.push(winloss_table2_items);
                      }); // end .each

                   $('#winloss_table2').DataTable( {
                       data: winloss_table2_dataSet,
                       retrieve: true,
                       columns: [
                           { title: "Name",
                             defaultContent:""},
                           { title: "Career Win",
                             defaultContent:""},
                           { title: "Career Loss",
                             defaultContent:""},
                           { title: "Career Win/Loss",
                             defaultContent:""},
                       ]
                   } );
              }); // end .getJSON;end career
  });//end show win loss

});//end function
