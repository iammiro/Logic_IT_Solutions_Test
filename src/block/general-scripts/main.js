$('.mobile_menu_icon').click(function () {
    $('.navigation').toggle();

});

(function($) {
    var $window = $(window),
        $menu = $('.navigation');

    $window.resize(function resize() {
        if ($window.width() > 990) {
            return $menu.addClass('display_inline_flex');
        }

        $menu.removeClass('display_inline_flex');
    }).trigger('resize');
})(jQuery);