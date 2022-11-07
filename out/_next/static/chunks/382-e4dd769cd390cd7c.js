"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{6046:function(n,e,r){var t=r(5893),i=r(4288),a=r(9630),o=r(6070),c=r(9144),s=r(918),$=r(4065),l=r(9618),d=r(7028),h=r(3508),u=r(5413),p=r(32),x=r(1927),f=r(9655),Z=r(6068),m=r(9132),_=r(665),j=r(4900),v=r(6399),g=r(6535),y=r(5084),w=r(7667),b=r(7294),k=function(n){var e=n.charInfoList,r=n.isDeleting,k=n.deleteCharInfoHandler,C=(0,b.useState)({}),I=C[0],E=C[1];return(0,b.useEffect)(function(){var n={IR:"#000000",RED:f.Z[900],ORANGE:Z.Z[500],YELLOW:m.Z[800],GREEN:_.Z[800],BLUE:j.Z[500],INDIGO:v.Z[500],UV:g.Z[500]},r={},t=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var s=o.value;r[s.id]=(0,p.Z)({palette:{primary:{main:n[s.information.CoreInformation.clearance]},secondary:{main:"#ffffff"}}})}}catch($){i=!0,a=$}finally{try{t||null==c.return||c.return()}finally{if(i)throw a}}E(r)},[e]),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{component:"main",maxWidth:"md",sx:{mb:4},children:(0,t.jsxs)($.Z,{defaultExpanded:!0,variant:"outlined",children:[(0,t.jsx)(l.Z,{expandIcon:(0,t.jsx)(h.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)(a.Z,{component:"h3",variant:"h6",children:"キャラクター一覧"})}),(0,t.jsxs)(d.Z,{children:[r&&(0,t.jsx)(o.Z,{}),Object.keys(I).length>0?(0,t.jsx)(c.Z,{spacing:2,children:e.map(function(n){return(0,t.jsx)(s.Z,{variant:"outlined",children:(0,t.jsxs)(u.Z,{container:!0,spacing:2,margin:1,p:1,children:[(0,t.jsxs)(u.Z,{xs:9,children:[(0,t.jsx)(x.Z,{theme:I[n.id],children:(0,t.jsxs)(a.Z,{variant:"h6",color:"primary",children:[n.information.CoreInformation.name,"-",n.information.CoreInformation.clearance,"-",n.information.CoreInformation.sector,"-",n.information.CoreInformation.number[0]]})}),(0,t.jsxs)(u.Z,{container:!0,children:[(0,t.jsx)(u.Z,{xs:6,children:(0,t.jsxs)(a.Z,{variant:"body1",children:["タグ : ",n.tag]})}),(0,t.jsx)(u.Z,{xs:6,children:(0,t.jsxs)(a.Z,{variant:"body1",children:["最終更新日時 : ",n.lastUpdate]})})]})]}),(0,t.jsx)(u.Z,{xs:1,children:(0,t.jsx)(y.Z,{variant:"contained",color:"primary",component:w.Z,to:{pathname:"/char/view/"+n.id},children:"閲覧"})}),(0,t.jsx)(u.Z,{xs:1,children:(0,t.jsx)(y.Z,{variant:"contained",color:"primary",component:w.Z,to:{pathname:"/char/edit/"+n.id},children:"編集"})}),(0,t.jsx)(u.Z,{xs:1,children:(0,t.jsx)(y.Z,{variant:"contained",color:"error",onClick:function(){console.log("削除ボタンが押されました"),k(n.id)},children:"削除"})})]})},n.id)})}):(0,t.jsx)(a.Z,{variant:"body1",children:"キャラクターが存在しません"})]})]})})})};e.Z=k},7667:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(6042),i=r(9534),a=r(5893),o=r(7294);r(1163);var c=r(1664),s=r.n(c),$=(0,r(1719).ZP)("a")({}),l=o.forwardRef(function(n,e){var r=n.to,o=n.linkAs,c=n.replace,l=n.scroll,d=n.shallow,h=n.prefetch,u=n.locale,p=(0,i.Z)(n,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,a.jsx)(s(),{href:r,prefetch:h,as:o,replace:c,scroll:l,shallow:d,passHref:!0,locale:u,children:(0,a.jsx)($,(0,t.Z)({ref:e},p))})})},3817:function(n,e,r){r.d(e,{Z:function(){return m}});var t=r(4924),i=r(5893);r(7294);var a=r(1719),o=r(1796),c=r(5050),s=r(1953),$=r(784),l=r(5345),d=r(2761),h=r(5084),u=r(7667),p=r(1163),x=(0,a.ZP)("div")(function(n){var e=n.theme;return(0,t.Z)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,o.Fq)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,o.Fq)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"})}),f=(0,a.ZP)("div")(function(n){return{padding:n.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),Z=(0,a.ZP)(l.ZP)(function(n){var e=n.theme;return{color:"inherit","& .MuiInputBase-input":(0,t.Z)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}});function m(){var n=(0,p.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{sx:{flexGrow:1},p:3,children:(0,i.jsx)(c.Z,{position:"fixed",children:(0,i.jsxs)($.Z,{children:[(0,i.jsx)(h.Z,{component:u.Z,to:{pathname:"/"},variant:"text",color:"inherit",fullWidth:!0,children:"Paranoia-R"}),(0,i.jsx)("div",{style:{flexGrow:1}}),(0,i.jsxs)(x,{children:[(0,i.jsx)(f,{children:(0,i.jsx)(d.Z,{})}),(0,i.jsx)(Z,{placeholder:"タグで検索",onKeyPress:function(e){"Enter"===e.key&&n.push({pathname:"/char/tag/[tag]",query:{tag:e.target.value}})}})]})]})})})})}},6250:function(n,e,r){var t=r(7568),i=r(655),a=r(5893),o=r(7632),c=r(1953),s=r(5050),$=r(9630),l=r(5084),d=r(5413),h=r(7294),u=r(1163),p=function(){var n,e=(0,u.useRouter)(),r=(0,h.useState)(""),p=(r[0],r[1]),x=(n=(0,t.Z)(function(){var n,r;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return[4,p(n=(0,o.Z)())];case 1:return t.sent(),r={},[4,e.push((r.pathname="/char/edit/[id]",r.query={id:n},r))];case 2:return t.sent(),[2]}})}),function(){return n.apply(this,arguments)});return(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{pt:5,children:(0,a.jsx)(s.Z,{position:"fixed",sx:{top:"auto",bottom:0},color:"secondary",children:(0,a.jsx)(c.Z,{p:2,children:(0,a.jsxs)(d.Z,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(d.Z,{xs:6,children:(0,a.jsx)($.Z,{variant:"body2",color:"text.primary",align:"center"})}),(0,a.jsx)(d.Z,{xs:3}),(0,a.jsx)(d.Z,{xs:3,children:(0,a.jsx)(l.Z,{variant:"contained",color:"primary",onClick:x,children:"新しくキャラクターを作成"})})]})})})})})};e.Z=p},1547:function(n){n.exports=JSON.parse('{"J":"https://asia-northeast1-database-paranoia-r.cloudfunctions.net/"}')}}]);