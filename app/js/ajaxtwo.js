$(function()
{

		 		
var TpArr=[];		 		var	tp="http://m.neihanshequ.com/pic/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=1497847534.8100002&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
//var vido="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497758177&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
	var y=0;
	var my=0;
	var top=0;
	var lh=0;
	var js=document.getElementsByClassName("jz");
	//渲染替代区域
	function xr(t,i,c)
	{
			ul.innerHTML+="<li><h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='gif'><img src="+t[i].group.large_image.url_list[0].url+"></div><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li></ul></div></li>";
	}
	
	function td(t,i,c)
	{
		$("#ul>li").eq(i).html("<h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='gif'><img src="+t[i].group.large_image.url_list[0].url+"></div><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li></ul></div>")
	}
	
	
//	------------------------------------

	//刷新界面
	function sxjson(sxattr,t,c)
	{
		$.ajax({
			type:"get",
			url:sxattr,
			dataType:"jsonp",
			jsonpCallback:"callback",
			success:function(data)
			{
				t.splice(0,t.length);
				for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<$("#ul>li").length;i++)
				{
					td(t,i,c);
				}
			}
		});
	}
//	----------------------------------------
	//执行ajax
function ajax(attr,t,c)
{
	$.ajax({
		url:attr,
		type:"get",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data)
		{
				var ul=document.getElementById("ul");
				var list=ul.children;
				var s=document.getElementById("s");
				var ultop=ul.offsetTop;
				var lh2=0;
				var lw=0;
				for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<t.length;i++)
				{
					xr(t,i,c);
				}
				for(var i=0;i<t.length;i++)
				{
					lw+=list[i].clientHeight;
				}
				console.log(list);
				s.addEventListener("touchstart",function(ev)
				{
					y=ev.changedTouches[0].pageY;
				})

				ul.addEventListener("touchmove",function(ev)
				{
					console.log(lw,s.scrollTop);
					my=ev.changedTouches[0].pageY;
					if(s.scrollTop==0 && my-y>150)
					{
						$(".sxl").css("top",my-y+"px");
					}
				})
				var deg=0;
				var f=true;
				$(".ts").fadeOut();
				s.addEventListener("touchend",function(ev)
				{
					if((s.scrollTop==0 && f)&& my-y>0)
					{
						f=false;
						var time=setInterval(function()
						{
							deg=deg+30;
							$(".sxl").css({transform:"rotate("+deg+"deg)",transformOrigin:"center center"})
							if(deg>=1000 && my-y>150)
							{ 
								clearInterval(time);
								deg=0;
								$(".sxl").css("top","-25%");
								$(".sxl").css({transform:"rotate(0deg)"});
								f=true;
								sxjson(attr,t,c);
								$(".ts").fadeIn();
								setTimeout(function()
								{
									$(".ts").fadeOut();
								},1000)
									
							}
						},30)
						
					}
				})
		}
	})
}

//调用函数渲染
ajax(tp,TpArr,"爆笑GIF");

});