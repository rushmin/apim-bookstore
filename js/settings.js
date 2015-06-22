$('#saveButton').on('click', function () {
    var status = $("#settings-form").validationEngine('validate');
    if(status){
        var apiUrl = $('#apiUrl').val() ;
        var accessToken = $('#accessToken').val();

        $.ajax({
          method: "POST",
          url: "settings",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: JSON.stringify({"paymentApiEndpoint":apiUrl, "accessToken":accessToken})
        })
        .done(function( msg ) {
          alert("Saved successfully ! ");
        });
    }else{

    }
});
