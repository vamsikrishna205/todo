(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(11),s=t.n(n),r=(t(107),t.p,t(108),t(81)),o=t(14),l=t(34),d=t.n(l),j=(t(70),t(80)),b=t.n(j),u=t(73),h=t.n(u),p=t(149),O=t(79),x=t.n(O),m=t(1),g=function(e){var a=e.todolist,t=e.deleteHandler;return Object(m.jsx)("div",{children:a.map((function(e,a){return Object(m.jsxs)("div",{class:"todo_class",children:[Object(m.jsxs)("div",{class:"to_log",children:[Object(m.jsx)("div",{class:"tick_but",children:Object(m.jsx)("button",{class:"del_but",id:"but",children:Object(m.jsx)(h.a,{})})}),Object(m.jsxs)("div",{class:"cont_to",id:"strike",children:[e,"  \xa0 "]}),Object(m.jsxs)("div",{class:"icons_cont",children:[Object(m.jsx)("button",{class:"del_but",children:Object(m.jsx)(x.a,{})}),Object(m.jsx)("button",{class:"del_but",onClick:function(){return t(a)},children:Object(m.jsx)(b.a,{})})]})]}),Object(m.jsx)(p.a,{})]},a)}))})},f=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],i=a[1],n=Object(c.useState)([]),s=Object(o.a)(n,2),l=s[0],j=s[1];return Object(m.jsxs)("div",{class:"Todo_Main_Container",children:[Object(m.jsx)("div",{class:"Todo_Empty"}),Object(m.jsxs)("div",{class:"Todo_Content_Container",children:[Object(m.jsxs)("div",{class:"Todo_Header",children:[Object(m.jsx)("div",{class:"list_image",children:Object(m.jsx)(d.a,{id:"list_icon"})}),Object(m.jsxs)("div",{class:"Todo_Head",children:[Object(m.jsx)("div",{class:"Todo_App",children:"To Do Apps"}),Object(m.jsx)("div",{class:"Todo_Subhead",children:"All Your to do list. Just check it whenever You done."})]})]}),Object(m.jsx)("div",{class:"input_Container",children:Object(m.jsxs)("form",{class:"form_input1",onSubmit:function(e){e.preventDefault();var a=[].concat(Object(r.a)(l),[t]);j(a),i("")},children:[Object(m.jsx)("input",{class:"input_field",type:"text",name:"task",value:t,onChange:function(e){i(e.target.value)},placeholder:"What needs to be done?"}),Object(m.jsx)("input",{class:"submit_but",type:"submit",value:"Press enter to submit task",name:"Add"})]})}),Object(m.jsxs)("p",{class:"text_terms",children:["Once you submit, its mean you have agreed with our \xa0\xa0",Object(m.jsx)("a",{class:"link_terms",href:"http://enlite.ux-maestro.com:3001/terms-conditions",target:"_blank",children:"terms & conditions"})]}),Object(m.jsx)(g,{todolist:l,deleteHandler:function(e){var a=l.filter((function(a,t){return t!==e}));j(a)}})]})]})},v=t(6),k=t(24),w=t(4),y=t(153),N=t(22),A=t(165),B=t(157),L=t(158),I=t(159),R=t(154),C=t(45),S=t(150),T=t(54),V=t.n(T),F=t(57),M=t.n(F),Z=t(58),K=t.n(Z),X=t(119),W=t(160),P=t(161),z=t(13),J=t(155),q=t(163),Q=t(55),H=t.n(Q),E=t(164),U=t(156),Y=t(39),D=t.n(Y),G=t(56),_=t.n(G),$=t(38),ee=t.n($),ae=t(82),te=t(5),ce=t(151),ie=t(152),ne=t(166),se=["classes"],re=Object(te.a)((function(e){return{root:{width:36,height:20,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:18,height:18},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=Object(ae.a)(e,se);return Object(m.jsx)(ne.a,Object(k.a)({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))}));function oe(){var e=i.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(m.jsx)(ce.a,{children:Object(m.jsx)(ie.a,{control:Object(m.jsx)(re,{checked:t.checkedB,onChange:function(e){c(Object(k.a)(Object(k.a)({},t),{},Object(v.a)({},e.target.name,e.target.checked)))},name:"checkedB"})})})}var le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5hSURBVHgB7Z2/c9vIFccfQMnjVKLOTbqDJHsmnelU6Qw1mXFuMpaKXOJJcVR5le2/wNJfYOsvEFldzo3kySROZ7hLZ7pLxj8E/wM2XSSxzyKR94UWPIri/gAIEAC1nxmaIrGgSXzx3r7dfbvr0ALgeV6Tn1qNRsOLoui64zh4jb89HBevm5Pn8fGQn/p8vI9nfv0Sz8PhsMfPvTAM+1RzHKohLKjvum6LhbnJouDZo2II+dHj/+M5RGfBA6oZtRAYFsqCtlnI2/yyRVOscU7AogN+PBkMBgELHlLFqazAE6L6VE0CfnSrLHblBIb75br0O/5zi8qz1Cx0WOhu1dx4ZQQWwj6g6lqrEVxf99jr7L9586ZDFaB0gUXA9JAvSovyBVExIuQweS0eYBRVI9KWRdkzEvJjr2yhSxM4R4uNAx8W6h0L1eObpffly5cwbRMHdf7y8rLH0bInIvPr4rvNKnzIrnunLNc9d4H5Qnos7AFlFxbCHaHNymIcFR3cXLt2rcX/D7xLEuxlFRx19N68g7G5Cry+vn6XLWOX0l8kuNsuW+fR69evAyqRq1ev+vxd2vy4maH9jd/x6O3bt3s0J+Yi8AxWG/BjXzRDKtertLGx0eYnRPw+pQNue3Me1ly4wBmttsPndMu2VlPEDbxLp2KbAmveY2t+RAVSmMCio+IBC3UvxWml1FN5kUVo4bLvU0EUIjB+KIt7mKLpE4hIM6QFIIPQhbns3AVG1Mlf9tAwAAm53E5dXHFaUEezhT4wvRZFiNygHOEftMU/COL+0qA4gqc77J7+RQvKhw8feisrK1225s+kD8Tivvevvvrq33xebtckNwtmceGOOgZFF9pqZaB5xe3pA0NrbnMPWJdyIBcLTiEu6trNRbZaGe/fvw/Zmp+wlXr88lea4ltsySFb8kuakZkFNhWX71z0y+70+/1PdEHh395n0X68cuUKPKevKZ6LyDMJjDqXn/6iKYYOiu9Z3ELbe3WCrTlg8d7RqciXFUUh8stZ6uTMdbBoCrwgdQdGn13S5qtXr3pkOYdhi2Oma5hJYNHOfab5YnPrjqszRV9LlzJgxc0PXCOOrjdFhqeMuONIZI+mIrXA3Lf80IqbL4nI9HNCwjnQK4iuX0pJKoHFwIGqbxn1xbYVNz24ZqhrSS3yPdYgTd++eR1sGFTtVCUXqa6IIcgDRZE+e8gbpkZkbMGod0khrmjndsgyE7iGuJaKIk0xtm6EUTuY3QI6zLcURY74i31PllwQ7WSf//QkRbzV1dWP3D7+J2nQWjBcs6beRVBV2HjmRYWv6bYqsmZNHkAb0qAVWGQ+qlzzwozjVgmkKHG1uKMoYuSqlS5a5CxLuxhRV/CoUIcshYABCnbVq/znbyRFPO7Xfo5yss9QWjCLq7pDwpOTE9u/XDDsqndVrhoJBarzpQIjXNd0aOwtwvzZqmPgqn2MNcsOSgXW3Bkd2ySaHyI5IpAd516wh7JjUwXWWS8yH8kyV5CUKDuGbkyZFU8VmK33Lsnp2Kh5/ohrLk3jkXnccwIjclalu1rrLQ8EXIrDU+vicwKLydcyrPWWiIEVn9PujMCiZ6Qt+wBrveXD3rWjOLw1OWZ8RmC2Xl9xcmCtt3w0EXWcWz3+xtJEAZV7ziVPNy0iwUA5BYabbJtUANyaeKY6juUaipxXpGCfJFmZYtGaUQfUSGDhnn3JB4ZltXuFuD6Vg686yN+NygDTadnbopNp2hiBDzeddEKNXLTOPZOlMkA8TIiXHR930+N18G3ZCZirS5ZKgdUOZMeEmz4tN/a+Lynfv2jziOqA0EQ2FjCKWWKB0blB8jHf52SpJNwH/URyqJl0esQCY2FPxecckaWSYNko2TGxMtCpwFi1VVaQIzY77aSiYBkp2THW1MdzLDAW/pKU63PEZgWuKKLjSVYPYyE3ctFmUgwN2vq3+gSS9714IRwai7gmQU8NWSoNlnCUHVtaWsJ0F3mAJZa2t1QYVaCFhVZhwaqpKCFZKg0WX5UdQ2zlilVVZYRkqTRYWVd2jLVdUVlw32ZNVh+hkUwnb4nNuCkZFamNuDykuEsXGLHw+TRD9TBcKLPgkGoC5unQBUasau9NO+ZmWPPYUh+aqqkrH8lSF2TVqVLgD2SpBdxfITXGTKvsWOqDSuBVstQC7uxYkR4juf+WnmSpHNLeSBdtKLIsKuGS4qBHNYGbeoXkRfPN/4xqgNi9bdr7/SVFIznvrd4Ko6ikwI2NDaoDkl4svN93OcSWjSc2s6yNaJkvQiOZTh9dsb259HyyVBrstyg7hoQNVzVg3Gg0lHOCyFI62ExTcbjvjm2/eg5FMp6lIqg0QjKAe3JyIrVgOxBRfVQJG9DWFROZQkkZab60pTL4kvfjPZTjdrCoh70phZpra2tfHx8fSzP3ioZvPkzPGKXv8nf9euywRxcYsbexLIKOd2uJBeaL+Fy2miy/v01jE4rnTdG7c9aZZHrKNFjTAM/J3CRVPaxKyrOUi3TKb6JpLLBmKuIWWaqKL3l/NOV3fLhQZsVN1VqIlnIwnfI7GmxAMJPMSJuEfT2sOKCCaP1w6NHwUpNvtxY/PNd1Vgj9q0OnGTnR9H7WiHvgXB4J4w714TD6SEMkCQ5DGrp9+umnsLezPfMo2WAwWMX0D1HXeaK6wt+ld+Fq1jM7Sv4YDUGgT5NPkqXpYCOItTzypFsHh026fGnLXXKuR+S0KMIiK1EBF4xvACfqORT1hgN6R9GgR59OenkIj2uVdBGWtavb+vr6sayfQmgV4u8zY0xi2SBfchK2yzmiDLR++KvvLjVuRxE+23hX8IKA6C72KXoO0Xt3fh9QzdDszBKMLyt1ZjxY5abZurFAqbHArcd/a7mOy6Jiv4eoyeJWBKcVUdRyXDQLl+jG46e4zYMIgg+HQU0EN17P7IwFCzd9TJI6BgPrurHX1uFh0zm5fEhRaWtbzcipa48FJ3brw2W28lshFUxcdV265PX+/I3S5Yv9q45lx8fdMziXBsDm3yH5HYKFwFWrj8ewVeALeLQwTKnPOZjTiSEjDippySOn0YpjkSEGDNizDIY7vTvfdFTnsj5wzW3J4XP6nBMYTSJVqsrkHTL9Bzz1nQbVIt1ldjCeztG7GFcfRfdjcPXk8T/sFePMC2/6x1Dw4g+3lKlHOuud5mGnzjpTBVtkaMWtx39/5JBzlyxGRANa01UFKusV62bemHx/al60Zmu1tsmGTLT8eZfs/GIj2ML3dOLqlnpmzfanvT9VYJi5an0Okw2Zetvbfb4rtZZuobD3x1u7ukJigzLpZ8gWi5XObODOatUyub5J9yXflQHuTrJIcGAE2pRf0e5tK4pIr7Gj+WBVXRyKbU61PUO/fvyPQ2572kGLCTh6vt/70++Uw6HxUkiu+0KRXQPrXZOdr5x8pqmLPdMdqYfL/4OrDskyIq53NeICvsZ3ValT2DtScbp+g2iNFRt1fgBuOnmi6eTRBYfF7XK929aVw4gR172q5qa2RaOdPio2ZJK6YQ7GDkwS5BElivompAsNB6///XRPVwpRs2bvyL7JJilagdGpoXPVfJcdkgFWZO4C/c/nTZMRLb6mDzWued9kkxSti07QuWq25F1uaBtFzBfTXZuLK3Zc31UUUQZW4xjP8Ne5anwhvgm+IwMumiWjzjUVF9dQIy5cs7ZplWBswYDbvvfYUh8qimAr1E3TQXCMPLlffnGwyE2oOFo26MgAIg0Wnk214/p9DmqNM01TCQz4DsOHq/qY+6J9HJIhrR+f7joOLdhaV9yJQdzO/fZWx6S0CKqeaWaT7LNr1gZoZ74FpUQ0vJ9pNqtCJ8hmKpFPR6AQNXpUe7i+HTjbpuPIhuIa17vjpBY4zRfKILLHQ21szY5RXV5F0rhkUNS1TMgkMDCpL/DF+Mtvp01MQ7qPQy6aXh7VBaT9nNBOmuwPw2uYuso7+7VmgOtjBEe6NjAix3vsXrqUErboNrtt1M0eVZVTYTHcF6Q5TbQ4EM/oOom2+dplSnYkmlFgoMnwG5GmnTxJJYXOKCwwaOcm7My6Z+TMAgNTkZkjdjf3s7obBGJcR7fLq6M5Mh4OuhS5R1mEFUmN8Hi+QfGdPDYEzUVgkEJkdH3uzLIyzmny/OUtt+HcjuKLVUTifILTd9zoaPiFuvTpU+bEeQwcoG/ZcFJ9LuKC3AQGok6GyNoLDpfNAcZ+LrMlYNlOhB1GbkbO0DudLZEFZE8OcQP2hifRS3KXgt63v51p5oJoVsIlm7RfcS12ZqlzJ8lVYGAY9ieE/NgrYm/iuMmFOtuN4jlO5A69c4WGbhg/Nxo97ovt553/nNJqM7U4dOQuMEgpMuhg6GtRtpAX6a3wZL5JeeS/sTfbLuL3FyJwgkG35iS1FloIi2i/neK0ff7Nu0VtgFKowEAMUOBHpwmEaiW0yLxAZN9OcRo20thLM3CQhcIFBhlcdkLAj24RdfSsiCwWX0zK8ykdAYZf53EDz0XgBLbmXbZmXJC0zZqQTi9Kl69JQCUiAqfbfLO2Kf3vmIvVjjNXgYGop3ZJPQVSBeqqgB9PsLdx0dvfCu+zJWb3oxmYtc09N6sdZ+4CJyBxniPHgwxue5JYcPYML8VmmiGJRcBSfEbicnHztfizrovv5dPsyzUEwmoDKoHSBE5ADxiCsByEnqQvdgQLk9f0c8rRaAlesZj26HVexCu9uu79soRNKF3gBCH0XU0iQR0o1WInqYzACWJ+cpuy19FlAM9wxMJ2qyJsQuUEThDBmE+nQvtUTVD3P+G6vxNWdKfWygo8zpjYWLoPzwWOHimBiL2qizpOLQSeRETgLXaJN7EgdgEBWgyWWcbIEhZrxdqPVXO/JtRS4EnQxBlbka4p2qzNKF4XI37tTTmtn+wZJSLtkF9/hKB4jcW062ChOv4Pzyo/DXcqlMcAAAAASUVORK5CYII=",de=(t(71),t.p+"static/media/maylee.87d75ce5.png"),je=t(59),be=t.n(je),ue=Object(y.a)((function(e){var a,t;return t={root:{display:"flex",alignItems:e.center},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(k.a)(Object(k.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",marginTop:"5px"}),drawerFooter:{marginTop:"auto",display:"flex"},grow:{flexGrow:1}},Object(v.a)(t,"menuButton",{marginRight:e.spacing(2)}),Object(v.a)(t,"title",Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})),Object(v.a)(t,"search",Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(z.a)(e.palette.common.white,.25)},marginRight:e.spacing(5),marginLeft:e.spacing(10),width:"100%",height:"50"},e.breakpoints.up("sm"),{marginLeft:e.spacing(0),width:"100%"})),Object(v.a)(t,"searchIcon",{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"black"}),Object(v.a)(t,"inputRoot",{color:"black",height:"50px"}),Object(v.a)(t,"inputInput",(a={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(v.a)(a,e.breakpoints.down("lg"),{width:"80ch"}),Object(v.a)(a,e.breakpoints.down("md"),{width:"50ch"}),Object(v.a)(a,e.breakpoints.down("sm"),{width:"30ch"}),Object(v.a)(a,e.breakpoints.down("xs"),{width:"20ch"}),a)),Object(v.a)(t,"sectionDesktop",Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})),Object(v.a)(t,"sectionMobile",Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})),Object(v.a)(t,"Menu_Wrap",Object(v.a)({},e.breakpoints.down("sm"),{display:"none"})),t}));function he(){var e=ue(),a=Object(N.a)(),t=i.a.useState(!0),c=Object(o.a)(t,2),n=c[0],s=c[1],r=i.a.useState(null),l=Object(o.a)(r,2),j=l[0],b=l[1],u=i.a.useState(null),h=Object(o.a)(u,2),O=h[0],x=h[1],g=Boolean(j),f=Boolean(O),k=function(e){b(e.currentTarget)},y=function(){x(null)},T=function(){b(null),y()},F="primary-search-account-menu",Z=(q.a,J.a,J.a,"primary-search-account-menu-mobile");q.a,J.a,S.a,U.a,ee.a,J.a,S.a,U.a,D.a,J.a,S.a;return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(B.a,{}),Object(m.jsx)(L.a,{id:"App_Bar",position:"fixed",className:Object(w.a)(e.appBar,Object(v.a)({},e.appBarShift,n)),children:Object(m.jsxs)(I.a,{id:"App_Main",children:[Object(m.jsx)(S.a,{color:"black","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(w.a)(e.menuButton,n&&e.hide),children:Object(m.jsx)(V.a,{})}),Object(m.jsx)(C.a,{variant:"h6",className:e.Menu_Wrap}),Object(m.jsxs)("div",{className:e.search,children:[Object(m.jsx)("div",{className:e.searchIcon,children:Object(m.jsx)(H.a,{})}),Object(m.jsx)(E.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsxs)("div",{className:e.sectionDesktop,children:[Object(m.jsx)(S.a,{"aria-label":"show 17 new notifications",id:"Not_Icon",children:Object(m.jsx)(U.a,{badgeContent:"",variant:"dot",color:"default",children:Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{})})})}),Object(m.jsx)(S.a,{"aria-label":"",color:"black",id:"Set_icon",children:Object(m.jsx)(U.a,{color:"Primary",id:"set_opt",children:Object(m.jsx)(ee.a,{})})}),Object(m.jsx)(S.a,{id:"nav_dot",edge:"end","aria-label":"account of current user","aria-controls":F,"aria-haspopup":"true",onClick:k,color:"black",marginBottom:"0px",children:Object(m.jsx)(oe,{})})]}),Object(m.jsx)("div",{className:e.sectionMobile,children:Object(m.jsx)(S.a,{"aria-label":"show more","aria-controls":Z,"aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},color:"black",children:Object(m.jsx)(_.a,{})})})]})}),Object(m.jsxs)(A.a,{className:e.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:e.drawerPaper},children:[Object(m.jsxs)("div",{className:e.drawerHeader,children:[Object(m.jsxs)("div",{class:"inside_menu",children:[Object(m.jsx)("div",{class:"logo_image",children:Object(m.jsx)("img",{src:le,class:"menu_image"})}),Object(m.jsx)("div",{class:"Menu_Name",children:"Menu"})]}),Object(m.jsx)(S.a,{onClick:function(){s(!0)},id:"Hide_icon",children:"ltr"===a.direction?Object(m.jsx)(M.a,{}):Object(m.jsx)(K.a,{})})]}),Object(m.jsxs)(R.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(m.jsx)("a",{class:"Home_link",href:"https://vamsikrishna205.github.io/outlook/",children:Object(m.jsxs)(X.a,{button:!0,children:[Object(m.jsxs)(W.a,{children:[Object(m.jsx)(be.a,{}),Object(m.jsx)(P.a,{id:"msg_dot"})]}),Object(m.jsx)(P.a,{primary:"Messages"}),Object(m.jsx)(P.a,{primary:"3",id:"blog_3"})]})}),Object(m.jsx)("a",{class:"todo_link",href:"https://vamsikrishna205.github.io/todo/",styles:{textDecoration:"auto"},children:Object(m.jsxs)(X.a,{button:!0,children:[Object(m.jsx)(W.a,{children:Object(m.jsx)(d.a,{})}),Object(m.jsx)(P.a,{primary:"Todo"})]})})]}),Object(m.jsx)(p.a,{}),Object(m.jsx)("div",{className:e.drawerFooter,children:Object(m.jsxs)("div",{class:"inside_menu",children:[Object(m.jsx)("div",{class:"user_image",children:Object(m.jsx)("img",{src:de,class:"menu_image"})}),Object(m.jsx)("div",{class:"user_Name",children:"Maylee Bettle"})]})})]})]})}var pe=240,Oe=Object(y.a)((function(e){var a,t;return t={root:{display:"flex",alignItems:e.center},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(pe,"px)"),marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:pe,flexShrink:0},drawerPaper:{width:pe},drawerHeader:Object(k.a)(Object(k.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",marginTop:"6px"}),drawerFooter:{marginTop:"auto",display:"flex"},grow:{flexGrow:1}},Object(v.a)(t,"menuButton",{marginRight:e.spacing(2)}),Object(v.a)(t,"title",Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})),Object(v.a)(t,"search",Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(z.a)(e.palette.common.white,.25)},marginRight:e.spacing(5),marginLeft:e.spacing(5),width:"100%",height:"50"},e.breakpoints.up("sm"),{marginLeft:e.spacing(0),width:"100%"})),Object(v.a)(t,"searchIcon",{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"black"}),Object(v.a)(t,"inputRoot",{color:"black",height:"50px"}),Object(v.a)(t,"inputInput",(a={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(v.a)(a,e.breakpoints.down("lg"),{width:"80ch"}),Object(v.a)(a,e.breakpoints.down("md"),{width:"50ch"}),Object(v.a)(a,e.breakpoints.down("sm"),{width:"30ch"}),Object(v.a)(a,e.breakpoints.down("xs"),{width:"20ch"}),a)),Object(v.a)(t,"sectionDesktop",Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})),Object(v.a)(t,"sectionMobile",Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})),Object(v.a)(t,"Menu_Wrap",Object(v.a)({},e.breakpoints.down("sm"),{display:"none"})),t}));function xe(){var e=Oe(),a=Object(N.a)(),t=i.a.useState(!1),c=Object(o.a)(t,2),n=c[0],s=c[1],r=i.a.useState(null),l=Object(o.a)(r,2),j=l[0],b=l[1],u=i.a.useState(null),h=Object(o.a)(u,2),O=h[0],x=h[1],g=Boolean(j),f=Boolean(O),k=function(e){b(e.currentTarget)},y=function(){x(null)},T=function(){b(null),y()},F="primary-search-account-menu",Z=(q.a,J.a,J.a,"primary-search-account-menu-mobile");q.a,J.a,S.a,U.a,ee.a,J.a,S.a,U.a,D.a,J.a,S.a;return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(B.a,{}),Object(m.jsx)(L.a,{id:"App_Bar2",position:"fixed",className:Object(w.a)(e.appBar,Object(v.a)({},e.appBarShift,n)),children:Object(m.jsxs)(I.a,{children:[Object(m.jsx)(S.a,{color:"black","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(w.a)(e.menuButton,n&&e.hide),children:Object(m.jsx)(V.a,{})}),Object(m.jsx)(C.a,{variant:"h6",className:e.Menu_Wrap}),Object(m.jsxs)("div",{className:e.search,children:[Object(m.jsx)("div",{className:e.searchIcon,children:Object(m.jsx)(H.a,{})}),Object(m.jsx)(E.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsxs)("div",{className:e.sectionDesktop,children:[Object(m.jsx)(S.a,{"aria-label":"show 17 new notifications",color:"black",children:Object(m.jsx)(U.a,{badgeContent:"",variant:"dot",children:Object(m.jsx)(D.a,{})})}),Object(m.jsx)(S.a,{"aria-label":"",color:"black",children:Object(m.jsx)(U.a,{color:"Primary",id:"set_opt",children:Object(m.jsx)(ee.a,{})})}),Object(m.jsx)(S.a,{id:"nav-dot",edge:"end","aria-label":"account of current user","aria-controls":F,"aria-haspopup":"true",onClick:k,color:"black",marginBottom:"0px",children:Object(m.jsx)(oe,{})})]}),Object(m.jsx)("div",{className:e.sectionMobile,children:Object(m.jsx)(S.a,{"aria-label":"show more","aria-controls":Z,"aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},color:"black",children:Object(m.jsx)(_.a,{})})})]})}),Object(m.jsxs)(A.a,{className:e.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:e.drawerPaper},children:[Object(m.jsxs)("div",{className:e.drawerHeader,children:[Object(m.jsxs)("div",{class:"inside_menu",children:[Object(m.jsx)("div",{class:"logo_image",children:Object(m.jsx)("img",{src:le,class:"menu_image"})}),Object(m.jsx)("div",{class:"Menu_Name",children:"Menu"})]}),Object(m.jsx)(S.a,{onClick:function(){s(!1)},children:"ltr"===a.direction?Object(m.jsx)(M.a,{}):Object(m.jsx)(K.a,{})})]}),Object(m.jsx)(p.a,{}),Object(m.jsxs)(R.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(m.jsx)("a",{class:"Home_link",href:"https://vamsikrishna205.github.io/outlook/",children:Object(m.jsxs)(X.a,{button:!0,children:[Object(m.jsxs)(W.a,{children:[Object(m.jsx)(be.a,{}),Object(m.jsx)(P.a,{id:"msg_dot"})]}),Object(m.jsx)(P.a,{primary:"Messages"}),Object(m.jsx)(P.a,{primary:"3",id:"blog_3"})]})}),Object(m.jsx)("a",{class:"todo_link",href:"https://vamsikrishna205.github.io/todo/",styles:{textDecoration:"auto"},children:Object(m.jsxs)(X.a,{button:!0,children:[Object(m.jsx)(W.a,{children:Object(m.jsx)(d.a,{})}),Object(m.jsx)(P.a,{primary:"Todo"})]})})]}),Object(m.jsx)("div",{className:e.drawerFooter,children:Object(m.jsxs)("div",{class:"inside_menu",children:[Object(m.jsx)("div",{class:"user_image",children:Object(m.jsx)("img",{src:de,class:"menu_image"})}),Object(m.jsx)("div",{class:"user_Name",children:"Maylee Bettle"})]})}),Object(m.jsx)(p.a,{})]})]})}var me=function(){return Object(m.jsxs)("div",{className:"App1",children:[Object(m.jsx)("div",{className:"App2",children:Object(m.jsx)(he,{})}),Object(m.jsx)("div",{className:"App3",children:Object(m.jsx)(xe,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{})})]})},ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,168)).then((function(a){var t=a.getCLS,c=a.getFID,i=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),c(e),i(e),n(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(me,{})}),document.getElementById("root")),ge()},70:function(e,a,t){},71:function(e,a,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.18621e49.chunk.js.map