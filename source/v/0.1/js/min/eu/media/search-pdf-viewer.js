define(["jquery"],function(a){return function(){"use strict";function b(a){v=a,n.textContent=v.numPages,f(r)}function c(a){var c=a?a:l.getAttribute("data-src");console.log("get pdf_src: "+c),PDFJS.getDocument(c).then(b)}function d(){u=!1,null!==t&&(f(t),t=null)}function e(a){var b={},c=function(){},e=a.getViewport(s);l.height=e.height,l.width=e.width,b={canvasContext:q,viewport:e},c=a.render(b),c.promise.then(d)}function f(a){u=!0,v.getPage(a).then(e),o.textContent=r}function g(a){u?t=a:f(a)}function h(){1>=r||(r-=1,g(r))}function i(){r>=v.numPages||(r+=1,g(r))}function j(b,d){return l=b.find("canvas")[0],m=b.find("#pdfjs-next")[0],n=b.find("#pdfjs-page-count")[0],o=b.find("#pdfjs-page-number")[0],p=b.find("#pdfjs-prev")[0],q=l.getContext("2d"),PDFJS.workerSrc=k+"pdf.worker.js",a("head").append('<link rel="stylesheet" href="'+k+'viewer.css" type="text/css"/>'),m.addEventListener("click",i),p.addEventListener("click",h),c(d)}var k="undefined"==typeof js_path?"/js/dist/lib/pdfjs/":js_path+"lib/pdfjs/",l=null,m=null,n=null,o=null,p=null,q=null,r=1,s=1,t=null,u=!1,v=null;return{init:function(a,b){return j(a,b)}}}()});