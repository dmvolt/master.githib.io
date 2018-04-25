
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

    $("#form-two").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });
  /*  if( $('.section--nav--content').length){
        $(window).scroll(function () {
            var scrollPos = $(document).scrollTop();
            var obj = $('.section--nav--content');
            var test = obj.offset().top;
            console.log(scrollPos, test);
            if(scrollPos > test && !obj.hasClass('scrollyfy') ){
                obj.addClass('scrollyfy')
            }
            if(scrollPos < test){
                obj.removeClass('scrollyfy')
            }
        })
    }*/

});
