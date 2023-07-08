"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{8709:function(e,o,t){t.r(o),t.d(o,{default:function(){return ie}});var r=t(9439),n=t(4554),a=t(1413),i=t(890),l=t(6151),s=t(3400),d=t(9259),x=t(2791),c=t(9348),p=t(184);function u(e){var o=e.btnList,t=void 0!==o&&o,r=e.openModal;return!0===t?(0,p.jsxs)(l.Z,{onClick:r,sx:f.btnAdd,children:[" ","+ add task"," "]}):(0,p.jsx)(s.Z,{onClick:r,"aria-label":"delete",sx:f.btn,children:(0,p.jsx)(d.Z,{sx:f.iconAdd,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#plus-circle")})})})}var f={btn:{color:"white"},iconAdd:{width:{xs:"22px",md:"24px"},height:{xs:"22px",md:"24px"}},btnAdd:{width:"100%",height:"48px",backgroundColor:"#E3F3FF",borderRadius:"8px",border:"dashed #3E85F3 2px"}},g=t(493),h=t(5021),m=t(3044),b=t(9434),Z=t(8427);function y(e){var o=e.todo,t=(0,b.I0)();return(0,p.jsxs)(n.Z,{sx:j.miniModal,id:"modal",children:[(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},j.btnMiniModal),{},{display:"to-do"===o.category?"none":"flex"}),onClick:function(){return t((0,Z.xJ)((0,a.Z)((0,a.Z)({},o),{},{category:"to-do"})))},children:["To do",(0,p.jsx)(d.Z,{sx:j.iconButton,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]}),(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},j.btnMiniModal),{},{display:"in-progress"===o.category?"none":"flex"}),onClick:function(){return t((0,Z.xJ)((0,a.Z)((0,a.Z)({},o),{},{category:"in-progress"})))},children:["In progress",(0,p.jsx)(d.Z,{sx:j.iconButton,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]}),(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},j.btnMiniModal),{},{display:"done"===o.category?"none":"flex"}),onClick:function(){return t((0,Z.xJ)((0,a.Z)((0,a.Z)({},o),{},{category:"done"})))},children:["Done",(0,p.jsx)(d.Z,{sx:j.iconButton,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]})]})}function C(e){var o=e.todo,t=(0,b.I0)(),n=(0,x.useState)(!1),i=(0,r.Z)(n,2),l=i[0],u=i[1];return(0,p.jsxs)(g.Z,{sx:j.taskMenu,children:[(0,p.jsxs)(h.ZP,{sx:{padding:"0",position:{xs:"static",md:"relative"}},children:[(0,p.jsx)(s.Z,{"aria-label":"drag",sx:j.btnMenu,onClick:function(){return u((function(e){return!e}))},children:(0,p.jsx)(d.Z,{sx:(0,a.Z)((0,a.Z)({},j.iconButton),{},{stroke:!0===l?"#3E85F3":"#111111"}),children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})}),l&&(0,p.jsx)(y,{todo:o})]}),(0,p.jsx)(h.ZP,{sx:{padding:"0"},children:(0,p.jsx)(s.Z,{"aria-label":"edit",sx:j.btnMenu,children:(0,p.jsx)(d.Z,{sx:j.iconButton,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#pencil")})})})}),(0,p.jsx)(h.ZP,{sx:{padding:"0"},children:(0,p.jsx)(s.Z,{"aria-label":"delete",sx:j.btnMenu,onClick:function(){return t((0,Z._5)(o._id))},children:(0,p.jsx)(d.Z,{sx:j.iconButton,stroke:"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#trash")})})})})]})}var j={taskMenu:{maxWidth:360,display:"flex",padding:"0",gap:"10px"},btnMenu:{padding:"0","&:hover, &:focus":{"& svg":{stroke:"#3E85F3"}}},iconButton:{width:{xs:"14px",md:"16px"},height:{xs:"14px",md:"16px"},color:"transparent"},miniModal:{display:"flex",flexDirection:"column",gap:"14px",position:"absolute",left:{xs:"-38px",md:"-64px"},bottom:"-10px",padding:{xs:"14px",md:"20px 24px"},boxSizing:"border-box",width:{xs:"115px",md:"148px"},height:{xs:"70px",md:"90px"},bgcolor:"#FFFFFF",borderRadius:"8px",transform:"translateY(100%)",zIndex:"1000",boxShadow:"0px 4px 16px 0px rgba(17, 17, 17, 0.10)"},btnMiniModal:{height:{xs:"14px",md:"18px"},color:"#343434",fontSize:"14px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"500",lineHeight:"18px",display:"flex",alignItems:"center",justifyContent:"space-between","&:hover, &:focus":{color:" #3E85F3","& svg":{stroke:"#3E85F3"},cursor:"pointer"}}};function k(e){var o=e.todo;return(0,p.jsxs)(n.Z,{sx:w.taskBox,children:[(0,p.jsx)(i.Z,{sx:w.text,children:o.title}),(0,p.jsxs)(n.Z,{sx:w.flexBox,children:[(0,p.jsxs)(n.Z,{sx:w.avatarBox,children:[(0,p.jsx)(m.Z,{sx:w.avatar}),(0,p.jsx)(n.Z,{sx:(0,a.Z)((0,a.Z)({},w.priorityLabel),{},{backgroundColor:"low"===o.priority?"#72C2F8":"medium"===o.priority?"#F3B249":"#EA3D65"}),children:o.priority})]}),(0,p.jsx)(C,{todo:o})]})]})}var w={flexBox:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},text:{textOverflow:"ellipsis",overflow:"hidden",width:"100%",whiteSpace:"nowrap",marginBottom:"28px"},taskBox:{padding:"15px",boxSizing:"border-box",bgcolor:"#F7F6F9",minWidth:"100%",maxWidth:"100%",borderRadius:"8px",position:"relative"},avatarBox:{display:"flex",gap:"10px",justifyContent:"flex-start",alignItems:"flex-end"},avatar:{border:"1.8px solid #3E85F3",width:{xs:"32px",md:"44px"},height:{xs:"32px",md:"44px"}},priorityLabel:{paddingInline:"15px",height:"20px",borderRadius:"4px",lineHeight:"1.2",fontSize:"10px",color:"#F7F6F9",display:"flex",alignItems:"center"}};function v(e){var o=e.todos,t={marginBottom:""};return 0===o.length?t.marginBottom="0px":t.marginBottom="32px",(0,p.jsx)(g.Z,{sx:(0,a.Z)((0,a.Z)({},F.list),t),children:o.map((function(e){return(0,p.jsx)(h.ZP,{sx:F.item,children:(0,p.jsx)(k,{todo:e})},e._id)}))})}var F={list:{boxSizing:"border-box",display:"flex",width:"100%",maxHeight:"400px",flexDirection:"column",alignItems:"flex-start",gap:"18px",padding:"0",paddingInline:"21px",overflowY:"auto",scrollbars:"none"},item:{padding:"0","&:last-child":{marginBottom:{xs:"28px",md:0}},"&:last-child #modal":{top:0,transform:"translateY(-110%)"}}},D=t(4164),M=t(3590),B=document.querySelector("#modal-root"),S=function(e){var o=e.children,t=e.closeModal;(0,x.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,D.createPortal)((0,p.jsx)(M.Z,{open:!0,onClose:function(e){e.target===e.currentTarget&&t()},disablePortal:!0,children:(0,p.jsxs)(n.Z,{sx:{position:"absolute",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)",borderRadius:"8px",maxWidth:"95%",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[(0,p.jsx)(s.Z,{onClick:t,sx:{position:"absolute",top:"14px",right:"14px",transition:"all 250ms",cursor:"pointner",width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},padding:0},children:(0,p.jsx)(d.Z,{stroke:"currentColor",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#close")})})}),o]})}),B)},I=t(5861),T=t(4942),E=t(5987),z=t(4687),Y=t.n(z),W=t(5705),H=t(6098),L=t(765),P=t(5523),A=t(97),R=t(9692),_=t(1686),U=t(7892),G=t.n(U),N=["_id"],$=function(e){var o=e.closeModal,t=e.date,s=e.currentTask,u={title:"",start:"09:00",end:"09:30",priority:"low",category:"in-progress",date:G()(new Date(t)).format("YYYY-MM-DD")},f=(0,x.useState)(u),g=(0,r.Z)(f,2),h=g[0],m=g[1],y=(0,b.I0)();(0,x.useEffect)((function(){if(null!==s){var e=s._id,o=(0,E.Z)(s,N);e&&m(o)}}),[s]);var C=function(e){var o=e.target,t=o.name,r=o.value;m((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,T.Z)({},t,r))}))},j=function(){var e=(0,I.Z)(Y().mark((function e(r){return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!(h.start>h.end)){e.next=6;break}return _.Notify.failure("Start time must be later than end time"),e.abrupt("return");case 6:y((0,Z.gI)((0,a.Z)((0,a.Z)({},h),{},{date:G()(new Date(t)).format("YYYY-MM-DD")}))),o();case 8:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}();return(0,p.jsx)(W.J9,{initialValues:u,children:(0,p.jsx)(W.l0,{onSubmit:j,children:(0,p.jsxs)(n.Z,{sx:{padding:{xs:"48px 18px 40px",md:"40px 28px",lg:"40px 28px"}},children:[(0,p.jsxs)("label",{children:[(0,p.jsx)(i.Z,{sx:{color:R.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"Title"}),(0,p.jsx)(W.gN,{placeholder:"Enter text",name:"title",type:"text",onChange:C,value:h.title,as:H.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:R.D.popUpInputTextColor,border:"1px solid rgba(17, 17, 17, 0.15)",borderRadius:"8px",padding:"8px 18px 7px 18px",marginBottom:{xs:"16px",md:"18px",lg:"18px"},backgroundColor:R.D.inputFieldColor}})]}),(0,p.jsxs)(n.Z,{sx:{display:"flex",gap:"14px",marginBottom:{xs:"16px",md:"28px",lg:"28px"}},children:[(0,p.jsx)(n.Z,{sx:{flexGrow:1},children:(0,p.jsxs)("label",{children:[(0,p.jsx)(i.Z,{sx:{color:R.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"Start"}),(0,p.jsx)(W.gN,{placeholder:"Enter text",name:"start",value:h.start,type:"time",onChange:C,as:H.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:R.D.popUpInputTextColor,border:"1px solid rgba(17, 17, 17, 0.15)",borderRadius:"8px",padding:"8px 18px 7px 18px",lineHeight:"1.28",backgroundColor:R.D.inputFieldColor}})]})}),(0,p.jsx)(n.Z,{sx:{flexGrow:1},children:(0,p.jsxs)("label",{children:[(0,p.jsx)(i.Z,{sx:{color:R.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"End"}),(0,p.jsx)(W.gN,{placeholder:"Enter text",name:"end",value:h.end,type:"time",onChange:C,as:H.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:R.D.popUpInputTextColor,border:"1px solid rgba(17, 17, 17, 0.15)",borderRadius:"8px",padding:"8px 18px 7px 18px",lineHeight:"1.28",backgroundColor:R.D.inputFieldColor}})]})})]}),(0,p.jsxs)(L.Z,{onChange:C,value:h.priority,name:"priority",sx:{flexDirection:"row",flexWrap:"nowrap",justifyContent:"start",gap:"16px",marginBottom:"32px",height:{xs:"14px",md:"18px",lg:"18px"}},children:[(0,p.jsx)(P.Z,{label:"Low",value:"low",control:(0,p.jsx)(A.Z,{sx:{color:R.D.taskLowColor,"& .MuiSvgIcon-root":{fontSize:14},"&.Mui-checked":{color:R.D.taskLowColor}}})}),(0,p.jsx)(P.Z,{label:"Medium",value:"medium",control:(0,p.jsx)(A.Z,{sx:{color:R.D.taskMedColor,"& .MuiSvgIcon-root":{fontSize:14,padding:"0px"},"&.Mui-checked":{color:R.D.taskMedColor}}})}),(0,p.jsx)(P.Z,{label:"High",value:"high",control:(0,p.jsx)(A.Z,{sx:{color:R.D.taskHighColor,"& .MuiSvgIcon-root":{fontSize:14},"&.Mui-checked":{color:R.D.taskHighColor}}})})]}),(0,p.jsxs)(n.Z,{sx:{height:{xs:"42px",md:"48px",lg:"48px"},display:"flex",gap:"14px"},children:[(0,p.jsxs)(l.Z,{variant:"contained",type:"submit",sx:{height:"100%",flexGrow:"1",backgroundColor:R.D.accentBackgroundColor,boxShadow:"none",gap:"8px"},children:[(0,p.jsx)(d.Z,{stroke:"currentColor",sx:{width:{xs:"18px",md:"20px",lg:"20px"},height:{xs:"18px",md:"20px",lg:"20px"},fill:"#3E85F3;"},children:(0,p.jsx)("use",{href:"".concat(c.Z,"#add")})}),"Add"]}),(0,p.jsx)(l.Z,{variant:"contained",onClick:o,sx:{height:"100%",width:"144px",backgroundColor:R.D.taskCancelColor,color:R.D.mainTextColor,boxShadow:"none"},children:"Cancel"})]})]})})})},J=t(7689),O=function(e){var o=e.closeModal,t=e.currentTask,i=e.date,l=e.category,s=(0,x.useState)(null),d=(0,r.Z)(s,2),c=d[0],u=d[1],f=(0,J.UO)().currentDay;return(0,x.useEffect)((function(){var e=t._id,r=t.category;e?u((0,a.Z)((0,a.Z)({},t),{},{status:"edit"})):r?u({title:"",date:f,start:"00:00",end:"00:00",priority:"low",category:r,statusOperation:"create"}):o()}),[o,t,f]),(0,p.jsx)(S,{closeModal:o,children:(0,p.jsx)(n.Z,{sx:{borderRadius:"8px",border:"1px solid rgba(220, 227, 229, 0.8)",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)",backgroundColor:R.D.mainBackgroundColor,width:{xs:"100%",md:"396px",lg:"396px"},height:{xs:"100%",md:"360px",lg:"360px"},padding:0},children:(0,p.jsx)($,{date:i,category:l||"to-do",currentTask:c,closeModal:o})})})};function q(e){var o=e.title,t=e.todos,l=e.date,s=e.category,d=(0,x.useState)(!1),c=(0,r.Z)(d,2),f=c[0],g=c[1],h=function(){g(!0)},m={marginBottom:"28px"};return 0===t.length?m.marginBottom={xs:"64px",md:"28px"}:m.marginBottom="28px",(0,p.jsxs)(n.Z,{sx:V.listTodos,children:[(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},V.addPanel),m),children:[(0,p.jsx)(i.Z,{children:o}),(0,p.jsx)(u,{openModal:h})]}),(0,p.jsx)(v,{todos:t}),(0,p.jsx)(n.Z,{sx:V.btnAdd,children:(0,p.jsx)(u,{btnList:!0,openModal:h})}),f&&(0,p.jsx)(O,{currentTask:t,date:l,category:s,closeModal:function(){g(!1)}})]})}var V={btnAdd:{width:{xs:"calc(100% - 36px)",md:"100%"},position:{xs:"absolute",md:"static"},bottom:"10px",left:"18px",boxSizing:"border-box",paddingInline:{md:"21px"}},addPanel:{paddingInline:"21px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"28px"},listTodos:{boxSizing:"border-box",mt:"15px",maxWidth:{xs:"calc(100%)",md:"calc((100% - 16px) / 2)",lg:"calc((100% - 54px) / 3)"},minWidth:{xs:"calc(100%)",md:"calc((100% - 16px) / 2)",lg:"calc((100% - 54px) / 3)"},display:"flex",flexDirection:"column",justifyContent:"flex-start",height:"100%",backgroundColor:"#FFFFFF",borderRadius:"8px",scrollSnapAlign:"center",alignItems:"space-between",position:"relative",padding:"18px 0 22px 0"}},X=function(e){return e.tasks.tasks};function K(e){var o=e.value,t=e.weekend,r=(0,b.v9)(X).tasks,a=new Date(t[o].date).getDate(),i=new Date(t[o].date);if(r){var l=r.filter((function(e){var o=e.date;return new Date(o).getDate()===a}));return(0,p.jsxs)(n.Z,{sx:Q.taskPanel,children:[(0,p.jsx)(q,{title:"To do",category:"to-do",date:i,todos:l.filter((function(e){return"to-do"===e.category}))}),(0,p.jsx)(q,{title:"In progress",category:"in-progress",date:i,todos:l.filter((function(e){return"in-progress"===e.category}))}),(0,p.jsx)(q,{title:"Done",category:"done",date:i,todos:l.filter((function(e){return"done"===e.category}))})]})}}var Q={taskPanel:{scrollbarColor:"black",display:"flex  ",overflowX:{xs:"scroll",mb:"scroll",lg:"auto"},scrollSnapType:"x mandatory",width:{xs:"calc(100vw - 40px)",md:"calc(100vw - 64px)",lg:"calc(100%)"},gap:{xs:"20px",md:"16px",lg:"27px"},boxSizing:"border-box",paddingBottom:"46px",maxHeight:{md:"100%",lg:"100%"}}},ee=t(5228),oe=t(3896),te=t(4334),re=t.n(te);function ne(e){var o=e.value,t=e.handleChange,r=e.weekend;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(ee.Z,{value:o,onChange:t,"aria-label":"basic tabs example",sx:ae.weekIconList,children:r.map((function(e){var o=e.day,t=e.weekDay,r=e.weekDayMob;return(0,p.jsx)(oe.Z,{sx:ae.iconDayTask,icon:(0,p.jsxs)(n.Z,{sx:ae.dayTitle,children:[(0,p.jsx)(n.Z,{sx:ae.desk,children:t}),(0,p.jsx)(n.Z,{sx:ae.mobile,children:r}),(0,p.jsx)(n.Z,{className:"numberDay",children:o})]})},t)}))})})}G().extend(re());var ae={iconDayTask:{paddingInline:"0","&.Mui-selected":{color:"#343434",border:"none"},"& .numberDay":{width:"20px",height:"20px",marginTop:"6px"},"&.Mui-selected .numberDay":{backgroundColor:"#3E85F3",borderRadius:"6px",color:"#FFFFFF"},"&":{width:"calc(100% / 7)"},"& span":{display:"none",color:"#3E85F3"}},dayTitle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"Inter"},desk:{display:{xs:"none",md:"block"}},mobile:{display:{md:"none"}},weekIconList:{".MuiTabs-indicator":{display:"none"},".MuiButtonBase-root":{minWidth:{xs:"calc(100%/7)",md:"calc((100% - 64px) / 7)"},boxSizing:"border-box"},bgcolor:"#FFFFFF",borderRadius:"8px",boxSizing:"border-box",width:"100%"}};function ie(){var e=(0,J.UO)(),o=(0,x.useState)((function(){return e.day})),t=(0,r.Z)(o,2),a=t[0],i=t[1],l=x.useState(null),s=(0,r.Z)(l,2),d=s[0],c=s[1],u=(0,b.I0)();(0,x.useEffect)((function(){a!==e.day&&i(e.day)}),[a,e.day]);var f=(0,x.useMemo)((function(){var e=[],o=0,t=7;0===G()(a).weekday()&&(o=-7,t=0);for(var r=0;o<t;o++){var n=G()(a).weekday(o+1);e[r]={day:n.$D,weekDay:String(n.$d).slice(0,3),weekDayMob:String(n.$d).slice(0,1),date:n.$d,dayFormat:G()(n.$d).format("YYYY-MM-DD")},r++}return e}),[a]);function g(e){return e<10?"0".concat(e):e}(0,x.useEffect)((function(){if(f){var e=f.findIndex((function(e){return e.dayFormat===a}));c(e)}}),[a,f]),(0,x.useEffect)((function(){null===d&&c(0===G()(a).day()?6:G()(a).day()-1)}),[a,d]),(0,x.useEffect)((function(){f[0]&&a&&-1===f.findIndex((function(e){return e.dayFormat===a}))&&u((0,Z.yf)({years:new Date(f[0].date).getFullYear(),month:g(new Date(f[0].date).getMonth()+1),day:g(new Date(f[0].date).getDate())}))}),[a,u,f]);if(a&&null!==d&&f)return(0,p.jsxs)(n.Z,{sx:le.boxDay,children:[(0,p.jsx)(n.Z,{sx:{boxSizing:"border-box"},children:(0,p.jsx)(n.Z,{sx:{borderColor:"divider"},children:(0,p.jsx)(ne,{value:d,weekend:f,handleChange:function(e,o){c(o)}})})}),(0,p.jsx)(K,{weekend:f,value:d})]})}var le={"&::-webkit-scrollbar-thumb, &::-webkit-resizer":{background:"rgba(170, 170, 170, 0.6)",borderRadius:"5px",boxShadow:"inset 0.05em 0.05em 0 rgba(0, 0, 0, 0.1), inset 0 - 0.05em 0 rgba(0, 0, 0, 0.07)"},boxDay:{width:{xs:"100%",md:"calc(100vw - 64px)",lg:"calc(100%)"},margin:"0"}}},9692:function(e,o,t){t.d(o,{D:function(){return r}});var r={mainTextColor:"#111111",secondaryTextColor:"#616161",accentTextColor:"#3e85f3",activeSelectionColor:"#e3f3ff",btnTextColor:"#ffffff",inactiveBtnTextColor:"#84828a",calendarDateColor:"#343434",calendarCellColor:"#FFFFFF",accentColor:"#3e85f3",hoverColor:"#7aaff3",columnBackGroundColor:"#FFFFFF",modalShadow:"#1111111A",popUpBackGroundColor:"#FFFFFF",popUpInputTextColor:"#616161",popUpLabelTextColor:"#343434CC",popUpInputBgrColor:"#F6F6F6",mainBackgroundColor:"#ffffff",authBackgroundColor:"#dcebf7",outletBackgroundColor:"#f7f6f9",sidebarBackgroundColor:"#ffffff",accentBackgroundColor:"#3e85f3",modalBorder:"#DCE3E5CC",taskHighColor:"#ea3d65",taskMedColor:"#f3b249",taskLowColor:"#72c2f8",taskCardColor:"#dce3e5cc",inputFieldColor:"#f6f6f6",taskCancelColor:"#efefef",inputFieldTextColor:"#616161",iconColor:"#3E85F3",priorityHighColor:"#ffd2dd",priorityMedColor:"#fcf0d4",priorityLowColor:"#ceeefd",scrollbarColor:"#e7e5e5",scrollbarBackgroundColor:"#f2f2f2",frameBorderColor:"#e1e7e9",navTitleColor:"#7E7D82",strPgBackgroundColor:"#FFFFFF"}}}]);
//# sourceMappingURL=709.532c4260.chunk.js.map