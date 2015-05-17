// ==UserScript==
// @name         davidwalsh
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://davidwalsh.name/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var bDiv = $('.sidebar');
bDiv.remove();

$('#main').css({"width": "100%", "max-width": "100%", "margin-left": "0 40px", "float": "none"});
