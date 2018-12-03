$(document).ready(function(){
  <!--data2-->
  $("button#show_gs").click(function(){
    var gsdata_items=[];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements?api_key=keyGHT4s0GhgAfOSe";
    var gsdata_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    gsdata_items = [];
                        gsdata_items.push(value.fields.Name);
                        gsdata_items.push(value.fields.GSwon);
                        gsdata_items.push(value.fields.WinGS);
                        gsdata_dataSet.push(gsdata_items);
                 }); // end .each

              $('#gsdata').DataTable( {
                  data: gsdata_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Name",
                        defaultContent:""},
                      { title: "Which GS?",
                        defaultContent:""},
                      { title: "How many GS?",
                        defaultContent:""},
                  ]
              } );
         }); // end .getJSON;end career high

         var gsprofile_items=[];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Grand%20Slams?api_key=keyGHT4s0GhgAfOSe";
         var gsprofile_dataSet = [];
              $.getJSON(airtable_read_endpoint, function(result) {
                     $.each(result.records, function(key,value) {
                         gsprofile_items = [];
                             gsprofile_items.push(value.fields.Gs);
                             gsprofile_items.push('<td><img src="' + value.fields.GSprofile_url + '" style="width: 90px;"/></td>');
                             gsprofile_items.push(value.fields.Players);
                             gsprofile_dataSet.push(gsprofile_items);
                      }); // end .each

                   $('#gsprofile').DataTable( {
                       data: gsprofile_dataSet,
                       retrieve: true,
                       columns: [
                           { title: "Grand Slams",
                             defaultContent:""},
                           { title: "Logo",
                             defaultContent:""},
                           { title: "Who has won?",
                             defaultContent:""},
                       ]
                   } );
              }); // end .getJSON;end career high
   });
 });//end function
