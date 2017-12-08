// JavaScript Document
// echarts
// create for AgnesXu at 20161115


//折线图
var line = echarts.init(document.getElementById('line_1'));
line.setOption({
    color:["#32d2c9"],
    title: {
        x: 'left',
        text: '消费统计',
        textStyle: {
            fontSize: '18',
            color: '#4c4c4c',
            fontWeight: 'bolder'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日','周八'],
        axisLabel: {
            interval:0
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'消费',
            type:'line',
            data:[23, 42, 18, 45, 48, 49,100,120],
            markLine: {data: [{type: 'average', name: '平均消费'}]}
        }
    ]
}) ;



//柱状图
var pillar1 = echarts.init(document.getElementById('pillar1'));
pillar1.setOption({
    color:["#ce6e73","#ee804b","#ffc668"],
    title : {
        subtext: '平均分（分）'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        x: 'right',
        data:['您的班级','全市','全国']
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['语言','词汇','词汇1','词汇2','词汇3','词汇4',
            '词汇5','词汇6','词汇7','词汇8','词汇9','词汇10']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'您的班级',
            type:'bar',
            data:[74, 62, 56, 79, 80, 30, 55, 35, 38, 41, 75, 89]
        },
        {
            name:'全市',
            type:'bar',
            data:[70, 65, 80, 71, 70, 40, 35, 46, 58, 40, 56, 30]
        },
        {
            name:'全国',
            type:'bar',
            data:[60, 55, 70, 61, 60, 30, 45, 36, 48, 50, 56, 40]
        }
    ]
}) ;



//柱状图2
var pillar2 = echarts.init(document.getElementById('pillar2'));
pillar2.setOption({
    color:["#00afff"],
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['语言','词汇','词汇1','词汇2','词汇3','词汇4',
            '词汇5','词汇6','词汇7']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'您的班级',
            type:'bar',
            data:[74, 62, 56, 79, 80, 30, 55, 35, 38]
        }
    ]
});
