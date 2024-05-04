console.log($('#AdvLs .adv-item'));

$('#AdvLs .adv-item').hover(function () {
    // console.log(1);
    $(this).stop(true, false).animate({
        top: 0
    }, 200)
    $(this).siblings().stop(true, false).animate({
        top: 118
    }, 200);
}, function () {
    // console.log(2);
    $('#AdvLs .adv-item').stop(true, false).animate({
        top: 166
    }, 200);
});

