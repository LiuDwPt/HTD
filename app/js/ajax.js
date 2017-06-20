$(function()
{
	var DzArr=[];
		 		var dz="http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_video&min_time=1497699938&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
//var vido="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497758177&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
	var y=0;
	var my=0;
	var top=0;
	var lh=0;
	var js=document.getElementsByClassName("jz");
	var hd=0;
	var pm=document.getElementsByClassName("pm");
	var tpo=document.getElementsByClassName("top");
	//渲染替代区域
	function xr(t,i,c)
	{
			ul.innerHTML+="<li><h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>0</p></li></ul></div></li>";
	}
	function td(t,i,c)
	{
		$("#ul>li").eq(i).html("<h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>0</p></li></ul></div>")
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
				s.addEventListener("touchstart",function(ev)
				{
					y=ev.changedTouches[0].pageY;
					top=ul.offsetTop;
				})
				pm[0].style.display="none";
				ul.addEventListener("touchmove",function(ev)
				{
					lw=0;
					for(var i=0;i<list.length;i++)
					{	
						lw+=parseInt(getComputedStyle(list[i],null)["height"]+getComputedStyle(list[i],null)["padding"]);
					}
					if(ul.offsetTop < -(s.clientHeight))
					{
						tpo[0].style.bottom="4rem";
					}
					hd=lw-s.clientHeight;
					my=ev.changedTouches[0].pageY;
					if(top==0 && my-y>150)
					{
						$(".sxl").css("top",my-y+"px");
						return;
					}
					if(ul.offsetTop<=-(hd+pm[0].clientHeight))
					{
						pm[0].style.display="block";
						for(var b=0;b<t.length;b++)
						{
							xr(t,b,c);
						}
						pm[0].style.display="show";
						return;
					}
					if(ul.offsetTop<=0)
					{
						$("#ul").css("top",(my-y)+top+"px");
					}
					
				})
				var deg=0;
				var f=true;
				$(".ts").fadeOut();
				s.addEventListener("touchend",function(ev)
				{
					if(top>0)
					{
						$("#ul").css("top",0+"px");
					}
					if(ul.offsetTop<=-hd)
					{
						$("#ul").css("top",-hd+"px");
					}
					if((top==0 && f)&& my-y>0)
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
								$("#ul").css("top",0+"px");
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
ajax(dz,DzArr,"搞笑段子");

});