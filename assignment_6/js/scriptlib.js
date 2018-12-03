$(document).ready(function(){
  $("button#get_data").click(function(){
    var winloss_items=0;
    var i=0;
    var airtable_read_endpoint="https://api.airtable.com/v0/appFLsn4cd5MWKYFV/Win-Loss?api_key=keyGHT4s0GhgAfOSe"
    var winloss_dataSet = [];
    $.getJSON(airtable_read_endpoint,function(result){
      $.each(result.records,function(key,value){
      winloss_items = [];
      winloss_items.push(value.fields.Name);
      winloss_items.push(value.fields.Career_Win);
      winloss_items.push(value.fields.Career_Loss);
      winloss_items.push(value.fields.Career_WinLoss);
      winloss_dataSet.push(winloss_items);
      });// end .each

      $('#winloss').DataTable({
        data: winloss_dataSet,
        retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Career Win",
                      defaultContent:""},
                    { title: "Career Loss",
                        defaultContent:"" },
                    { title: "Career Win/Loss",
                      defaultContent:"" },
                ]
            } );
       }); // end .getJSON

     });
  });
