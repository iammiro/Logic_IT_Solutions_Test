$('.mobile_menu_icon').click(function () {
    $('.navigation').toggle();
    $('.mobile_menu_icon').hide();
    $('.mobile_menu_icon_close').show();
});
$('.mobile_menu_icon_close').click(function () {
    $('.navigation').toggle();
    $('.mobile_menu_icon').show();
    $('.mobile_menu_icon_close').hide();
});

(function($) {
    var $window = $(window),
        $menu = $('.navigation'),
        $mobileMenuIconClose = $('.mobile_menu_icon_close');

    $window.resize(function resize() {
        if ($window.width() > 990) {
            return $menu.addClass('display_inline_flex'),
                $mobileMenuIconClose.addClass('display_none');
        }
        $menu.removeClass('display_inline_flex');
        $mobileMenuIconClose.removeClass('display_none');
    }).trigger('resize');
})(jQuery);
