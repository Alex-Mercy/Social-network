(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(40),s=n(4),a="dialogs/SEND_MESSAGE",c={dialogs:[{id:1,name:"Max"},{id:2,name:"Alex"},{id:3,name:"Vera"},{id:4,name:"Vova"},{id:5,name:"Dima"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo!"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===a?Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.newMessageBody}])}):e}},11:function(e,t,n){e.exports={nav:"Navbar_nav__25Lb-",item:"Navbar_item__3uqLv",active:"Navbar_active__3Knrs"}},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(124),s=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"24635b41-a830-49f0-81e2-67ea1fbc69b6"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return s.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))}},c={unfollowUsers:function(e){return s.delete("follow/".concat(e),{}).then((function(e){return e.data}))},followUsers:function(e){return s.post("follow/".concat(e),{}).then((function(e){return e.data}))}},i={getUserProfile:function(e){return s.get("profile/".concat(e),{}).then((function(e){return e.data}))},getUserStatus:function(e){return s.get("profile/status/".concat(e))},updateUserStatus:function(e){return s.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return s.put("profile",e)}},o={me:function(){return s.get("auth/me",{}).then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}}},239:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n(90),a=n(100),c=n(9),i=n.n(c),o=n(16),u=n(40),l=n(4),f=n(15),d=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(l.a)(Object(l.a)({},e),r):e}))},j="FOLLOW",p="UNFOLLOW",b="SET_USERS",h="SET_CURRNET_PAGE",O="SET_TOTAL_USERS_COUNT",g="TOGGLE_IS_FETCHING",m="TOGGLE_IS_FOLLOWING_PROGRESS",v={users:[],pageSize:10,totalUsersCount:0,portionUsersSize:10,currentPage:1,isFetching:!1,followingInProgress:[]},x=function(e){return{type:j,userId:e}},w=function(e){return{type:p,userId:e}},P=function(e){return{type:g,isFetching:e}},_=function(e,t){return{type:m,isFetching:e,userId:t}},S=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r,s){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(s(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{users:d(e.users,t.userId,"id",{followed:!0})});case p:return Object(l.a)(Object(l.a)({},e),{},{users:d(e.users,t.userId,"id",{followed:!1})});case b:return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case h:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case O:return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case g:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case m:return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},C=n(30),U="auth/SET_USER_DATA",E={id:null,email:null,login:null,isAuth:!1},N=function(e,t,n,r){return{type:U,payLoad:{id:e,email:t,login:n,isAuth:r}}},k=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,s,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,c=r.login,t(N(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type===U?Object(l.a)(Object(l.a)({},e),t.payLoad):e},A=n(126),z=n(123),F="app/INITIALIZED_SUCCES",T={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type===F?Object(l.a)(Object(l.a)({},e),{},{initialized:!0}):e},M=Object(r.c)({profilePage:s.b,dialogsPage:a.a,usersPage:y,auth:I,form:z.a,app:L}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,D=Object(r.e)(M,R(Object(r.a)(A.a))),G=n(0),V=n.n(G),H=n(64),B=n.n(H),q=n(32),W=n(33),X=n(35),J=n(34),K=n(6),Y=(n(239),n(12)),Z=n(87),Q=n.n(Z),$=n(1),ee=function(e){return Object($.jsxs)("header",{className:Q.a.header,children:[Object($.jsx)("img",{src:"https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png"}),Object($.jsx)("div",{className:Q.a.loginBlock,children:e.isAuth?Object($.jsxs)("div",{children:[e.login," ",Object($.jsxs)("div",{children:[" ",Object($.jsx)("button",{onClick:e.logout,children:"Logout"})," "]})]}):Object($.jsx)(Y.b,{to:"/login",children:"Login"})})]})},te=n(17),ne=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"render",value:function(){return Object($.jsx)(ee,Object(l.a)({},this.props))}}]),n}(V.a.Component),re=Object(te.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.logout();case 2:0===e.sent.data.resultCode&&t(N(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ne),se=n(11),ae=n.n(se),ce=function(){return Object($.jsxs)("nav",{className:ae.a.nav,children:[Object($.jsx)("div",{children:Object($.jsx)(Y.b,{to:"/profile",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Profile"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"/dialogs",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Messages"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"/users",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Users"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"/news",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"News"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"/music",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Music"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"settings",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Settings"})}),Object($.jsx)("div",{className:ae.a.item,children:Object($.jsx)(Y.b,{to:"login",className:function(e){return e.isActive?ae.a.active:ae.a.item},children:"Login"})})]})},ie=(n(245),function(){return Object($.jsx)("div",{children:"News"})}),oe=(n(246),function(){return Object($.jsx)("div",{children:"Music"})}),ue=(n(247),function(){return Object($.jsx)("div",{children:"Settings"})}),le=n(66),fe=n.n(le),de=n(23),je=n(68),pe=n.n(je),be=function(e){for(var t=Math.ceil(e.totalItmesCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var s=Math.ceil(t/e.portionSize),a=Object(G.useState)(1),c=Object(de.a)(a,2),i=c[0],o=c[1],u=10*(i-1)+1,l=10*i;return Object(G.useEffect)((function(){o(Math.ceil(e.currentPage/10))}),[e.currentPage]),Object($.jsxs)("div",{className:pe.a.paginator,children:[i>1&&Object($.jsx)("button",{onClick:function(){o(i-1)},children:"PREV"}),n.filter((function(e){return e>=u&&e<=l})).map((function(t){return Object($.jsxs)("span",{className:e.currentPage===t?pe.a.selectedPage:pe.a.noSelectedPage,onClick:function(n){e.onPageChanged(t)},children:[" ",t]})})),s>i&&Object($.jsx)("button",{onClick:function(){o(i+1)},children:"NEXT"})]})},he=n(91),Oe=function(e){return Object($.jsxs)("div",{children:[Object($.jsx)("div",{children:Object($.jsx)(Y.b,{to:"/profile/"+e.user.id,children:Object($.jsx)("img",{src:null!=e.user.photos.small?e.user.photos.small:he.a,className:fe.a.photo})})}),Object($.jsx)("div",{children:e.user.followed?Object($.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object($.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object($.jsx)("div",{children:e.user.name}),Object($.jsx)("div",{children:e.user.status}),Object($.jsx)("div",{children:"props.user.location.country"}),Object($.jsx)("div",{children:"props.user.location.city"}),Object($.jsx)("div",{})]})},ge=function(e){return Object($.jsxs)("div",{className:fe.a.usersPage,children:[Object($.jsx)(be,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItmesCount:e.totalUsersCount,portionSize:e.portionUsersSize,pageSize:e.pageSize}),e.users.map((function(t){return Object($.jsx)(Oe,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))]})},me=n(45),ve=n(128),xe=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},_e=function(e){return e.usersPage.portionUsersSize},Se=function(e){return e.usersPage.currentPage},ye=function(e){return e.usersPage.isFetching},Ce=function(e){return e.usersPage.followingInProgress},Ue=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageSize)},e}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object($.jsxs)($.Fragment,{children:[this.props.isFetching?Object($.jsx)(me.a,{}):null,Object($.jsx)(ge,{totalUsersCount:this.props.totalUsersCount,portionUsersSize:this.props.portionUsersSize,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(V.a.Component),Ee=Object(r.d)(Object(te.b)((function(e){return{users:xe(e),pageSize:we(e),totalUsersCount:Pe(e),portionUsersSize:_e(e),currentPage:Se(e),isFetching:ye(e),followingInProgress:Ce(e)}}),{follow:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(n,e,f.b.followUsers.bind(f.b),x);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(n,e,f.b.unfollowUsers.bind(f.b),w);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:h,currentPage:e}},toggleFollowingProgress:_,requestUsers:function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(r){var s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(P(!0)),n.next=3,f.d.getUsers(e,t);case 3:s=n.sent,r(P(!1)),r((c=s.items,{type:b,users:c})),r((a=s.totalCount,{type:O,count:a}));case 7:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ue),Ne=n(121),ke=n(122),Ie=n(62),Ae=n(83),ze=n(51),Fe=n.n(ze),Te=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object($.jsxs)("form",{onSubmit:t,children:[Object($.jsx)("div",{children:Object($.jsx)(Ne.a,{placeholder:"Email",name:"email",component:Ie.a,validate:[Ae.b]})}),Object($.jsx)("div",{children:Object($.jsx)(Ne.a,{placeholder:"Password",name:"password",type:"password",component:Ie.a,validate:[Ae.b]})}),Object($.jsxs)("div",{children:[Object($.jsx)(Ne.a,{component:Ie.a,name:"rememberMe",type:"checkbox"}),"Remember me"]}),n&&Object($.jsx)("div",{className:Fe.a.formSummaryError,children:n}),Object($.jsx)("div",{children:Object($.jsx)("button",{children:"Login"})})]})})),Le=Object(te.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(o.a)(i.a.mark((function r(s){var a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(k()):(c=a.data.messages.length>0?a.data.messages[0]:"Some Error",s(Object(C.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object($.jsx)(K.a,{to:"/profile"}):Object($.jsxs)("div",{children:[Object($.jsx)("h1",{children:"Login"}),Object($.jsx)(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me=V.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),Re=V.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),De=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object($.jsxs)("div",{className:"app-wrapper",children:[Object($.jsx)(re,{}),Object($.jsx)(ce,{}),Object($.jsxs)("div",{className:"app-wrapper__content",children:[Object($.jsx)(G.Suspense,{fallback:Object($.jsx)(me.a,{}),children:Object($.jsxs)(K.d,{children:[Object($.jsx)(K.b,{path:"/dialogs/*",element:Object($.jsx)(Re,{})}),Object($.jsx)(K.b,{path:"/profile/*",element:Object($.jsx)(Me,{})})]})}),Object($.jsxs)(K.d,{children:[Object($.jsx)(K.b,{path:"/users",element:Object($.jsx)(Ee,{})}),Object($.jsx)(K.b,{path:"/news",element:Object($.jsx)(ie,{})}),Object($.jsx)(K.b,{path:"/music",element:Object($.jsx)(oe,{})}),Object($.jsx)(K.b,{path:"/settings",element:Object($.jsx)(ue,{})}),Object($.jsx)(K.b,{path:"/login",element:Object($.jsx)(Le,{})})]})]})]}):Object($.jsx)(me.a,{})}}]),n}(G.Component),Ge=Object(te.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e({type:F})}))}}})(De);B.a.render(Object($.jsx)(Y.a,{basemname:"/Social-network",children:Object($.jsx)(te.a,{store:D,children:Object($.jsx)(Ge,{})})}),document.getElementById("root"))},45:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.707b7930.gif",s=n(1);t.a=function(e){return Object(s.jsx)("div",{style:{backgroundColor:"white"},children:Object(s.jsx)("img",{src:r})})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3RW09",error:"FormsControls_error__1UCVb",formSummaryError:"FormsControls_formSummaryError__2e3ev"}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(4),s=n(129),a=(n(0),n(51)),c=n.n(a),i=n(1),o=["input","meta","Formtype"],u=function(e){var t=e.input,n=e.meta,a=e.Formtype,u=Object(s.a)(e,o),l=n.touched&&n.error;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:c.a.formControl+" "+(l?c.a.error:""),children:[Object(i.jsx)(a,Object(r.a)(Object(r.a)({},t),u)),Object(i.jsx)("div",{children:l&&Object(i.jsx)("span",{children:n.error})})]})})},l=function(e){return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{Formtype:"textarea"}))},f=function(e){return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{Formtype:"input"}))}},66:function(e,t,n){e.exports={usersPage:"Users_usersPage__19JE-",photo:"Users_photo__2evyf"}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__3O24u",selectedPage:"Paginator_selectedPage__ncXev",noSelectedPage:"Paginator_noSelectedPage__1oe1R"}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={header:"Header_header__35pI1",loginBlock:"Header_loginBlock__2SVIV"}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(9),s=n.n(r),a=n(16),c=n(40),i=n(4),o=n(15),u=n(30),l="profile/ADD-POST",f="profile/SET_USER_PROFILE",d="profile/SET_USER_STATUS",j="profile/DELETE_POST",p="profile/SAVE_PHOTO_SUCCES",b={posts:[{id:1,message:"Hi, how are you?",likesCount:32},{id:2,message:"It is my first post.",likesCount:12}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getUserProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getUserStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((s=r.data.data.photos,{type:p,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n,r){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,o.c.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=9;break}n(g(a)),t.next=11;break;case 9:return n(Object(u.a)("ProfileDataForm",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.newPostText,likesCount:0}])});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},91:function(e,t,n){"use strict";t.a=n.p+"static/media/user.751256e2.jpg"}},[[287,1,2]]]);
//# sourceMappingURL=main.747deedd.chunk.js.map