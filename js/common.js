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

    $("#checkout-btn").on("click",function(){
        $("#select-product").hide();
        $("#shipping-details").show();
    });

    $("#billing-btn").on("click",function(){
        $("#shipping-details").hide();
        $("#billing-details").show();
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


