/**
 * Created by zhukm on 2015/3/25.
 */

var dataObj = {
    code:'600570',
        jc:'hs',
    pm:1,
    mgsy:3,
    mgjzc:8,
    mgxjl:3,
    jll:1.2,
    yysl:4,
    zzc:8,
    jzcsyl:2,
    gdqybl:3,
    xsmll:5,
    zgb:4
}

var dataArr = [dataObj,dataObj,dataObj,dataObj,dataObj];

$(function(){
    //drawColumn();
    $(".hide-toggle").click(function(){
        var div = $(this).attr('id');
        if($(this).hasClass("glyphicon-plus")){
            $(this).removeClass('glyphicon-plus').addClass('glyphicon-minus');
            $("#" + div + "_div").show();
            var tbody = $("#" + div + "_table tbody");
            drawTable(dataArr, tbody);
        }else{
            $(this).removeClass('glyphicon-minus').addClass('glyphicon-plus');
            $("#" + div + "_div").hide();
        }
    });



    var q = {
        "SecondIndustry": [{
            "ARTRate": 1.6104,
            "NPParentCompanyYOY": 18.1843,
            "ROE": -7.2786,
            "basicEPS": -0.162,
            "companyCode": "1082",
            "currentRatio": 1.324366,
            "debtEquityRatio": "104.188489",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 3.810515,
            "innerCode": "1194",
            "inventoryTRate": 1.0935,
            "name": "*ST 钢构",
            "netAssetPS": 2.2273,
            "netProfitRatio": -12.089242,
            "operProfitGrowRate": 12.9889,
            "quickRatio": 0.687043,
            "secuCode": "600072"
        }, {
            "ARTRate": 9.1697,
            "NPParentCompanyYOY": 922.812,
            "ROE": 0.794,
            "basicEPS": 0.101,
            "companyCode": "1153",
            "currentRatio": 1.519697,
            "debtEquityRatio": "198.279866",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 7.655942,
            "innerCode": "1271",
            "inventoryTRate": 1.7762,
            "name": "中国船舶",
            "netAssetPS": 12.6808,
            "netProfitRatio": 0.217881,
            "operProfitGrowRate": 96.85,
            "quickRatio": 1.006403,
            "secuCode": "600150"
        }, {
            "ARTRate": 8.2875,
            "NPParentCompanyYOY": -742.1445,
            "ROE": -12.7169,
            "basicEPS": -0.6507,
            "companyCode": "1618",
            "currentRatio": 1.040123,
            "debtEquityRatio": "329.054295",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": -1.712938,
            "innerCode": "1905",
            "inventoryTRate": 1.8895,
            "name": "广船国际",
            "netAssetPS": 4.6895,
            "netProfitRatio": -10.076877,
            "operProfitGrowRate": -99.6489,
            "quickRatio": 0.729468,
            "secuCode": "600685"
        }, {
            "ARTRate": 1.8093,
            "NPParentCompanyYOY": -21.3147,
            "ROE": 3.8743,
            "basicEPS": 0.13,
            "companyCode": "76799",
            "currentRatio": 1.505711,
            "debtEquityRatio": "266.357796",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 13.889302,
            "innerCode": "9023",
            "inventoryTRate": 0.9695,
            "name": "中国重工",
            "netAssetPS": 3.2182,
            "netProfitRatio": 5.19284,
            "operProfitGrowRate": -22.531,
            "quickRatio": 1.140815,
            "secuCode": "601989"
        }, {
            "ARTRate": 5.3679,
            "NPParentCompanyYOY": 279.1019,
            "ROE": 4.2553,
            "basicEPS": 0.148,
            "companyCode": "77258",
            "currentRatio": 2.056841,
            "debtEquityRatio": "37.947237",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 20.414582,
            "innerCode": "9312",
            "inventoryTRate": 2.6185,
            "name": "上海佳豪",
            "netAssetPS": 3.2641,
            "netProfitRatio": 6.798915,
            "operProfitGrowRate": 467.9065,
            "quickRatio": 1.327103,
            "secuCode": "300008"
        }, {
            "ARTRate": 1.8054,
            "NPParentCompanyYOY": -47.0342,
            "ROE": 2.4718,
            "basicEPS": 0.08,
            "companyCode": "80353",
            "currentRatio": 1.476251,
            "debtEquityRatio": "54.194949",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 31.052521,
            "innerCode": "11434",
            "inventoryTRate": 0.5931,
            "name": "太 阳 鸟",
            "netAssetPS": 3.2353,
            "netProfitRatio": 8.903668,
            "operProfitGrowRate": -71.103,
            "quickRatio": 0.869866,
            "secuCode": "300123"
        }, {
            "ARTRate": 2.8153,
            "NPParentCompanyYOY": 90.6189,
            "ROE": 2.8685,
            "basicEPS": 0.17,
            "companyCode": "81900",
            "currentRatio": 4.824314,
            "debtEquityRatio": "27.942214",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 24.704487,
            "innerCode": "12173",
            "inventoryTRate": 1.5059,
            "name": "亚星锚链",
            "netAssetPS": 6.0478,
            "netProfitRatio": 6.758158,
            "operProfitGrowRate": 100.967,
            "quickRatio": 3.785052,
            "secuCode": "601890"
        }, {
            "ARTRate": 9.1686,
            "NPParentCompanyYOY": -59.1964,
            "ROE": 1.9306,
            "basicEPS": 0.11,
            "companyCode": "156279",
            "currentRatio": 1.491585,
            "debtEquityRatio": "345.654668",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 8.405318,
            "innerCode": "13937",
            "inventoryTRate": 1.2617,
            "name": "舜天船舶",
            "netAssetPS": 5.7594,
            "netProfitRatio": 1.390554,
            "operProfitGrowRate": -74.2821,
            "quickRatio": 1.014098,
            "secuCode": "002608"
        }],
        "ThirdIndustry": [{
            "ARTRate": 1.6104,
            "NPParentCompanyYOY": 18.1843,
            "ROE": -7.2786,
            "basicEPS": -0.162,
            "companyCode": "1082",
            "currentRatio": 1.324366,
            "debtEquityRatio": "104.188489",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 3.810515,
            "innerCode": "1194",
            "inventoryTRate": 1.0935,
            "name": "*ST 钢构",
            "netAssetPS": 2.2273,
            "netProfitRatio": -12.089242,
            "operProfitGrowRate": 12.9889,
            "quickRatio": 0.687043,
            "secuCode": "600072"
        }, {
            "ARTRate": 9.1697,
            "NPParentCompanyYOY": 922.812,
            "ROE": 0.794,
            "basicEPS": 0.101,
            "companyCode": "1153",
            "currentRatio": 1.519697,
            "debtEquityRatio": "198.279866",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 7.655942,
            "innerCode": "1271",
            "inventoryTRate": 1.7762,
            "name": "中国船舶",
            "netAssetPS": 12.6808,
            "netProfitRatio": 0.217881,
            "operProfitGrowRate": 96.85,
            "quickRatio": 1.006403,
            "secuCode": "600150"
        }, {
            "ARTRate": 8.2875,
            "NPParentCompanyYOY": -742.1445,
            "ROE": -12.7169,
            "basicEPS": -0.6507,
            "companyCode": "1618",
            "currentRatio": 1.040123,
            "debtEquityRatio": "329.054295",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": -1.712938,
            "innerCode": "1905",
            "inventoryTRate": 1.8895,
            "name": "广船国际",
            "netAssetPS": 4.6895,
            "netProfitRatio": -10.076877,
            "operProfitGrowRate": -99.6489,
            "quickRatio": 0.729468,
            "secuCode": "600685"
        }, {
            "ARTRate": 1.8093,
            "NPParentCompanyYOY": -21.3147,
            "ROE": 3.8743,
            "basicEPS": 0.13,
            "companyCode": "76799",
            "currentRatio": 1.505711,
            "debtEquityRatio": "266.357796",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 13.889302,
            "innerCode": "9023",
            "inventoryTRate": 0.9695,
            "name": "中国重工",
            "netAssetPS": 3.2182,
            "netProfitRatio": 5.19284,
            "operProfitGrowRate": -22.531,
            "quickRatio": 1.140815,
            "secuCode": "601989"
        }, {
            "ARTRate": 5.3679,
            "NPParentCompanyYOY": 279.1019,
            "ROE": 4.2553,
            "basicEPS": 0.148,
            "companyCode": "77258",
            "currentRatio": 2.056841,
            "debtEquityRatio": "37.947237",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 20.414582,
            "innerCode": "9312",
            "inventoryTRate": 2.6185,
            "name": "上海佳豪",
            "netAssetPS": 3.2641,
            "netProfitRatio": 6.798915,
            "operProfitGrowRate": 467.9065,
            "quickRatio": 1.327103,
            "secuCode": "300008"
        }, {
            "ARTRate": 1.8054,
            "NPParentCompanyYOY": -47.0342,
            "ROE": 2.4718,
            "basicEPS": 0.08,
            "companyCode": "80353",
            "currentRatio": 1.476251,
            "debtEquityRatio": "54.194949",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 31.052521,
            "innerCode": "11434",
            "inventoryTRate": 0.5931,
            "name": "太 阳 鸟",
            "netAssetPS": 3.2353,
            "netProfitRatio": 8.903668,
            "operProfitGrowRate": -71.103,
            "quickRatio": 0.869866,
            "secuCode": "300123"
        }, {
            "ARTRate": 2.8153,
            "NPParentCompanyYOY": 90.6189,
            "ROE": 2.8685,
            "basicEPS": 0.17,
            "companyCode": "81900",
            "currentRatio": 4.824314,
            "debtEquityRatio": "27.942214",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 24.704487,
            "innerCode": "12173",
            "inventoryTRate": 1.5059,
            "name": "亚星锚链",
            "netAssetPS": 6.0478,
            "netProfitRatio": 6.758158,
            "operProfitGrowRate": 100.967,
            "quickRatio": 3.785052,
            "secuCode": "601890"
        }, {
            "ARTRate": 9.1686,
            "NPParentCompanyYOY": -59.1964,
            "ROE": 1.9306,
            "basicEPS": 0.11,
            "companyCode": "156279",
            "currentRatio": 1.491585,
            "debtEquityRatio": "345.654668",
            "endDate": "2014-09-30 00:00:00.0",
            "grossIncomeRatio": 8.405318,
            "innerCode": "13937",
            "inventoryTRate": 1.2617,
            "name": "舜天船舶",
            "netAssetPS": 5.7594,
            "netProfitRatio": 1.390554,
            "operProfitGrowRate": -74.2821,
            "quickRatio": 1.014098,
            "secuCode": "002608"
        }]
    };
    var p;

    $(".chart-nav li").click(function(){
        var id = $(this).parent().attr('id');
        $("#" + id + " li").removeClass("active");
        $(this).addClass("active");
        var dataMap;
        var nid = id.replace("_nav","");
        if(nid == 'hy2_chart'){
            p = q.SecondIndustry;
            dataMap = initData(p, nid);
        }else{
            p = q.SecondIndustry;
            dataMap = initData(p, nid);
        }

        drawChart(nid, dataMap);
    });

    $.each($(".chartContent"), function(){
        var id = $(this).attr("id");
        var dataMap;
        if(id == 'hy3_chart'){
            p = q.ThirdIndustry;
            dataMap = initData(p, id);
        }else{
            p = q.SecondIndustry;
            dataMap = initData(p, id);
        }
        drawChart(id , dataMap);
    });



    /*$('#hy3_chart').highcharts({
        title: {
            text: ""
        },
        chart: {
            type: 'column'
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 10
        },
        scrollbar: {
            enabled: true

        },
        yAxis: {
            title: {
                text: "单位{point.unit}"
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '第{point.sort}名'
                }
            }
        },

        tooltip: {
            pointFormat: '<span>本股收益</span>:<br/> <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            data: p
        }],
        credits: {
            enabled: false
        }
    });*/
});

function initData(data, divId){
    var yDesc = $("#" + divId + "_nav .active a").text();
    var yAttr = $("#" + divId + "_nav .active a").attr("name");

    for(var i = 0; i < data.length; i++){
        data[i]["y"] = data[i][yAttr];
    }

    data.sort(function (a, b) {
        return b["y"] - a["y"]
    });

    for (var i = 0; i < data.length; i++) {
        data[i]["sort"] = i + 1;
    }

    var dataMap = {
        "yDesc": yDesc,
        data: data
    }
    if(yAttr == "basicEPS" || yAttr== "netAssetPS"){
        dataMap.unit = "元/股"
    }else if(yAttr == "ARTRate" || yAttr == "inventoryTRate"){
        dataMap.unit = "次";
    }else{
        dataMap.unit = "%";
    }

   return dataMap;
}

function drawTable(dataArr, tbodyObj){
    tbodyObj.empty();
    var tbody = '';
   $.each(dataArr,function(){
        tbody += "<tr>"
        for(var key in this){
            tbody += "<td>" + this[key] +"</td>";
        }
        tbody += "</tr>";
    });
    tbodyObj.append(tbody);
}

/**
 * 画柱状图
 * @param container 画图区域
 * @param dataMap 是一个Json,包含三个属性
 *
 * dataMap{
 *    unit:'xxx',   //计量单位,有三种情况,1:元/股 2:% 3:次
 *    yDesc:'zzz',   //显示属性的中文描述
 *    data:data     //数据
 * }
 *
 */
function drawChart(divId, dataMap) {
    $("#" + divId).empty();
    $("#"+divId).highcharts({
        title: {
            text: ""
        },
        chart: {
            type: 'column'
        },
        xAxis: {
            type: 'category',
            min: 0,
            max: 10
        },
        scrollbar: {
            enabled: true

        },
        yAxis: {
            title: {
                text: "单位:" + dataMap.unit
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '第{point.sort}名'
                }
            }
        },

        tooltip: {
            pointFormat: '<span>'+ dataMap.yDesc + '</span>:<br/> <b>{point.y:.2f}' +dataMap.unit +'</b><br/>'
        },

        series: [{
            data: dataMap.data
        }],
        credits: {
            enabled: false
        }
    });
}

