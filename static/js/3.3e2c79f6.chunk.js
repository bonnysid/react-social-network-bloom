(this.webpackJsonpbloom=this.webpackJsonpbloom||[]).push([[3],{306:function(t,e,a){t.exports={content:"Description_content__ImCZf",name:"Description_name__N_xn_",status:"Description_status__1GC3R",header:"Description_header__2rZQX",item:"Description_item__2Cdvf",input:"Description_input__1Wb6P"}},308:function(t,e,a){t.exports={content:"Profile_content__35QMj"}},309:function(t,e,a){t.exports={content:"Avatar_content__QdJAt",image:"Avatar_image__1dtvG",btn:"Avatar_btn__3NKZF"}},310:function(t,e,a){t.exports={content:"SocialLink_content__23vnS"}},311:function(t,e,a){t.exports={content:"Post_content__2cQLv",author:"Post_author__3CMaQ",header__info:"Post_header__info__1hyHM",date:"Post_date__3bmS4",header:"Post_header__n361m",avatar:"Post_avatar__PlJYs",image:"Post_image__2Rqce",comment:"Post_comment__2fmfm",footer:"Post_footer__qLEuI",icon:"Post_icon__8uR5v",count:"Post_count__zE9jZ"}},313:function(t,e,a){"use strict";a.r(e);var n=a(19),s=a(23),c=a(25),o=a(24),r=a(0),i=a(1),u=a.n(i),l=a(11),j=a(308),d=a.n(j),m=a(309),b=a.n(m),h=a(80),p=function(t){var e=t.url;return Object(r.jsxs)("section",{className:"block",children:[Object(r.jsx)("aside",{className:b.a.content,children:Object(r.jsx)("img",{className:b.a.image,src:e||h.a,alt:"AVATAR"})}),Object(r.jsx)("aside",{className:b.a.btn_block,children:Object(r.jsx)("button",{className:"".concat(b.a.btn," btn"),children:"Change photo"})})]})},f=a(306),_=a.n(f),x=a(310),O=a.n(x),g=a(79),v=function(t){var e=t.width,a=void 0===e?"25px":e,n=t.height,s=void 0===n?"25px":n,c=t.urlId,o=t.fullUrl,i=t.hoverTitle,u=t.link;return Object(r.jsx)("a",{className:O.a.content,href:"https://".concat(u),target:"_blank",title:i,children:Object(r.jsx)("svg",{width:a,height:s,children:Object(r.jsx)("use",{xlinkHref:o||"".concat(g.a,"#").concat(c)})})})};var N=a(123);function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,s=!1,c=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(i){s=!0,c=i}finally{try{n||null==r.return||r.return()}finally{if(s)throw c}}return a}}(t,e)||Object(N.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(t){var e=S(Object(i.useState)(!1),2),a=e[0],n=e[1],s=S(Object(i.useState)(t.status),2),c=s[0],o=s[1];Object(i.useEffect)((function(){o(t.status)}),[t.status]);var u=function(){n(!0)};return Object(r.jsx)("div",{children:a?Object(r.jsx)("input",{className:_.a.input,onChange:function(t){return function(t){o(t.currentTarget.value)}(t)},autoFocus:!0,onBlur:function(){n(!1),t.updateUserStatus(c)},value:c}):Object(r.jsx)("p",{onTouchEnd:u,onDoubleClick:u,children:t.status||"Click to change it"})})},P=function(t){var e=t.name,a=t.status,n=t.contacts,s=(t.about,t.updateUserStatus),c=[];for(var o in n)n[o]&&c.push(Object(r.jsx)(v,{link:n[o],urlId:o,hoverTitle:o,width:"35px",height:"35px"},o));return Object(r.jsxs)("main",{className:"".concat(_.a.content," block"),children:[Object(r.jsxs)("div",{className:_.a.header,children:[Object(r.jsx)("h1",{className:_.a.name,children:e}),Object(r.jsx)(k,{status:a,updateUserStatus:s}),Object(r.jsx)("div",{className:"underline"})]}),Object(r.jsx)("section",{className:_.a.links,children:c})]})},y=a(42),I=a.n(y),U=a(311),w=a.n(U),C=a(48),D=function(t){var e=t.author,a=t.comment,n=t.likeCount,s=new Date;return Object(r.jsxs)("main",{className:"".concat(w.a.content," block"),children:[Object(r.jsxs)("div",{className:w.a.header,children:[Object(r.jsx)("div",{className:w.a.avatar,children:Object(r.jsx)("img",{className:w.a.image,src:"https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg",alt:"avatar"})}),Object(r.jsxs)("div",{className:w.a.header__info,children:[Object(r.jsx)("h2",{className:w.a.author,children:e}),Object(r.jsx)("time",{className:w.a.date,children:s.toDateString()})]})]}),Object(r.jsx)("p",{className:w.a.comment,children:a}),Object(r.jsx)("div",{className:"underline"}),Object(r.jsxs)("section",{className:w.a.footer,children:[Object(r.jsx)(C.a,{className:w.a.icon,urlId:"like"}),Object(r.jsx)("p",{className:w.a.count,children:n})]})]})},A=a(113),Q=a(145),T=a(146),F=a(43),J=a(124),E=Object(F.a)(200),M=Object(T.a)({form:"posts"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,className:I.a.block,children:[Object(r.jsx)("h1",{className:I.a.title,children:"Posts"}),Object(r.jsx)(Q.a,{component:J.a,placeholder:"Input your text",rows:5,isresize:!0,name:"message",validate:[F.b,E]}),Object(r.jsx)(Q.a,{name:"file",component:"input",type:"file",id:"post-1",className:I.a.file,accept:"image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp"}),Object(r.jsx)("label",{htmlFor:"post-1",className:"".concat(I.a.file_btn),children:Object(r.jsx)(C.a,{width:"25px",height:"25px",className:I.a.icon,urlid:"add"})}),Object(r.jsx)("button",{className:"".concat(I.a.btn," btn"),children:"Post"})]})})),V=a(55),L=u.a.memo((function(t){var e=t.posts,a=t.addPost,n=t.loggedUser,s=t.reset;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"".concat(I.a.content," block"),children:Object(r.jsx)(M,{onSubmit:function(t){var e=t.message;s("posts"),a(n,e)}})}),Object(r.jsx)("section",{className:I.a.posts,children:e})]})})),R=Object(l.b)((function(t){return{loggedUser:t.auth.loggedUser,posts:t.profilePage.posts.map((function(t){return Object(r.jsx)(D,{id:t.id,author:t.author,comment:t.comment,likeCount:t.likeCount},t.id)}))}}),{addPost:A.a,reset:V.a})(L),Z=function(t){var e=t.userInfo;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("main",{className:d.a.content,children:[Object(r.jsx)(p,{url:e.photos.large}),Object(r.jsx)(P,{name:e.fullName,status:t.status,contacts:e.contacts,updateUserStatus:t.updateUserStatus}),Object(r.jsx)(R,{})]})})},z=a(8),H=a(27),K=a(7),q=a(83),B=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).getProfileInfo=function(){var e=t.props.match.params.id?t.props.match.params.id:t.props.yourId;e||t.props.history.push("/login"),t.props.getUserInfo(e),t.props.getUserStatus(e)},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProfileInfo()}},{key:"render",value:function(){return Object.keys(this.props.userInfo).length?Object(r.jsx)(Z,{updateUserStatus:this.props.updateUserStatus,userInfo:this.props.userInfo,status:this.props.userStatus}):Object(r.jsx)(H.a,{})}}]),a}(u.a.Component);e.default=Object(K.d)(q.a,z.f,Object(l.b)((function(t){return{userInfo:t.profilePage.userPageInfo,yourId:t.auth.userId,userStatus:t.profilePage.userStatus}}),{getUserInfo:A.c,getUserStatus:A.d,updateUserStatus:A.e}))(B)}}]);
//# sourceMappingURL=3.3e2c79f6.chunk.js.map