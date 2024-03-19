$(document).ready( function(){
  $('#inputTransferValue').on('input', function() {

    let transferValue = $(this).val($(this).val().replace(/(^0)|[^\d]/g, ''));

    let parsedTranferValue = parseInt(transferValue.val());

    if ( !isNaN(parsedTranferValue) ) {
      $("#deliveryCost").val( (parsedTranferValue * 0.035).toFixed(2) );
      $("#totalTransferValue").val( parseInt($("#deliveryCost").val())  + parsedTranferValue );
    } else {
      $("#deliveryCost").val("0");
      $("#totalTransferValue").val("0");
    }

});
} )