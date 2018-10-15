$(function(){
	$(".footer21 span").click(function(){
		var text=$(this).children()[0].innerHTML;
		// console.log($(this).children()[0].innerHTML);
		if(text=="&nbsp;北京区县新楼盘&nbsp;"){
			$(".footer22").load("pages/1.html");
		}else if(text=="&nbsp;推荐城市新房网&nbsp;"){
			$(".footer22").load("pages/2.html");
		}else if(text=="&nbsp;推荐城市新楼盘&nbsp;"){
			$(".footer22").load("pages/3.html");
		}else if(text=="&nbsp;热门城市新房网&nbsp;"){
			$(".footer22").load("pages/4.html");
		}
	});
	// 默认点击首页
	$(".footer21 span:first").trigger('click');

});