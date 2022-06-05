$('.create-account,.different_address').hide();
$('#createaccount:checkbox').on('change', function () {
    if ($(this).is(':checked')) {
        $('.create-account').slideDown();
    }
    else {
        $('.create-account').slideUp();
    }
});
$('#differentaddress:checkbox').on('change', function () {
    if ($(this).is(':checked')) {
        $('.different_address').slideDown();
    }
    else {
        $('.different_address').slideUp();
    }
});


$('[name="payment_option"]').on('change', function () {
    var $value = $(this).attr('value');
    $('.payment-text').slideUp();
    $('[data-method="' + $value + '"]').slideDown();
});

var count = 2
function clicked() {
    var temp = "#" + "sec" + count;
    $(temp).show();
    $(temp).show();
    count++;

    if (count == 8) {
        $("#xyz").hide();
        $("#alert").show();
    }
}