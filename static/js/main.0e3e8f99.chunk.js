(this["webpackJsonp2step-ui-form"]=this["webpackJsonp2step-ui-form"]||[]).push([[0],{130:function(e,a,t){e.exports=t(269)},135:function(e,a,t){},136:function(e,a,t){},269:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(8),s=t.n(i),l=(t(135),t(136),t(6)),o=t(300),m=t(303),c=t(305),d=t(13),u=t(311),g=t(306),p=t(310),f=t(309),b=t(307),E=t(308),v=Object(o.a)((function(e){var a;return{root:(a={margin:"-1rem 0 2rem 0",padding:"0 7rem"},Object(l.a)(a,e.breakpoints.down("xs"),{padding:"0"}),Object(l.a)(a,e.breakpoints.down("md"),{padding:"0"}),Object(l.a)(a,"marginTop","auto"),a),textField:Object(l.a)({width:"100%"},e.breakpoints.down("xs"),{width:"100%"}),errorMessage:{color:"red",fontSize:"0.9rem",marginTop:"0.2rem"}}}));function N(e){var a=e.formProps,t=a.register,i=a.errors,s=e.data,l=v(),o=s[0],c=o.firstName,d=o.lastName,u=o.age;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:l.root},n.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(E.a,{id:"firstName",label:"First Name",name:"firstName",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.firstName,defaultValue:c}),i.firstName&&n.a.createElement("p",{className:l.errorMessage},i.firstName.message)),n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(E.a,{id:"lastName",label:"Last Name",name:"lastName",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.lastName,defaultValue:d}),i.lastName&&n.a.createElement("p",{className:l.errorMessage},i.lastName.message))),n.a.createElement(m.a,{container:!0,direction:"row",spacing:1},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(E.a,{id:"age",label:"Age",name:"age",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.age,defaultValue:u}),i.z&&n.a.createElement("p",{className:l.errorMessage},i.age.message))))))}var w=Object(o.a)((function(e){var a;return{root:(a={margin:"-1rem 0 2rem 0",padding:"0 7rem"},Object(l.a)(a,e.breakpoints.down("xs"),{padding:"0"}),Object(l.a)(a,e.breakpoints.down("md"),{padding:"0"}),Object(l.a)(a,"marginTop","auto"),a),textField:Object(l.a)({width:"100%"},e.breakpoints.down("xs"),{width:"100%"}),errorMessage:{color:"red",fontSize:"0.9rem",marginTop:"0.2rem"}}}));function h(e){var a=e.formProps,t=a.register,i=a.errors,s=e.data,l=w(),o=s[0],c=o.email,d=o.address,u=o.newsletter;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:l.root},n.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(E.a,{id:"email",label:"Email",name:"email",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.email,defaultValue:c}),i.email&&n.a.createElement("p",{className:l.errorMessage},i.email.message)),n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(E.a,{id:"address",label:"address",name:"address",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.address,defaultValue:d}),i.address&&n.a.createElement("p",{className:l.errorMessage},i.address.message))),n.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement("p",{style:{color:"red"}},"Newsletter"),n.a.createElement(E.a,{id:"newsletter",label:"Daily / Weekly / Monthly",name:"newsletter",className:l.textField,margin:"normal",variant:"outlined",inputRef:t,error:!!i.newsletter,defaultValue:u}),i.newsletter&&n.a.createElement("p",{className:l.errorMessage},i.newsletter.message)))))}var j=t(75),x=t(19),O=Object(r.createContext)({}),y=Object(o.a)((function(e){return{root:{width:"100%"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},buttonLayout:Object(l.a)({marginLeft:"7rem"},e.breakpoints.down("xs"),{marginLeft:"0"})}})),k=x.object().shape({firstName:x.string().required("This field is required."),lastName:x.string().required("This field is required."),age:x.number().required("This field is required.")}),T=x.object().shape({email:x.string().email("Invalid email.").required("This field is required."),address:x.string().required("This field is required."),newsletter:x.string().required("This field is required.")});function F(){var e=y(),a=Object(r.useContext)(O),t=a.information,i=a.account,s=Object(j.a)({validationSchema:k}),l=Object(j.a)({validationSchema:T}),o=n.a.useState(0),m=Object(d.a)(o,2),c=m[0],E=m[1],v=["Basic Information","Address"],w=function(e){console.log(e),0===c?t[1](e):1===c&&i[1](e),E((function(e){return e+1}))};return n.a.createElement("div",{className:e.root},n.a.createElement("form",{onSubmit:0===c?s.handleSubmit(w):l.handleSubmit(w)},n.a.createElement(u.a,{activeStep:c,alternativeLabel:!0},v.map((function(e){return n.a.createElement(g.a,{key:e},n.a.createElement(p.a,null,e))}))),n.a.createElement("div",null,c===v.length?n.a.createElement("div",{className:e.buttonLayout},n.a.createElement(b.a,{className:e.instructions},"Thank you for regestering with us."),n.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){t[1]({}),i[1]({}),E(0)}},"Register new user")):n.a.createElement("div",null,n.a.createElement("div",{className:e.instructions},function(e){switch(e){case 0:return n.a.createElement(N,{formProps:s,data:t});case 1:return n.a.createElement(h,{formProps:l,data:i});default:return"Unknown stepIndex"}}(c)),n.a.createElement("div",{className:e.buttonLayout},n.a.createElement(f.a,{disabled:0===c,onClick:function(){E((function(e){return e-1}))},className:e.backButton,variant:"outlined"},"Back"),n.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit"},c===v.length-1?"Finish":"Next"))))))}var q=Object(o.a)((function(e){var a;return{logo:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0.5rem",color:"blue",fontWeight:"bold",border:"1px solid teal",borderRadius:"4px"},paperLayout:(a={padding:"2rem"},Object(l.a)(a,e.breakpoints.up("md"),{width:"35em"}),Object(l.a)(a,"marginTop","2rem"),Object(l.a)(a,"margin","auto"),Object(l.a)(a,"border","1px solid red"),Object(l.a)(a,"borderRadius","4px"),Object(l.a)(a,e.breakpoints.down("xs"),{marginTop:"3rem"}),a)}}));function S(){var e=q();return n.a.createElement(r.Fragment,null,n.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.topLayout},n.a.createElement(m.a,{item:!0,md:11,xs:11},n.a.createElement(c.a,{className:e.paperLayout},n.a.createElement(m.a,{container:!0},n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement("div",{className:e.logo},n.a.createElement("div",{className:e.border},n.a.createElement("h2",null,"2 Step UI Wizard to Create User")))),n.a.createElement(m.a,{item:!0,md:12,xs:12},n.a.createElement(F,null)))))))}var I=function(){return n.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement((function(e){var a=e.children,t=Object(r.useState)({firstName:void 0,lastName:void 0,age:void 0}),i=Object(d.a)(t,2),s=i[0],l=i[1],o=Object(r.useState)({email:void 0,password:void 0,confirmPassword:void 0,address:void 0,newsletter:void 0}),m=Object(d.a)(o,2),c={information:[s,l],account:[m[0],m[1]]};return n.a.createElement(O.Provider,{value:c},a)}),null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[130,1,2]]]);
//# sourceMappingURL=main.0e3e8f99.chunk.js.map