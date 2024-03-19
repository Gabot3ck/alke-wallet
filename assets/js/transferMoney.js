$(document).ready( function() {
  $("#btnTransferForm").click( function(e) {
    e.preventDefault();

    const transferValue = $('#inputTransferValue').val();
    const contact = $('#contact').val()

    if ( transferValue.length >= 1 && contact >= 1 ) {

      Swal.fire({
        icon: "success",
        title: "Tranferencia exitosa",
        showConfirmButton: false,
        timer: 1900
      });

      $('#inputTransferValue').val("");
      $("#deliveryCost").val("");
      $("#totalTransferValue").val("");
      $('#contact').val("Seleccionar Contacto");

    } else {

      if( contact >= 1 ) {
        Swal.fire({
          title: "¡Error!",
          text: "Ingrese el monto de envío",
          icon: "error",
          showCancelButton: true, 
          showConfirmButton: false,
          cancelButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "Seleccione un contacto",
          icon: "error",
          showCancelButton: true, 
          showConfirmButton: false,
          cancelButtonText: 'OK'
        });
      }
    }
    
  } )
});