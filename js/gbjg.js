
$(function() {
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $("#tab1").click(function(){
        var t = $('#jjsjbH').offset().top;
        $(window).scrollTop(t);
    });
    $("#tab2").click(function(){
        var t = $('#zgbgcH').offset().top;
        $(window).scrollTop(t);
    });
    $("#tab3").click(function(){
        var t = $('#lcgbbdH').offset().top;
        $(window).scrollTop(t);
    });
    $("#tab4").click(function(){
        var t = $('#AgjgtH').offset().top;
        $(window).scrollTop(t);
    });


});

function getRootPath(){
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}

function querygbjgData(){
    var InnerCode=$("#InnerCode").html();
    $.ajax({
        type: "POST",
        dataType :"json",
        url	: getRootPath() + "/json/gbjg-"+InnerCode+".json",
        cache:false,
        data: {},
        success: function(result){
            var dataHtml1 = '';
            var jjsjb=result.jjsjb;
            $.each(jjsjb,function(){
                dataHtml1+='<tr>';
                dataHtml1+='<td>'+this.kltsj+'</td>';
                dataHtml1+='<td>'+this.zgb+'</td>';
                dataHtml1+='<td>'+this.bqjjbl+'</td>';
                dataHtml1+='<td>'+this.ltgflx+'</td>';
                dataHtml1+='</tr>';
            })
            $("#jjsjb tbody").children().remove();
            $("#jjsjb tbody").append(dataHtml1);

            var dataHtml2 = '';
            var zgbgc=result.zgbgc;
            $.each(zgbgc,function(){
                dataHtml2+='<tr>';
                dataHtml2+='<td>'+this.EndDate+'</td>';
                dataHtml2+='<td>'+this.TotalShares+'</td>';
                dataHtml2+='<td>'+this.AFloats+'</td>';
                dataHtml2+='<td>'+this.NonRestrictedShares+'</td>';
                dataHtml2+='<td>'+this.RestrictedAShares+'</td>';
                dataHtml2+='<td>'+this.Bshares+'</td>';
                dataHtml2+='<td>'+this.RestrictedBFloatShares+'</td>';
                dataHtml2+='<td>'+this.Hshares+'</td>';
                dataHtml2+='<td>'+this.OtherFloatShares+'</td>';
                dataHtml2+='<td>'+this.ChangeReason+'</td>';
                dataHtml2+='</tr>';
            })
            $("#zgbgc tbody").children().remove();
            $("#zgbgc tbody").append(dataHtml2);

            var dataHtml3 = '';
            var lcgbbd=result.lcgbbd;
            $.each(lcgbbd,function(){
                dataHtml3+='<tr>';
                dataHtml3+='<td>'+this.EndDate+'</td>';
                dataHtml3+='<td>'+this.ChangeReason+'</td>';
                dataHtml3+='<td>'+this.AFloats+'</td>';
                dataHtml3+='<td>'+this.NonRestrictedShares+'</td>';
                dataHtml3+='<td>'+this.RestrictedAShares+'</td>';
                dataHtml3+='</tr>';
            })
            $("#lcgbbd tbody").children().remove();
            $("#lcgbbd tbody").append(dataHtml3);

            var Agjgt=result.zgbgc;
            $("#Agzgb").html(Agjgt[0].AFloats);
            $("#ltAg").html(Agjgt[0].NonRestrictedShares);
            $("#xsAg").html(Agjgt[0].RestrictedAShares);
            $("#xsAg2").html(Agjgt[0].RestrictedAShares);
            $("#gyfr").html(Agjgt[0].SLegalPersonHolding );
            $("#jnzrr").html(Agjgt[0].jnzrrcg);
            $("#gg").html(Agjgt[0].ManagementShares );
            $("#jwfr").html(Agjgt[0].FLegalPersonHolding);

            var AFloats;
            var NonRestrictedShares;
            var RestrictedAShares;
            var SLegalPersonHolding;
            var jnzrrcg;
            var ManagementShares;
            var FLegalPersonHolding;

            if(Agjgt[0].AFloats=="--"){
                AFloats=0;
            }else{
                AFloats=parseInt(Agjgt[0].AFloats);
            }
            if(Agjgt[0].NonRestrictedShares=="--"){
                NonRestrictedShares=0;
            }else{
                NonRestrictedShares=parseInt(Agjgt[0].NonRestrictedShares);
            }
            if(Agjgt[0].RestrictedAShares=="--"){
                RestrictedAShares=0;
            }else{
                RestrictedAShares=parseInt(Agjgt[0].RestrictedAShares);
            }
            if(Agjgt[0].SLegalPersonHolding=="--"){
                SLegalPersonHolding=0;
            }else{
                SLegalPersonHolding=parseInt(Agjgt[0].SLegalPersonHolding);
            }
            if(Agjgt[0].jnzrrcg=="--"){
                jnzrrcg=0;
            }else{
                jnzrrcg=parseInt(Agjgt[0].jnzrrcg);
            }
            if(Agjgt[0].ManagementShares=="--"){
                ManagementShares=0;
            }else{
                ManagementShares=parseInt(Agjgt[0].ManagementShares);
            }
            if(Agjgt[0].FLegalPersonHolding=="--"){
                FLegalPersonHolding=0;
            }else{
                FLegalPersonHolding=parseInt(Agjgt[0].FLegalPersonHolding);
            }

            $('#container').highcharts({
                chart: {
                    type: 'pie',
                    height: 350,
                    width: 350,
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'A股总股本结构图'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 25,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '比例',
                    data: [
                        {
                            name: '流通A股',
                            y: NonRestrictedShares,
                            sliced: true,
                            selected: true
                        },
                        ['限售A股',RestrictedAShares]
                    ]
                }]
            });
            if(!(jnzrrcg==0&&SLegalPersonHolding==0&&ManagementShares==0&&FLegalPersonHolding==0)){
                $('#container2').highcharts({
                    chart: {
                        type: 'pie',
                        height: 350,
                        width: 350,
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: '限售A股结构图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 25,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '比例',
                        data: [
                            {
                                name: '境内自然人持股',
                                y: jnzrrcg,
                                sliced: true,
                                selected: true
                            },
                            ['国有法人持股', SLegalPersonHolding],
                            ['高管股', ManagementShares],
                            ['境外法人持股', FLegalPersonHolding]
                        ]
                    }]
                });
            }else{
                $('#container2').highcharts({
                    chart: {
                        type: 'pie',
                        height: 350,
                        width: 350,
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: '限售A股结构图'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 25,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '比例',
                        data: [
                            {
                                name: '限售A股',
                                y: 1,
                                sliced: true,
                                selected: true
                            }
                        ]
                    }]
                });
            }
        }

    });
}
