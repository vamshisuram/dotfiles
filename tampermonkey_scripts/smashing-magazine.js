// ==UserScript==
// @name         smashing-magazine
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.smashingmagazine.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var bDiv = $('#wpsidebar');
bDiv.remove();

$('.cc > .clearfix').css('margin-right', '0');
