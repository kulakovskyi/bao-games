"use strict";var i,_this=void 0,icons=["win1.png","win2.png","win3.png","win4.png","win5.png","win6.png","win7.png","win8.png"],slots=document.querySelector(".bao__slot"),cols=document.querySelectorAll(".col"),col1=document.querySelector(".col-one"),col2=document.querySelector(".col-two"),col3=document.querySelector(".col-three");for(i in cols)if(cols.hasOwnProperty(i)){for(var col=cols[i],str="",firstThree="",x=0;x<30;x++){var part='<img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'">';str+=part,x<3&&(firstThree+=part)}var content=col.innerHTML;col.innerHTML=content+str+firstThree}var win3=document.querySelectorAll(".start3"),win2=document.querySelectorAll(".start2"),overlay=document.querySelector(".bao__overlay"),firstWin=document.querySelector(".bao__firstWin"),firstWinBtn=document.querySelector(".bao__firstWin-btn"),secondWin=document.querySelector(".bao__secondWin"),textMain=document.querySelector(".bao__text"),textWin=document.querySelector(".bao__textWin"),btn=document.querySelector(".bao__btn"),firstwinAnim=document.querySelector(".win-fire"),secondwinAnim=document.querySelector(".win-fire-blue"),firstWinScale=document.querySelectorAll(".win-scale"),secondWinScale=document.querySelectorAll(".win-scale-blue"),counter="";function spin(t){slots.classList.toggle("spinning",!0),window.setTimeout(function(){document.querySelectorAll(".start").forEach(function(t){t.style.display="none"}),win2.forEach(function(t){t.style.display="block"});var t=["win1.png","win2.png","win3.png","win4.png","win5.png","win6.png","win7.png","win8.png"];if(1===counter){for(var e=[t[0],t[0],t[0]],i=[t[5],t[7],t[6]],n=[t[4],t[2],t[3]],t=col1.querySelectorAll(".icon"),s=0;s<3;s++)t[s].setAttribute("src","img/slots/"+e[s]),t[t.length-3+s].setAttribute("src","img/slots/"+e[s]);for(var o=col2.querySelectorAll(".icon"),c=col3.querySelectorAll(".icon"),s=0;s<3;s++)o[s].setAttribute("src","img/slots/"+i[s]),o[t.length-3+s].setAttribute("src","img/slots/"+i[s]),c[s].setAttribute("src","img/slots/"+n[s]),c[t.length-3+s].setAttribute("src","img/slots/"+n[s]);col2.classList.add("win"),col3.classList.add("win"),textWin.classList.add("visible"),setTimeout(function(){firstwinAnim.classList.add("_add"),firstWinScale.forEach(function(t){t.classList.add("_add")})},1500),setTimeout(function(){overlay.classList.remove("opacity"),firstWin.classList.remove("hidden"),textMain.innerHTML="One attempt left"},3300)}if(2===counter){win3.forEach(function(t){t.style.display="block"});for(s=0;s<9;s++)win2[0].setAttribute("src","img/slots/win1.png"),win2[1].setAttribute("src","img/slots/win7.png"),win2[2].setAttribute("src","img/slots/win6.png"),win2[3].setAttribute("src","img/slots/win3.png"),win2[4].setAttribute("src","img/slots/win3.png"),win2[5].setAttribute("src","img/slots/win3.png"),win2[6].setAttribute("src","img/slots/win5.png"),win2[7].setAttribute("src","img/slots/win3.png"),win2[8].setAttribute("src","img/slots/win4.png");for(e=[t[0],t[6],t[5]],i=[t[2],t[2],t[2]],t=col1.querySelectorAll(".icon"),o=col2.querySelectorAll(".icon"),s=0;s<3;s++)t[s].setAttribute("src","img/slots/"+e[s]),t[t.length-3+s].setAttribute("src","img/slots/"+e[s]),o[s].setAttribute("src","img/slots/"+i[s]),o[t.length-3+s].setAttribute("src","img/slots/"+i[s]);col1.classList.add("win"),col3.classList.add("win"),setTimeout(function(){secondwinAnim.classList.add("_add"),secondWinScale.forEach(function(t){t.classList.add("_add")})},1500),setTimeout(function(){overlay.classList.remove("opacity"),secondWin.classList.remove("hidden")},3300)}},1500),window.setTimeout(function(){slots.classList.toggle("spinning",!1)}.bind(t),3500)}btn.addEventListener("click",function(){spin(_this),counter++,btn.classList.add("pointer-none")}),firstWinBtn.addEventListener("click",function(){btn.classList.remove("pointer-none"),overlay.classList.add("opacity"),firstWin.classList.add("hidden"),col2.classList.remove("win"),col3.classList.remove("win"),firstwinAnim.classList.remove("_add"),firstWinScale.forEach(function(t){t.classList.remove("_add")})});