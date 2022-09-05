<script>
	var i=1;
	var m=800;
	window.onload=function start(){
		ti();
	}
	//window.onload代表页面加载即执行
	function ti(){
		tim=setInterval("pho()",1000);//定义一个1000毫秒执行一次的计时器,执行pho()函数
		color(i);//引用color()函数,自己写的,在下面
	}
	function pho(){
		if(i==5){
			i=0;
			}
		i=i+1;
		var a=document.getElementById("d1");
		magicti();//引入幻灯片效果
		color(i);
		if(i==5){
			i=0;
			}
		//if分支表示1000毫秒执行一次,当i等于5就是第五个图片时候i=0,下一张执行就是i+1,即第一张
	}
	function off(){
		//鼠标悬浮停止播放
		//停止俩计时器
		clearInterval(tim);
		clearInterval(mati);
		}
	function on(){
		//鼠标离开重启计时器,开始播放
		ti();
	}
	function add(){
		var a=document.getElementById("d1");
		i=i+1;
		magicti();//引入幻灯片效果
		clearInterval(mti);
		color(i);//停止计时器,防止计时器叠加
		if(i==5){
			i=0;
			}
	}
	function noadd(){
		var a=document.getElementById("d1");
		i=i-1;
		if(i==0){
			i=5;
			}
		magicti();//引入幻灯片效果
		clearInterval(mti);//停止计时器,防止计时器叠加
		color(i);
	}
	function color(i){
		//color()的作用在于根据展示不同的图片改变顺序点的颜色
		var d21=document.getElementById("d21");
		var d22=document.getElementById("d22");
		var d23=document.getElementById("d23");
		var d24=document.getElementById("d24");
		var d25=document.getElementById("d25");
		//以上获取那五个点
		//下面是一个switch分支结构
		switch(i){
			case 1:
				//第一个图片,第一个点变黑,还原其他四个点的颜色,之后以此类推
				d21.style.background="black";
				d22.style.background="rgba(0,255,243,1.00)";
				d23.style.background="rgba(0,255,243,1.00)";
				d24.style.background="rgba(0,255,243,1.00)";
				d25.style.background="rgba(0,255,243,1.00)";
				break;
			case 2:
				d21.style.background="rgba(0,255,243,1.00)";
				d22.style.background="black";
				d23.style.background="rgba(0,255,243,1.00)";
				d24.style.background="rgba(0,255,243,1.00)";
				d25.style.background="rgba(0,255,243,1.00)";
				break;
			case 3:
				d21.style.background="rgba(0,255,243,1.00)";
				d22.style.background="rgba(0,255,243,1.00)";
				d23.style.background="black";
				d24.style.background="rgba(0,255,243,1.00)";
				d25.style.background="rgba(0,255,243,1.00)";
				break;
			case 4:
				d21.style.background="rgba(0,255,243,1.00)";
				d22.style.background="rgba(0,255,243,1.00)";
				d23.style.background="rgba(0,255,243,1.00)";
				d24.style.background="black";
				d25.style.background="rgba(0,255,243,1.00)";
				break;
			case 5:
				d21.style.background="rgba(0,255,243,1.00)";
				d22.style.background="rgba(0,255,243,1.00)";
				d23.style.background="rgba(0,255,243,1.00)";
				d24.style.background="rgba(0,255,243,1.00)";
				d25.style.background="black";
				break;
			   }
	}
	function magic(){
		//简单的幻灯片效果,使图片从下方滑动进入
		m=m-4;
		var d1=document.getElementById("d1");
		d1.style.backgroundPosition="0px "+m+"px";
		d1.style.backgroundRepeat="no-repeat";
		if(m==0){
			m=800;
			clearInterval(mti);
		}
	}
	function magicti(){
		//简单的幻灯片效果,使图片从下方滑动进入
		mti=setInterval("magic()",1);//每一毫秒图片向上滑动
		var d11=document.getElementById("d1");
		d1.style.background="url("+i+".jpg)";
		d1.style.backgroundRepeat="no-repeat";
	}
</script>
