(window["webpackJsonpfootball-stats-03"]=window["webpackJsonpfootball-stats-03"]||[]).push([[0],{151:function(o,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),a=t(45),i=t.n(a),s=(t(54),t(15)),l=t(16),c=t(18),d=t(17),h=t(19),u=(t(55),t(46)),p=t(47);function b(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),t.push.apply(t,r)}return t}function f(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(t,!0).forEach(function(e){Object(u.a)(o,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):b(t).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}return o}var m=function(o){function e(){var o,t;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=Object(c.a)(this,(o=Object(d.a)(e)).call.apply(o,[this].concat(n)))).state={showTrendLines:!1,show2016:!1,show2017:!1,show2018:!0,show2019:!0},t.handleShowTrendLines=function(){t.setState(function(o){var e=f({},o);return e.showTrendLines=!o.showTrendLines,e})},t.handleShow2016=function(){t.setState(function(o){var e=f({},o);return e.show2016=!o.show2016,e})},t.handleShow2017=function(){t.setState(function(o){var e=f({},o);return e.show2017=!o.show2017,e})},t.handleShow2018=function(){t.setState(function(o){var e=f({},o);return e.show2018=!o.show2018,e})},t.handleShow2019=function(){t.setState(function(o){var e=f({},o);return e.show2019=!o.show2019,e})},t}return Object(h.a)(e,o),Object(l.a)(e,[{key:"render",value:function(){for(var o=this,e="rgba(".concat("255, 0, 0",", 1)"),t="rgba(".concat("255, 0, 0",", 0.4)"),n="rgba(".concat("85, 85, 85",", 1)"),a="rgba(".concat("85, 85, 85",", 0.4)"),i="rgba(".concat("0, 100, 0",", 1)"),s="rgba(".concat("0, 100, 0",", 0.4)"),l="rgba(".concat("220, 220, 220",", 1)"),c="rgba(".concat("0, 0, 255",", 1)"),d="rgba(".concat("0, 0, 255",", 0.4)"),h="rgba(".concat("75, 192, 192",", 1)"),u="rgba(".concat("75, 192, 192",", 0.4)"),b="rgba(".concat("255, 165, 0",", 1)"),f="rgba(".concat("255, 165, 0",", 0.4)"),m=[0,3,3,0,0,3,1,0,3,1,3,3,3,0,0,3,1,0,0,0,3,0,0,0,0,0,0,0,0,1,3,1,0,0,1,0,1,1,3,3,0,3,3,1,3,3,0],g=[],w=0;w<m.length;w++){var v=(0===w?0:g[w-1])+m[w];g.push(v)}for(var C=[0,3,0,1,1,1,3,1,3,1,3,3,1,0,3,3,3,1,0,3,3,3,3,1,3,0,0,0,1,3,0,1,1,1,0,3,0,1,3,1,0,0,3,0,1,1,0],k=[],y=0;y<C.length;y++){var B=(0===y?0:k[y-1])+C[y];k.push(B)}for(var S=[0,1,1,0,3,3,3,3,0,0,1,1,0,3,3,0,0,0,0,3,1,3,1,1,1,3,3,3,3,3,3,3,0,0,1,0,1,3,3,1,3,0,1,0,0,3,1],O=[],H=0;H<S.length;H++){var x=(0===H?0:O[H-1])+S[H];O.push(x)}for(var j=[0,0,1,3,3,3,1,3,1],R=[],E=0;E<j.length;E++){var D=(0===E?0:R[E-1])+j[E];R.push(D)}for(var T=O.length,W=[],L=0;L<T;L++){var N=L%5!==0&&1!==L&&23!==L&&46!==L||45===L?"":L.toString(10);W.push(N)}var P={labels:W,datasets:[]};if(this.state.show2016&&P.datasets&&P.datasets.push({label:"2016-",fill:!1,lineTension:.1,backgroundColor:d,borderColor:c,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:c,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:c,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:g}),this.state.show2017&&P.datasets&&P.datasets.push({label:"2017-",fill:!1,lineTension:.1,backgroundColor:a,borderColor:n,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:n,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:k}),this.state.show2018&&P.datasets&&P.datasets.push({label:"2018-",fill:!1,lineTension:.1,backgroundColor:s,borderColor:i,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:i,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:i,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:O}),this.state.show2019&&P.datasets&&P.datasets.push({label:"2019-",fill:!1,lineTension:.1,backgroundColor:t,borderColor:e,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:e,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:e,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:R}),this.state.showTrendLines){for(var J=[],A=0;A<T;A++){var F=1.61*A;J.push(F)}for(var G=[],I=0;I<T;I++){var Z=1*I;G.push(Z)}P.datasets&&(P.datasets.push({label:"Playoffs",fill:!1,lineTension:.1,backgroundColor:u,borderColor:h,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:h,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:h,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:J}),P.datasets.push({label:"Relegation",fill:!1,lineTension:.1,backgroundColor:f,borderColor:b,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:b,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:b,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:G}))}return r.createElement("div",{style:{position:"relative",height:"80vh"}},r.createElement("div",{className:"custom-control custom-checkbox",style:{margin:"10px 30px 5px 25px"}},r.createElement("label",{className:"custom-control-label"},"Show: ")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(){return o.handleShowTrendLines()}}),r.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Trend Lines"),r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2016Checkbox",onChange:function(){return o.handleShow2016()},style:{marginLeft:"10px"},checked:this.state.show2016}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2016Checkbox"},"2016-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2017Checkbox",onChange:function(){return o.handleShow2017()},style:{marginLeft:"10px"},checked:this.state.show2017}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2017Checkbox"},"2017-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2018Checkbox",onChange:function(){return o.handleShow2018()},style:{marginLeft:"10px"},checked:this.state.show2018}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2018Checkbox"},"2018-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2019Checkbox",onChange:function(){return o.handleShow2019()},style:{marginLeft:"10px"},checked:this.state.show2019}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2019Checkbox"},"2019-")," "),r.createElement(p.a,{data:P,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:"Points Total"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Games Played"}}]}},width:600,redraw:!0}))}}]),e}(r.Component),g=function(o){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,o),Object(l.a)(e,[{key:"render",value:function(){return r.createElement(m,null)}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(o){o.unregister()})},49:function(o,e,t){o.exports=t(151)},54:function(o,e,t){},55:function(o,e,t){}},[[49,1,2]]]);
//# sourceMappingURL=main.4e3941aa.chunk.js.map