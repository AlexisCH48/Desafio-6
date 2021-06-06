$( document ).ready(function() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $( "#btn_mail" ).click(function() {
    var section_alert = $('#mail-alert');
    //mesaje de alerta al enviar el correo//
    var nodo = `<div class="alert alert-success alert-dismissible fade show m-3" role="alert">
    <strong>El correo fue enviado correctamente...</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    section_alert.append(nodo);
  });

  $( "[id*=title]").on("dblclick", function() {
    $(this).css("color","red");
  });

  $( ".receta" ).click(function() {
    $("div", this ).toggle( "slow" );
  });
});