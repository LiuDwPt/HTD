$(function()
{
		var Hs=" http://proxy.e12e.com/?http://is.snssdk.com/neihan/stream/mix/v1/?mpic=1&webp=1&essence=1&content_type=-101&message_cursor=-1&longitude=116.4121485&latitude=39.9365054&am_longitude=116.41828&am_latitude=39.937848&am_city=%E5%8C%97%E4%BA%AC%E5%B8%82&am_loc_time=1483686438786&count=30&min_time=1483929653&screen_width=1080&iid=7164180604&device_id=34822199408&ac=wifi&channel=baidu&aid=7&app_name=joke_essay&version_code=590&version_name=5.9.0&device_platform=android&ssmix=a&device_type=Nexus%2B5&device_brand=google&os_api=25&os_version=7.1&uuid=359250050588035&openudid=12645e537a2f0f25&manifest_version_code=590&resolution=1080*1776&dpi=480&update_version_code=5903";
var a;
var ul=document.getElementById("ul");
var jj=0;
	$.ajax({
			url:Hs,
			type:"get",
			dataType:'json',
			async:false,
			success:function(data)
			{
				console.log(data);
				a=data.data.data;
			}
	});

		for(var i=0;i<a.length;i++)
		{
			if(a[i].group==null)
			{
				ul.innerHTML+="<li>"+"<p>"+a[i].ad.avatar_name+"</p>"+"<i>"+a[i].ad.display_info+"</i>"+"<span>"+"</span>"+"</li>";
			}
			if(a[i].group!=null && a[i].group.mp4_url!=null)
			{
			ul.innerHTML+="<li>"+"<p>"+a[i].group.category_name+"</p>"
			+"<i>"+a[i].group.content+"</i>"+"<span>"+"<video  src="+a[i].group.mp4_url+" width='100%' height='100%' id='vd'controls='controls'>"+"</video>"+"</span>"+"</li>";
			}
		}
		var vdp=document.getElementById("vd");
		console.log(vdp);
			vdp.addEventListener("touchstart",function()
			{
				if(vdp.paused)
				{
					vdp.play();
				}
				else
				{
					vdp.pause()
				}
				jj++;
				if(jj==1)
				{
					vdp.controls=true;
				}
				if(jj==2)
				{
					vdp.controls=false;
					jj=0;
				}
			})
})
