"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{828:function(n,t,e){e.r(t);var r,a,i,c,o,u,s,p=e(885),d=e(168),f=e(791),l=e(689),h=e(545),g=e(731),x=e(820),v=e(444),w=e(184),Z=v.ZP.div(r||(r=(0,d.Z)(["\n  width: 1280px;\n  padding: 22px 24px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=(0,v.ZP)(g.OL)(a||(a=(0,d.Z)(["\n  text-decoration: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &.active {\n    color: white;\n    background-color: orangered;\n    border-radius: 4px;\n    padding: 4px 6px;\n  }\n"]))),b=v.ZP.li(i||(i=(0,d.Z)(["\n  list-style-type: none;\n"]))),k=v.ZP.ul(c||(c=(0,d.Z)(["\n  /* display: flex; */\n  padding: 0;\n  margin: 0;\n"]))),y=v.ZP.button(o||(o=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 50px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 10px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  font: inherit;\n  font-size: inherit;\n  background-color: #dcf2b0;\n  &:hover {\n    color: white;\n    background-color: orangered;\n  }\n"]))),j=v.ZP.h2(u||(u=(0,d.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),_=v.ZP.p(s||(s=(0,d.Z)(["\n  font-weight: 400;\n  font-size: 15px;\n"])));t.default=function(){var n=(0,f.useState)(null),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)([]),i=(0,p.Z)(a,2),c=i[0],o=i[1],u=(0,l.UO)().movieId,s=(0,l.TH)(),d=(0,l.s0)();(0,f.useEffect)((function(){(0,h.s9)(u).then(r)}),[u]),(0,f.useEffect)((function(){(0,h.JZ)(u).then(o)}),[u]);if(e&&c)return(0,w.jsxs)(Z,{children:[(0,w.jsx)(y,{type:"button",onClick:function(){d(s.state.from)},children:(0,w.jsx)(x.kyg,{size:"1rem"})}),(0,w.jsx)("h1",{children:e.title}),(0,w.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500"+e.backdrop_path),alt:e.title,width:500,height:300}),(0,w.jsxs)(j,{children:["Popularity: ",e.popularity.toFixed(0)]}),(0,w.jsxs)(j,{children:["Vote Average: ",e.vote_average.toFixed(1)]}),(0,w.jsx)(j,{children:"Genres:"}),(0,w.jsx)(k,{children:c.map((function(n){var t=n.id,e=n.name;return(0,w.jsx)(b,{children:e},t)}))}),(0,w.jsxs)(j,{children:["Overview: ",(0,w.jsx)(_,{children:e.overview})]}),(0,w.jsx)(j,{children:"Additional information"}),(0,w.jsx)(m,{to:"cast",state:s.state,children:"Cast"}),(0,w.jsx)(m,{to:"reviews",state:s.state,children:"Reviews"}),(0,w.jsx)(l.j3,{})]})}},545:function(n,t,e){e.d(t,{IQ:function(){return d},JS:function(){return u},JZ:function(){return l},Jh:function(){return f},Kd:function(){return p},s9:function(){return s}});var r=e(861),a=e(687),i=e.n(a),c=e(44),o="301d018a3b09052968e9ce18b1793bab";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data.genres,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=828.ab4f3f28.chunk.js.map