/**
 * Created by King on 2015/3/21.
 */
/*模拟数据*/
var data = [
    ['Firefox',   45.0],
    ['IE',       26.8],
    ['Safari',    8.5],
    ['Opera',     6.2],
    ['Others',   0.7]
];

var data2 = [
    ['Firefox_2',   45.0],
    ['IE_2',       26.8],
    ['Safari_2',    8.5],
    ['Opera_2',     6.2],
    ['Others_2',   0.7]
];

var data3 = [
    ['Firefox_3',   45.0],
    ['IE_3',       26.8],
    ['Safari_3',    8.5],
    ['Opera_3',     6.2],
    ['Others_3',   0.7]
];
/*模拟数据结束*/
$(function () {

    $("#myTab a").click(function(){
       var tabNow = ($(this).attr('name'));
        var t = $(tabNow).offset().top;
        $(window).scrollTop(t);
    });

    var drawData = getDate();
    drawPieCharts(drawData);

    /*点击时改变按钮的class，从而改变它的背景色*/
    $("[role='presentation']").click(function(){
       $(this).parent().find("[role='presentation']").removeClass("btn-select");
        $(this).addClass("btn-select");
    });


    /*点击按钮重新获取数据生成饼图*/
    $("#chartContent ul li[role='presentation']").click(function(){
        drawPieCharts(getDate());
    });

    /*时期改变时重新获取数据生成饼图*/
    $("#dataSelect").change(function(){
        drawPieCharts(getDate());
    });
});

/*通过当选点中的按钮和日期去获取数据*/
function getDate(){
    var navString = $("#chartContent .btn-select a").text();
    var dataSel = $("#dataSelect option:selected").val();

    var drawData;
    switch (dataSel){
        case "1" :
            drawData = data;
            break;
        case "2" :
            drawData = data2;
            break;
        case "3" :
            drawData = data3;
            break;
        default :
            drawData = data;
    }
    return drawData;
}


/*通过给定的数据去生成饼图*/
function drawPieCharts(data){
    var chartTds = $('.chart_line td');
    var title1 = "按行业";
    var title2 = "按产品";
    var title3 = "按地区";
    for(var now = 0; now < chartTds.length; now++){
        $(chartTds[now]).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: now == 0 ? title1 : (now == 1 ? title2 : title3)
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: data
            }],
            credits:{
                enabled: false
            }
        });
    }
}

