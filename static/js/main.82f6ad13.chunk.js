(this["webpackJsonpEmployee-Directory"]=this["webpackJsonpEmployee-Directory"]||[]).push([[0],{17:function(e,a,t){e.exports=t(49)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=(t(22),t(2)),o=t(3),i=t(5),m=t(4);t(23);var u=function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))})):r.a.createElement(r.a.Fragment,null))};t(24);var d=function(e){var a=e.headings,t=e.users,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){var a=e.name,t=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(u,{users:t})))};t(25);var h=function(e){var a=e.handleSearchChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return a(e)}}),r.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},"Search")))};t(26);var v=function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarNav"},r.a.createElement("div",{className:"input-group col-8"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:""},"DOB")),r.a.createElement("input",{type:"date",className:"form-control"}),r.a.createElement("input",{type:"date",className:"form-control"})),r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(h,{handleSearchChange:a}))))},f=t(16),p=t.n(f),g=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},E=(t(44),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={users:[{}],order:"descend",filteredUsers:[{}],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],handleSort:function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredUsers.sort((function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]}));e.setState({filteredUsers:t})},handleSearchChange:function(a){console.log(a.target.value);var t=a.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({filteredUsers:n})}},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(a){e.setState({users:a.data.results,filteredUsers:a.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{handleSearchChange:this.state.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(d,{headings:this.state.headings,users:this.state.filteredUsers,handleSort:this.state.handleSort})))}}]),t}(n.Component)),b=(t(45),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null))}}]),t}(n.Component));t(46);var N=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)},y=(t(47),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on the orange arrows to filter by heading or use the search box to narrow your results."))}}]),t}(n.Component));t(48);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(y,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.82f6ad13.chunk.js.map