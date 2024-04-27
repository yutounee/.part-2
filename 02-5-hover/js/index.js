$('#Item1').mouseenter(function(){
    // alert("enter")
    // console.log('enter');
    $('#Child1').slideDown();
});

$('#Item1').mouseleave(function(){
    // alert("leave")
    // console.log('leave');
    $('#Child1').slideUp();
});

// for(let i = 1; i <= 100; i++) {
//     console.log(i);
// }


$('#Item2').hover(function(){
    $('#Child2').stop(true, false).slideDown();
} , function(){
    $('#Child2').stop(true, false).slideUp();
});

$('#Item3').hover(function(){
    $('#Child3').stop(true, false).slideDown();
} , function(){
    $('#Child3').stop(true, false).slideUp();
});

$('#Item4').hover(function(){
    $('#Child4').stop(1, 0).slideDown();
} , function(){
    $('#Child4').stop(1, 0).slideUp();
});

$('#Item5').hover(function(){
    $('#Child5').stop(1, 0).slideDown();
} , function(){
    $('#Child5').stop(1, 0).slideUp();
});