// ==UserScript==
// @name         YaP Mobile
// @namespace    https://github.com/Jekis
// @version      0.2.1
// @description  Mobile styles fo YaPlakal.ru
// @author       Jekis
// @match        https://www.yaplakal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/Jekis/yap-mobile/master/mobile.css';
    link.media = 'all';

    head.appendChild(link);
    
    $(document).ready(function () {
        // Remove promo topics from the main page.
        $("a[href$='member1438.html']")
            .closest("tr").hide()
            .prev().hide()
            .prev().hide()
        ;

        // Remove promo comment from the topic.
        $("a[href$='member1438.html']").closest("table[cellpadding=3]").remove();
    });
})();
