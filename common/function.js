function load_exploit_mira() {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    ExploitMira=document.getElementById("oneclick").value;
    jbver = document.getElementById("jb_ver").value;
    if(jbver ==""){return 0;}
    LoadedMSG="使用"+ jbver + "破解成功 + Mira/Hen 已加载。<br>请等待 左上角, 出现2次 以上 跳窗 并等待跳窗结束再操作";

    setTimeout(function(){
        let script=document.createElement('script');
        script.src="./common/702_jailbreak.js";
        document.getElementsByTagName('head')[0].appendChild(script);}, 500);
}

function load_fan() {

    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 写入风扇数据 ...</h1>";
    setTimeout(function(){
    degree=document.getElementById('degree').value;
    LoadedMSG="已经成功 写入风扇数据"+degree;
    var script=document.createElement('script');
    script.src="./pl/pl_fan.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    var binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_702() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 702jb ...</h1>";
    jbver = document.getElementById("jb_ver").value;
    if(jbver ==""){return 0;}
    LoadedMSG="使用"+ jbver + "破解成功 ";
        runScripts([ './common/'+jbver+'_jailbreak.js', './common/'+jbver+'_loadcode.js'], done);

}
function load_ftp() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 FTP ...</h1>";
    setTimeout(function(){

    LoadedMSG="FTP 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_ftp.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}
function load_dumper() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Dumper ...</h1>";
    setTimeout(function(){

    LoadedMSG="Dumper 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_linux() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Linux ...</h1>";
    setTimeout(function(){

    LoadedMSG="Linux 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_linux.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_app2usb() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 AppToUSB ...</h1>";
    setTimeout(function(){

    LoadedMSG="AppToUSB 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_app2usb.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_kerneldump() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 内核 Dumper ...</h1>";
    setTimeout(function(){

    LoadedMSG="内核 Dumper 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_kernelDumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}


function load_todex() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 toDEX ...</h1>";
    setTimeout(function(){

    LoadedMSG="toDEX 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_todex.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_webrte() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 WebRTE ...</h1>";
    setTimeout(function(){

    LoadedMSG="WebRTE 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_webrte.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_debug() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Debug...</h1>";
    setTimeout(function(){
    
    LoadedMSG="Ps4 Debug 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_ps4debug.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_historyblock() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载禁用历史记录...</h1>";
    setTimeout(function(){

    LoadedMSG="禁用历史记录已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_historyBlocker.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_updatesdisable() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载  屏蔽更新...</h1>";
    setTimeout(function(){

    LoadedMSG="  屏蔽更新已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_updatesDisable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_updatesenable() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 开启更新...</h1>";
    setTimeout(function(){

    LoadedMSG=" 开启更新已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_updatesEnable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_dbbackup() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 存档备份 ...</h1>";
    setTimeout(function(){

    LoadedMSG=" 存档备份 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dbBackup.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

function load_dbrestore() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 存档恢复 ...</h1>";
    setTimeout(function(){

    LoadedMSG=" 存档恢复 已加载 请等待 左上角,<br>出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dbRestore.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./common/702_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
},2500);
}

