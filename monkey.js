// ==UserScript==
// @name         城门_monkey_github版
// @namespace    quxiji
// @version      1
// @description  try to link the world!
// @author       quxiji
// @match        https://*/*
// @match        http://*/*
// @match
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
//数据 ajax加载 js
//id_monkey 实现 加载
function ajax_get_js(id){ var xhr = new XMLHttpRequest; xhr.open('get',id,true); xhr.onreadystatechange = function(){ if( xhr.readyState == 4 ){ if( xhr.status >=200 && xhr.status < 300 || xhr.status == 304 ){ var script = document.createElement('script'); script.type = 'text/javascript'; script.text = xhr.responseText; document.body.appendChild(script); } } }; xhr.send(null); }
ajax_get_js("https://quxiji.github.io/quxiji/id_monkey.js");

})();
