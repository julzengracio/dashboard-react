(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{18:function(e,s,c){},19:function(e,s,c){},26:function(e,s,c){"use strict";c.r(s);var t=c(4),a=c.n(t),n=c(12),i=c.n(n),r=(c(18),c(6)),l=(c(19),c(3)),j=c(2),o=c(13),d=c(11),b=c(0);function h(e){var s=e.name,c=e.icon,a=Object(t.useState)(null),n=Object(r.a)(a,2),i=n[0],j=n[1];return Object(t.useEffect)((function(){fetch("https://random-data-api.com/api/number/random_number").then((function(e){return e.json()})).then((function(e){return j((125*e.decimal).toFixed(2))})).catch(console.error)}),[]),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{className:"card-icon",children:Object(b.jsx)(l.a,{icon:c,size:"2x",className:"text-shadow"})}),Object(b.jsx)("h4",{className:"card-title",children:s}),Object(b.jsxs)("p",{children:["\u20ac ",i]})]})})}function u(e){var s=e.user;return s?Object(b.jsxs)("div",{className:"user-info d-flex",children:[Object(b.jsx)("img",{src:s.picture.thumbnail,className:"user-img",alt:"user"}),Object(b.jsx)(l.a,{icon:j.b})]}):null}function m(e){var s=e.user;return s?Object(b.jsx)("div",{className:"visa-card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{className:"card-visa-name",children:"BanQ"}),Object(b.jsx)("div",{className:"card-visa-number",children:"4562 1122 2592 1162"}),Object(b.jsxs)("div",{className:"card-visa-details d-flex justify-content-between",children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:"small",children:"01/25"}),Object(b.jsxs)("p",{children:[s.name.first," ",s.name.last]})]}),Object(b.jsx)(l.a,{icon:o.a,size:"2x"})]})]})}):null}function x(){return Object(t.useEffect)((function(){var e={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Monthly Spends",data:[412,347,580,989,540,367,452,1097,799,455,300,877],backgroundColor:function(e){var s=e.chart;s.ctx;return s.chartArea?"rgb(0, 153, 255)":null},hoverBackgroundColor:"rgb(255, 255, 255)",borderWidth:1,borderColor:"white"}]},s=document.getElementById("analyticsChart");new d.a(s,{type:"bar",data:e,options:{tension:.3,responsive:!0}})}),[]),Object(b.jsx)("div",{className:"chart-container",style:{position:"relative"},children:Object(b.jsx)("canvas",{id:"analyticsChart"})})}function O(){return Object(t.useEffect)((function(){var e=document.getElementById("summaryChart");new d.a(e,{type:"doughnut",data:{labels:["Restaurants","Utilities","Entertainment","Groceries"],datasets:[{label:"Transactions",data:[8,3,2,4],backgroundColor:["rgb(0, 179, 60)","rgb(255, 83, 26)","rgb(255, 204, 0)","rgb(0, 153, 255)"],hoverOffset:4}]},options:{responsive:!0,borderWidth:1,borderColor:"silver",plugins:{legend:{display:!1,position:"top",align:"start"}}}})}),[]),Object(b.jsx)("div",{className:"chart-container-summary",style:{position:"relative"},children:Object(b.jsx)("canvas",{id:"summaryChart"})})}function f(e){var s=e.users;return s?Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:s.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.picture.thumbnail,className:"img-circle",alt:"user"})}),Object(b.jsxs)("td",{className:"history-user",children:[Object(b.jsxs)("span",{children:[e.name.first,"\xa0",e.name.last]}),Object(b.jsx)("p",{className:"small",style:{margin:0},children:"Transfer"})]}),Object(b.jsxs)("td",{children:["\u20ac\xa0",Math.floor(5e3*Math.random())]})]})}))})}):null}var v=function(){var e=[{id:0,category:"Restaurants",count:8,amount:412.2,classColor:"icon-success",icon:Object(b.jsx)(l.a,{icon:j.p,size:"lg",fixedWidth:!0})},{id:1,category:"Utilities",count:3,amount:987.71,classColor:"icon-info",icon:Object(b.jsx)(l.a,{icon:j.i,size:"lg",fixedWidth:!0})},{id:2,category:"Entertainment",count:2,amount:139.98,classColor:"icon-warning",icon:Object(b.jsx)(l.a,{icon:j.f,size:"lg",fixedWidth:!0})},{id:3,category:"Groceries",count:4,amount:139.98,classColor:"icon-primary",icon:Object(b.jsx)(l.a,{icon:j.m,size:"lg",fixedWidth:!0})}],s=Object(t.useState)(null),c=Object(r.a)(s,2),a=c[0],n=c[1],i=Object(t.useState)(null),o=Object(r.a)(i,2),d=o[0],v=o[1];return Object(t.useEffect)((function(){fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){return n(e.results[0])})).catch(console.error),fetch("https://randomuser.me/api/?results=5").then((function(e){return e.json()})).then((function(e){return v(e.results)})).catch(console.error)}),[]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("aside",{className:"sidebar col-1",children:Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("a",{href:"#",className:"nav-link",children:Object(b.jsx)(l.a,{icon:j.h,size:"lg",fixedWidth:!0})}),Object(b.jsx)("a",{href:"#",className:"nav-link",children:Object(b.jsx)(l.a,{icon:j.g,size:"lg",fixedWidth:!0})}),Object(b.jsx)("a",{href:"#",className:"nav-link",children:Object(b.jsx)(l.a,{icon:j.o,size:"lg",fixedWidth:!0})}),Object(b.jsx)("a",{href:"#",className:"nav-link",children:Object(b.jsx)(l.a,{icon:j.c,size:"lg",fixedWidth:!0})})]})}),Object(b.jsxs)("div",{className:"col-11",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("header",{className:"d-flex justify-content-between align-items-center flex-responsive",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("h1",{children:"Dashboard"})}),Object(b.jsxs)("div",{className:"col-4 input-group",children:[Object(b.jsx)("div",{className:"align-self-center input-icon",children:Object(b.jsx)(l.a,{icon:j.l})}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search"})]}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsxs)("div",{className:"col-3 d-flex justify-content-between",children:[Object(b.jsx)("div",{className:"user-control",children:Object(b.jsx)(l.a,{icon:j.a,size:"lg"})}),Object(b.jsx)("div",{className:"user-control",children:Object(b.jsx)(l.a,{icon:j.e,size:"lg"})}),Object(b.jsx)("div",{className:"user-control",children:Object(b.jsx)(u,{user:a})})]})]})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("main",{className:"col-8",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"d-flex justify-content-between flex-responsive",children:[Object(b.jsx)(h,{name:"Main Account",icon:j.n}),Object(b.jsx)(h,{name:"Savings Account",icon:j.k}),Object(b.jsx)(h,{name:"Linked Account",icon:j.j}),Object(b.jsx)(h,{name:"Crypto Account",icon:j.d})]})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{children:"Analytics"}),Object(b.jsx)(x,{})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{children:"Transfers & Payments"}),Object(b.jsx)(f,{users:d})]})]}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsxs)("aside",{className:"col-3 summary-section",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("p",{children:"Virtual Card"}),Object(b.jsx)(m,{user:a})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("p",{children:"Transaction Breakdown"}),Object(b.jsx)(O,{})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("p",{children:"Summary"}),Object(b.jsx)("ul",{className:"list-items",children:e.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"list-item-icon ".concat(e.classColor),children:e.icon}),Object(b.jsxs)("div",{className:"list-item-category",children:[Object(b.jsx)("h5",{children:e.category}),Object(b.jsxs)("p",{className:"small",children:[e.count.toString()," Transactions"]})]}),Object(b.jsxs)("div",{children:["\u20ac\xa0",e.amount.toFixed(2).toString()]})]},e.id)}))})]})]})]})]})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ec873737.chunk.js.map