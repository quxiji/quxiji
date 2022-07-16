
    //id_monkey.face 孵化 draw.face 全局入口 让每个人都触手开放
    
    //测试版本 http://47.97.64.181/quxiji/apk/id/id_monkey.js

    //添加大盒子 参考http://www.wjhsh.net/poterliu-p-14416630.html
    var box_tool =document.createElement("div");
    box_tool.id = "id_box_body";
    box_tool.style = "position:fixed;left:10px;bottom:10px;height:;max-height:calc(80vh);z-index:9999;background:rgba(50,50,50,0);overflow:auto;display:block;";
    box_tool.innerHTML = `<style>::-webkit-scrollbar{ display: none; /* Chrome Safari */} </style>`;
    document.body.appendChild( box_tool );

    //工具 添加 工具箱 摇杆
    tool_add_yaogan ("id_box_body");
    tool_int_yaogan ();
    var clas_tool = "max-height:calc(60vh);max-width:calc(60vh);border-radius:5px 5px 5px 5px;border:2px solid rgba(250,250,250,0);margin:3px;box-shadow: 1px 2px 3px rgba(200,200,200,1);background:rgba(255,255,255,1);color:rgba(0,0,0,1);font-family:'微软雅黑';font-size:10px;overflow:auto;display:block;";
    function tool_add_yaogan (id){ if( null == document.getElementById('id_box_tool')){ data_add(id,`<div id="id_box_tool"></div>`); } }
    function tool_int_yaogan (){ document.getElementById('id_box_tool').style = "left:10px;bottom:10px;"; }

    //🚩🚩展现版本
    if( tool_get_url() == "crm.pipacoding.com" || tool_get_url() =="crm.hetao101.com"|| tool_get_url() == "api.hetao101.com" || tool_get_url() == "api.pipacoding.com"){ document.title = `.` + document.title ; tool_yindao(`[城门 [github_071608]`);  }

    //添加 body 监听 单击
    document.body.addEventListener("click", function(){ var bod = new Object(); bod.id = "body"; _onclick( bod ); } );

    //添加 body 监听 双击
    document.body.addEventListener("dblclick", function(){ var bod = new Object(); bod.id = "body"; _ondblclick( bod ); } );

    //添加 工具 长截图
    function tool_in_add_jietu(){ tool_in ("changxian" ,"截图"); }// document.getElementById('id_tool_changxian').style = clas_tool; }

    //添加 工具 批改
    function tool_in_add_pigai(){ tool_in ("pigai" ,"批改"); }// document.getElementById('id_tool_pigai').style = clas_tool; }

    //添加 工具 链接
    function tool_in_add_link(){ tool_in ("link" ,"链接"); }// document.getElementById('id_tool_link').style = clas_tool; }

    //添加 工具 到课
    function tool_in_add_daoke(){ tool_in ("daoke" ,"到课"); }// document.getElementById('id_tool_daoke').style = clas_tool;}

    //添加 工具 完课
    function tool_in_add_wanke(){ tool_in ("wanke" ,"完课"); }

    //添加 工具 分析完课
    function tool_in_add_fenxiwanke(){ tool_in ("fenxiwanke" ,"分析完课"); }

    //工具_引导 用于引导用户
    function tool_yindao(data){ var date=tool_getUuiD(2); tool_in( "yindao_"+date,data ); tool_clear_time('id_tool_yindao_'+date, 1500); }
    
    //工具 双击 长截图
    function tool_changxian_ondblclick(){
        //长截图
        tool_jietu ();

        //监听 单击 提示截图快捷键
        tool_yindao( "Edge浏览器里 按下截图按键：Ctrl  +  shift  +  S" );

        //聊天框消失tool_xiaoshi_liaotian ();

        //1触发截图 JS 模拟键按下 Ctrl  +  shift  +  S

        //参考https://www.csdn.net/tags/Ntjacg0sNzc5MzItYmxvZwO0O0OO0O0O.html
        //键码值 参考https://blog.csdn.net/qq_26990665/article/details/120776420  ctrl+shift+s 17 16 83
        //创建按键 参考https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/initKeyEvent
        //模拟按键 参考https://blog.csdn.net/weixin_40532650/article/details/110136180
        //模拟按键 参考https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/initKeyEvent
        //实现方法 KeyboardEvent()
        //安全原因未实现 KeyboardEvent{isTrusted: false}
        fireKeyEvent('id_box_body');
    }

//JS 模拟键按下 Ctrl  +  shift  +  S  参考 https://www.csdn.net/tags/OtDaQg4sOTM4LWJsb2cO0O0O.html  参考 https://w3c.github.io/uievents/tools/key-event-viewer.html
    function fireKeyEvent(id) {
        var KeyboardEventInit_ct = {key:"Control", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:17, which:17, ctrlKey:true, shiftKey:false, altKey:false, metaKey:false };
        var css_anji_ct = new KeyboardEvent('keydown', KeyboardEventInit_ct);
        document.getElementById(id).dispatchEvent(css_anji_ct);

        var KeyboardEventInit_sh = {key:"Shift", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:16, which:16, ctrlKey:true, shiftKey:true, altKey:false, metaKey:false };
        var css_anji_sh = new KeyboardEvent('keydown', KeyboardEventInit_sh);
        document.getElementById(id).dispatchEvent(css_anji_sh);

        var KeyboardEventInit_s = {key:"S", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:83, which:83, ctrlKey:true, shiftKey:true, altKey:false, metaKey:false };
        var css_anji_s = new KeyboardEvent('keydown', KeyboardEventInit_s);
        document.getElementById(id).dispatchEvent(css_anji_s);

        var KeyboardEventInit_sp = {key:"S", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:83, which:83, ctrlKey:true, shiftKey:true, altKey:false, metaKey:false };
        var css_anji_sp = new KeyboardEvent('keyup', KeyboardEventInit_sp);
        document.getElementById(id).dispatchEvent(css_anji_sp);

        var KeyboardEventInit_shp = {key:"Shift", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:16, which:16, ctrlKey:true, shiftKey:false, altKey:false, metaKey:false };
        var css_anji_shp = new KeyboardEvent('keyup', KeyboardEventInit_shp);
        document.getElementById(id).dispatchEvent(css_anji_shp);

        var KeyboardEventInit_ctp = {key:"Control", code:"", location:0, repeat:false, isComposing:false, charCode:0, keyCode:17, which:17, ctrlKey:false, shiftKey:false, altKey:false, metaKey:false };
        var css_anji_ctp = new KeyboardEvent('keyup', KeyboardEventInit_ctp);
        document.getElementById(id).dispatchEvent(css_anji_ctp);

        console.log("ct",css_anji_ct,"sh",css_anji_sh,"s",css_anji_s );
    }

    //工具 批改
    function tool_pigai(who){
        
        //1模拟鼠标位置
        //2触发元素 可行obj.click();  参考https://blog.csdn.net/weixin_45392081/article/details/124155073?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165554189516780366566221%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165554189516780366566221&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~times_rank-2-124155073-null-null.142^v17^pc_rank_34,157^v15^new_3&utm_term=JavaScript+%E6%A8%A1%E6%8B%9F%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB%E6%9F%90%E4%B8%AA%E4%BD%8D%E7%BD%AE&spm=1018.2226.3001.4187
        
var click_Timer = window.setTimeout(function(){ 
console.log( who);
tool_yindao("开发中 [问题:js无法模拟鼠标点击页面元素]");
}, 2000);

    }


//JS监听按键 06月10日 参考https://blog.csdn.net/weixin_44691608/article/details/120792586
const onKeydownUp = (e, isDown) => { console.log(`key: ${e.key} ${isDown ? 'down' : 'up'}`,e); };
    const testUpAndDown = () => {
        document.addEventListener('keydown', (e) => onKeydownUp(e, true));
        document.addEventListener('keyup', (e) => onKeydownUp(e, false));
    };
//testUpAndDown();

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
 
//工具 聊天框消失
function tool_xiaoshi_liaotian (){
    //学生聊天框消失
    if( document.getElementById("chatAudio") ){
        var list=document.getElementById("chatAudio").parentNode;
        console.log(list.childNodes[1]);
        if( document.getElementById("chatAudio") != list.childNodes[1] )list.removeChild(list.childNodes[1]);
    }
}


var doms_click = [];
//入口 触单击🍓 问题会冒泡其他元素 无法使用
function rukou_onclick(who){
  
  //用于调试console.log( "rukou_onclick:", document.elementsFromPoint(who.clientX,who.clientY));
  //tool_in_last( "xy_touch"+tool_getUuiD(1),who.clientX +","+who.clientY);
  
  
  who = document.elementFromPoint(who.clientX,who.clientY);
  //Switch语句 参考https://www.w3school.com.cn/js/js_switch.asp
  switch(who.id) {
     case 'body':              break;
     case 'id_tool_changxian': tool_clear(); tool_changxian_ondblclick(); break;
     case 'id_tool_daoke':     tool_daoke(); break;

     case 'id_tool_wanke':     tool_clear(); tool_in_text("wanke_data",""); tool_in_add_fenxiwanke(); break;
     case 'id_tool_fenxiwanke':tool_fenxiwanke("id_tool_wanke_data"); break;

     case 'id_tool_pigai':     tool_clear(); tool_pigai(who); break;
     case 'id_tool_link':      tool_clear(); tool_link(who); break;
          case 'id_tool_link_wankebiao':      tool_clear(); window.open("https://shimo.im/sheets/e1Az4OXdd8CRDeqW/5C8AI"); break;
     default:  doms_click.push(who);  console.log(doms_click);        
  } 
}

//入口 触双击🍓🍓
function rukou_ondblclick(who){
  //用于调试     
  console.log( "rukou_ondblonclick:",who.id , "节点",who.target,"坐标",event.clientX ,",", who.clientY);

  var box_tool = document.getElementById('id_box_tool'); 
  if(box_tool.childNodes.length){ tool_clear(); } 
  else{
    who = document.elementFromPoint(who.clientX,who.clientY);
    //Switch语句 参考https://www.w3school.com.cn/js/js_switch.asp
    switch(who.id) {
      case 'body':              break;
      case 'id_tool_changxian': break;
      case 'id_tool_pigai':     break;
      case 'id_tool_clear':     break;
      default:                  if( tool_get_url() == "crm.pipacoding.com" || tool_get_url() =="crm.hetao101.com"){ tool_in_add_pigai(); tool_in_add_link(); tool_in_add_wanke();} if( tool_get_url() == "api.hetao101.com" || tool_get_url() =="api.pipacoding.com"){ tool_in_add_jietu(); tool_in_add_daoke();}console.log( "url",tool_get_url());

    } 
  }
}


/*
userId	学员姓名	在班状态	完课率	L11-1	L11-1	L11-1	L11-1	L11-2	L11-2	L11-2	L11-2	L11-3	L11-3	L11-3	L11-3	L11-4	L11-4	L11-4	L11-4	L11-5	L11-5	L11-5	L11-5	L11-6	L11-6	L11-6	L11-6
userId	学员姓名	在班状态	完课率	完课状态	挑战进度	随堂测首次得分	作业	完课状态	挑战进度	随堂测首次得分	作业	完课状态	挑战进度	随堂测首次得分	作业	完课状态	挑战进度	随堂测首次得分	作业	完课状态	挑战进度	随堂测首次得分	作业	完课状态	挑战进度	随堂测首次得分	作业
6963563	张柏毅	在班	100.0%	已完课	12/12	100	5	已完课	13/13	100	4	已完课	12/12	100	5	已完课	14/14	100	5	已完课	16/16	100	5	已完课	13/13	100	待批改
7663345	刘芷涵	在班	45.0%	到课未完课	2/12	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交
8028031	代婉瑛	在班	100.0%	已完课	12/12	100	5	已完课	13/13	100	5	已完课	12/12	100	5	已完课	14/14	100	5	已完课	16/16	100	5	已完课	13/13	100	待批改
7924477	祁南月	在班	90.0%	已完课	12/12	100	5	已完课	13/13	100	5	已完课	12/12	100	5	已完课	14/14	100	待批改	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交
8252024	付熙妍	在班	100.0%	已完课	12/12	100	5	已完课	13/13	100	5	已完课	12/12	100	5	已完课	14/14	100	5	已完课	16/16	100	5	已完课	13/13	100	待批改
7581946	傅正恩	在班	95.0%	已完课	12/12	60	5	已完课	13/13	40	5	已完课	12/12	80	5	已完课	14/14	60	5	已完课	16/16	80	待批改	未到课	0/0	未提交	未提交
8267764	赵思涵	在班	100.0%	已完课	12/12	80	3	已完课	13/13	100	3	已完课	12/12	100	5	已完课	14/14	100	3	已完课	16/16	100	待批改	已完课	13/13	60	待批改
8082037	张泓瑞	在班	100.0%	已完课	12/12	40	5	已完课	13/13	100	5	已完课	12/12	100	5	已完课	14/14	80	5	已完课	16/16	60	5	已完课	13/13	60	待批改
8061556	伍启程	在班	65.0%	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交	未到课	0/0	未提交	未提交
8240751	刘骏鹏	在班	95.0%	到课未完课	7/12	未提交	未提交	已完课	13/13	100	5	已完课	12/12	100	5	已完课	14/14	100	5	已完课	16/16	100	5	已完课	13/13	100	待批改
8132974	窦天佑	在班	100.0%	已完课	12/12	40	5	已完课	13/13	100	5	已完课	12/12	60	4	已完课	14/14	60	待批改	已完课	16/16	40	待批改	已完课	13/13	40	待批改
*/

//工具 分析完课 时间07月14日16时
function tool_fenxiwanke(id){ 
  var hang  = document.getElementById(id).value.split("\n"); 
  var num_stu = hang.length -2; 
  var lie1 = hang[0].toString().split("\t"); 
  var lie2 = hang[1].toString().split("\t");
  var num_cla = lie1.length /4 -1;

  tool_in_last( "renke",    "人数"+"\t"+ String(num_stu)+ "\t"+ "课数"+"\t"+ String(num_cla) +"\t" +"分析未完课结果见下："); 
  //tool_in_last( "lie_tou1","列头一"+"\t"+ lie1 ); 
  //tool_in_last( "lie_tou2","列头二"+"\t"+ lie2 ); 

  tool_in_text("wanke_data_out" ,"");
  //第3行的未提交 参考遍历数组效率 https://www.cnblogs.com/kefeiGame/p/8391859.html
  for(i = 0 ; i < num_stu; i++) {
    var data = hang[i+2].toString().split("\t");
    console.log(i +" "+ data[1] +" ");
    var data_o = tool_data_out_hang( data , lie1 , lie2); 
    console.log(data_o);
    var data_wanke = document.getElementById("id_tool_wanke_data_out");
    data_wanke.innerHTML += data_o;
    if( i < num_stu-1 && data_o.length )data_wanke.innerHTML += "\n";
  }
  console.log(i+"\t"+len+"\t"+num_stu);
}

//工具 数据 提取 行未完课数据 data_hang data_lie2 data_lie1
function tool_data_out_hang( data , lie1 , lie2){
  var data_num = [];
  for(j = 0,len=data.length; j < len; j++) {
    if( data[2] =="在班" ){ if(data[j] == "未提交"){ if(lie2[j] == "作业" && lie1[j].indexOf("-8") == -1)data_num.push(lie1[j]);} }
  }
  var data_out = new Array();
  if(data_num.length >0 && parseFloat(data[3]) <100){ 
    
    //data_out.push( data[0] );
    data_out.push( data[0] + "\t"+ data[1] +"\t"+ data[2] +lie1[3] + data[3] +"\t"+ "未完课"+ data_num.length +"节"+"\t"+ "未完课课程" +"\t"+ data_num.toString() );
   
    tool_in_last( data[0], data[0] +"\t"+ "未完课"+ data_num.length +"节"+"\t"+ data_num.toString() );
    document.getElementById("id_tool_"+data[0]).addEventListener("click", function(){ var data_id = []; data_id[0] = document.getElementById("id_tool_"+data[0]).value; tool_copyToClip(data_id); }  );  
  }
  return data_out; 
}

//工具 到课 时间07月11日10时 修改07月12日10时 在线课堂链接https://api.hetao101.com/live-course-system/course-management/online-course
function tool_daoke(){  var x = document.getElementsByClassName("ant-tabs-tabpane ant-tabs-tabpane-active")[0].getElementsByClassName("OnlineStyle_useCopyLabel__jCKO-"); var y =[]; for (var i = 0; i < x.length; i++) { y[i]  = x[i].innerText; x[i].style =clas_tool; } tool_clear(); var data_copy = tool_copyToClip(y); var id = "data_copy"+tool_getUuiD(2); tool_in(id ,data_copy); document.getElementById('id_tool_'+id).style.textAlign= 'left';  }

// 工具 复制内容到剪切板 2个数据一行 带行号 时间07月11日10时 修改07月12日10时 参考https://blog.csdn.net/sunnyzyq/article/details/85065022 参考制表符https://blog.csdn.net/fanxueya1322/article/details/86612340 参考奇偶https://blog.csdn.net/qq_40816360/article/details/88295099
function tool_copyToClip(contentArray, message) { var contents = ""; if(contentArray.length == 1){ contents = contentArray[0]; } else{ for (var i = 0; i < contentArray.length; i++) { if (i%2 === 0){  contents +=  1+ i/2 + "\t" +contentArray[i] + "\t";} else{ contents +=  contentArray[i] +"\n";} } } const textarea = document.createElement('textarea'); textarea.value = contents; document.body.appendChild(textarea); textarea.select(); if (document.execCommand('copy')) { document.execCommand('copy'); } document.body.removeChild(textarea); if (message == null) { tool_yindao("复制成功 可直接粘贴 "+contentArray.length/2); } else{ tool_yindao(message); } return contents;}

//工具 link
function tool_link(who){ tool_in(`link_wankebiao`,`完课表`);}

//工具 广告屏蔽 06月29日17时
function tool_class_displaynone (css) {  if( document.querySelectorAll(css)[0]) document.querySelectorAll(css)[0].style = "display:none;";  }
function tool_id_displaynone (id) {  if(  document.getElementById (id))  document.getElementById (id).style = "display:none;";  }
tool_class_displaynone (".s-bottom-ctner"); 
tool_id_displaynone ("u_sp");

//工具 获取 地址
function tool_get_url(){ return window.location.hostname; }

//工具 长截图 调整布局 强大的js原生选择器 document.querySelector() 参考https://www.jianshu.com/p/2e1d5c92f9c4 https://www.runoob.com/jsref/met-element-queryselector.html
function tool_jietu (){ if( document.querySelectorAll(".ant-table-body")[0])document.querySelectorAll(".ant-table-body")[0].style = "height:8000px; overflow:visible;";if( document.querySelectorAll(".ant-table-body")[1])document.querySelectorAll(".ant-table-body")[1].style = "height:8000px; overflow:visible;";if( document.querySelector(".ant-layout-content"))document.querySelector(".ant-layout-content").style = "margin: 24px 16px; background: rgb(255, 255, 255); padding: 24px; height: 8000px; overflow: hidden;";if( document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[0])document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[0].style = "height:8000px; ";if( document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[1])document.querySelectorAll(".OnlineStyle_wrappedTable__3GJAC")[1].style = "height:8000px; ";}

//工具 触摸 where
function tool_touch_location (id){ var obj_yaogan = document.getElementById (id); obj_yaogan.style.left = event.clientX + 'px'; obj_yaogan.style.top = event.clientY + 'px'; obj_yaogan.style.posotion = "absolute"; obj_yaogan.style.position = "fixed";}

//交互 长按 拖动  参考https://blog.csdn.net/weixin_35951275/article/details/117947051
var timeOutEvent=null;
function gtouchstart(who) { timeOutEvent = setTimeout(longPress, 800);    tool_tishi('touch_s','触起点'); };      
function gtouchend(who)   { clearTimeout(timeOutEvent);                   tool_tishi('touch_e','触终点'); };
function gtouchmove(who)  { clearTimeout(timeOutEvent);                   tool_tishi('touch_m','触拖动'); };      
function longPress(who)   {                                               tool_tishi('touch_l','触长按'); };
 
//交互 双击 单击 参考#https://my.oschina.net/jsan/blog/123181 问题 监听多对象被触发 修改时间06月13日19时 阻止冒泡 参考https://blog.csdn.net/lyt_angularjs/article/details/86592089
var clickTimer = null;
function _onclick(who)    { who = event;  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; } clickTimer = window.setTimeout(function(){  tool_tishi("touch_c","触单击"); rukou_onclick(who);  }, 10); }
function _ondblclick(who) { who = event;  if(clickTimer) { window.clearTimeout(clickTimer); clickTimer = null; } tool_tishi("touch_cc","触双击"); rukou_ondblclick(who);  }

//工具 临时提示 用于调试 时间06月12日14时
function tool_tishi (id,data){ }// tool_in_last(id,data ); tool_clear_time("id_tool_"+id, 200); }

//工具 删除 延时
function tool_clear_time (id ,time){ var click_Timer = window.setTimeout(function(){ data_delete (id); click_Timer = null; }, time); }

//工具 清空
function tool_clear (){ data_change("id_box_tool", "");}

//工具 装入 监听版 时间06月12日14时 参考https://www.w3school.com.cn/jsref/met_element_addeventlistener.asp
function tool_in      (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add     ("id_box_tool", `<input id="id_tool_${id}" name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).style = clas_tool; document.getElementById ('id_tool_'+id).addEventListener("click", function(){ _onclick(this) } ,false ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,false ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) });}  
function tool_in_last (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add_last("id_box_tool", `<input id="id_tool_${id}" name="name_tool_${id}" type="submit" value="${data}">` ); document.getElementById ('id_tool_'+id).style = clas_tool; document.getElementById ('id_tool_'+id).addEventListener("click", function(){ _onclick(this) } ,false ); document.getElementById ('id_tool_'+id).addEventListener("dblclick", function(){ _ondblclick(this) } ,false ); }  document.getElementById ('id_tool_'+id).addEventListener("touchstart", function(){ gtouchstart(this) });  document.getElementById ('id_tool_'+id).addEventListener("touchend", function(){ gtouchend(this) }); document.getElementById ('id_tool_'+id).addEventListener("touchmove", function(){ gtouchmove(this) });}  
function tool_in_text (id ,data){ if (!document.getElementById ('id_tool_'+id) ){ data_add_last("id_box_tool", `<textarea id="id_tool_${id}" name="name_tool_${id}" type="submit" wrap="off" placeholder="粘贴全部完课">${data}</textarea>` ); document.getElementById ('id_tool_'+id).style = clas_tool; document.getElementById ('id_tool_'+id).style.height = "calc(18vh)"; document.getElementById ('id_tool_'+id).style.width = "calc(60vh)"; document.getElementById ('id_tool_'+id).focus (); }  } 

//工具 唯一key 获取 05月28日21时 参考https://www.jianshu.com/p/1deee52cee79
function tool_getUuiD(randomLength){ return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36); }

//数据 更改
function data_change (id ,data){ document.getElementById(id).innerHTML = data; return "data_add(ok)"; }

//数据 删除
function data_delete (id){ var child=document.getElementById(id); if(child){ child.parentNode.parentNode.removeChild(child.parentNode); } }

//数据 添加
function data_add (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(5); newtext.innerHTML= data; var list=document.getElementById(id); list.insertBefore(newtext,list.childNodes[0]); return "data_add(ok)"; }
function data_add_last (id ,data){ var newtext=document.createElement("div"); newtext.id = "id_add_div_"+tool_getUuiD(6); newtext.innerHTML= data; var list=document.getElementById(id); list.appendChild(newtext); return "data_add(ok)"; }

                                                                                                                                                                                                                                                                                                                                                        
