let fileNum = 1;

//                     ./images/ui0        3        .jpg
$('#Pic').attr('src', './images/ui0' + fileNum + '.jpg')

$('#Pic').click(function () {

    if (fileNum < 4) {
        // fileNum = fileNum + 1;
        // fileNum += 1;
        fileNum++;
    } else {
        fileNum = 1;
    }
    $(this).attr('src', './images/ui0' + fileNum + '.jpg')
    console.log(fileNum);
});