(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{28:function(e,t,a){},37:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQMAAADxGE3JAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAABmUlEQVR4nO3ZQY6CQBBGYQgLlxzBo3A0OFofpY/AkgWhBTKZ0I4pq/l1knHeWxg1fm6qBANVRURERERERET/plTUiH+xn72D2mrweDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDz+rb7b7mzO7X6D0/66534RfVL9IPog+ij6n58o85PozQVweHMBHN5cAI8Poo+itwbo8dYAPd4aoMdbA/R4a4AuP4g+iD6K3lgAlzcWwOWNBXB5YwFc3liAd/rtRYvH4/Ev9en7nILH4/H4v+Kv6/9xxXei70WfNF+LvhH9RfSt6K+i70Tfiz5pvhZ9I/rLB3jl+IPH43/f78etFeH9/nj9TfKL6GfRT6IfRR9FH0Q/PPT7g/f6/WMf3fcPFD+LfrrzX+d/tx9FHw++OeHDwdcn/HDw1QlfHX1f7JfMd8V+zvy12E+Zb4v9mPlLsY+Z357EIh8yvy1AKPJD5jc2FPkq9+sCFP3+ljvfre888/7weDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDz+jT4VhX+1JyIiIiIiIqKP7Qb5QM4QOvAL/QAAAABJRU5ErkJggg=="},40:function(e,t,a){e.exports=a.p+"static/media/loader.c63e0de9.gif"},43:function(e,t,a){e.exports=a(85)},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),c=(a(48),a(49),a(50),a(51),a(41)),s=a(9),o=function(e){return e.children};a(28);var d=function(e){return r.a.createElement("li",{className:"NAVIGATION__item"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))};a(28);var m=function(e){return r.a.createElement("ul",{className:"NAVIGATION"},r.a.createElement(d,{link:"/",active:!0},"Home"))},u=a(37),h=a.n(u);a(52);var E=function(e){return r.a.createElement("div",{className:"LOGO"},r.a.createElement("img",{src:h.a,alt:"Company logo"}))};a(53);var v=function(e){return r.a.createElement("header",{className:"MENU"},r.a.createElement("div",{className:"MENU__container"},r.a.createElement("div",{className:"MENU__container-logo"},r.a.createElement(E,null)),r.a.createElement("nav",{className:"MENU__container-nav"},r.a.createElement(m,null))))},f=a(16),A=a(17),g=a(20),p=a(18),N=a(21),S=a(38),w=a.n(S),b=a(19),k=a.n(b),_=a(11);a(76);var y=function(e){return r.a.createElement("input",{type:e.type,name:e.name,value:e.value,className:"INPUT "+e.class,onChange:e.onchange,placeholder:e.placeholder})};a(77);var R=function(e){return r.a.createElement("button",{disabled:e.disabled,className:"BUTTON "+e.class,onClick:e.clicked,type:e.type},e.children)};a(78);var O=function(e){return r.a.createElement("div",{className:"IMAGE-CARD"},r.a.createElement("div",{className:"IMAGE-CARD__imageContainer"},r.a.createElement("a",{href:e.imageDownloadUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"IMAGE-CARD__imageContainer-image",style:{backgroundImage:"url("+e.imageUrl+")"}}))),r.a.createElement("div",{className:"IMAGE-CARD__textContainer"},r.a.createElement("div",{className:"creator"},"Created by: ",r.a.createElement("span",null,e.imageCreated)),r.a.createElement("div",{className:"like-count"},"Likes: ",e.imageLikes),r.a.createElement("div",{className:"description",style:{display:e.imageDescription?"":"none"}},"Description: ",e.imageDescription," ")))};a(79);var C=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(A.a)(t,[{key:"handleDelete",value:function(e){(0,this.props.removeSearch)(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SIDEBAR",style:{left:this.props.show?"-10px":"-100%"}},r.a.createElement("div",{className:"SIDEBAR__saved"},"Your saves searches",r.a.createElement("div",{className:"SIDEBAR__saved-container"},k.a.uniq(this.props.savedItems).map((function(t){return r.a.createElement("div",{className:"SIDEBAR__saved-container-item",key:t},r.a.createElement("span",{className:"item",onClick:function(){return e.props.trigger(t)}},t," "),r.a.createElement("span",{className:"delete",onClick:function(){return e.handleDelete(t)}},"X"))})))))}}]),t}(r.a.Component);var D=Object(_.b)((function(e){return{savedItems:e.search}}),{removeSearch:function(e){return{type:"REMOVE_SEARCH",value:e}}})(C),I=a(40),P=a.n(I);a(80);var H=function(e){return r.a.createElement("div",{className:"LOADER"},r.a.createElement("img",{className:"LOADER__img",src:P.a,alt:"loader"}))};a(81);var B=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(p.a)(t).call(this,e))).state={keyword:"",clientId:"846158b19e3c8378109201e17ee9e4af71ae321f5d8d0ed7204dfccc294a18f6",result:[],loading:!1,showBtn:!1,disabledBtn:!0,page:1,totalPage:1,err:"",showSidebar:!1},a}return Object(N.a)(t,e),Object(A.a)(t,[{key:"handlePagination",value:function(e){var t=k.a.clone(this.state.page);return"next"===e?(t+=1,this.handleSubmit(t,this.state.keyword),void(t>0&&this.setState({disabledBtn:!1}))):"prev"===e?(t-=1,this.setState({err:""}),this.handleSubmit(t,this.state.keyword),void(1===t&&this.setState((function(e){return{disabledBtn:!e.disabledBtn}})))):void 0}},{key:"handleChange",value:function(e){this.setState({keyword:e.target.value})}},{key:"handleSubmit",value:function(e,t){var a=this;if(""!==t){var n="https://api.unsplash.com/search/photos?page="+e+"&query="+t+"&client_id="+this.state.clientId;this.setState((function(e){return{loading:!e.loading}})),w.a.get(n).then((function(t){0!==t.data.results.length?a.setState({result:t.data.results,loading:!1,showBtn:!0,page:e,totalPage:t.data.total_pages}):a.setState({err:"Sorry, there is no images :(",loading:!1})})).catch((function(e){a.setState({loading:!1,err:e})}))}else this.setState({err:"Please type keywords"})}},{key:"closeErr",value:function(){this.setState({err:""})}},{key:"handleShow",value:function(){this.setState((function(e){return{showSidebar:!e.showSidebar}}))}},{key:"addToRedux",value:function(){var e=this;""!==this.state.keyword?((0,this.props.addSearch)(this.state.keyword),!0!==this.state.showSidebar&&(this.handleShow(),setTimeout((function(){e.handleShow()}),2e3))):this.setState({err:"There is nothing to save :("})}},{key:"getSaveClick",value:function(e){this.handleSubmit(1,e),this.setState({keyword:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"SECTION-FIRST"},r.a.createElement("div",{className:"loader",style:{display:this.state.loading?"":"none"}},r.a.createElement(H,null)),r.a.createElement(D,{trigger:this.getSaveClick.bind(this),show:this.state.showSidebar,search:function(){return e.handleSubmit(e.state.page)}}),r.a.createElement("div",{className:"SEARCH"},r.a.createElement("div",{className:"SEARCH__background d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"SEARCH__header"},r.a.createElement("div",{className:"SEARCH__header-title"},r.a.createElement("h1",null,"Unsplash Photo search")),r.a.createElement("div",{className:"SEARCH__header-input"},r.a.createElement(y,{onchange:this.handleChange.bind(this),type:"text",value:this.state.keyword,name:"keyword",placeholder:"Search for Photos..."})),r.a.createElement("div",{className:"SEARCH__header-err",style:{display:this.state.err?"":"none"}},this.state.err,r.a.createElement("span",{className:"closeErr",onClick:function(){return e.closeErr()}},"X")),r.a.createElement("div",{className:"SEARCH__header-buttons"},r.a.createElement(R,{clicked:function(){return e.handleShow()}}," Saved "),r.a.createElement(R,{clicked:function(){return e.handleSubmit(1,e.state.keyword)},type:"submit",class:"search"},"Search"),r.a.createElement(R,{disabled:this.state.disableSaveBtn,clicked:function(){return e.addToRedux()}}," ","Save"," ")))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row rowfix"},this.state.result.map((function(e){return r.a.createElement("div",{className:"col",key:e.id},r.a.createElement(O,{imageUrl:e.urls.small,imageAlt:e.alt_description,imageCreated:e.user.name,imageLikes:e.likes,imageDescription:e.description,imageDownloadUrl:e.links.download}))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"SEARCH__container-pagination",style:{display:this.state.showBtn?"":"none"}},r.a.createElement(R,{class:"rev",disabled:this.state.disabledBtn,clicked:function(){return e.handlePagination("prev")}},"Prev"),r.a.createElement("span",null,this.state.page," of ",this.state.totalPage),r.a.createElement(R,{class:"rev",clicked:function(){return e.handlePagination("next")}},"Next"))))))}}]),t}(r.a.Component),j=Object(_.b)(null,{addSearch:function(e){return{type:"ADD_SEARCH",value:e}}})(B);a(82);var x=function(e){return r.a.createElement("footer",{className:"FOOTER"},r.a.createElement("div",{className:"FOOTER__container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/evaldas-doda-995492165/"},"I made this ")))};a(83);var T=function(e){return r.a.createElement(o,null,r.a.createElement(v,null),r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j}))),r.a.createElement(x,null))};var U=function(){return r.a.createElement("div",{className:"APP"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(10),F=a(13),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SEARCH":return[].concat(Object(F.a)(e.slice(0,t.value)),[t.value],Object(F.a)(e.slice(t.value)));case"REMOVE_SEARCH":var a=e.indexOf(t.value);return[].concat(Object(F.a)(e.slice(0,a)),Object(F.a)(e.slice(a+1)));default:return e}},X=Object(L.b)({search:M}),Q=Object(L.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(_.a,{store:Q},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.148bde68.chunk.js.map