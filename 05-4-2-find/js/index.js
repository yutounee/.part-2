const $naviItems = $('#NaviLs > li')

console.log($naviItems);

$naviItems.hover(function(){
    $(this).find('ul').stop(true, false).slideDown();
}, function(){
    $(this).find('ul').stop(true, false).slideUp();
});