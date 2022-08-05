crm核桃工具箱
========

#### 名称: ####
到课与未完课赛选

#### 方向: ####
web前端 数据筛选 Tampermonkey脚本 gihub代码托管

#### 内容: ####
搭建工具箱功能元素，根据域名匹配不同工具，获取到课未到课名单，分析在班未完课课次详情

#### 使用方法: ####
`安装`Tampermonkey
`创建`Tampermonkey脚本

```javascript
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
```
`使用`进入在线课堂或crm 双击鼠标左键 唤出/隐藏工具箱
[Releases](https://crm.pipacoding.com/)
[Releases](https://api.pipacoding.com/)
