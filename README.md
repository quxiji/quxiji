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
`创建`Tampermonkey脚本  引入id_monkey.js  
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
function ajax_get_js(id){ 
    var xhr = new XMLHttpRequest; xhr.open('get',id,true); 
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){ 
            if( xhr.status >=200 && xhr.status < 300 || xhr.status == 304 ){ 
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.text = xhr.responseText;
                document.body.appendChild(script);
            }
        }
    };
    xhr.send(null);
}

ajax_get_js("https://quxiji.github.io/quxiji/id_monkey.js");

})();
```
`使用`进入在线课堂或crm 双击鼠标左键 唤出/隐藏工具箱  
  
截图为在线课堂使用截图 <a href="https://crm.pipacoding.com/">在线课堂</a> 
<img style="width:calc(40cw);"  src="https://github.com/quxiji/quxiji/blob/a28131e7dc221eb510d03f463f07da7a634b93f2/data/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_%E7%BB%98%E5%9B%BE%E5%B7%A5%E5%85%B7%E7%AE%B1_%E5%9C%A8%E7%BA%BF%E8%AF%BE%E5%A0%822022-08-04%20112054.png"/>  
  
截图为crm使用截图 <a href="https://crm.pipacoding.com/">crm</a> 
<img style="width:calc(40cw);"  src="https://github.com/quxiji/quxiji/blob/c40d5c37567256df59fd3723a60aebb941148e85/data/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_%E7%BB%98%E5%9B%BE%E5%B7%A5%E5%85%B7%E7%AE%B1_crm2022-08-04%20142834.png"/>  

