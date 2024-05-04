
$('#BtnRight').click(function(){
    // alert(333333)
    // console.log(3333)
    $('#Rocket').animate({
        left: 500,
        top: 100
    }, 1000);
});

$('#BtnLeft').click(function(){
    // console.log(777);
    $('#Rocket').animate({
        left: 0,
        top: 0
    }, 500);
});