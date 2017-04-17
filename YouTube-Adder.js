// ==UserScript==
// @name         YouTube Adder
// @namespace    https://github.com/GlavVlad
// @version      0.2
// @description  Automatically add all videos from your "Subscriptions" page to "Watch Later" playlist (need some time). For black theme
// @license      WTFPl
// @author       GlavVlad
// @match        https://www.youtube.com/feed/subscriptions
// @grant        none
// @updateURL    https://raw.githubusercontent.com/GlavVlad/YouTube-Adder/master/YouTube-Adder.js
// ==/UserScript==

var collection = document.getElementById('spacer');
var btn = document.createElement('input');
btn.setAttribute('type','button');
btn.setAttribute('name','button');
btn.setAttribute('value','Add All');
btn.addEventListener('click', function add(){
    var el = document.querySelectorAll('[aria-label="Watch later"]');
    var i = el.length;
    if (i > 0) {
        el[i-1].click();
        setTimeout(add, 200);
    }
});
collection.appendChild(btn);
