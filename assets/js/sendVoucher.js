$(document).ready( function() {

  // SEND VOUCHER//
  $("#btnSendVoucher").click( function(e) {
    e.preventDefault();

    (async () => {
      const { value: file } = await Swal.fire({
        title: "Selecccione archivo",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Upload your profile picture"
        }
      });

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Archivo cargado",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture"
          });
        };
        reader.readAsDataURL(file);
      }
    })();

    
  })
  // END SEND VOUCHER //

});