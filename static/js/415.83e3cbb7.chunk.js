"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{368:function(n,t,e){e.d(t,{O:function(){return b}});var r,a,i,c,o,u,s=e(168),p=e(731),f=e(689),d=e(444),l=e(184),g=d.ZP.div(r||(r=(0,s.Z)(["\n  width: 1280px;\n  padding: 52px 24px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=d.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: -16px;\n  list-style: none;\n  text-decoration: none;\n\n  padding: 0;\n  margin: 0;\n"]))),v=d.ZP.li(i||(i=(0,s.Z)(["\n  position: relative;\n  width: calc(33.3333% - 32px);\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n\n  transition-property: scale;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n    // background-color: #d4d4d4;\n    // z-index: 10;\n  }\n"]))),x=d.ZP.p(c||(c=(0,s.Z)(["\n  font-size: 15px;\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n  color: black;\n"]))),m=d.ZP.img(o||(o=(0,s.Z)(["\n  border-radius: 5px;\n  width: 395px;\n  height: 575px;\n  transition-property: scale;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all 1s ease-out;\n\n  cursor: pointer;\n  &:hover {\n    scale: 1.15;\n  }\n"]))),Z=(0,d.ZP)(p.OL)(u||(u=(0,s.Z)(["\n  margin-bottom: 12 px;\n  overflow: hidden;\n  list-style: none;\n  text-decoration: none;\n\n  padding: 0;\n  margin: 0;\n"]))),b=function(n){var t=n.movies,e=(0,f.TH)();return(0,l.jsx)(g,{children:(0,l.jsx)(h,{children:t.map((function(n){return(0,l.jsx)(v,{children:(0,l.jsxs)(Z,{to:"/movies/".concat(n.id),state:{from:e},children:[n.poster_path?(0,l.jsx)(m,{src:"".concat("https://image.tmdb.org/t/p/w500"+n.poster_path),alt:n.title}):(0,l.jsx)(m,{src:"".concat("https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"),alt:n.title}),(0,l.jsx)(x,{children:n.title||n.name})]})},n.id)}))})})}},415:function(n,t,e){e.r(t);var r=e(885),a=e(791),i=e(545),c=e(368),o=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,a.useEffect)((function(){(0,i.JS)().then(u)}),[]),(0,o.jsx)("main",{children:(0,o.jsx)(c.O,{movies:e})})}},545:function(n,t,e){e.d(t,{IQ:function(){return f},JS:function(){return u},JZ:function(){return l},Jh:function(){return d},Kd:function(){return p},s9:function(){return s}});var r=e(861),a=e(687),i=e.n(a),c=e(44),o="301d018a3b09052968e9ce18b1793bab";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data.genres,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.83e3cbb7.chunk.js.map