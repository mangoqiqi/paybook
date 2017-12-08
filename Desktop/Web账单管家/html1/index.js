(function(){
			/*圆饼图选择框*/
			var sel_year=document.getElementById("SelectYear1"); 
			var sel_month=document.getElementById("SelectMonth1");
			var today=new Date();
			var toyear=today.getFullYear();
			var tomonth=today.getMonth()+1;
			//年
			var string1='';
			for(var i=0;i<7;i++)
			{
				string1+="<option>"+(toyear-i)+"</option>"
			}
			$("#SelectYear1").html(string1);			
			//月	
			var string1='';
			for(var i=tomonth;i>0;i--)
			{
				string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth1").html(string1);
								
			$("#SelectYear1").change(function(){
				
			var selyear=sel_year.options[sel_year.selectedIndex].value;
			alert(selyear);
			if(selyear!=toyear)
			{
			var string1='';
			for(var i=13;i>0;i++)
			{
				string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth1").html(string1);
			}
			else
			{
			var string1='';
			for(var i=tomonth;i>0;i--)
			{
			string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth1").html(string1);
			}
			});
			//日
			var string1='';
			for(var i=today.getDate();i>0;i--)
			{
			string1+="<option>"+i+"</option>"
			}
			$("#SelectDay1").html(string1);
			$("#SelectMonth1").change(function(){
				
				
			var selmonth=sel_month.options[sel_month.selectedIndex].value;
			var selyear=sel_year.options[sel_year.selectedIndex].value;
			if(selmonth!=tomonth||selyear!=toyear)
			{
				var string1="";
				var d= new Date(selyear,parseInt(selmonth,10),0);
				var string1="";
				for(var i=d.getDate();i>0;i--)
				{
					string1+="<option>"+i+"</option>"
				}
				$("#SelectDay1").html(string1);
			}
			else
			{
				var string1='';
				for(var i=today.getDate();i>0;i--)
				{
					string1+="<option>"+i+"</option>"
				}
				$("#SelectDay1").html(string1);
			}					
	})
	
	
			/*折线图*/
			var sel_year=document.getElementById("SelectYear2"); 
			var sel_month=document.getElementById("SelectMonth2");
			var today=new Date();
			var toyear=today.getFullYear();
			var tomonth=today.getMonth()+1;
			//年
			var string1='';
			for(var i=0;i<7;i++)
			{
				string1+="<option>"+(toyear-i)+"</option>"
			}
			$("#SelectYear2").html(string1);			
			//月	
			var string1='';
			for(var i=tomonth;i>0;i--)
			{
				string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth2").html(string1);
								
			$("#SelectYear2").change(function(){
				
			var selyear=sel_year.options[sel_year.selectedIndex].value;
			if(selyear!=toyear)
			{
			var string1='';
			for(var i=13;i>0;i++)
			{
				string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth2").html(string1);
			}
			else
			{
			var string1='';
			for(var i=tomonth;i>0;i--)
			{
			string1+="<option>"+i+"</option>"
			}
			$("#SelectMonth2").html(string1);
			}
			});
			//日
			var string1='';
			for(var i=today.getDate();i>0;i--)
			{
			string1+="<option>"+i+"</option>"
			}
			$("#SelectDay2").html(string1);
			$("#SelectMonth2").change(function(){
				
				
			var selmonth=sel_month.options[sel_month.selectedIndex].value;
			var selyear=sel_year.options[sel_year.selectedIndex].value;
			if(selmonth!=tomonth||selyear!=toyear)
			{
				var string1="";
				var d= new Date(selyear,parseInt(selmonth,10),0);
				var string1="";
				for(var i=d.getDate();i>0;i--)
				{
					string1+="<option>"+i+"</option>"
				}
				$("#SelectDay2").html(string1);
			}
			else
			{
				var string1='';
				for(var i=today.getDate();i>0;i--)
				{
					string1+="<option>"+i+"</option>"
				}
				$("#SelectDay2").html(string1);
			}					
	})
	/*IOSbutton*/	
	
	if(today>0&&today<3)
	{
		$("#uiswitch").hover(function(){
			$(this).css("cursor",'not-allowed');
		})
		$("#IOSbutton").attr("href","IOSbutton_1.css"); 
		$("#uiswitch").click(function(){alert("只能在每月的1号~2号才能修改")})
		
		
		$(".input__field--hoshi").hover(function(){
			$(this).css("cursor",'not-allowed');
		})
		$(".input__field--hoshi").attr('disabled','disabled');
		
	}
	else
	{
		$("#uiswitch").attr('checked',true);
	}
	
	/*plan*/
	$("#uiswitch").change(function(){
		if(!$("#uiswitch").is(':checked'))
		{
			$(".input__field--hoshi").hover(function(){
				$(this).css("cursor",'not-allowed');
			})
			$(".input__field--hoshi").attr('disabled','disabled');
		}
		else
		{
			$(".input__field--hoshi").removeAttr('disabled');
			$(".input__field--hoshi").hover(function(){
				$(this).css("cursor",'default');
			})
			
		}
		
		
	});



})(jQuery);
					