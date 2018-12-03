$(document).ready(function(){
     $("button#show_prize").click(function() {
       var prize_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements?api_key=keyGHT4s0GhgAfOSe";
       var prize_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  prize_items = [];
                      prize_items.push(value.fields.Name);
                      prize_items.push(value.fields.TPrize);
                      prize_items.push(value.fields.CPrize);
                      prize_dataSet.push(prize_items);
               }); // end .each

            $('#prize').DataTable( {
                data: prize_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "2018 Prize",
                      defaultContent:""},
                    { title: "Career Prize",
                        defaultContent:"" },
                ]
            } );
          }); // end .getJSON

            var prize_table_itmes=[];
            var i = 0;
            var airtable_read_endpoint =
       "https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Achievements?api_key=keyGHT4s0GhgAfOSe";
       var prize_table_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  prize_table_items = [];
                      prize_table_items.push(value.fields.Name);
                      prize_table_items.push(value.fields.CPrize);
                      prize_table_dataSet.push(prize_table_items);
                      console.log(prize_table_items);
               }); // end .each
               console.log(prize_table_dataSet);

            var prizechart = c3.generate({
              bindto  :'#prizechart',
              data    : {
                columns: prize_table_dataSet,
                type:'bar'
              },
              axis:{
                x:{
                  label:'Name'
                },
                y:{
                  label:'Career Prize'
                }
              }
            });

     });//end prize function
});
});//end function
