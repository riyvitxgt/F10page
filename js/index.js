var stockName;
var stockCode;
var InnerCode;
$(function() {
    $("#InnerCode").html(1752);
    $('#mainTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $("#search").click(function () {
        getSecBean();
        $("#page1").attr("aria-expanded","true");
        $("#page2").attr("aria-expanded","false");
        $("#page3").attr("aria-expanded","false");
        $("#page4").attr("aria-expanded","false");
        $("#page5").attr("aria-expanded","false");
        $("#page6").attr("aria-expanded","false");
        $("#page7").attr("aria-expanded","false");
        $("#page8").attr("aria-expanded","false");
        $("#page9").attr("aria-expanded","false");
        $("#page10").attr("aria-expanded","false");
        $("#page11").attr("aria-expanded","false");
        $("#page12").attr("aria-expanded","false");
        $("#page13").attr("aria-expanded","false");
        $("#page14").attr("aria-expanded","false");
        $("#li1").attr("class","active");
        $("#li2").attr("class","");
        $("#li3").attr("class","");
        $("#li4").attr("class","");
        $("#li5").attr("class","");
        $("#li6").attr("class","");
        $("#li7").attr("class","");
        $("#li8").attr("class","");
        $("#li9").attr("class","");
        $("#li10").attr("class","");
        $("#li11").attr("class","");
        $("#li12").attr("class","");
        $("#li13").attr("class","");
        $("#li14").attr("class","");
    });
});

function getSecBean(){
    $.ajax({
        type: "POST",
        dataType :"json",
        url	: "sec_getSecBean.do",
        cache:false,
        data: {
            "SecuCode"     : $("#name").val(),
            "SecuAbbr"     : $("#name").val()
        },
        success: function(result){
            stockName=result.SecuAbbr;
            stockCode=result.SecuCode;
            InnerCode=result.InnerCode;
            $("#stockName").html(stockName);
            $("#stockCode").html(stockCode);
            $("#InnerCode").html(InnerCode);
        }
    });
}