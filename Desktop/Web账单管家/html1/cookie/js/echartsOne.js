	
	var myChart;
	function echartStr(names,brower){
		// 基于准备好的dom，初始化echarts实例
		if (myChart != null && myChart != "" && myChart != undefined) {  
	        myChart.dispose();  
	    } 
	    myChart = echarts.init(document.getElementById('main'));
	    // 指定图表的配置项和数据
	    var option = {
		    title : {
		        text: '',
		        subtext: '',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: names
		    },
			color:['#FFDEAD', '#FF7F50','#CDC9A5','#96CDCD','#D1EEEE','#CD6889','#8FBC8F','#F0E68C'],
		    series : [
		        {
		            name:"支付宝" ,
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data: brower,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            },
		            label: {
	                normal: {
	                    show: false,
	                }
	            },
		        }
		    ]
		};
	
	    // 使用刚指定的配置项和数据显示图表。
	    myChart.setOption(option);
	};
	
	//缺陷分类
	function qxfl(that){
		var chose_data;
		var brower = [],
			names = [];
		var index = $(that).data('index');
		$.ajax({
	        type: 'get',
	        url: 'cookie/js/echartOne.json',//请求数据的地址
	        dataType: "json",        //返回数据形式为json
	        success: function (result) {
	            //请求成功时执行该函数内容，result即为服务器返回的json对象
	            //'result.list' + index 请求json的其中一个
	            //eval() 将对应的字符串解析成JS代码并运行
				    names.push("转账");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"转账" ,
	                    value:180,
	                });
	                names.push("餐饮");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"餐饮" ,
	                    value:180,
	                });
	           		     
					names.push("生活用品");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"生活用品" ,
	                    value: 10,
	                });    
					
					names.push("交通");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"交通" ,
	                    value: 13,
	                });  
					   
					names.push("生活缴费");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"生活缴费" ,
	                    value: 140,
	                });     
					names.push("娱乐消费");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"娱乐消费",
	                    value: 0,
	                });     
					names.push("学习教育");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"学习教育" ,
	                    value:15 ,
	                });     
					names.push("其他");    //挨个取出类别并填入类别数组 
	                brower.push({
	                    name:"其他" ,
	                    value:560 ,
	                });    
	               
	            echartStr(names,brower);
	        }
	    });
	}