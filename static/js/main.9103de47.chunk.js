(window["webpackJsonpfootball-stats-03"]=window["webpackJsonpfootball-stats-03"]||[]).push([[0],{215:function(o,e,t){o.exports=t(519)},220:function(o,e,t){},221:function(o,e,t){},519:function(o,e,t){"use strict";t.r(e);var r=t(2),n=t.n(r),a=t(211),s=t.n(a),i=(t(220),t(91)),l=t(92),c=t(94),d=t(93),h=t(95),u=(t(221),t(212)),p=t(213),b=[0,0,1,3,3,3,1,3,1,1,1,3,0,3,1,1,3,1,0,3,3,0,0,0,0,3,0,3,3,3,3,0,3,0,0,0,1,1,0,0,0,0,3,3,1,0,1],f=[0,3,3,0,0,3,1,0,1,3,3,3,0,0,3,1,0,0,0,3,0,0,0,0,0,0,0,0,1,3,1,0,0,1,0,1,1,3,3,0,0,3,3,1,3,3,0],m=[0,3,0,1,1,1,3,1,3,1,3,3,1,0,3,3,3,1,0,3,3,3,3,1,3,0,0,0,1,3,0,1,1,1,0,3,0,1,3,1,0,0,3,0,1,1,0],w=[0,1,1,0,3,3,3,3,0,0,1,1,0,3,3,0,0,0,0,3,1,3,1,1,1,3,3,3,3,3,3,3,0,0,1,0,1,3,3,1,3,0,1,0,0,3,1],g=[0,3,3,3,3,1,0,1,0,0,3,3,3,1,0,3,0,3,0,0,0,3,0,3,0,3,0,0,0,0,0,0,3,3,0,0,3,1,0,0,0,1,1,0];function v(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})),t.push.apply(t,r)}return t}function C(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(t,!0).forEach(function(e){Object(u.a)(o,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))})}return o}var k=function(o){function e(){var o,t;Object(i.a)(this,e);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=Object(c.a)(this,(o=Object(d.a)(e)).call.apply(o,[this].concat(n)))).state={showTrendLines:!1,show2016:!1,show2017:!1,show2018:!1,show2019:!0,show2020:!0},t.handleShowTrendLines=function(){t.setState(function(o){var e=C({},o);return e.showTrendLines=!o.showTrendLines,e})},t.handleShow2016=function(){t.setState(function(o){var e=C({},o);return e.show2016=!o.show2016,e})},t.handleShow2017=function(){t.setState(function(o){var e=C({},o);return e.show2017=!o.show2017,e})},t.handleShow2018=function(){t.setState(function(o){var e=C({},o);return e.show2018=!o.show2018,e})},t.handleShow2019=function(){t.setState(function(o){var e=C({},o);return e.show2019=!o.show2019,e})},t.handleShow2020=function(){t.setState(function(o){var e=C({},o);return e.show2020=!o.show2020,e})},t}return Object(h.a)(e,o),Object(l.a)(e,[{key:"render",value:function(){for(var o=this,e="rgba(".concat("255, 0, 0",", 1)"),t="rgba(".concat("255, 0, 0",", 0.4)"),n="rgba(".concat("85, 85, 85",", 1)"),a="rgba(".concat("85, 85, 85",", 0.4)"),s="rgba(".concat("0, 100, 0",", 1)"),i="rgba(".concat("0, 100, 0",", 0.4)"),l="rgba(".concat("220, 220, 220",", 1)"),c="rgba(".concat("0, 0, 255",", 1)"),d="rgba(".concat("0, 0, 255",", 0.4)"),h="rgba(".concat("75, 192, 192",", 1)"),u="rgba(".concat("75, 192, 192",", 0.4)"),v="rgba(".concat("255, 165, 0",", 1)"),C="rgba(".concat("255, 165, 0",", 0.4)"),k=[],y=0;y<f.length;y++){var B=(0===y?0:k[y-1])+f[y];k.push(B)}for(var S=[],H=0;H<m.length;H++){var O=(0===H?0:S[H-1])+m[H];S.push(O)}for(var x=[],R=0;R<w.length;R++){var E=(0===R?0:x[R-1])+w[R];x.push(E)}for(var j=[],D=0;D<b.length;D++){var W=(0===D?0:j[D-1])+b[D];j.push(W)}for(var T=[],L=0;L<g.length;L++){var N=(0===L?0:T[L-1])+g[L];T.push(N)}for(var P=x.length,J=[],F=0;F<P;F++){var A=F%5!==0&&1!==F&&23!==F&&46!==F||45===F?"":F.toString(10);J.push(A)}var G={labels:J,datasets:[]};if(this.state.show2016&&G.datasets&&G.datasets.push({label:"2016-",fill:!1,lineTension:.1,backgroundColor:d,borderColor:c,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:c,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:c,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:k}),this.state.show2017&&G.datasets&&G.datasets.push({label:"2017-",fill:!1,lineTension:.1,backgroundColor:a,borderColor:n,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:n,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:S}),this.state.show2018&&G.datasets&&G.datasets.push({label:"2018-",fill:!1,lineTension:.1,backgroundColor:i,borderColor:s,borderCapStyle:"butt",borderDash:[3,3],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:s,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:s,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:x}),this.state.show2019&&G.datasets&&G.datasets.push({label:"2019-",fill:!1,lineTension:.1,backgroundColor:i,borderColor:s,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:s,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:s,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:j}),this.state.show2020&&G.datasets&&G.datasets.push({label:"2020-",fill:!1,lineTension:.1,backgroundColor:t,borderColor:e,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:e,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:e,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:T}),this.state.showTrendLines){for(var I=[],Z=0;Z<P;Z++){var $=1.61*Z;I.push($)}for(var q=[],z=0;z<P;z++){var K=1*z;q.push(K)}G.datasets&&(G.datasets.push({label:"Playoffs",fill:!1,lineTension:.1,backgroundColor:u,borderColor:h,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:h,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:h,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:I}),G.datasets.push({label:"Relegation",fill:!1,lineTension:.1,backgroundColor:C,borderColor:v,borderCapStyle:"butt",borderDash:[5,15],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:v,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:v,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:q}))}return r.createElement("div",{style:{position:"relative",height:"80vh"}},r.createElement("div",{className:"custom-control custom-checkbox",style:{margin:"10px 30px 5px 25px"}},r.createElement("label",{className:"custom-control-label"},"Show: ")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:function(){return o.handleShowTrendLines()}}),r.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Trend Lines"),r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2016Checkbox",onChange:function(){return o.handleShow2016()},style:{marginLeft:"10px"},checked:this.state.show2016}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2016Checkbox"},"2016-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2017Checkbox",onChange:function(){return o.handleShow2017()},style:{marginLeft:"10px"},checked:this.state.show2017}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2017Checkbox"},"2017-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2018Checkbox",onChange:function(){return o.handleShow2018()},style:{marginLeft:"10px"},checked:this.state.show2018}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2018Checkbox"},"2018-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2019Checkbox",onChange:function(){return o.handleShow2019()},style:{marginLeft:"10px"},checked:this.state.show2019}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2019Checkbox"},"2019-")," ",r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"show2020Checkbox",onChange:function(){return o.handleShow2020()},style:{marginLeft:"10px"},checked:this.state.show2020}),r.createElement("label",{className:"custom-control-label",htmlFor:"show2020Checkbox"},"2020-")," "),r.createElement(p.a,{data:G,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:"Points Total"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Games Played"}}]}},width:600,redraw:!0}))}}]),e}(r.Component),y=function(o){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,o),Object(l.a)(e,[{key:"render",value:function(){return r.createElement(k,null)}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(316),t(325);s.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(o){o.unregister()})}},[[215,1,2]]]);
//# sourceMappingURL=main.9103de47.chunk.js.map