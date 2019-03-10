// ==UserScript==
// @name         YaPlakal Mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mobile styles fo YaPlakal.ru
// @author       You
// @match        https://www.yaplakal.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '[paste CDN link here]';
    link.media = 'all';

    head.appendChild(link);
})();
