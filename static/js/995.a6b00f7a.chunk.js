"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{5995:function(e,r,i){i.r(r),i.d(r,{default:function(){return B}});var n=i(9439),a=i(2791),o=i(9434),t=i(4217),l=i(9273),s=i(5705),x=i(890),d=i(4554),p=i(3044),h=i(9259),u=i(6098),c=i(6151),m=i(9348),f=i(6727),g=i(3983),b=i(2426),v=i.n(b),y=i(7892),j=i.n(y),Z=i(184),S=" rgba(17, 17, 17, 0.15)",k="#E74A3B",R=function(e){return(0,Z.jsx)(x.Z,{sx:{fontSize:12,lineHeight:"14px",color:"#DA1414",marginTop:"8px"},children:e})},w=function(e){if(e)return e;var r=new Date;return v()(r).format("DD/MM/YYYY")},Y=f.Ry().shape({username:f.Z_().min(2,"Too Short name!").max(35,"Too Long name!").required("Name is required"),birthday:f.Z_().notRequired(),email:f.Z_().email("Invalid email").required("Email is required"),phone:f.Z_().min(14,"Too Short name!").max(14,"Too Long name!").notRequired(),skype:f.Z_().min(11,"Too Short name!").max(16,"Too Long name skype!").matches(/^\+[1-9]\d{0,2}[.-]?\d{1,14}$/,{message:"Invalid skype name"}).notRequired()}),C=function(){var e=(0,o.v9)(t.dy),r=(0,a.useState)({}),i=(0,n.Z)(r,2),f=i[0],b=i[1],y=(0,a.useState)(!1),C=(0,n.Z)(y,2),D=C[0],z=C[1],B=(0,o.I0)(),L={username:e.name,avatarURL:e.avatarURL||"",email:e.email,birthday:w(e.birthday),phone:e.phone||"",skype:e.skype||""},F=(0,s.TA)({initialValues:L,validationSchema:Y,onSubmit:function(e){B((0,l.Nq)(e))}}),T=function(e){var r=e.target,i=r.name,n=r.value;F.setFieldValue(i,n),z(!0)},U=function(e){return F.touched[e]&&F.errors[e]?"is-invalid":F.touched[e]?"is-valid":""};return(0,Z.jsx)("form",{onSubmit:F.handleSubmit,children:(0,Z.jsxs)(d.Z,{sx:{width:{xs:"335px",md:"704px",lg:"1087px"},borderRadius:"16px",padding:{xs:"59px 0px 40px 0px",md:"40px 0px 40px 0px"},marginLeft:"auto",marginRight:"auto",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#fff"},children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(p.Z,{alt:"avatar",src:f.path?f.path:e.avatarURL,sx:{width:{xs:"72px",md:"124px"},height:{xs:"72px",md:"124px"},backgroundColor:"#F8F8F8",border:"2px solid #3E85F3",mr:"auto",ml:"auto",mb:"18px",position:{xs:"absolute",md:"relative"},top:{xs:"-36px",md:0},left:{xs:"132px",md:0}},children:(0,Z.jsx)(h.Z,{stroke:"currentColor",sx:{width:"48px",height:"48px"},children:(0,Z.jsx)("use",{href:"".concat(m.Z,"#userAvatar")})})}),(0,Z.jsxs)(d.Z,{sx:{position:"absolute",top:{xs:"4%",md:"150px",lg:"150px"},right:{xs:"40%",md:"44%",lg:"46%"},cursor:"pointer"},children:[(0,Z.jsx)("input",{id:"avatarURL",type:"file",name:"avatarURL",onChange:function(e){var r=e.currentTarget.files[0],i=URL.createObjectURL(r);b({path:i,file:r}),F.setFieldValue("avatarURL",r),z(!0)},onBlur:F.handleBlur,style:{display:"none"}}),(0,Z.jsx)("label",{htmlFor:"avatarURL",children:(0,Z.jsx)(h.Z,{stroke:"currentColor",style:{cursor:"pointer"},children:(0,Z.jsx)("use",{href:"".concat(m.Z,"#addAvatar")})})})]})]}),(0,Z.jsx)(x.Z,{sx:{color:"#343434",fontSize:"14px",fontWeight:700,lineHeight:"18px",textAlign:"center"},children:e.name}),(0,Z.jsxs)(d.Z,{sx:{display:"flex",gap:{xs:"18px",md:"26px",lg:"50px"},flexDirection:{xs:"column",lg:"row"},width:{xs:"299px",md:"354px",lg:"758px"},justifyContent:{lg:"center"},mt:{xs:"40px",lg:"44px"}},children:[(0,Z.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",gap:{xs:"18px",md:"24px"}},children:[(0,Z.jsxs)("label",{children:[(0,Z.jsx)(x.Z,{sx:{color:"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"User Name"}),(0,Z.jsx)(u.ZP,{onChange:T,onBlur:F.handleBlur,value:F.values.username,placeholder:"User Name",name:"username",type:"text",sx:{width:{xs:"100%",lg:"354px"},fontSize:"14px",fontWeight:600,color:"#111",borderRadius:"8px",padding:"8px 18px",border:"".concat("is-invalid"===U("username")&&k||S," solid 1px"),"&:hover":{border:"1px solid #000 "}}}),F.errors.username&&F.touched.username&&R(F.errors.username)]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)(x.Z,{sx:{color:"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Birthday"}),(0,Z.jsx)(g.M,{onChange:function(e){e||F.setFieldValue("birthday","");var r=v()(e.$d).format("YYYY/MM/DD");F.setFieldValue("birthday",r),z(!0)},defaultValue:j()(F.values.birthday),name:"birthday",format:"DD/MM/YYYY",placeholder:"DD/MM/YYYY",sx:{width:"100%",fontSize:"14px",color:"#111",border:"".concat("is-invalid"===U("birthday")&&k," solid 1px"),borderRadius:"8px","&>div>input":{padding:"13px 14px",fontWeight:600},"&>div":{borderRadius:"8px"}}}),F.errors.birthday&&F.touched.birthday&&R(F.errors.birthday)]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)(x.Z,{sx:{color:"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Email"}),(0,Z.jsx)(u.ZP,{onChange:T,onBlur:F.handleBlur,value:F.values.email,type:"email",name:"email",placeholder:"Email",sx:[{width:"100%",fontSize:"14px",fontWeight:600,color:"#111",border:"".concat("is-invalid"===U("email")&&k||S," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "},"&:focus ":{border:"1px solid#000 "}}]}),F.errors.email&&F.touched.email&&R(F.errors.email)]})]}),(0,Z.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",gap:{xs:"18px",md:"24px"}},children:[(0,Z.jsxs)("label",{children:[(0,Z.jsx)(x.Z,{sx:{color:"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Phone"}),(0,Z.jsx)(u.ZP,{onChange:function(e){return function(e,r){var i=e.target.value;(i=i.replace(/\D/g,"")).length>3&&i.length<=6?i=i.slice(0,3)+" "+i.slice(3):i.length>6&&(i=i.slice(0,2)+"("+i.slice(2,5)+")"+i.slice(5)),z(!0),r("phone",i)}(e,F.setFieldValue)},onBlur:F.handleBlur,value:F.values.phone,type:"phone",name:"phone",placeholder:"ex. 01 (234) 567 89 01",sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"#111",border:"".concat("is-invalid"===U("phone")&&k||S," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "}}}),F.errors.phone&&F.touched.phone&&R(F.errors.phone)]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)(x.Z,{sx:{color:"#111",fontSize:"12px",lineHeight:"14px",mb:"8px"},children:"Skype"}),(0,Z.jsx)(u.ZP,{onChange:T,onBlur:F.handleBlur,value:F.values.skype,type:"text",name:"skype",placeholder:"ex. +1234567890",sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"#111",border:"".concat("is-invalid"===U("skype")&&k||S," solid 1px"),borderRadius:"8px",padding:"8px 18px","&:hover":{border:"1px solid #000 "}}}),F.errors.skype&&F.touched.skype&&R(F.errors.skype)]})]})]}),(0,Z.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,Z.jsx)(c.Z,{sx:{textTransform:"none",backgroundColor:"#2B78EF",marginTop:{xs:"40px",lg:"88px"},width:"262px",padding:2,borderRadius:4,fontSize:14,fontWeight:600,fontFamily:"Inter, sans-serif"},variant:"contained",type:"submit",disabled:!D,children:"Save changes"})})]})})},D=i(4750),z=i(1652),B=function(){return(0,Z.jsxs)(z._,{dateAdapter:D.y,children:[(0,Z.jsx)(C,{}),";"]})}}}]);
//# sourceMappingURL=995.a6b00f7a.chunk.js.map