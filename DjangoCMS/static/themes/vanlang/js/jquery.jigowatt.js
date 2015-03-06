jQuery(document).ready(function () {

    $('#contactform').submit(function () {
        $('.contact-submit-form').block({ message: null });
        var action = $(this).attr('action');

        $('#message').hide();

        $.post(action, {
            name: $('#contactform #name').val() === 'Name*' ? '' : $('#contactform #name').val(),
            email: $('#contactform #email').val() === 'E-mail*' ? '' : $('#contactform #email').val(),
            jobtitle: $('#contactform #jobtitle').val() === 'Job Title' ? '' : $('#contactform #jobtitle').val(),
            location: $('#contactform #location').val() === 'Location' ? '' : $('#contactform #location').val(),
            organisation: $('#contactform #organisation').val() === 'Organisation*' ? '' : $('#contactform #organisation').val(),
            comments: $('#contactform #comments').val() === 'Message here' ? '' : $('#contactform #comments').val()
        },function (data) {
			    document.getElementById('message').innerHTML = data;
			    $('#message').slideDown('slow');
			    $('.contact-submit-form').unblock();
			    if (data.match('success') != null) {
			        $('#contactform').slideUp('slow');
			    }
			    else {
			        $('html, body').stop().animate({
			            scrollTop: $('#message').offset().top - 110
			        }, 1500, 'easeInOutExpo');

			    }
			}
		);

        return false;

    });

});