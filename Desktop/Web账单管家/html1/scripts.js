(function(){
	
	//获取用户基本信息
	var img_path="images\head1.jpg";
	var ID="031502126";
	var name="林123雄";
	$("#user-name p").html(ID);
	$("#user-name span").html(name);
	$("#head_button").click(function(){
		$("#input_get").val();
		$("#input_out").val();
		$("#add_put").val();
		alert("添加成功");
		$("#input_get").val('');
		$("#input_out").val('');
		})
	//今日活动
	var Time="5分钟前";
	var CASE="阿林转账10元";		
		var string1="<div class=\"sl-item sl-primary\"><div class=\"sl-content\"><small class=\"text-muted\">\""
		+Time
		+
		"</small><p>"
		+
		CASE
		+
		"</p></div></div>";
		
		$(".streamline").append("<div class=\"sl-item sl-primary\"><div class=\"sl-content\"><small class=\"text-muted\">5 mins ago</small><p>阿林转账:收入5.50元</p></div></div>");
		
    "use strict";
    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#1b93e1", cursorwidth: '6', cursorborderradius: '10px', background: '#FFFFFF', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});
    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"#1b93e1", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#FFFFFF', spacebarenabled:false, cursorborder: '0'});
    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

})(jQuery);

                     
     
  