(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JMib:function(e,t,n){"use strict";n.r(t);n("f3/d");var a=n("q1tI"),o=n.n(a),i=n("vOnD"),r=n("Bl7J"),l=n("vrFN"),d=n("tBDR"),m=i.a.div.attrs({className:"IngredientsContainer"}).withConfig({displayName:"ingredients__IngredientsContainer",componentId:"lzbf0k-0"})(["background:#dddddd;padding:1em 2em;width:70%;margin-left:auto;"]),p=function(e){var t=e.ingredients.map((function(e){return e.name})).join(", ");return o.a.createElement(m,null,o.a.createElement("h3",null,"Ingredients"),o.a.createElement("p",null,t))};n.d(t,"query",(function(){return g}));var c=i.a.div.attrs({className:"Images"}).withConfig({displayName:"soap_template__Images",componentId:"sc-13yrdpx-0"})(["position:relative;"]),s=i.a.div.withConfig({displayName:"soap_template__StampContainer",componentId:"sc-13yrdpx-1"})(["width:60%;position:absolute;top:25%;left:5%;transform:rotate(14deg);"]),u=i.a.div.attrs({className:"ImageContainer"}).withConfig({displayName:"soap_template__ImageContainer",componentId:"sc-13yrdpx-2"})(['margin:1em;width:60%;position:relative;&:before{content:" ";position:absolute;left:-15px;top:-10px;width:100%;height:70%;background:rgba(168,22,22,0.5);z-index:-1;}&:after{content:" ";position:absolute;left:20px;bottom:-10px;width:100%;height:100%;background:rgba(60,158,214,0.5);z-index:-2;}']),g="3461513721";t.default=function(e){var t=e.data,n=t.allIngredient.edges.map((function(e){var t=e.node;return{name:t.name,tooltipId:t.tooltipId}}));return o.a.createElement(r.a,null,o.a.createElement(l.a,{title:"..."}),o.a.createElement("h1",null,t.product.name),o.a.createElement(c,null,o.a.createElement(u,null,o.a.createElement(d.a,{name:t.product.imageId})),t.product.outOfStock&&o.a.createElement(s,null,o.a.createElement(d.a,{name:"sold_out_stamp.png"}))),o.a.createElement("p",null,t.product.description),o.a.createElement("p",null,t.product.content),o.a.createElement(p,{ingredients:n}))}}}]);
//# sourceMappingURL=component---src-templates-soap-template-js-9430682987e9e1a17fba.js.map