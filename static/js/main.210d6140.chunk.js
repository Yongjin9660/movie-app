(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(3),i=s.n(r),n=s(14),c=s.n(n),o=s(5),m=s.n(o),l=s(15),u=s(16),d=s(17),j=s(20),v=s(19),p=s(18),b=s.n(p),h=s(2),g=s.n(h);s(46);function y(e){var t=e.year,s=e.title,r=e.summary,i=e.poster,n=e.genres;return Object(a.jsxs)("div",{class:"movie",children:[Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"genres",children:n.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[r.slice(0,140),"..."]})]})]})}y.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var O=y,x=(s(47),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));c.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.210d6140.chunk.js.map