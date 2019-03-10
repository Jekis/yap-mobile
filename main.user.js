// ==UserScript==
// @name         YaP Mobile
// @namespace    https://github.com/Jekis
// @version      0.1
// @description  Mobile styles fo YaPlakal.ru
// @author       Jekis
// @match        https://www.yaplakal.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/jekis/yap-mobile/mobile.css';
    link.media = 'all';

    head.appendChild(link);
})();
