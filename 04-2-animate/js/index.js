const $btnRight = $('#BtnRight');
const $btnLeft = $('#BtnLeft');
const $rocket = $('#Rocket');
const duration = 500;

$btnRight.click(function () {
    $rocket.stop(true, false).animate({
        left: '+=100'
    }, duration);
});

$btnLeft.click(function () {
    $rocket.stop(true, false).animate({
        left: '-=100'
    }, duration);
});

