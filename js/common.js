$( document ).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();   

    $("[data-toggle=popover]").popover();

    $(".ctrl-filter-type-switcher").popover({
        html : true, 
        content: function() {
          return $('#content-filter-types').html();
        }
    });    

	$('#nav').affix({
	      offset: {
	        top: $('header').height()
	      }
	});	 

    $('.ctrl-wr-asset').click(function(){
        $(this).toggleClass('selected');
    });

    $("#login-form").validationEngine();
    $("#login-btn").on("click",function(e){
        e.preventDefault();
        var status = $("#login-form").validationEngine('validate');
        if(status){
            var userId = encodeURI($("#userId").val());
            var userPw = encodeURI($("#userPw").val());

            $.ajax({
              method: "POST",
              url: "login",
              contentType:"application/json",
              dataType: "json",
              data: JSON.stringify({
                "username": userId,
                "password": userPw
              }),
              beforeSend: function( xhr ) {

              }
            }).done(function( data ) {
                if ( console && console.log ) {
                  console.log("done: "+data);
                  location.href = "product.jag";
                }
            });

        }else{

        }
    });

    $("#shipping-details-form").validationEngine();
    $("#billing-btn").on("click",function(e){
        e.preventDefault();
        var status = $("#shipping-details-form").validationEngine('validate');
        if(status){
           location.href = "payment.jag";
        }else{

        }
    });

    $("#confirm-form").validationEngine();
    $("#confirm-btn").on("click",function(e){
        e.preventDefault();
        var status = $("#confirm-form").validationEngine('validate');
        if(status){
           console.log("SUCCESS..");
        }else{

        }
    });

});

function openCollapsedNav(){
    $('.wr-hidden-nav-toggle-btn').addClass('active');
    $('#hiddenNav').slideToggle('slideDown', function(){
        if($(this).css('display') == 'none'){
            $('.wr-hidden-nav-toggle-btn').removeClass('active');
        }
    });
}


