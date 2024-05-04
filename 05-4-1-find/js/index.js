const $lessonTitles = $('#LessonLs .lesson-title');

console.log($lessonTitles);

$lessonTitles.click(function(){
    // console.log(3);
    $(this).next().stop(true, false).slideToggle();
    $(this).parent().siblings().find('.lesson-desc').slideUp();
});