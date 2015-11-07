$(function(){
    $("#coupon a").on("click",function(event){
        $.getJSON("http://www.xlj.com/active/active1111.php?act=getCoupon&callback=?",{"bonusTypeId":$(this).attr("tabindex")},function(data){
            if(data.data.status == 1){
                location.href = "http://account.xlj.com/passport.php?act=serviceLogin&callback="+encodeURIComponent(location.href);
            } else {
                $("#dialog>p").html(data.data.content);
                $("#dialog").dialog({
                    modal: true,
                    buttons: {
                        "正确": function() {
                            $( this ).dialog( "close" );
                        }
                    }
                });
            }
        });
    });
});
