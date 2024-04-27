$('#Pic').slideUp();


$('#Btn1').click(function(){
    $('#Pic').slideUp(1000);
});

$('#Btn2').click(function(){
    $('#Pic').slideDown();
});

$('#Btn3').click(function(){
    $('#Pic').slideToggle()});
// _______________________|
// 括號裡可以放參數,控制時間用,預設是400ms


// 指令可以串聯
// 不一定需要指令觸發