"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{828:function(t,e,n){n.r(e);var r=n(885),a=n(791),c=n(689),u=n(545),s=n(731),i=n(184);e.default=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,c.UO)().movieId,f=(0,c.TH)(),l=(0,c.s0)();(0,a.useEffect)((function(){(0,u.s9)(p).then(o)}),[p]);if(n)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{type:"button",onClick:function(){l(f.state.from)},children:"Go back"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:n.title}),(0,i.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500"+n.poster_path),alt:n.title}),(0,i.jsxs)("p",{children:["Popularity: ",n.popularity.toFixed(0)]}),(0,i.jsxs)("p",{children:["Vote Average:",n.vote_average.toFixed(1)]}),(0,i.jsxs)("p",{children:["Overview: ",n.overview]})]}),(0,i.jsx)("p",{children:"Additional information"}),(0,i.jsx)(s.rU,{to:"cast",state:f.state,children:"Cast"}),(0,i.jsx)(s.rU,{to:"reviews",state:f.state,children:"Reviews"}),(0,i.jsx)(c.j3,{})]})}},545:function(t,e,n){n.d(e,{IQ:function(){return f},JS:function(){return i},Jh:function(){return l},Kd:function(){return p},s9:function(){return o}});var r=n(861),a=n(687),c=n.n(a),u=n(44),s="301d018a3b09052968e9ce18b1793bab";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=828.4a10badb.chunk.js.map