$(function()
{
	var TpArr=[];
	var DzArr=[];
		 		var dz="http://proxy.e12e.com/?http://m.neihanshequ.com/?is_json=1&skip_guidence=1;
		 		var	tp="http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497695422&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";

//var vido="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497758177&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
	var y=0;
	var my=0;
	var top=0;
function ajax(attr,t)
{
	function xr(i)
	{
			ul.innerHTML+="<li>"+"<h1>"+"<img src='img/huaji.jpg'>"+"<span>"+"搞笑段子"+"</span>"+"</h1>"+"<p>"+t[i].group.content+"</p>"+"<div class='dv'>"+"<ul>"+"<li>"+"<span>"+"</span>"+"<p>"+"0"+"</p>"+"</li>"+"<li>"+"<span>"+"</span>"+"<p>"+"0"+"</p>"+"<li>"+"<span>"+"</span>"+"<p>"+"0"+"</p>"+"<ul>"+"<dv>"+"</li>"
	}
	$.ajax({
		url:attr,
		type:"get",
		dataType:"json",
		success:function(data)
		{
			for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				var ul=document.getElementById("ul");
				for(var i=0;i<t.length;i++)
				{
					xr(i);
				}
				var s=document.getElementById("s");
				var ultop=ul.offsetTop;
				s.addEventListener("touchstart",function(ev)
				{
					y=ev.changedTouches[0].pageY;
					top=ul.offsetTop;
				})
				
				s.addEventListener("touchmove",function(ev)
				{
					var my=ev.changedTouches[0].pageY;
					if(top>=ultop && my-y<0)
					{
						ul.style.top=ultop+"px";
					}
					ul.style.top=-(my-y)+top+"px";
				})	
		}
	})
}
//ajax(tp,TpArr);
ajax(dz,DzArr);

//s.addEventListener("touchend",function(ev)
//{
//	sx=ev.changedTouches[0].clientX;
//	endy=ev.changedTouches[0].clientY;
//})

});