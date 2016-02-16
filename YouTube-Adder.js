// ==UserScript==
// @name         YouTube Adder
// @namespace    https://github.com/GlavVlad
// @version      0.1
// @description  Automatically add all videos from your "Subscriptions" page to "Watch Later" playlist (need some time)
// @license      WTFPl
// @author       GlavVlad
// @match        https://www.youtube.com/feed/subscriptions
// @grant        none
// @updateURL
// ==/UserScript==

var collection = document.getElementsByClassName('shelf-title-cell');
var btn = document.createElement('input');
btn.setAttribute('type','button');
btn.setAttribute('name','button');
btn.setAttribute('value','Add All');
btn.addEventListener('click', function add(){
    var el = document.getElementsByClassName('addto-watch-later-button');
    var i = el.length;
    if (i > 0) {
        el[i-1].click();
        setTimeout(add, 100);
    }
});
collection.item(0).appendChild(btn);