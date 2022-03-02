function calculation() {

    var work_time = $('select[name="work_time"]').val();
    var work_date = $('input[name="work_date"]').val();
    var work_time_min = $('select[name="work_time_min"]').val();
    console.log("work_time_min" + work_time_min);
    console.log("work_time" + work_time);
    console.log("work_date" + work_date);

    var calculation_result = work_time * work_date;
    console.log("calculation_result" + calculation_result);
    var ExtraTime = calculation_result - work_time_min;
    console.log("ExtraTime" + ExtraTime);
    console.log(Math.floor(ExtraTime/work_time)); 
    var holidays = Math.floor(ExtraTime/work_time);
    
    if (Math.sign(holidays) !== 1) {
        holidays = 0;
    }
    
    //var conversion_work_time = parseInt(work_time);

    $('textarea').text("月の合計稼働時間は" + calculation_result + "時間です。有給取得可能日数は" +  holidays + "日です。");
}

/*--------------------------------------------------------------------------*
 *  
 *  footerFixed.js
 *  
 *  MIT-style license. 
 *  
 *  2007 Kazuma Nishihata [to-R]
 *  http://blog.webcreativepark.net
 *  
 *--------------------------------------------------------------------------*/

new function(){
	
	var footerId = "footer";
	//メイン
	function footerFixed(){
		//ドキュメントの高さ
		var dh = document.getElementsByTagName("body")[0].clientHeight;
		//フッターのtopからの位置
		document.getElementById(footerId).style.top = "0px";
		var ft = document.getElementById(footerId).offsetTop;
		//フッターの高さ
		var fh = document.getElementById(footerId).offsetHeight;
		//ウィンドウの高さ
		if (window.innerHeight){
			var wh = window.innerHeight;
		}else if(document.documentElement && document.documentElement.clientHeight != 0){
			var wh = document.documentElement.clientHeight;
		}
		if(ft+fh<wh){
			document.getElementById(footerId).style.position = "relative";
			document.getElementById(footerId).style.top = (wh-fh-ft-1)+"px";
		}
	}
	
	//文字サイズ
	function checkFontSize(func){
	
		//判定要素の追加	
		var e = document.createElement("div");
		var s = document.createTextNode("S");
		e.appendChild(s);
		e.style.visibility="hidden"
		e.style.position="absolute"
		e.style.top="0"
		document.body.appendChild(e);
		var defHeight = e.offsetHeight;
		
		//判定関数
		function checkBoxSize(){
			if(defHeight != e.offsetHeight){
				func();
				defHeight= e.offsetHeight;
			}
		}
		setInterval(checkBoxSize,1000)
	}
	
	//イベントリスナー
	function addEvent(elm,listener,fn){
		try{
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent("on"+listener,fn);
		}
	}

	addEvent(window,"load",footerFixed);
	addEvent(window,"load",function(){
		checkFontSize(footerFixed);
	});
	addEvent(window,"resize",footerFixed);
	
}