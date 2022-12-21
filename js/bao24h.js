var kichthuoc=document.getElementsByClassName("box")[0].clientWidth;
var chuyenslide=document.getElementsByClassName("chuyen-slide2")[0];
var Box=chuyenslide.getElementsByClassName("box");
var max=kichthuoc*Box.length;
max-=kichthuoc;
var chuyen=0;
function Next1(){
    if(chuyen<max)
    chuyen+=kichthuoc;
    else
    chuyen=0;

    chuyenslide.style.marginLeft ='-'+chuyen+'px';//-chuỗi

}
function back1(){
    if(chuyen==0)
    chuyen=max;
    else
    chuyen-=kichthuoc;

    chuyenslide.style.marginLeft ='-'+chuyen+'px';

}
setInterval(function(){
    Next1();

},7000);




