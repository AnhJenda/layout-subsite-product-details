function changeImg(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('pic-main').setAttribute('src', imagePath);
}