(this.webpackJsonpnba=this.webpackJsonpnba||[]).push([[17],{283:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(49),c=function(e){return e.statistics.searchPlayer.response.data},o=function(e){return e.statistics.searchPlayer.loading},u=function(e){return e.statistics.searchPlayer.selectedPlayer},i=a(18),s=a(25),m=a(5),E=a(129),f=a(239),p=a(110),b=a(290),d=a(8),O=a(109),g=a(293),j=Object(O.a)((function(e){return Object(g.a)({root:{"& .MuiInputLabel-root.Mui-focused":{color:e.palette.primaryColor},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.primaryColor},"& label":Object(d.a)({},e.breakpoints.down("xs"),{fontSize:14,lineHeight:1.4})}})})),v=function(e){var t=e.onFinishSearch,a=e.selectedPlayers,u=j(),s=Object(r.b)(),d=Object(n.useState)(!1),O=Object(E.a)(d,2),g=O[0],v=O[1],h=Object(n.useState)(""),y=Object(E.a)(h,2),P=y[0],S=y[1],F=Object(n.useState)([]),A=Object(E.a)(F,2),_=A[0],x=A[1],I=Object(r.c)(c),N=Object(r.c)(o);Object(n.useEffect)((function(){x(I)}),[x,I]);var T=function(e){S(e.target.value),t(e.target.value)};return l.a.createElement(b.a,{multiple:!0,className:u.root,value:a,closeIcon:!1,forcePopupIcon:!1,open:g&&0!==P.length,onOpen:function(){v(!0)},onClose:function(){x([]),S(""),v(!1)},noOptionsText:"Player not found",options:_,getOptionLabel:function(e){var t=e.first_name,a=e.last_name,n=e.team;return"".concat(t," ").concat(a,"  - ").concat(n.abbreviation)},getOptionSelected:function(e,t){return e.first_name===t.first_name},loading:N,onChange:function(e,t){s(Object(i.b)(t))},renderInput:function(e){return l.a.createElement(f.a,Object.assign({},e,{variant:"outlined",label:"SEARCH FOR A PLAYER e.g. LEBRON JAMES",onChange:T,InputProps:Object(m.a)(Object(m.a)({},e.InputProps),{},{endAdornment:l.a.createElement(l.a.Fragment,null,N&&l.a.createElement(p.a,{color:"inherit",size:20}),e.InputProps.endAdornment)})}))},renderTags:function(){return null}})},h=a(166),y=function(e){return e.statistics.seasonAverages.response.data},P=function(e){return e.statistics.seasonAverages.loading},S=a(51),F=a(270),A=a(271),_=a(276),x=a(272),I=a(275),N=a(181),T=Object(O.a)((function(e){return Object(g.a)({container:{paddingBottom:"40px"},name:{fontSize:"18px",marginBottom:"5px"},info:{fontSize:"14px"},table:{overflowX:"auto"}})})),M=l.a.memo((function(e){var t=e.playerFullInfo,a=T();return l.a.createElement(l.a.Fragment,null,null===t||void 0===t?void 0:t.map((function(e,t){var n=e.id,r=e.last_name,c=e.first_name,o=e.position,u=e.team;return l.a.createElement("div",{key:n,className:a.container,style:{color:N.a[t%N.a.length]}},l.a.createElement("p",{className:a.name},"".concat(c," ").concat(r," ")),l.a.createElement("p",{className:a.info},"Position: ".concat(o||"-"," | Team: ").concat(u.abbreviation)),l.a.createElement("div",{className:a.table},l.a.createElement(F.a,null,l.a.createElement(A.a,null,l.a.createElement(x.a,null,l.a.createElement(I.a,null,"GP"),l.a.createElement(I.a,null,"MIN"),l.a.createElement(I.a,null,"FGM"),l.a.createElement(I.a,null,"FGA"),l.a.createElement(I.a,null,"FG%"),l.a.createElement(I.a,null,"FG3M"),l.a.createElement(I.a,null,"FG3A"),l.a.createElement(I.a,null,"FG3%"),l.a.createElement(I.a,null,"FTM"),l.a.createElement(I.a,null,"FTA"),l.a.createElement(I.a,null,"FT%"),l.a.createElement(I.a,null,"OREB"),l.a.createElement(I.a,null,"DREB"),l.a.createElement(I.a,null,"REB"),l.a.createElement(I.a,null,"AST"),l.a.createElement(I.a,null,"STL"),l.a.createElement(I.a,null,"BLK"),l.a.createElement(I.a,null,"TO"),l.a.createElement(I.a,null,"PF"),l.a.createElement(I.a,null,"PTS"))),function(e){var t=e.games_played,a=e.min,n=e.fgm,r=e.fga,c=e.fg_pct,o=e.fg3m,u=e.fg3a,i=e.fg3_pct,s=e.ftm,m=e.fta,E=e.ft_pct,f=e.oreb,p=e.dreb,b=e.reb,d=e.ast,O=e.stl,g=e.blk,j=e.turnover,v=e.pf,h=e.pts;return l.a.createElement(_.a,null,l.a.createElement(x.a,null,l.a.createElement(I.a,null,t||"-"),l.a.createElement(I.a,null,a||"-"),l.a.createElement(I.a,null,n||"-"),l.a.createElement(I.a,null,r||"-"),l.a.createElement(I.a,null,c||"-"),l.a.createElement(I.a,null,o||"-"),l.a.createElement(I.a,null,u||"-"),l.a.createElement(I.a,null,i||"-"),l.a.createElement(I.a,null,s||"-"),l.a.createElement(I.a,null,m||"-"),l.a.createElement(I.a,null,E||"-"),l.a.createElement(I.a,null,f||"-"),l.a.createElement(I.a,null,p||"-"),l.a.createElement(I.a,null,b||"-"),l.a.createElement(I.a,null,d||"-"),l.a.createElement(I.a,null,O||"-"),l.a.createElement(I.a,null,g||"-"),l.a.createElement(I.a,null,j||"-"),l.a.createElement(I.a,null,v||"-"),l.a.createElement(I.a,null,h||"-")))}(e))))})))})),C=Object(O.a)((function(e){return Object(g.a)({container:{},title:Object(d.a)({padding:"50px 0 30px",textAlign:"center",color:e.palette.primaryColor},e.breakpoints.down("xs"),{paddingTop:20,fontSize:24})})})),B=function(e){var t=e.selectedPlayers,a=C(),c=Object(n.useState)(null),o=Object(E.a)(c,2),u=o[0],i=o[1],s=Object(r.c)(y),f=Object(r.c)(P);return Object(n.useEffect)((function(){var e=null===t||void 0===t?void 0:t.reduce((function(e,t){var a=s.filter((function(e){return e.player_id===t.id})).map((function(e){return e?Object(m.a)(Object(m.a)({},e),t):t})).find(Boolean);return[].concat(Object(h.a)(e),a?[a]:[t])}),[]);i(e)}),[s,t]),l.a.createElement("div",{className:a.container},l.a.createElement("h1",{className:a.title},"'20 - '21 SEASON AVERAGES"),f?l.a.createElement(S.a,null):l.a.createElement(M,{playerFullInfo:u}))},G=a(298),R=a(238),k=a.n(R),L=Object(O.a)((function(e){return Object(g.a)({root:{margin:"20px 0"},chip:{margin:"0 10px 10px 0"}})})),w=function(e){var t=e.selectedPlayers,a=L(),n=Object(r.b)(),c=t.map((function(e,r){var c=e.id,o=e.first_name,u=e.last_name,s=N.a[r%N.a.length];return l.a.createElement(G.a,{key:c,variant:"outlined",className:a.chip,style:{color:s,borderColor:s},label:"".concat(o," ").concat(u," "),deleteIcon:l.a.createElement(k.a,{style:{color:s}}),onDelete:function(){n(Object(i.b)(t.filter((function(t){return t!==e}))))}})}));return l.a.createElement("div",{className:a.root},c)};t.default=function(){var e=Object(r.b)(),t=Object(r.c)(u);return Object(n.useEffect)((function(){var a=null===t||void 0===t?void 0:t.map((function(e){return e.id}));a.length&&e(s.a.request({player_ids:a}))}),[e,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{onFinishSearch:function(t){e(i.a.request({search:t}))},selectedPlayers:t}),l.a.createElement(w,{selectedPlayers:t}),(null===t||void 0===t?void 0:t.length)?l.a.createElement(B,{selectedPlayers:t}):null)}}}]);