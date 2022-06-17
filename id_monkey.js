

    //id_monkey.face 孵化 draw.face 全局入口 让每个人都触手开放
    //控制台 时间06月11日23时 参考https://www.w3cschool.cn/javascript_guide/javascript_guide-9hey2691.html

    //学习油猴 http://t.zoukankan.com/ningci-p-14548175.html


    //添加大盒子 参考http://www.wjhsh.net/poterliu-p-14416630.html
    var box_tool =document.createElement("div");
    box_tool.id = "id_box_3d";
    box_tool.style = "position:fixed;left:10px;bottom:10px;height:;width:;z-index:9999;background:rgba(50,50,50,0);display:block;";
    document.body.appendChild( box_tool );

    //工具 添加 工具箱 摇杆
    tool_add_yaogan ("id_box_3d");
    tool_int_yaogan ();
    var clas_tool = "height:;width:;border-radius:5px 5px 5px 5px;border:2px solid rgba(250,250,250,0);margin:3px;box-shadow: 1px 2px 3px rgba(200,200,200,1);background:rgba(255,255,255,1);color:rgba(0,0,0,1);display:block;";
    function tool_add_yaogan (id){ if( null == document.getElementById('id_box_yaogan')){ data_add(id,`<div id="id_box_yaogan" class="class_box_yaogan"></div>`); } }
    function tool_int_yaogan (){ document.getElementById('id_box_yaogan').style = "left:10px;bottom:10px;"; }

    //展现
    document.title = `.` + document.title ;
    tool_yindao(`让每个人都触手开放[版本061703_c${tool_getUuiD(2)}]`);

    //添加 body 监听 单击
    document.body.addEventListener("click", function(){ var bod = new Object(); bod.id = "body"; _onclick( bod ); } );

    //添加 body 监听 双击
    document.body.addEventListener("dblclick", function(){ var bod = new Object(); bod.id = "body"; _ondblclick( bod ); } );

    //添加 工具 长截图
    function tool_in_add_changjietu(){ tool_in ("changxian" ,"长截图"); var box_tool_changxian = document.getElementById('id_tool_changxian'); box_tool_changxian.style = clas_tool; }

    //添加 工具 批改
    function tool_in_add_pigai(){ tool_in ("pigai" ,"批改"); var box_tool_changxian = document.getElementById('id_tool_pigai'); box_tool_changxian.style = clas_tool; }

    //工具_引导 用于引导用户
    function tool_yindao(data){  tool_in_last( "yindao",data ); tool_clear_time('id_tool_yindao', 2000); }
    

    //工具 双击 长截图
    function tool_changxian_ondblclick(){
        //长截图
        tool_changjietu ();

        //监听 单击 提示截图快捷键
        tool_yindao( "按下截图按键：Ctrl  +  shift  +  S" );

        //聊天框消失tool_xiaoshi_liaotian ();

        //1触发截图 JS 模拟键按下 Ctrl  +  shift  +  S

        //参考https://www.csdn.net/tags/Ntjacg0sNzc5MzItYmxvZwO0O0OO0O0O.html
        //键码值 参考https://blog.csdn.net/qq_26990665/article/details/120776420  ctrl+shift+s 17 16 83
        //创建按键 参考https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/initKeyEvent
        //模拟按键 参考https://blog.csdn.net/weixin_40532650/article/details/110136180
        //模拟按键 参考https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/initKeyEvent
        //实现方法 KeyboardEvent()
        //安全原因未实现 KeyboardEvent{isTrusted: false}
    }

    //工具 双击 批改
    function tool_pigai_ondblclick(who){
      //遍历child https://www.jb51.net/article/156399.htm
      if( document.getElementsByClassName(who)){
        var list =  document.getElementsByClassName(who);
        var child = list.lastChild;
        console.log(list);
        
       }else{console.log( "no_id" );}

        tool_yindao("开发中");
        //1模拟鼠标位置
        //2触发元素
        

    }

    //工具 模拟鼠标点击 参考http://t.zoukankan.com/CyLee-p-7513342.html https://www.w3school.com.cn/xmldom/met_element_dispatchevent.asp
    function tool_mouse_adblclick (){ var click_Timer = window.setTimeout(function(){ 
        tool_mouse_simulateClick();
    }, 100); }


    //工具 模拟鼠标点击复选框 参考https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent
function tool_mouse_simulateClick(){
    //点击位置为屏幕中间
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });



}
 




//入口 触单击🍓 问题会冒泡其他元素 无法使用
function rukou_onclick(who){
  
  //用于调试
console.log( "rukou_onclick:", document.elementsFromPoint(who.clientX,who.clientY));
//tool_in_last( "xy_touch"+tool_getUuiD(1),who.clientX +","+who.clientY);
  
  
  who = document.elementFromPoint(who.clientX,who.clientY);
  //Switch语句 参考https://www.w3school.com.cn/js/js_switch.asp
  switch(who.id) {
     case 'body':              break;
     case 'id_tool_changxian': tool_clear(); tool_changxian_ondblclick(); break;
     case 'id_tool_pigai':     tool_pigai_ondblclick(event.target); break;
     case 'id_tool_clear':     tool_clear(); tool_int_yaogan (); break;
     default:                  
  } 
}

//入口 触双击🍓🍓
function rukou_ondblclick(who){
  //用于调试     
  console.log( "rukou_ondblonclick:",who.id , "节点",who.target,"坐标",event.clientX ,",", who.clientY);
  

  who = document.elementFromPoint(who.clientX,who.clientY);
  //Switch语句 参考https://www.w3school.com.cn/js/js_switch.asp
  switch(who.id) {
     case 'body':              break;
     case 'id_tool_changxian': break;
     case 'id_tool_pigai':     break;
     case 'id_tool_clear':     break;
     default:                  console.clear(); tool_touch_location ("id_box_yaogan"); tool_in("clear","清空"); tool_in_add_pigai();  tool_in_add_changjietu(); 
  } 
}






//工具 长截图
function tool_changjietu (){
    //调整布局
    //强大的js原生选择器 document.querySelector() 参考https://www.jianshu.com/p/2e1d5c92f9c4 https://www.runoob.com/jsref/met-element-queryselector.html
    if( document.querySelectorAll(".ant-table-body")[0])document.querySelectorAll(".ant-table-body")[0].style = "height:8000px; overflow:visible;";
    if( document.querySelectorAll(".ant-table-body")[1])document.querySelectorAll(".ant-table-body")[1].style = "height:8000px; overflow:visible;";
    if( document.querySelector(".ant-layout-content"))document.querySelector(".ant-layout-content").style = "margin: 24px 16px; background: rgb(255, 255, 255); padding: 24px; height: 8000px; overflow: hidden;";
    if( document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[0])document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[0].style = "height:8000px; ";
    if( document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[1])document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[1].style = "height:8000px; ";
}

//工具 聊天框消失
function tool_xiaoshi_liaotian (){
    //学生聊天框消失
    if( document.getElementById("chatAudio") ){
        var list=document.getElementById("chatAudio").parentNode;
        console.log(list.childNodes[1]);
        if( document.getElementById("chatAudio") != list.childNodes[1] )list.removeChild(list.childNodes[1]);
    }
}

//工具 触摸 where
function tool_touch_location (id){ var obj_yaogan = document.getElementById (id); obj_yaogan.style.left = event.clientX + 'px'; obj_yaogan.style.top = event.clientY + 'px'; obj_yaogan.style.posotion = "absolute"; obj_yaogan.style.position = "fixed";}


//工具 触摸 元素
function tool_touch_dom(){    
    //console.log("dom0",event.clientX ,",", event.clientY);
      //tool_in_last( "xy_touch"+tool_getUuiD(1),event.clientX +","+event.clientY);
    
    //console.log("dom1",document.elementFromPoint(event.clientX,event.clientY));
      //tool_in_last( "dom_touch"+tool_getUuiD(1),document.elementFromPoint(event.clientX,event.clientY));

    //console.log("dom2",event.currentTarget);
    //console.log("dom3",event.target.id);
    //console.log("dom4",event.target.children);
    //console.log("dom5",event.target.parent);

    return( document.elementFromPoint(event.clientX,event.clientY) );
    
}

//交互 长按 拖动  参考https://blog.csdn.net/weixin_35951275/article/details/117947051
var timeOutEvent=null;
function gtouchstart(who) { timeOutEvent = setTimeout(longPress, 800);    tool_tishi('touch_s','触起点'); };      
function gtouchend(who)   { clearTimeout(timeOutEvent);                   tool_tishi('touch_e','触终点'); };
function gtouchmove(who)  { clearTimeout(timeOutEvent);                   tool_tishi('touch_m','触拖动'); };      
function longPress(who)   {                                               tool_tishi('touch_l','触长按'); };
 
//交互 双击 单击 参考#https://my.oschina.net/jsan/blog/123181 问题 监听多对象被触发 修改时间06月13日19时 阻止冒泡 参考https://blog.csdn.net/lyt_angularjs/article/details/86592089
var clickTimer = null;
function _onclick(who)    { who = event;  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; } clickTimer = window.setTimeout(function(){  tool_tishi("touch_c","触单击"); rukou_onclick(who);  }, 300); }
function _ondblclick(who) { who = event;  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; } tool_tishi("touch_cc","触双击"); rukou_ondblclick(who);  }

//工具 临时提示 用于调试 时间06月12日14时
function tool_tishi (id,data){ tool_in_last(id,data ); tool_clear_time("id_tool_"+id, 200); }

//工具 删除 延时
function tool_clear_time (id ,time){ var click_Timer = window.setTimeout(function(){ data_delete (id); click_Timer = null; }, time); }

//工具 清空
function tool_clear (){ data_change("id_box_yaogan", "");}

//工具 装入 监听版 时间06月12日14时 参考https://www.w3school.com.cn/jsref/met_element_addeventlistener.asp
function tool_in      (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add     ("id_box_yaogan", `<input id="id_tool_${id}" name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).style = clas_tool; document.getElementById ('id_tool_'+id).addEventListener("click", function(){ _onclick(this) } ,false ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,false ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) });}  
function tool_in_last (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add_last("id_box_yaogan", `<input id="id_tool_${id}" name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).style = clas_tool; document.getElementById ('id_tool_'+id).addEventListener("click", function(){ _onclick(this) } ,false ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,false ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) });}  

//工具 唯一key 获取 05月28日21时 参考https://www.jianshu.com/p/1deee52cee79
function tool_getUuiD(randomLength){ return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36); }

//数据 更改
function data_change (id ,data){ document.getElementById(id).innerHTML = data; return "data_add(ok)"; }

//数据 删除
function data_delete (id){ var child=document.getElementById(id); if(child){console.log("父",child.parentNode.parentNode.removeChild(child.parentNode)); child.parentNode.removeChild(child);} }

//数据 添加
function data_add (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(5); newtext.innerHTML= data; var list=document.getElementById(id); list.insertBefore(newtext,list.childNodes[0]); return "data_add(ok)"; }
function data_add_last (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(6); newtext.innerHTML= data; var list=document.getElementById(id); list.appendChild(newtext); return "data_add(ok)"; }


       
                                                                                                                                                                                      
