(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],{16:function(e,t,n){e.exports={main:"main-container_main__2EJkD"}},17:function(e,t,n){e.exports={categoryItems:"category-items_categoryItems__3ViZz"}},18:function(e,t,n){e.exports={categoryItem:"category-item_categoryItem__3iEcS"}},33:function(e,t,n){},34:function(e,t){window.play=function(e){var t=e.spotify_uri,n=e.playerInstance._options,a=n.getOAuthToken,r=n.id;a((function(e){fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(r),{method:"PUT",body:JSON.stringify({uris:[t,"spotify:track:7xGfFoTpQ2E7fRF5lN10tr"]}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}))},window.onSpotifyWebPlaybackSDKReady=function(){var e=new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e("BQBFs3MCjoJFeaWng7huEemzi0y2SXmweFfAixyexfsDFlXx2ntr9gnDW5kqqE1fswkQDTql54u3FYItJ9m2SNUMoQ5-tS6iqbUF_xyMinYUhhbPoi9CKwAojwie_B_XHYdAoeAICYPvnSw3Eni6fo8KY84kgyY4hjYp0rX7N1_PbSx_SYavCOw")}});window.player=e,e.addListener("initialization_error",(function(e){var t=e.message;console.error(t)})),e.addListener("authentication_error",(function(e){var t=e.message;console.error(t)})),e.addListener("account_error",(function(e){var t=e.message;console.error(t)})),e.addListener("playback_error",(function(e){var t=e.message;console.error(t)})),e.addListener("player_state_changed",(function(e){console.log(e)})),e.addListener("ready",(function(t){var n=t.device_id;console.log("Ready with Device ID",n),window.play({playerInstance:e,spotify_uri:"spotify:track:6eqth4FmYzrreFVlTlp53I"})})),e.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),e.connect()}},36:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(6),s=n.n(o),i=n(7),u=n.n(i);var d=function(e){return Object(a.jsxs)("header",{className:u.a.header,children:[Object(a.jsxs)("h2",{className:u.a.projectName,children:[Object(a.jsx)("span",{children:"S"})," ",Object(a.jsx)("span",{children:"Music"})]}),Object(a.jsx)("h1",{className:u.a.heading,children:"Select category"})]})},l=n(5),h=n.n(l),p=n.p+"static/media/settings.ea975a85.svg",f=n(4),g="GET_CATEGORIES",j="SET_CATEGORIES",m=n(3),_=n.n(m),y=n(8);function b(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var v=function(){var e="https://api.spotify.com/v1/",t=function(){var e=Object(y.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded",Authorization:"Basic ".concat(btoa("d08f348eb8f4452fac895c872a8dc6db:5220576e1d024c9392bae5cf8599aa04"))},body:"grant_type=client_credentials"});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var t=Object(y.a)(_.a.mark((function t(){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 15,t.next=3,fetch("".concat(e,"browse/categories?limit=").concat(15),{headers:{Authorization:"".concat(b("token_type")," ").concat(b("token"))}});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(y.a)(_.a.mark((function t(n){var a,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"search?q=").concat(n,"&type=track"),{headers:{Authorization:"".concat(b("token_type")," ").concat(b("token"))}});case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,console.log(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t().then((function(e){document.cookie="token=".concat(e.access_token),document.cookie="token_type=".concat(e.token_type),console.log(document.cookie)})),{getListOfCategories:n,searchByTrackName:a}}(),x=function(){return{type:g}},O=function(e){return{type:j,categories:e}};var w={getCategoriesList:function(){return function(e){e(x),v.getListOfCategories().then((function(t){e(O(t.categories))})).catch((function(e){console.log("ERR ",e)}))}}},k=Object(f.b)(null,w)((function(e){return Object(a.jsxs)("div",{className:h.a.searchBar,children:[Object(a.jsxs)("div",{className:h.a.searchMain,children:[Object(a.jsx)("input",{type:"text",defaultValue:"text",placeholder:"Type name of song here"}),Object(a.jsx)("div",{className:"searchControls",children:Object(a.jsx)("button",{onClick:e.getCategoriesList,children:"Search"})})]}),Object(a.jsxs)("div",{className:h.a.searchSettings,children:[Object(a.jsx)("div",{className:h.a.searchArrow,children:Object(a.jsx)("div",{className:h.a.triangle})}),Object(a.jsx)("img",{src:p,alt:""})]})]})})),S=n(16),N=n.n(S);var C=function(e){return Object(a.jsxs)("main",{className:N.a.main,children:[" ",e.children," "]})},I=n(17),B=n.n(I),T=n(18),A=n.n(T);var F=function(e){return console.log(e),Object(a.jsx)("div",{className:A.a.categoryItem,style:{backgroundImage:"url(".concat(e.icons[0].url,")")},children:Object(a.jsx)("h2",{children:e.name})})};var E=Object(f.b)((function(e){return{categories:e.categoriesReducer.categories}}))((function(e){return Object(a.jsx)("section",{className:B.a.categoryItems,children:e.categories&&e.categories.items.map((function(e){return Object(a.jsx)(F,{name:e.name,icons:e.icons})}))})}));n(33);var L=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{}),Object(a.jsxs)(C,{children:[Object(a.jsx)(k,{}),Object(a.jsx)(E,{})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},R=n(2),P=n(19),M=n(20),Y=n.n(M),z=n(21),J=n(13),Q={categories:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.categories;return Object(J.a)(Object(J.a)({},e),{},{categories:n});case g:default:return e}},G=Object(R.combineReducers)({categoriesReducer:q}),H=Object(R.createStore)(G,Object(P.composeWithDevTools)(Object(R.applyMiddleware)(z.a,Y.a)));n(34),n(35);window.getCookie=b;var K=v;K.getListOfCategories(),K.searchByTrackName("triflin");var U=Object(a.jsx)(f.a,{store:H,children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})})}),V=document.getElementById("root");s.a.render(U,V),D()},5:function(e,t,n){e.exports={searchBar:"searchBar_searchBar__1SwQQ",searchMain:"searchBar_searchMain__kVGnz",searchSettings:"searchBar_searchSettings__V_dvM",gear:"searchBar_gear__dwD6H",searchArrow:"searchBar_searchArrow__3FyGt",triangle:"searchBar_triangle__KeSJ5",ficker:"searchBar_ficker__3_IsF"}},7:function(e,t,n){e.exports={header:"Header_header__1r-5I",projectName:"Header_projectName__1-clY",heading:"Header_heading__2C2L8"}}},[[36,1,2]]]);
//# sourceMappingURL=main.4c130b14.chunk.js.map