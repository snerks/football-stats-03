(window["webpackJsonpfootball-stats-03"]=window["webpackJsonpfootball-stats-03"]||[]).push([[0],{151:function(o,r,e){"use strict";e.r(r);var t=e(0),n=e.n(t),a=e(45),i=e.n(a),l=(e(54),e(15)),d=e(16),s=e(18),c=e(17),p=e(19),u=(e(55),e(46)),b=e(47);function h(o,r){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),e.push.apply(e,t)}return e}var f=function(o){function r(){var o,e;Object(l.a)(this,r);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=Object(s.a)(this,(o=Object(c.a)(r)).call.apply(o,[this].concat(n)))).state={showTrendLines:!1},e.handleShowTrendLines=function(){e.setState(function(o){var r=function(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(e,!0).forEach(function(r){Object(u.a)(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):h(e).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}({},o);return r.showTrendLines=!o.showTrendLines,r})},e}return Object(p.a)(r,o),Object(d.a)(r,[{key:"render",value:function(){for(var o=this,r="rgba(".concat("255, 0, 0",", 1)"),e="rgba(".concat("255, 0, 0",", 0.4)"),n="rgba(".concat("85, 85, 85",", 1)"),a="rgba(".concat("85, 85, 85",", 0.4)"),i="rgba(".concat("0, 100, 0",", 1)"),l="rgba(".concat("0, 100, 0",", 0.4)"),d="rgba(".concat("220, 220, 220",", 1)"),s="rgba(".concat("0, 0, 255",", 1)"),c="rgba(".concat("0, 0, 255",", 0.4)"),p="rgba(".concat("75, 192, 192",", 1)"),u="rgba(".concat("75, 192, 192",", 0.4)"),h="rgba(".concat("255, 165, 0",", 1)"),f="rgba(".concat("255, 165, 0",", 0.4)"),v=[0,3,3,0,0,3,1,0,3,1,3,3,3,0,0,3,1,0,0,0,3,0,0,0,0,0,0,0,0,1,3,1,0,0,1,0,1,1,3,3,0,3,3,1,3,3,0],g=[],C=0;C<v.length;C++){var y=(0===C?0:g[C-1])+v[C];g.push(y)}for(var B=[0,3,0,1,1,1,3,1,3,1,3,3,1,0,3,3,3,1,0,3,3,3,3,1,3,0,0,0,1,3,0,1,1,1,0,3,0,1,3,1,0,0,3,0,1,1,0],m=[],O=0;O<B.length;O++){var k=(0===O?0:m[O-1])+B[O];m.push(k)}for(var H=[0,1,1,0,3,3,3,3,0,0,1,1,0,3,3,0,0,0,0,3,1,3,1,1,1,3,3,3,3,3,3,3,0,0,1,0,1,3,3,1,3,0,1,0,0,3,1],w=[],S=0;S<H.length;S++){var j=(0===S?0:w[S-1])+H[S];w.push(j)}for(var R=[0,0,1],D=[],T=0;T<R.length;T++){var W=(0===T?0:D[T-1])+R[T];D.push(W)}for(var P=w.length,x=[],E=0;E<P;E++){var L=E%5===0||1===E||23===E||46===E?E.toString(10):"";x.push(L)}var J={labels:x,datasets:[{label:"2016-",fill:!1,lineTension:.1,backgroundColor:c,borderColor:s,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:s,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:s,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:g},{label:"2017-",fill:!1,lineTension:.1,backgroundColor:a,borderColor:n,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:n,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:m},{label:"2018-",fill:!1,lineTension:.1,backgroundColor:l,borderColor:i,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:i,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:i,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:w},{label:"2019-",fill:!1,lineTension:.1,backgroundColor:e,borderColor:r,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:r,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:r,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:D}]};if(this.state.showTrendLines){for(var A=[],N=0;N<P;N++){var F=1.61*N;A.push(F)}for(var G=[],I=0;I<P;I++){var Z=1*I;G.push(Z)}J.datasets&&(J.datasets.push({label:"Playoffs",fill:!1,lineTension:.1,backgroundColor:u,borderColor:p,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:p,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:p,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:A}),J.datasets.push({label:"Relegation",fill:!1,lineTension:.1,backgroundColor:f,borderColor:h,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:h,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:h,pointHoverBorderColor:d,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:G}))}return t.createElement("div",{style:{position:"relative",height:"80vh"}},t.createElement("div",{className:"custom-control custom-checkbox",style:{margin:"10px 30px 5px 25px"}},t.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(){return o.handleShowTrendLines()}}),t.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Show Trend Lines")),t.createElement(b.a,{data:J,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:"Points Total"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Games Played"}}]}},width:600,redraw:!0}))}}]),r}(t.Component),v=function(o){function r(){return Object(l.a)(this,r),Object(s.a)(this,Object(c.a)(r).apply(this,arguments))}return Object(p.a)(r,o),Object(d.a)(r,[{key:"render",value:function(){return t.createElement(f,null)}}]),r}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(o){o.unregister()})},49:function(o,r,e){o.exports=e(151)},54:function(o,r,e){},55:function(o,r,e){}},[[49,1,2]]]);
//# sourceMappingURL=main.4466bce9.chunk.js.map