$(document).ready(function() {

  // LOGIN CREDENTIALS //
  const userEmail = 'user@test.com';
  const userPass = '12345';

  // EMAIL VALIDATION FOR LOGIN //
  $('#inputLoginEmail').blur( function() {

    const email = $(this).val();

    if ( email === "" ) { 

      $("#emailErrorMessage").text('Debe ingresar un email').addClass('errorMessage');
      $("#inputLoginEmail").addClass('form-control-error');

    } else if ( email !== userEmail ) {

      if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ) {

        $("#emailErrorMessage").text('Dirección de email no válida').addClass('errorMessage');
        $("#inputLoginEmail").addClass('form-control-error');
      } else {

        $("#emailErrorMessage").text('Email no registrado').addClass('errorMessage');
        $("#inputLoginEmail").addClass('form-control-error');
      
      }
    }  else {

      $("#emailErrorMessage").text('').removeClass('errorMessage');
      $("#inputLoginEmail").removeClass('form-control-error');
    
    }
  });
  // END EMAIL VALIDATION FOR LOGIN //


  // PASS VALIDATION FOR LOGIN //
  $('#inputLoginPassword').blur( function() {
    
    const pass = $(this).val();

    if ( pass === "" ) { 

      $("#passErrorMessage").text('Debe ingresar una contraseña').addClass('errorMessage');
      $("#inputLoginPassword").addClass('form-control-error');

    } else if ( pass !== userPass ) {

      $("#passErrorMessage").text('Contraseña incorrecta').addClass('errorMessage');
      $("#inputLoginPassword").addClass('form-control-error')

    } else {

      $("#passErrorMessage").text('').removeClass('errorMessage');
      $("#inputLoginPassword").removeClass('form-control-error');

    }
  });
  // END PASS VALIDATION FOR LOGIN //

  // LOGIN VALIDATION //
  $("#loginBtnSubmit").click( function(e) {

    e.preventDefault();

    const email = $("#inputLoginEmail").val();
    const pass = $("#inputLoginPassword").val();
    const errorEmail = $("#emailErrorMessage");
    const errorPass = $("#passErrorMessage");

    if ( email === "" || pass === "" ) {
      if (  errorEmail.hasClass('errorMessage')  || errorPass.hasClass('errorMessage') ) {
        
        Swal.fire({
          title: "¡Error!",
          text: `${ errorEmail.text() }. ${ errorPass.text() }`,
          icon: "error",
          showCancelButton: true, 
          showConfirmButton: false,
          cancelButtonText: 'OK'
        });
      } else {

        Swal.fire({
          title: "¡Error!",
          text: "Ingrese un usuario o contraseña válidos",
          icon: "error",
          showCancelButton: true, 
          showConfirmButton: false,
          cancelButtonText: 'OK'
        });
      }
    }

    if ( email === userEmail && pass === userPass ) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Mejore sus finanzas con Alket Wallet",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = "pages/menu.html";
        }
      })
    }

    $("#inputLoginEmail").val('');
    $("#inputLoginPassword").val('');
  });
  // END LOGIN VALIDATION //

});

