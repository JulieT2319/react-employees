(this["webpackJsonpreact-employees"]=this["webpackJsonpreact-employees"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r),c=[{firstName:"Julie",lastName:"Theriault",position:"Team Lead",location:"Corporate"},{firstName:"Elsa",lastName:"Oldenburg",position:"Queen",location:"Arandell"},{firstName:"Valette",lastName:"Renoux",position:"Spy",location:"Luthadel"},{firstName:"Elend",lastName:"Venture",position:"Philosopher",location:"Luthadel"},{firstName:"Jo",lastName:"March",position:"Writer",location:"Concord"},{firstName:"Anne",lastName:"Shirley",position:"Writer",location:"Prince Edward Island"},{firstName:"Julie",lastName:"Boxer",position:"Baby",location:"San Francisco"},{firstName:"Gilbert",lastName:"Blythe",position:"Doctor",location:"Prince Edward Island"}];var i=function(e){return l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",null,"First Name")),l.a.createElement("th",null,l.a.createElement("button",null,"Last Name")),l.a.createElement("th",null,l.a.createElement("button",null,"Position")),l.a.createElement("th",null,l.a.createElement("button",null,"Location"))),c.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.position),l.a.createElement("td",null,e.location))})))},m=a(3),u=a(4),s=a(5),h=a(7),p=a(6);var d=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"First Name",id:"search"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={result:[],search:""},e.handleInputChange=function(t){t.preventDefault();var a=t.target,n=a.name,l=a.value;e.setState(Object(m.a)({},n,l))},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({search:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Employee Search"),l.a.createElement(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))}}]),a}(n.Component);function f(){return l.a.createElement("div",{className:"center container"},l.a.createElement(E,null),l.a.createElement(i,null))}var N=function(){return l.a.createElement(f,null)};o.a.render(l.a.createElement(N,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9237b2fc.chunk.js.map