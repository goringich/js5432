!function(e){var t={};function n(o){
  if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};
  return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}
  n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},
  n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,
    {value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},
  n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),
  2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){
    return e[t]
  }.bind(null,c));return o},
  n.n=function(e){
    var t=e&&e.__esModule?function(){
      return e.default
    }:function(){return e};
    return n.d(t,"a",t),t
  },
  n.o=function(e,t){
    return Object.prototype.hasOwnProperty.call(e,t)
  },n.p="",n(n.s=3)
}



function c(e){
  var t=e.getBoundingClientRect();
  return{
    left:t.left+document.body.scrollLeft,
    top:t.top+document.body.scrollTop
  }
}
function first(e,t,n,o){
  var r=-e.clientHeight;
  if(c(e).top<=0&&c(e).top>=r)for(
    var l=function(e,n){
      setTimeout(() => t[e].classList.add("active"), n)
    },
    i=0, a=o; t.length>i; i++, a+=n
  )
  l(i,a);else for(
    var u=function(e){
      setTimeout(() => t[e].classList.remove("active"), 1)
    },
    s=0;
    t.length>s;
    s++
  )
  u(s)
}




([
  // тут
  function (e,t,n){
    "use strict";
    function o(e,t,n,o){
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
  function(e,t,n){
    "use strict";function o(){
      console.log("Hello world"),document.documentElement.style.height="100vh",
      document.documentElement.style.overflow="hidden",
      document.body.style.height="100%",$(".btn__ok__okey").click((function(e){
        $(e.target).toggleClass("clicked")
      }));
      var e=document.querySelectorAll(".contact__title, .form-init--back, .form-init"),
      t=document.querySelector(".contact__page"),n=t.classList;e.forEach((function(e){
        e.addEventListener("click",(function(){
          n.contains("active")&&!n.contains("notactive")?(n.remove("active"),n.add("notactive")):(n.add("active"),n.remove("notactive"))
        }))
      }))
    }
    n.r(t),
    n.d(t,"default",(function(){
      return o
    }))
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
        Object(o.check)(
          document.querySelector(".stories"),
          document.querySelectorAll(".stories__item__img"),
          1e3,
          0
        );
        o.check(
          document.querySelector(".stories"),
          document.querySelectorAll(".stories__text"),
          1e3,
          500
        )
      }))
    }
  },function(e,t,n){
    n(1),n(4),n(5),n(0),e.exports=n(2)
  },function(e,t){
    function n(e,t,n,o,c){
      for(var r=document.querySelectorAll(t),l=0;l<r.length;l++)
      for(var i=0;i<5;i++){
        var a=document.createElement("li"),
        u=c+document.querySelectorAll("".concat(t," li")).length;
        a.insertAdjacentHTML("afterbegin",'\n        <a href="'.concat(o,'" class="').concat(n,' footer__scroll">').concat(e,'</a>\n        <a href="').concat(o,'" class="').concat(n,'--back footer__scroll">\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <defs>\n                    <pattern id="').concat(u,'" patternUnits="userSpaceOnUse" height="100%" width="100%" >\n                        <image xlink:href="http://hellos/wp-content/uploads/2022/01/Rectangle46.jpg"/> \n                    </pattern> \n                </defs> \n                <text fill="url(#').concat(u,')">\n                  ').concat(e,"\n                </text>\n            </svg>\n        </a>\n      ")),
        r[l].appendChild(a)
      }}
      n("СВЯЗАТЬСЯ Проверка (js)",".footer-scroll","form-init","contact","footer"),
      n("portfolio54",".portfolio-scroll","pack-init","portfolio","portfolio"),
      n("посмотреть пакеты услуг7654",".pack-scroll","check-pack-init","#package","pack"),
      n("СВЯЗАТЬСЯ Проверка (js2)",".contact-scroll","form-init","#","contact")
  },
  function(e,t,n){
    "use strict";n.r(t);
    var o=n(0),c=n(2),r=n(1);
    $(document).ready((function(){
      $("nav li a").click((function(){
        elementClick=$(this).attr("href"),
        destination=$(elementClick).offset().top,
        $("body,html").animate({scrollTop:destination},800)
      }))
    }));
    var l=document.querySelectorAll(".scene"),
    i=(Array.from(l,(function(e){
      return new Parallax(e)
    })),
    document.getElementById("portfolio")),
    a=document.getElementById("package__page"),
    u=document.getElementById("contact__page");
    console.log(u),
  null!==a?Object(o.default)():null!==i?Object(c.default)(i):null!==u?Object(r.default)():console.log("дефолтная страница")}
]);''