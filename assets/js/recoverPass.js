$(document).ready(function() {

    // PASSWORD RECOVERY //
    $("#btnToRecoverPass").click( function(e) {

      (async () => {
  
        const { value: email } = await Swal.fire({
          title: 'Ingrese su dirección de email:',
          input: 'email',
          inputPlaceholder: 'ejemplo@email.com',
          inputValidator: (value) => {
            if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              return "Dirección de email no válida";
            }
          }
        });
        
        if (email) {
          Swal.fire(`Se envío un email a: ${email}`)
        }
        
      })();
    })
    // END PASSWORD RECOVERY //

});

