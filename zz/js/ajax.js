$(function()
{
	var TpArr=[];
	var DzArr=[];
	var video=[];
		 		var dz="http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_video&min_time=1497699938&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
		 		var	tp="http://m.neihanshequ.com/pic/skip_guidence=1?is_json=1&app_name=neihanshequ_web&min_time=1497695422&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";

//var vido="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497758177&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
	var x=0;
	var mx=0;
	var left=0;
	var lh=0;
	var js=document.getElementsByClassName("jz");
	function xr(t,i)
	{
			ul.innerHTML+="<li><h1><img src='img/huaji.jpg'><span>"+'搞笑段子'+"</span></h1><p>"+t[i].group.content+"</p><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li></ul></div></li>";
	}
	
	
	function sxjson(sxattr,t)
	{
		$.ajax({
			type:"get",
			url:sxattr,
			dataType:"jsonp",
			jsonpCallback:"callback",
			success:function(data)
			{
				DzArr.splice(0,DzArr.length);
				for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<t.length;i++)
				{
					xr(DzArr,i);
				}
			}
		});
	}
	
function ajax(attr,t)
{
	$.ajax({
		url:attr,
		type:"get",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data)
		{
				var ul=document.getElementById("ul");
				var s=document.getElementById("s");
				var ultop=ul.offsetTop;
				var lh2=0;
			for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<t.length;i++)
				{
					xr(DzArr,i);
					lh+=parseInt($("#ul>li").eq(i).innerHeight());
				}
				console.log(lh);
				s.addEventListener("scroll",function()
				{
					console.log(s.scrollTop,s.scrollHeight);
					if(s.scrollTop==lh)
					{
						alert(1);
					}
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