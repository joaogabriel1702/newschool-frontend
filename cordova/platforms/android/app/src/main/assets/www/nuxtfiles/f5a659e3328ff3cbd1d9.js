(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{297:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("a13104f8",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(303),n(39)),c=n(43),l=n.n(c),d=n(290),m=n(289),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:m.a})},303:function(t,e,n){"use strict";var o=n(297);n.n(o).a},304:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},305:function(t,e,n){"use strict";n(190),n(23),n(11),n(7),n(13),n(36),n(5);var o=n(4),r=n(312),c=n.n(r),l=n(110),d=n(109);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/voluntarios"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/contribua"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:v(v({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(307),n(39)),x=n(43),w=n.n(x),k=n(290),_=n(289),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"6c889518",null),y=component.exports;w()(component,{VBtn:k.a,VIcon:_.a});var C={components:{SideMenu:y},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},O=(n(309),n(1050)),j=Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=j.exports;w()(j,{VBottomNavigation:O.a,VBtn:k.a,VIcon:_.a})},307:function(t,e,n){"use strict";var o=n(299);n.n(o).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-6c889518]{z-index:2}#btnLogout[data-v-6c889518]{margin-top:5px}.mdi-close-circle[data-v-6c889518]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-6c889518]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-6c889518],.container-page>main[data-v-6c889518]{display:-webkit-box;display:flex}#avatar[data-v-6c889518]{margin-right:1rem}.text-menu[data-v-6c889518]{text-transform:uppercase}.mdi-library-books[data-v-6c889518]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-6c889518]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-6c889518]{max-width:500px}.container-page[data-v-6c889518]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-6c889518]{margin-left:0}#close-btn[data-v-6c889518]{cursor:pointer;font-size:30px}#flex-info-user[data-v-6c889518]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-6c889518]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-6c889518]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-6c889518]{width:100%}.item-menu[data-v-6c889518]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-6c889518],.item-menu div[data-v-6c889518]{display:-webkit-box;display:flex}.item-menu div[data-v-6c889518]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-6c889518]:hover{background-color:#e8d1ff}.col-flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-6c889518]{margin-bottom:0!important}h4[data-v-6c889518]{font-weight:600}@media(min-width:600px){#info[data-v-6c889518],.menu-list[data-v-6c889518]{margin:0 auto}}",""]),t.exports=e},309:function(t,e,n){"use strict";var o=n(300);n.n(o).a},310:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},619:function(t,e,n){t.exports=n.p+"img/4c9b9bd.svg"},620:function(t,e,n){var content=n(808);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("330a73e2",content,!0,{sourceMap:!1})},706:function(t,e,n){"use strict";var o=n(44),r={name:"CertificateCard",props:["certificate"],data:function(){return{showThumb:!0}},computed:{params:function(){return this.$route.params},idUser:function(){return this.$store.state.user.data.id},allCourses:function(){return this.$store.state.courses.all}},methods:{goToCertificate:function(t){window.location="http://newschool-ui-dev.eba-fdz8zprg.us-east-2.elasticbeanstalk.com/#/pagina-certificado/".concat(this.idUser,"/").concat(this.certificate.courseId,"/").concat(t)},imageLoadError:function(){this.showThumb=!1},onSuccess:function(t){var e=this;o.a.post("/api/v1/gamefication/start-event",{event:"SHARE_COURSE",rule:{courseId:this.params.idCourse,userId:this.idUser,platform:t.app}}).then((function(t){e.$notifier.showMessage({type:"success"}),$nuxt._router.push("/aluno/home")})).catch((function(){return e.$notifier.showMessage({type:"error"})}))},onError:function(t){alert("Sharing failed with message: "+t)},share:function(t,title,image){t.stopPropagation(),t.preventDefault();var e={message:"Se liga no certificado que eu ganhei, SELOKO!",subject:this.tryMessage,url:"http://newschool-ui-dev.eba-fdz8zprg.us-east-2.elasticbeanstalk.com/#/pagina-certificado/".concat(this.idUser,"/").concat(this.certificate.courseId,"/0"),chooserTitle:"Vem colar com nois!"};window.plugins.socialsharing.shareWithOptions(e,this.onSuccess,this.onError)},openCertificate:function(){this.$router.push("/pagina-certificado/".concat(this.idUser,"/").concat(this.certificate.courseId,"/2"))}}},c=(n(807),n(39)),l=n(43),d=n.n(l),m=n(334),v=n(319),f=n(323),h=n(289),x=n(696),w=n(295),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"main-col",attrs:{align:"center"}},[o("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent"}},[[o("v-img",{attrs:{src:t.certificate.course.capa.url}}),t._v(" "),o("v-img",{staticClass:"thumb-background",on:{click:t.openCertificate}}),t._v(" "),o("v-img",{staticClass:"medal",attrs:{contain:"",src:n(619)},on:{click:t.openCertificate}})],t._v(" "),o("div",{staticClass:"footer-card"},[o("v-row",[o("v-col",{staticClass:"pt-0",attrs:{align:"left"}},[o("v-card-title",[t._v(t._s(t.certificate.course.titulo))]),t._v(" "),o("v-card-subtitle",{staticClass:"mt-0"},[t._v(t._s(t.certificate.course.nomeDoAutor))])],1),t._v(" "),o("v-card-actions",{staticClass:"pt-0"},[o("v-icon",{staticClass:"pr-2",attrs:{color:"grey"},on:{click:function(e){return t.goToCertificate(1)}}},[t._v("mdi-download")]),t._v(" "),o("v-icon",{attrs:{color:"grey"},on:{click:function(e){return t.share(e,t.title,t.image)}}},[t._v("mdi-share-variant")])],1)],1)],1)],2)],1)}),[],!1,null,"46591f7a",null);e.a=component.exports;d()(component,{VCard:m.a,VCardActions:v.a,VCardSubtitle:v.b,VCardTitle:v.d,VCol:f.a,VIcon:h.a,VImg:x.a,VRow:w.a})},807:function(t,e,n){"use strict";var o=n(620);n.n(o).a},808:function(t,e,n){(e=n(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,"*[data-v-46591f7a]{font-family:Roboto,sans-serif}.thumb-background[data-v-46591f7a]{background-color:var(--primary);position:absolute;top:0;opacity:.4}.footer-card[data-v-46591f7a]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:end;align-items:flex-end}.v-responsive.v-image[data-v-46591f7a]{padding-top:45%;height:150px;width:100%;border-radius:5px}.v-card-body[data-v-46591f7a]{margin-bottom:20px}.v-card__title[data-v-46591f7a]{font-weight:700;font-size:.75rem;padding:8px 0 0;line-height:16px;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-46591f7a]{padding:0;color:#1a1a1a;font-size:10px;line-height:11.72px}.medal[data-v-46591f7a]{position:absolute;top:0;max-width:4rem;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%)}",""]),t.exports=e}}]);