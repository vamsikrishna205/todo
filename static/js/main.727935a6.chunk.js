(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{107:function(t,e,n){},108:function(t,e,n){},116:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(11),c=n.n(s),o=(n(107),n.p,n(108),n(83)),r=n(14),d=n(82),l=n.n(d),b=(n(71),n(81)),p=n.n(b),h=n(74),u=n.n(h),j=n(149),g=n(80),O=n.n(g),m=n(1),x=function(t){var e=t.todolist,n=t.deleteHandler;return Object(m.jsx)("div",{children:e.map((function(t,e){return Object(m.jsxs)("div",{class:"todo_class",children:[Object(m.jsxs)("div",{class:"to_log",children:[Object(m.jsx)("div",{class:"tick_but",children:Object(m.jsx)("button",{class:"del_but",id:"but",children:Object(m.jsx)(u.a,{})})}),Object(m.jsxs)("div",{class:"cont_to",id:"strike",children:[t,"  \xa0 "]}),Object(m.jsxs)("div",{class:"icons_cont",children:[Object(m.jsx)("button",{class:"del_but",children:Object(m.jsx)(O.a,{})}),Object(m.jsx)("button",{class:"del_but",onClick:function(){return n(e)},children:Object(m.jsx)(p.a,{})})]})]}),Object(m.jsx)(j.a,{})]},e)}))})},f=n(150),w=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)([]),c=Object(r.a)(s,2),d=c[0],b=c[1];return Object(m.jsx)("div",{class:"Todo_Main_Container",children:Object(m.jsxs)("div",{class:"Todo_Content_Container",children:[Object(m.jsxs)("div",{class:"Todo_Header",children:[Object(m.jsx)("div",{class:"list_image",children:Object(m.jsx)(l.a,{id:"list_icon"})}),Object(m.jsxs)("div",{class:"Todo_Head",children:[Object(m.jsx)("div",{class:"Todo_App",children:"To Do Apps"}),Object(m.jsx)("div",{class:"Todo_Subhead",children:"All Your to do list. Just check it whenever You done."})]}),Object(m.jsx)("div",{class:"Home_tab",children:Object(m.jsx)("a",{class:"Home_link",href:"https://vamsikrishna205.github.io/outlook/",children:Object(m.jsx)(f.a,{children:"Home"})})})]}),Object(m.jsx)("div",{class:"input_Container",children:Object(m.jsxs)("form",{class:"form_input1",onSubmit:function(t){t.preventDefault();var e=[].concat(Object(o.a)(d),[n]);b(e),a("")},children:[Object(m.jsx)("input",{class:"input_field",type:"text",name:"task",value:n,onChange:function(t){a(t.target.value)},placeholder:"What needs to be done?"}),Object(m.jsx)("input",{class:"submit_but",type:"submit",value:"Press enter to submit task",name:"Add"})]})}),Object(m.jsxs)("p",{class:"text_terms",children:["Once you submit, its mean you have agreed with our \xa0\xa0",Object(m.jsx)("a",{class:"link_terms",href:"http://enlite.ux-maestro.com:3001/terms-conditions",target:"_blank",children:"terms & conditions"})]}),Object(m.jsx)(x,{todolist:d,deleteHandler:function(t){var e=d.filter((function(e,n){return n!==t}));b(e)}})]})})},k=n(6),v=n(24),y=(n(4),n(154)),_=(n(22),n(166),n(158),n(159),n(160),n(155),n(44),n(151),n(53),n(56),n(57),n(119),n(161),n(162),n(12)),C=(n(156),n(164),n(54),n(165),n(157),n(38),n(55),n(37),n(84)),R=n(5),S=(n(152),n(153),n(167)),B=["classes"];Object(R.a)((function(t){return{root:{width:36,height:20,padding:0,margin:t.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:t.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:18,height:18},track:{borderRadius:13,border:"1px solid ".concat(t.palette.grey[400]),backgroundColor:t.palette.grey[50],opacity:1,transition:t.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(t){var e=t.classes,n=Object(C.a)(t,B);return Object(m.jsx)(S.a,Object(v.a)({focusVisibleClassName:e.focusVisible,disableRipple:!0,classes:{root:e.root,switchBase:e.switchBase,thumb:e.thumb,track:e.track,checked:e.checked}},n))}));n(72),n.p,n(58),Object(y.a)((function(t){var e,n;return n={root:{display:"flex",alignItems:t.center},appBar:{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:t.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(v.a)(Object(v.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end",marginTop:"5px"}),drawerFooter:{marginTop:"auto",display:"flex"},grow:{flexGrow:1}},Object(k.a)(n,"menuButton",{marginRight:t.spacing(2)}),Object(k.a)(n,"title",Object(k.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"})),Object(k.a)(n,"search",Object(k.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(_.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.a)(t.palette.common.white,.25)},marginRight:t.spacing(5),marginLeft:t.spacing(10),width:"100%",height:"50"},t.breakpoints.up("sm"),{marginLeft:t.spacing(0),width:"100%"})),Object(k.a)(n,"searchIcon",{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"black"}),Object(k.a)(n,"inputRoot",{color:"black",height:"50px"}),Object(k.a)(n,"inputInput",(e={padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},Object(k.a)(e,t.breakpoints.down("lg"),{width:"80ch"}),Object(k.a)(e,t.breakpoints.down("md"),{width:"50ch"}),Object(k.a)(e,t.breakpoints.down("sm"),{width:"30ch"}),Object(k.a)(e,t.breakpoints.down("xs"),{width:"20ch"}),e)),Object(k.a)(n,"sectionDesktop",Object(k.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"})),Object(k.a)(n,"sectionMobile",Object(k.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})),Object(k.a)(n,"Menu_Wrap",Object(k.a)({},t.breakpoints.down("sm"),{display:"none"})),n}));var T=240;Object(y.a)((function(t){var e,n;return n={root:{display:"flex",alignItems:t.center},appBar:{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(T,"px)"),marginLeft:T,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:t.spacing(2)},hide:{display:"none"},drawer:{width:T,flexShrink:0},drawerPaper:{width:T},drawerHeader:Object(v.a)(Object(v.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end",marginTop:"6px"}),drawerFooter:{marginTop:"auto",display:"flex"},grow:{flexGrow:1}},Object(k.a)(n,"menuButton",{marginRight:t.spacing(2)}),Object(k.a)(n,"title",Object(k.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"})),Object(k.a)(n,"search",Object(k.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(_.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.a)(t.palette.common.white,.25)},marginRight:t.spacing(5),marginLeft:t.spacing(5),width:"100%",height:"50"},t.breakpoints.up("sm"),{marginLeft:t.spacing(0),width:"100%"})),Object(k.a)(n,"searchIcon",{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"black"}),Object(k.a)(n,"inputRoot",{color:"black",height:"50px"}),Object(k.a)(n,"inputInput",(e={padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},Object(k.a)(e,t.breakpoints.down("lg"),{width:"80ch"}),Object(k.a)(e,t.breakpoints.down("md"),{width:"50ch"}),Object(k.a)(e,t.breakpoints.down("sm"),{width:"30ch"}),Object(k.a)(e,t.breakpoints.down("xs"),{width:"20ch"}),e)),Object(k.a)(n,"sectionDesktop",Object(k.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"})),Object(k.a)(n,"sectionMobile",Object(k.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})),Object(k.a)(n,"Menu_Wrap",Object(k.a)({},t.breakpoints.down("sm"),{display:"none"})),n}));var I=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(w,{})})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),H()},71:function(t,e,n){},72:function(t,e,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.727935a6.chunk.js.map