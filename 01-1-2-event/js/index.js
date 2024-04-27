

// 純javascript寫法:
// document.querySelector('h1').addEventListener('click', function() {
//     alert('標題一');
// });


// 基本寫法:
// $('對象').on('click', function(){});

// 簡化寫法:
// $('對象').click(function (){});

$('h1').click(function (){
    alert('我點到標題一')
});

$('p').click(function (){
    alert('我點到段落')
});