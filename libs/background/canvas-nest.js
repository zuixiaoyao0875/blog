// build time:Wed Jun 24 2020 00:01:12 GMT+0800 (China Standard Time)
!function(){var n=navigator.userAgent;var e=["iPad","iPhone","Android","SymbianOS","Windows Phone","iPod","webOS","BlackBerry","IEMobile"];for(var t=0;t<e.length;t++){if(n.indexOf(e[t])>0){return}}function i(n,e,t){return n.getAttribute(e)||t}function o(n){return document.getElementsByTagName(n)}function a(){var n=o("script"),e=n.length,t=n[e-1];return{l:e,z:i(t,"zIndex",-1),o:i(t,"opacity",.5),c:i(t,"color","0,0,0"),n:i(t,"count",99)}}function c(){x=d.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,w=d.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function r(){m.clearRect(0,0,x,w);var n=[f].concat(h);var e,t,i,o,a,c;h.forEach(function(r){r.x+=r.xa,r.y+=r.ya,r.xa*=r.x>x||r.x<0?-1:1,r.ya*=r.y>w||r.y<0?-1:1,m.fillRect(r.x-.5,r.y-.5,1,1);for(t=0;t<n.length;t++){e=n[t];if(r!==e&&null!==e.x&&null!==e.y){o=r.x-e.x,a=r.y-e.y,c=o*o+a*a;c<e.max&&(e===f&&c>=e.max/2&&(r.x-=.03*o,r.y-=.03*a),i=(e.max-c)/e.max,m.beginPath(),m.lineWidth=i/2,m.strokeStyle="rgba("+u.c+","+(i+.2)+")",m.moveTo(r.x,r.y),m.lineTo(e.x,e.y),m.stroke())}}n.splice(n.indexOf(r),1)}),y(r)}var d=document.createElement("canvas"),u=a(),l="c_n"+u.l,m=d.getContext("2d"),x,w,y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/45)},s=Math.random,f={x:null,y:null,max:2e4};d.id=l;d.style.cssText="position:fixed;top:0;left:0;z-index:"+u.z+";opacity:"+u.o;o("body")[0].appendChild(d);c(),window.onresize=c;window.onmousemove=function(n){n=n||window.event,f.x=n.clientX,f.y=n.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var h=[],g=0;u.n>g;g++){var v=s()*x,b=s()*w,p=2*s()-1,A=2*s()-1;h.push({x:v,y:b,xa:p,ya:A,max:6e3})}setTimeout(function(){r()},100)}();
//rebuild by neat 