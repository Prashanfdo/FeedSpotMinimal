(function () {
    'use strict';
    if (localStorage['enabled'] == undefined)
        localStorage['enabled'] = false;
    var enabled = localStorage['enabled'];
    console.log(enabled);
    if (enabled == 'true')
        document.documentElement.className += ' minimal';
    var appendToggle = function() {
        var refreshBtn = $('.mysites_block.c1_7.edit_refresh');
        var clone = refreshBtn.clone();
        clone.insertBefore(refreshBtn);
        clone.removeClass('edit_refresh').addClass('edit_minimal').prop('title', 'Toggle Minimal Mode');
        clone.click(function() {
            localStorage['enabled'] = $('html').toggleClass('minimal').hasClass('minimal');
            console.log(localStorage['enabled']);
        });
    };
    var interval = setInterval(function() {
        if ($('.mysites_block.c1_7.edit_refresh').length > 0) {
            clearInterval(interval);
            appendToggle();
        }
    }, 10);
})();