(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(28),a=n.n(r),o=(n(83),n(10)),i=n(11),l=n(13),h=n(12),A=n(38),u=n(195),d=n(73),j=n.n(d),m=n(1),b=function(e){var t=Object(c.useState)([]),n=Object(A.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(!1),o=Object(A.a)(a,2),i=o[0],l=o[1];Object(c.useEffect)((function(){i||h()}));var h=function(){var t=e.id;t?fetch("https://hn.algolia.com/api/v1/search?tags=comment,story_".concat(t)).then((function(e){return e.json()})).then((function(e){return r(e)})):console.log("Object ID is missing"),setTimeout((function(){l(!0),console.log(s)}),1e3)};return Object(m.jsxs)("div",{id:"comment-container",children:[Object(m.jsx)("h3",{id:"comment-header",children:"Comments"}),i?s.hits.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:e.created_at.substr(0,10)}),Object(m.jsx)(j.a,{className:"comment-markdown",children:e.comment_text.replace(/<[^>]*>?/gm,"")}),Object(m.jsx)("p",{id:"comment-border",style:{borderBottom:"3px solid #3286b7"}})]},Object(u.a)())})):null]})},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).capitalizeWord=function(e){return e[0].toUpperCase()+e.substr(1)},c.showComments=function(e,t){c.setState({postID:t}),console.log(e.target),"Show Comments"===e.target.innerHTML?(c.setState({showingComments:!0}),e.target.innerHTML="Hide Comments"):(c.setState({showingComments:!1}),e.target.innerHTML="Show Comments")},c.state={postID:0,showingComments:!1},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"specific-result-title",children:Object(m.jsx)("a",{href:t.url,children:t.title})}),Object(m.jsxs)("p",{className:"author",children:["Author: ",e.capitalizeWord(t.author)]}),Object(m.jsxs)("p",{className:"created-at",children:["Posted on: ",t.created_at.substr(0,10)]}),Object(m.jsx)("button",{className:"get-comments",onClick:function(n){return e.showComments(n,t.objectID)},children:"Show Comments"}),e.state.postID===t.objectID&&e.state.showingComments?Object(m.jsx)(b,{id:t.objectID}):null]},t.objectID)}));return Object(m.jsxs)("div",{id:"results-container",children:[Object(m.jsx)("h3",{id:"results-title",children:"Results"}),Object(m.jsx)("hr",{}),t]})}}]),n}(c.Component),g=n(17),f="SEARCH_NEWS",v="SAVE_SEARCH",O="DELETE_SEARCH",x=n(77),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(t){var n=t.target.textContent;e.props.handleNav(n)},e.handleClose=function(t){t.stopPropagation();var n=t.target.parentElement.parentElement.parentElement.textContent;e.props.deleteSearch(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;console.log("searchTerms array:",this.props.data);var t=this.props.data.map((function(t,n){return Object(m.jsx)("li",{className:"recent-search-li",children:Object(m.jsxs)("button",{className:"search-term-button",style:{color:"black",verticalAlign:"middle"},onClick:e.handleClick,children:[t,Object(m.jsx)("div",{className:"centering-div",children:Object(m.jsx)(x.a,{size:30,onClick:e.handleClose})})]})},n)}));return Object(m.jsx)("div",{id:"recent-search-term-div",children:Object(m.jsxs)("ul",{children:[t.length>0?Object(m.jsx)("li",{className:"recent-search-title",children:"Recent Searches:"}):null,t]})})}}]),n}(c.Component),C=Object(g.b)((function(e){return{searchTerms:e.news.searchTerms}}),{deleteSearch:function(e){return function(t){t({type:O,payload:e})}}})(y),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.searchNews(t.target.value)},e.handleSubmit=function(t){t.preventDefault(),e.props.handleSearch(e.props.text),e.props.saveSearch(e.props.text),t.target.firstElementChild.firstChild.value=""},e.handleNavSearch=function(t){e.props.handleSearch(t)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"search-bar-container",children:[Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("div",{id:"form-container",children:Object(m.jsx)("input",{id:"form-input",placeholder:"What are you looking for?",type:"text",name:"query",onChange:this.handleChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(m.jsx)(C,{handleNav:this.handleNavSearch,data:this.props.searchTerms})]})}}]),n}(c.Component),B=Object(g.b)((function(e){return{text:e.news.text,searchTerms:e.news.searchTerms}}),{searchNews:function(e){return function(t){t({type:f,payload:e})}},saveSearch:function(e){return function(t){t({type:v,payload:e})}}})(N),L=n(18),S=n(75),X=n(76),w=n(78),Q=n(14),I={text:"",searchTerms:[]},T=Object(L.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(Q.a)(Object(Q.a)({},e),{},{text:t.payload});case v:return console.log("Saved the search"),Object(Q.a)(Object(Q.a)({},e),{},{searchTerms:[].concat(Object(w.a)(e.searchTerms),[t.payload])});case O:return console.log("deleting"),console.log(t.payload),Object(Q.a)(Object(Q.a)({},e),{},{searchTerms:e.searchTerms.filter((function(e){return e!==t.payload}))});default:return e}}}),F=[S.a],W=Object(L.createStore)(T,{},Object(X.composeWithDevTools)(L.applyMiddleware.apply(void 0,F))),k=(n(192),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).fetchResults=function(e){e?fetch("https://hn.algolia.com/api/v1/search?query=".concat(e)).then((function(e){return e.json()})).then((function(e){return c.setState({results:e.hits})})):fetch("https://hn.algolia.com/api/v1/search?tags=front_page").then((function(e){return e.json()})).then((function(e){return c.setState({results:e.hits})}))},c.state={results:[]},c}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchResults()}},{key:"render",value:function(){return Object(m.jsx)(g.a,{store:W,children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"App-logo",alt:"logo"}),Object(m.jsx)("h2",{children:"Hacker News"})]}),Object(m.jsxs)("div",{id:"form-results-container",children:[Object(m.jsx)(B,{handleSearch:this.fetchResults}),Object(m.jsx)(p,{data:this.state.results})]})]})})}}]),n}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){}},[[193,1,2]]]);
//# sourceMappingURL=main.649ded26.chunk.js.map