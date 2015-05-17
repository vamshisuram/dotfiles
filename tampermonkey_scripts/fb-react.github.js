// ==UserScript==
// @name         fb-react
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://facebook.github.io/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var bDiv = $('.nav-docs');
bDiv.remove();

$('.container').css('min-width', '100%');
$('.wrap').css('width', '100%');

var a = $('.inner-content');
a.css('width', '100%');
