"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{9348:function(e,i,s){s(2791);i.Z=s.p+"static/media/sprite.0f30cdbc30470c3d5fd4bb1ccd3c29e5.svg"},1558:function(e,i,s){s.r(i),s.d(i,{default:function(){return b}});s(2791);var n=s(4554),t=s(1614),o=s(890),r=s(8359),a=s(9259),l=s(5886),d=s(5705),x=s(6727),c=s(1087),p=s.p+"static/media/sign up 1.02f1aeb546ef16bdd9f3.png",h=s(9348),m=s(184),u=x.Ry().shape({name:x.Z_().min(4,"Name must be 4 characters long").required("Required"),email:x.Z_().email("Invalid email address").required("Required"),password:x.Z_().min(6,"Password must be 6 characters long").required("Required")}),g="#3CBC81",f="#E74A3B",j=function(){return(0,m.jsx)(d.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:function(e,i){var s=i.setSubmitting;console.log(e),s(!1)},children:function(e){var i=e.values,s=e.errors,x=e.touched,u=e.handleChange,j=e.handleBlur,b=(e.handleSubmit,e.isSubmitting,function(e){return x[e]&&s[e]?"is-invalid":x[e]?"is-valid":""});return(0,m.jsxs)(n.Z,{sx:{backgroundColor:"#DCEBF7",height:"100%",width:"100%",display:"flex",alignItems:"center",position:"fixed",flexDirection:"column",justifyContent:"center"},children:[(0,m.jsx)(t.Z,{sx:{position:"relative",width:{xs:"335px",md:"480px"},borderRadius:2,backgroundColor:"#fff",pr:{xs:3,md:5},pl:{xs:3,md:5},pt:5,pb:5},children:(0,m.jsxs)(d.l0,{children:[(0,m.jsx)(o.Z,{variant:"h2",sx:{fontSize:18,color:"#3E85F3",mb:4,fontWeight:600},children:"Sign Up"}),(0,m.jsxs)("label",{style:{position:"relative"},children:[(0,m.jsx)(o.Z,{sx:{fontSize:14,mb:1,fontWeight:600,color:"".concat("is-invalid"===b("name")&&f||"is-valid"===b("name")&&g)},children:"Name"}),(0,m.jsx)(d.gN,{as:r.Z,type:"text",name:"name",onChange:u,onBlur:j,value:i.name,placeholder:"Enter your name",sx:{border:"".concat("is-invalid"===b("name")&&f||"is-valid"===b("name")&&g," solid 1px"),fontFamily:"Inter, sans-serif",width:"100%",borderRadius:2,fontSize:16,lineHeight:"18px",fontWeight:600}}),"is-valid"===b("name")&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"48px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#done")})}),(0,m.jsx)(o.Z,{sx:{color:"#3CBC81",fontSize:12,mt:"8px"},children:"This is a CORRECT email"})]}),"is-invalid"===b("name")&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"48px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#error-input")})})}),(0,m.jsx)(d.Bc,{name:"name",component:"div",style:{fontSize:12,color:"#DA1414",marginTop:8}})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)(o.Z,{sx:{fontSize:14,mb:1,mt:3,fontWeight:600,color:"".concat("is-invalid"===b("email")&&f||"is-valid"===b("email")&&g)},children:"Email"}),(0,m.jsxs)("div",{style:{position:"relative"},children:[(0,m.jsx)(d.gN,{as:r.Z,type:"email",name:"email",onChange:u,onBlur:j,value:i.email,placeholder:"Enter email",sx:{border:"".concat("is-invalid"===b("email")&&f||"is-valid"===b("email")&&g," solid 1px"),width:"100%",height:54,borderRadius:2,fontWeight:600}}),"is-valid"===b("email")&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"20px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#done")})}),(0,m.jsx)(o.Z,{sx:{color:"#3CBC81",fontSize:12,mt:"8px"},children:"This is a CORRECT email"})]}),"is-invalid"===b("email")&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"20px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#error-input")})})})]}),(0,m.jsx)(d.Bc,{name:"email",component:"div",style:{fontSize:12,color:"#DA1414",marginTop:8}})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)(o.Z,{sx:{fontSize:14,mb:1,mt:3,fontWeight:600,color:"".concat("is-invalid"===b("password")&&f||"is-valid"===b("password")&&g)},children:"Password"}),(0,m.jsxs)("div",{style:{position:"relative"},children:[(0,m.jsx)(d.gN,{as:r.Z,type:"password",name:"password",onChange:u,onBlur:j,value:i.password,placeholder:"Enter password",sx:{border:"rgba(220, 227, 229, 0.60);",width:"100%",height:54,borderRadius:2}}),"is-valid"===b("password")&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"20px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#done")})}),(0,m.jsx)(o.Z,{sx:{color:"#3CBC81",fontSize:12,mt:"8px"},children:"This is a CORRECT email"})]}),"is-invalid"===b("password")&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},position:"absolute",top:"20px",right:"10px"},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#error-input")})})})]}),(0,m.jsx)(d.Bc,{name:"password",component:"div",style:{fontSize:12,color:"#DA1414",marginTop:8}})]}),(0,m.jsx)(l.Z,{sx:{textTransform:"none",backgroundColor:"#2B78EF",marginTop:4,width:"100%",padding:2,borderRadius:4,fontSize:14,fontWeight:600,fontFamily:"Inter, sans-serif"},variant:"contained",endIcon:(0,m.jsx)(a.Z,{stroke:"currentColor",sx:{width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"}},children:(0,m.jsx)("use",{href:"".concat(h.Z,"#log-in")})}),type:"submit",children:"Sign Up"})]})}),(0,m.jsx)(c.Link,{to:"/login",children:(0,m.jsx)(o.Z,{variant:"h2",sx:{fontSize:12,color:"#3E85F3",mt:2.25,fontWeight:600,textDecoration:"underline"},children:"Log In"})}),window.innerWidth>1440?(0,m.jsx)("img",{style:{display:{xs:"none"},position:"absolute",left:"49px",bottom:"0px"},src:p,alt:"goose-racket"}):(0,m.jsx)(m.Fragment,{})]})}})},b=function(){return(0,m.jsx)(j,{})}}}]);
//# sourceMappingURL=549.e38f7d82.chunk.js.map