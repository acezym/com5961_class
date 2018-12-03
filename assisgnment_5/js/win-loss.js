$(document).ready(function(){
  $.noConflict();
      var table= $('#win-loss').DataTable({
         "ajax":'json/win-loss.json'
       });
     });
