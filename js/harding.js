// Simple solution from

/* attach a submit handler to the form */
$("#contactForm").submit(function (event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    var $form = $(this),
        url = $form.attr('action');

    /* Send the data using post */
    var posting = $.post(url,
        {
            emfid_3605533: $('#contact-name').val(),
            emfid_3605534: $('#contact-email').val(),
            emfid_3605536: $('#contact-phone').val(),
            emfid_3605537: $('#contact-message').val()
        });

    /* Alerts the results */
    posting.done(function (data) {
        $('#contact-form-heading').text('Thanks, we\'ll get back to you shortly');
        $('#contactForm').remove();
        console.log(data);
    });

    console.log(url);
    console.log({
        emfid_3605533: $('#contact-name').val(),
        emfid_3605534: $('#contact-email').val(),
        emfid_3605536: $('#contact-phone').val(),
        emfid_3605537: $('#contact-message').val()
    });
});