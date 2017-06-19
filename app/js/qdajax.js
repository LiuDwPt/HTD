$(function()
{
		//渲染替代区域
		function xr(t,i)
	{
			ul.innerHTML+="<li><h1><img src='img/huaji.jpg'><span>"+'搞笑段子'+"</span></h1><p>"+t[i].group.content+"</p><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li></ul></div></li>";
	}
	function td(t,i)
	{
		$("#ul>li").eq(i).html("<li><h1><img src='img/huaji.jpg'><span>"+'搞笑段子'+"</span></h1><p>"+t[i].group.content+"</p><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li></ul></div></li>")
	}
	//刷新界面
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
				for(var i=0;i<$("#ul>li").length;i++)
				{
					td(DzArr,i);
				}
			}
		});
	}
	//执行ajax
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
				}
				for(var j = 0; j < $("#ul>li").length;j++) {
						lh+= parseInt($("#ul>li").eq(j).innerHeight());
				}
				s.addEventListener("touchstart",function(ev)
				{
					y=ev.changedTouches[0].pageY;
				})

				s.addEventListener("touchmove",function(ev)
				{
					my=ev.changedTouches[0].pageY;
					if(s.scrollTop==0 && my-y>100)
					{
						$(".sxl").css("top",my-y+"px");
					}

				})
				var deg=0;
				var f=true;
				s.addEventListener("touchend",function(ev)
				{
					if(s.scrollTop==0 && f)
					{
						f=false;
						var time=setInterval(function()
						{
							deg=deg+30;
							$(".sxl").css({transform:"rotate("+deg+"deg)"})
							if(deg>=1000)
							{ 
								clearInterval(time);
								deg=0;
								$(".sxl").css("top","-22%");
								$(".sxl").css({transform:"rotate(0deg)"});
								f=true;
								sxjson(dz,DzArr);
							}
						},30)
						
					}
				})

		}
	})
}
})
