$(document).ready(function(){
  <!--data4-->
  $("button#show_career").click(function(){
  <!--career data-->
    var career_items=[];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements?api_key=keyGHT4s0GhgAfOSe";
    var career_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    career_items = [];
                        career_items.push(value.fields.Name);
                        career_items.push(value.fields.CHigh);
                        career_items.push(value.fields.Chd);
                        career_dataSet.push(career_items);
                 }); // end .each

              $('#career').DataTable( {
                  data: career_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Name",
                        defaultContent:""},
                      { title: "Career High",
                        defaultContent:""},
                      { title: "Career High Date",
                        defaultContent:""},
                  ]
              } );
         }); // end .getJSON;end career high

         var career1_items=[];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements?api_key=keyGHT4s0GhgAfOSe";
         var career1_dataSet = [];
              $.getJSON(airtable_read_endpoint, function(result) {
                     $.each(result.records, function(key,value) {
                         career1_items = [];
                             career1_items.push(value.fields.Name);
                             career1_items.push(value.fields.CHigh);
                             career1_items.push(value.fields.Chd);
                             career1_dataSet.push(career1_items);
                             console.log(career1_items);
                      }); // end .each

         var chart = c3.generate({
           bindto  :'#careerchart',
           data: {
                    columns: career1_dataSet,
                    type : 'bar'
                  },
                  axis: {
                  x: {
                    label: 'Name'
                      },
                  y: {
                    label: 'CHigh'
                      },
                  }
         })
       });//end getJSON
     });//end button
   });//end function
