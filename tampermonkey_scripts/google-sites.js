// ==UserScript==
// @name         sites-google
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://sites.google.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var bDiv = $('#sites-chrome-sidebar-left');
bDiv.remove();

var a = $('#sites-chrome-page-wrapper');
a.css('width', '100%');

var b = $('#sites-chrome-page-wrapper-inside');
b.css('padding', '0px');
