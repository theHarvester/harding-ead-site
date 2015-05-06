// Simple solution from
var form_container = document.getElementById('contact-form-container-hidden');
var xhr_object = new Webform_Xhr('http://www.vision6.com.au/em/forms/xhr?db=460698&s=163100&a=52551&t=1&k=nNX-aQJicOuiN4_IDdHloi_RWPFCSoTHfYNYkPOh7mk', form_container);
xhr_object.initialize();

/* attach a submit handler to the form */
$("#contactForm").submit(function (event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    var $form = $(this),
        url = $form.attr('action');

    var name_val = $('#contact-name').val();
    var email_val = $('#contact-email').val();
    var phone_val = $('#contact-phone').val();
    var enquiry_val = $('#contact-message').val();


    $('#contact-form-container-hidden input[name="emfid_3605533"]').val(name_val);
    $('#contact-form-container-hidden input[name="emfid_3605535"]').val(email_val);
    $('#contact-form-container-hidden input[name="emfid_3605536"]').val(phone_val);
    $('#contact-form-container-hidden textarea[name="emfid_3605537"]').val(enquiry_val);

    setTimeout(function(){
        xhr_object._field_data.forEach(function (i) {
            switch (i.id){
                case "emfid_3605533":
                    i.value = name_val;
                    break;
                case "emfid_3605535":
                    i.value = email_val;
                    break;
                case "emfid_3605536":
                    i.value = phone_val;
                    break;
                case "emfid_3605537":
                    i.value = enquiry_val;
                    break;
            }
        });
        xhr_object.processSubmit();
    }, 10);


    $('#contact-form-heading').text('Thanks, we\'ll get back to you shortly');
    $('#contactForm').remove();
});

$(document).ready(function(){
    var brand_name = $('#nav-bar-brand-name');
    var windowResized = function(){
        if($(window).width() < 991){
            brand_name.text('Harding E&D');
        } else {
            brand_name.text('Harding Electrical & Data');
        }
    };
    $(window).resize(function(){
        setTimeout(windowResized, 1);
    });
    $(window).trigger("resize");
});