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
});
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
function drawColumn(){
    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '\t',
        parsed: function (columns) {

            var brands = {},
                brandsData = [],
                versions = {},
                drilldownSeries = [];

            // Parse percentage strings
            columns[1] = $.map(columns[1], function (value) {
                if (value.indexOf('%') === value.length - 1) {
                    value = parseFloat(value);
                }
                return value;
            });

            $.each(columns[0], function (i, name) {
                var brand,
                    version;

                if (i > 0) {

                    // Remove special edition notes
                    name = name.split(' -')[0];

                    // Split into brand and version
                    version = name.match(/([0-9]+[\.0-9x]*)/);
                    if (version) {
                        version = version[0];
                    }
                    brand = name.replace(version, '');

                    // Create the main data
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }

                    // Create the version data
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push(['v' + version, columns[1][i]]);
                    }
                }

            });

            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });

            // Create the chart
            $('#fieldsChart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Browser market shares. November, 2013'
                },
                subtitle: {
                    text: 'Click the columns to view versions. Source: netmarketshare.com.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
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
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }
    });
}