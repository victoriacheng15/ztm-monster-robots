(this["webpackJsonpmosnter-robots"]=this["webpackJsonpmosnter-robots"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(3),c=n.n(r),o=(n(12),n(4)),a=n(5),i=n(7),u=n(6),h=(n(13),n(0)),l=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:"monster"}),Object(h.jsxs)("h2",{children:[" ",e.monster.name]}),Object(h.jsx)("p",{children:e.monster.email})]})},d=(n(15),function(e){return Object(h.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(h.jsx)(l,{monster:e},e.id)}))})}),j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"text",placeholder:t,onChange:n})}),m=(n(17),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"monster robots"}),Object(h.jsx)(j,{placeholder:"search mosnters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(h.jsx)(d,{monsters:r})]})}}]),n}(s.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};c.a.render(Object(h.jsx)(m,{}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.8ab8a7ea.chunk.js.map