$(document).ready( function() {

  $("#btnSingUp").click( function(e) {

    e.preventDefault();

    Swal.fire({
      title: "¡Stop!",
      text: "Evento en creación",
      icon: "warning",
      showCancelButton: true, 
      showConfirmButton: false,
      cancelButtonText: 'OK'
    });
  } )
});