$(document).ready(function () {
    $('.icon-menu').click(function (ev) {
        $('.icon-menu, .menu__body').toggleClass('_active');
        $('body').toggleClass('_active');
    });
});