$(document).ready(function(){
    $(".icon-soc").click(function(){
        $(".danh-muc").slideToggle(450);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $(".scroll-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 700);
     });

    var stt=0;
    endImg=$(".slide img:last").attr("stt");//lay stt anh cuoi 
    //duyet tất cả các ảnh
    $(".slide img ").each(function(){  
        if($(this).is(":visible"))//nêu la các ảnh đang hiện
            stt=$(this).attr("stt");
    });
    $("#Next").click(function(){
        if(stt==endImg)
        {
            stt=-1; //thi stt =0 nhung phai tru 1
        }
        next=++stt;
        $(".slide img").fadeOut(900);
        $(".slide img").eq(next).fadeIn(900);//eq chi số
        
    });
    $("#back").click(function(){
        if(stt== 0)
        {
            stt=endImg;
            back=stt++;  
           
        }
        back=--stt;
        $(".slide img").fadeOut(900);
        $(".slide img").eq(back).fadeIn(900);
    });
    setInterval(function(){
        $("#Next").click();

    },4000);
    // end slishow1
    
    $("#btn-open").click(function(){

        $("#id01").css({"display":"block"});
    })
    $("#btn-close").click(function(){

        $("#id01").css({"display":"none"});
    })
    $("#btn-cance").click(function(){

        $("#id01").css({"display":"none"});
    })
   // end form-login
});