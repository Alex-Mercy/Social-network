(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{288:function(t,e,s){"use strict";s.d(e,"a",(function(){return O}));var c=s(4),o=s(32),n=s(33),r=s(35),i=s(34),a=s(0),j=s.n(a),u=s(17),l=s(6),b=s(1),d=function(t){return{isAuth:t.auth.isAuth}},O=function(t){var e=function(e){Object(r.a)(a,e);var s=Object(i.a)(a);function a(){return Object(o.a)(this,a),s.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(c.a)({},this.props)):Object(b.jsx)(l.a,{to:"/login"})}}]),a}(j.a.Component);return Object(u.b)(d)(e)}},290:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__dJSsw",userPhoto:"ProfileInfo_userPhoto__DQiZQ",contacts:"ProfileInfo_contacts__1z5yC",formSummaryError:"ProfileInfo_formSummaryError__2Bdb5"}},291:function(t,e,s){t.exports={item:"MyPosts_item__15SSU",postsBlock:"MyPosts_postsBlock__33QRy",addPostButton:"MyPosts_addPostButton__3Xzba"}},292:function(t,e,s){t.exports={item:"Post_item__10zBd",post__image:"Post_post__image__2FWUb"}},293:function(t,e,s){"use strict";s.r(e);var c=s(4),o=s(32),n=s(33),r=s(35),i=s(34),a=s(0),j=s.n(a),u=s(17),l=s(90),b=s(121),d=s(122),O=s(62),h=s(83),p=s(291),f=s.n(p),m=s(292),x=s.n(m),v=s(1),g=function(t){return Object(v.jsxs)("div",{className:x.a.post,children:[Object(v.jsx)("img",{className:x.a.post__image,src:"https://dogcatdog.ru/wp-content/uploads/d/0/d/d0d201a4f4d30eefedb66ad6b047ca16.jpg"}),t.message,Object(v.jsxs)("div",{children:["likes: ",t.likesCount]})]})},P=Object(h.a)(10),_=j.a.memo((function(t){var e=t.posts.map((function(t){return Object(v.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(v.jsxs)("div",{className:f.a.postsBlock,children:[Object(v.jsx)("h3",{children:"My posts"}),Object(v.jsx)("div",{children:Object(v.jsx)(k,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(v.jsx)("div",{children:e})]})})),k=Object(d.a)({form:"AddNewPostForm"})((function(t){return Object(v.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{name:"newPostText",component:O.b,validate:[h.b,P]})}),Object(v.jsx)("button",{className:f.a.addPostButton,children:"Add post"})]})})),y=_,S=Object(u.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:l.a})(y),A=s(23),U=s(45),w=s(290),B=s.n(w),C=s(91),F=function(t){var e=Object(a.useState)(!1),s=Object(A.a)(e,2),c=s[0],o=s[1],n=Object(a.useState)(t.status),r=Object(A.a)(n,2),i=r[0],j=r[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(v.jsxs)("div",{children:[!c&&Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Status:"})," ",Object(v.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-----"})]}),c&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateUserStatus(i)},value:i})})]})},M=Object(d.a)({form:"ProfileDataForm"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(v.jsx)("form",{onSubmit:e,children:Object(v.jsxs)("div",{children:[c&&Object(v.jsx)("div",{className:B.a.formSummaryError,children:c}),Object(v.jsx)("button",{children:"Save"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Full name"}),Object(v.jsx)(b.a,{name:"fullName",placeholder:"Full name",component:O.a})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),Object(v.jsx)(b.a,{component:O.a,name:"lookingForAJob",type:"checkbox"})]}),Object(v.jsx)("b",{children:"My professioanl slills"}),Object(v.jsx)(b.a,{name:"lookingForAJobDescription",placeholder:"My professioanl slills",component:O.b}),Object(v.jsx)("b",{children:"About me"}),":",Object(v.jsx)(b.a,{name:"aboutMe",placeholder:"About me",component:O.b}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(v.jsxs)("div",{className:B.a.contacts,children:[Object(v.jsx)("b",{children:t})," ",Object(v.jsx)(b.a,{name:"contacts."+t,placeholder:t,component:O.a})]},t)}))]})]})})})),N=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[s&&Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:c,children:"Edit"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"My professioanl slills"}),": ",e.lookingForAJobDescription]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(v.jsx)("div",{className:B.a.contacts,children:Object(v.jsx)(I,{contactTitle:t,contactValue:e.contacts[t]},t)})}))]})]})})},I=function(t){var e=t.contactTitle,s=t.contactValue;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("b",{children:[e,": "]}),s]})},J=function(t){var e=t.profile,s=t.status,c=t.updateUserStatus,o=t.isOwner,n=t.savePhoto,r=t.saveProfile,i=Object(a.useState)(!1),j=Object(A.a)(i,2),u=j[0],l=j[1];if(!e)return Object(v.jsx)(U.a,{});return Object(v.jsxs)("div",{className:B.a.descriptionBlock,children:[e.photos.large?Object(v.jsx)("img",{src:e.photos.large}):Object(v.jsx)("img",{className:B.a.userPhoto,src:C.a}),o&&Object(v.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}}),u?Object(v.jsx)(M,{initialValues:e,profile:e,onSubmit:function(t){r(t).then((function(){l(!1)}))}}):Object(v.jsx)(N,{profile:e,isOwner:o,goToEditMode:function(){l(!0)}}),Object(v.jsx)(F,{status:s,updateUserStatus:c})]})},D=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus,saveProfile:t.saveProfile,isOwner:t.isOwner,savePhoto:t.savePhoto}),Object(v.jsx)(S,{})]})},E=s(6),T=s(288),z=s(10),Q=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match!=t.match&&this.refreshProfile()}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(D,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match}))})}}]),s}(j.a.Component);e.default=Object(z.d)(Object(u.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.isAuth}}),{getUserProfile:l.c,getUserStatus:l.d,updateUserStatus:l.g,savePhoto:l.e,saveProfile:l.f}),T.a)((function(t){var e=Object(E.g)("/profile/:userId/");return Object(v.jsx)(Q,Object(c.a)(Object(c.a)({},t),{},{match:e}))}))}}]);
//# sourceMappingURL=3.6883eb05.chunk.js.map