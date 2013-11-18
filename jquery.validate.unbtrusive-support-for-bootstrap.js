//http://stackoverflow.com/questions/10217175/mvc-twitter-bootstrap-unobtrusive-error-handling
$(function () {
    //$('span.field-validation-valid, span.field-validation-error').each(function () {
    //    $(this).addClass('help-inline');
    //});

    $('form').submit(function () {
        if ($(this).valid()) {
            $(this).find('div.form-group').each(function () {
                if ($(this).find('span.field-validation-error').length == 0) {
                    $(this).removeClass('error');
                    $(this).removeClass('has-error');
                }
            });
        }
        else {
            $(this).find('div.form-group').each(function () {
                if ($(this).find('span.field-validation-error').length > 0) {
                    $(this).addClass('error');
                    $(this).addClass('has-error');
                }
            });
        }
    });
    
    $('form').each(function () {
        $(this).find('div.form-group').each(function () {
            if ($(this).find('span.field-validation-error').length > 0) {
                $(this).addClass('error');
                $(this).addClass('has-error');
            }
        });
    });
});

//Update that validator
$.validator.setDefaults({
    highlight: function (element) {
        console.log("call highlight");
        $(element).closest(".form-group").addClass("error").addClass("has-error");
    },
    unhighlight: function (element) {
        console.log("call unhighlight");
        $(element).closest(".form-group").removeClass("error").removeClass("has-error");
    },
    onclick: function (one, two) {
        console.log(one);
        console.log(two);
    },
    onblur: function(one, two) {
        console.log(one);
        console.log(two);
    }
});