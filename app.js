([
  function (e,t,n){
    "use strict";

    function o(e,t,n,o){
      
//       эту функцию
      function c(e){
        var t=e.getBoundingClientRect();
        return{
          left:t.left+document.body.scrollLeft,top:t.top+document.body.scrollTop
        }}
        var r=-e.clientHeight;
        if(c(e).top<=0&&c(e).top>=r)for(var l=function(e,n){
          setTimeout((
            function(){t[e].classList.add("active")}
          ),n)
        },
      i=0,a=o;t.length>i;i++,a+=n)l(i,a);else for(var u=function(e){
        setTimeout((function(){
          t[e].classList.remove("active")
        }),1)
      },
      s=0;t.length>s;s++)u(s)
    }
    function c(){document.querySelectorAll(".ciclegraph").forEach((function(e){for(var t=e.querySelectorAll(".circle"),n=270,o=360/t.length,c=0;c<t.length;++c){n+=o,t[c].style.transform="rotate(".concat(n,"deg) translate(calc(570*.007rem / 2)) rotate(-").concat(n,"deg)")}}));
      var e=document.querySelectorAll(".package__text"),t=document.querySelector(".package"),
      n=document.getElementById("back__serv");
      n.classList.add("active"),
      window.addEventListener("scroll",(function(){
        var c=scrollY+n.clientHeight,r=$(window).height()+n.clientHeight;
        o(t,e,100,300),
        c<=n.offsetTop+n.clientHeight&&n.offsetTop<r?n.classList.add("active"):n.classList.remove("active")
      }))
    }n.r(t),
    n.d(t,"check",(function(){return o})),
    n.d(t,"default",(function(){return c}))
  },
  function d(e,t,n){
    "use strict";n.r(t),
    n.d(t,"default",(function(){
      return c
    }));
    var o=n(0);
    function c(){
      $(".single-item").slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:!1,
        infinite:!0,
        speed:1e3,
        fade:!0,
        prevArrow:$(".btn--prev"),
        nextArrow:$(".btn--next")}),
        $("#prob").slick({
          dots:!0,
          infinite:!1,
          speed:1e3,
          fade:!1,
          prevArrow:$("#hover1"),
          nextArrow:$("#hover2")
        });
      var e=document.querySelectorAll(".whywe__item"),
      t=e.length;
      setInterval(function(){
        for(var n=function(n,o){
          setTimeout((
            function(){
              e[n].classList.add("active"),
              e[(n+t-1)%t].classList.remove("active")
            }
          ),o)},o=0,c=0;e.length>o;o++,c+=3e3)
          n(o,c)
      }(),12e3),
      window.addEventListener("scroll", (function(){
// вызывают тут
        Object(o.check)(
          document.querySelector(".stories"),
          document.querySelectorAll(".stories__item__img"),
          1e3,
          0
        )
      }))
    }
  },
]);''
