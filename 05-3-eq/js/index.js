console.log($('#ThumbLs img'));
const $thumbItems = $('#ThumbLs img');
const $picItems = $('#PicLs img');



// for(let i = 0; i<5; i++) {
//     document.querySelectorAll('#ThumbLs img')[i].addEventListener('click', function(){
//         console.log(3);
//     });
// }

$thumbItems.click(function(){
    // console.log(3)
    // index(): 取出索引值
    const index = $(this).index();

    // $picItems.eq(index).fadeIn().siblings().fadeOut();
    $(this)
        .parent().next().find('img').eq(index).fadeIn()
        .siblings().fadeOut();
});