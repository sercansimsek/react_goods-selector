(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),s=c(4),o=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),u=c(6),b=c.n(u),j=(c(13),c(14),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={selectedGood:"Jam"},t.clearButtonHandler=function(){t.setState({selectedGood:""})},t.addButtonHandler=function(e){t.setState({selectedGood:e})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[e?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(j.jsx)("button",{onClick:this.clearButtonHandler,"data-cy":"ClearButton",type:"button",className:"delete ml-3"})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":e===c}),children:[Object(j.jsx)("td",{children:e===c?Object(j.jsx)("button",{onClick:t.clearButtonHandler,"data-cy":"RemoveButton",type:"button",className:"button is-info",children:"-"}):Object(j.jsx)("button",{onClick:function(){return t.addButtonHandler(c)},"data-cy":"AddButton",type:"button",className:"button",children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e4bbb62.chunk.js.map