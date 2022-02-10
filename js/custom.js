// JS xử lý sự kiện click đổi ảnh
function changeImg(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('pic-main').setAttribute('src', imagePath);
}

 // JavaScript xử lý sự kiện hover và move mouse sẽ zoom ảnh và di chuyển
$(document).ready(function () {
    $("#pic-main").on('mouseover', function () {
        $(this).css({'transform': 'scale(1.5)'});
        })
        .on('mouseout', function () {
            $(this).css({'transform': 'scale(1)'});
        })
        .on('mousemove', function (e) {
            $(this).css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'});
        });
})



