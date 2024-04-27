
$('#Btn2').click(function(){
    // alert('點到了');
    $('#Pic').hide();
});

$('#Btn1').click(function(){
    $('#Pic').show();
});

$('#Btn3').click(function(){
    $('#Pic').toggle();
}); 





// 純javascript寫法:

// let isShow = true;

// document.querySelector('#Btn1').addEventListener('click', function () {
//     if (isShow) return;
//     document.querySelector('#Pic').style = '';
//     isShow = true;
// });

// document.querySelector('#Btn2').addEventListener('click', function () {
//     if (!isShow) return;
//     document.querySelector('#Pic').style = 'display: none';
//     isShow = false;
// });

// document.querySelector('#Btn3').addEventListener('click', function () {
//     if (isShow) {
//         document.querySelector('#Pic').style = 'display: none';
//         isShow = false;
//     } else {
//         document.querySelector('#Pic').style = '';
//         isShow = true;
//     }

// });