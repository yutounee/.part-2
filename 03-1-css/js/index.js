
// const 名稱 = $()
const $content = $('#Content');
const $btnlg = $('#BtnLg');
const $btnsm = $('#BtnSm');


// $('#BtnLg').click(function(){
//     // $('#Content').css('font-size', 20);
//     // $('#Content').css('fontSize', 20);

//     $('#Content').css({
//         fontSize: 20
//     });
// });

// $('#BtnSm').click(function(){
//     $('#Content').css('font-size', 15);
// });


$btnlg.click(function(){
    $content.css({
        fontSize: 20
    });
});

$btnsm.click(function(){
    $content.css('font-size', 15);
});