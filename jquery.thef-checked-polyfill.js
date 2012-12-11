(function ($) {
    $.fn.thefCheckedPolyfill = function() {
        return this.on('change.thef-checked-polyfill', function () {
            var $inputs = $('[name="' + $(this).attr('name') + '"]');
                
            $inputs.filter(':checked').addClass('is-checked').end()
                   .not(':checked').removeClass('is-checked').end()
                   .css('visibility', 'hidden').css('visibility', '');
                   
        }).filter(':checked').trigger('change.thef-checked-polyfill').end();
    };
})(jQuery);