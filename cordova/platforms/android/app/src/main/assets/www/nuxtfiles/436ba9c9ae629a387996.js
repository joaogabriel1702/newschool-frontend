(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1012:function(t,e,n){"use strict";n.r(e);n(14),n(36),n(145);var o=n(312),r=n.n(o),c=n(693),l=n(44),d=n(305),m={components:{CourseCard:c.a,Avatar:r.a,NavigationBar:d.a},asyncData:function(t){var e=t.store;t.data,t.params,t.$axios;return l.a.getAll("".concat("api/v2/course-taken/user/").concat(e.state.user.data.id)).then((function(t){return e.commit("courses/set",t.data)}))},data:function(){return{title:"Bem-vindo",list:[],loading:!0,filtro:"",notifications:"",userPoints:""}},computed:{user:function(){return this.$store.state.user.data},filteredList:function(){if(this.filtro){var t=new RegExp(this.filtro.trim(),"i");return this.list.filter((function(e){return t.test(e.title)}))}return this.list}},mounted:function(){var t=this;return l.a.getAll("/api/v2/course").then((function(e){t.list=e.data,t.loading=!1,t.getUserPositionByYear(t.user.id)}))},methods:{loadUserName:function(){return this.user.name.split(" ")[0]},goToRanking:function(){$nuxt._router.push("/aluno/ranking")},goToProfile:function(){$nuxt._router.push("/aluno/perfil")},getUserPositionByYear:function(t){var e=this;l.a.getAll("".concat("/api/v1/gamefication/ranking","/user/").concat(t,"?timeRange=YEAR")).then((function(t){var n=t.data.points;e.userPoints=n}))}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Seja bem vindo(a) ao aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}}},v=(n(738),n(39)),f=n(43),h=n.n(f),x=n(340),w=n(323),y=n(129),k=n(295),_=n(324),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):o("div",{attrs:{id:"page"}},[o("v-col",{attrs:{id:"main-col"}},[o("v-row",{attrs:{justify:"end"}},[o("img",{staticClass:"header_img",attrs:{src:n(571)},on:{click:t.goToRanking}})]),t._v(" "),o("v-row",{attrs:{id:"header",align:"center"}},[o("v-avatar",{staticClass:"user__image",attrs:{size:"55"}},[t.user.photo?o("img",{attrs:{src:t.user.photo},on:{click:t.goToProfile}}):o("img",{attrs:{src:n(333)},on:{click:t.goToProfile}})]),t._v(" "),o("v-col",[o("h1",{staticClass:"welcome-title"},[t._v("\n          "+t._s("Salve, "+t.loadUserName()+"!")+"\n        ")]),t._v(" "),o("h1",{staticClass:"welcome-subtitle"},[t._v("Seja bem-vindo")])]),t._v(" "),o("h1",{staticClass:"xp"},[t._v(t._s(t.userPoints||0)+" NC")])],1),t._v(" "),o("v-row",[o("v-text-field",{attrs:{label:"Encontre Cursos",outlined:"","prepend-inner-icon":"mdi-magnify",autocomplete:"off"},model:{value:t.filtro,callback:function(e){t.filtro=e},expression:"filtro"}})],1),t._v(" "),o("v-row",[o("p",{attrs:{id:"title"}},[t._v("Cursos")])]),t._v(" "),o("v-row",t._l(t.filteredList,(function(t){return o("course-card",{key:t.id,attrs:{title:t.title,description:t.description,teacher:t.authorName,image:t.thumbUrl,slug:t.slug}})})),1)],1),t._v(" "),o("client-only",[o("navigation-bar")],1)],1)}),[],!1,null,"27eaf858",null);e.default=component.exports;h()(component,{VAvatar:x.a,VCol:w.a,VProgressCircular:y.a,VRow:k.a,VTextField:_.a})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("a13104f8",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n(190),n(23),n(11),n(7),n(13),n(36),n(5);var o=n(4),r=n(312),c=n.n(r),l=n(110),d=n(109);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/voluntarios"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/contribua"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:v(v({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(307),n(39)),x=n(43),w=n.n(x),y=n(290),k=n(289),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"6c889518",null),_=component.exports;w()(component,{VBtn:y.a,VIcon:k.a});var M={components:{SideMenu:_},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},A=(n(309),n(1050)),C=Object(h.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=C.exports;w()(C,{VBottomNavigation:A.a,VBtn:y.a,VIcon:k.a})},307:function(t,e,n){"use strict";var o=n(299);n.n(o).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-6c889518]{z-index:2}#btnLogout[data-v-6c889518]{margin-top:5px}.mdi-close-circle[data-v-6c889518]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-6c889518]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-6c889518],.container-page>main[data-v-6c889518]{display:-webkit-box;display:flex}#avatar[data-v-6c889518]{margin-right:1rem}.text-menu[data-v-6c889518]{text-transform:uppercase}.mdi-library-books[data-v-6c889518]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-6c889518]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-6c889518]{max-width:500px}.container-page[data-v-6c889518]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-6c889518]{margin-left:0}#close-btn[data-v-6c889518]{cursor:pointer;font-size:30px}#flex-info-user[data-v-6c889518]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-6c889518]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-6c889518]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-6c889518]{width:100%}.item-menu[data-v-6c889518]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-6c889518],.item-menu div[data-v-6c889518]{display:-webkit-box;display:flex}.item-menu div[data-v-6c889518]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-6c889518]:hover{background-color:#e8d1ff}.col-flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-6c889518]{margin-bottom:0!important}h4[data-v-6c889518]{font-weight:600}@media(min-width:600px){#info[data-v-6c889518],.menu-list[data-v-6c889518]{margin:0 auto}}",""]),t.exports=e},309:function(t,e,n){"use strict";var o=n(300);n.n(o).a},310:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},333:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNFMEU3RUMiLz4KPHBhdGggZD0iTTE1Ljg5MjggMTYuMjAyNUMxNy41MzQgMTYuMjAyNSAxOC44NjMzIDE0Ljg3MzIgMTguODYzMyAxMy4yMzIxQzE4Ljg2MzMgMTEuNTkwOSAxNy41MzQgMTAuMjYxNiAxNS44OTI4IDEwLjI2MTZDMTQuMjUxNyAxMC4yNjE2IDEyLjkyMjQgMTEuNTkwOSAxMi45MjI0IDEzLjIzMjFDMTIuOTIyNCAxNC44NzMyIDE0LjI1MTcgMTYuMjAyNSAxNS44OTI4IDE2LjIwMjVaTTE1Ljg5MjggMTcuNjg3OEMxMy45MSAxNy42ODc4IDkuOTUxOSAxOC42ODI5IDkuOTUxOSAyMC42NTgyVjIyLjE0MzVIMjEuODMzOFYyMC42NTgyQzIxLjgzMzggMTguNjgyOSAxNy44NzU2IDE3LjY4NzggMTUuODkyOCAxNy42ODc4WiIgZmlsbD0iIzYyNkQ3NCIvPgo8L3N2Zz4K"},369:function(t,e,n){var content=n(573);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("d25e6302",content,!0,{sourceMap:!1})},571:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJRSURBVHgBtVTNahNRFP7OzcSYJmg0CCqJTNulCO3GdQb3moULd23xAewb1LxBXkCb6FYQihsX0glU6EIwoJQu/BlJEGmwxCLR/DDXc++YNjO5g63QD84M9/x8c8839x7CBGRrtQTCJgyQ37ch97dNIfiAk3Tgjtck30+QJOdyyNxeOCmp2EMTPXQP12wlNg8SDVCmiTgMDmJDSDCpz/WKh/lEsA3U6QYeIn2rbiwaMuHXHd2nCaM819/n+hHq4512WUfbmO33NaHsNDQhqQYH+CcsNtXygonQbz8D+h29JGUHgeEMh68a2Ai5YKcSFX4vybeR3YoUROEukLoULlSEl2FGAnf46QrW0sWXCx4nb6L/Lhclpsx8yCWzCESLQD7GEr+W2epB+OnNLrbmbPS3nk9lD7j9dAHIzwdiGTS1Wljj1mt4k3ZpBTVLe38mgRfXgR3u6x6LVjx3VJFbhGBSdU79wkdQL0xIe6x2Y6aE1xlgN8WeVqSRT3ngSfg8ktrlZJszEdIHV4BHXLd79tA3rU67r47PCo4BCc77Zk35hSmZrlVrXOEguCEmeOq+Ww7raICIKQIVqy4VqrOafND08KujzqgmSziYnRwgwNG9D5MSVZBILEYTFDl6rkc/+Cftw4uQ/SUUqqvK2DEWpEIbGzpZlssOTgThEDx1K5sSxfKxy9R4lC8h5bp51k59BqcAKy4gP6/aHF3Wi2HTltkPwMW2PXzFI44xEqilHfPpiCVFEusIBjgPER5i2d+Qg7bNra3psNSTzajh/7dPOB8X+gOPaL2miIadfgAAAABJRU5ErkJggg=="},572:function(t,e,n){"use strict";var o=n(369);n.n(o).a},573:function(t,e,n){(e=n(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,"*[data-v-4254f818]{font-family:Roboto,sans-serif}.footer-card[data-v-4254f818]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:end;align-items:flex-end}.v-responsive.v-image[data-v-4254f818]{padding-top:45%;height:150px;position:relative;width:100%;border-radius:5px}.v-card-body[data-v-4254f818]{margin-bottom:20px}.v-card__title[data-v-4254f818]{font-weight:700;font-size:.75rem;padding:8px 0 0;line-height:16px;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-4254f818]{padding:0;color:#1a1a1a;font-size:10px;line-height:11.72px}",""]),t.exports=e},574:function(t,e,n){var content=n(739);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("739b2ca2",content,!0,{sourceMap:!1})},693:function(t,e,n){"use strict";n(8);var o=n(3),r=(n(545),{name:"CourseCard",props:{course:{type:Object,required:!0}},computed:{user:function(){return this.$store.state.user}},methods:{openCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("courses/setCurrent",t.course);case 2:"ADMIN"==t.user.data.role?$nuxt._router.push("/admin/curso/".concat(t.course.slug)):$nuxt._router.push("/aluno/curso/".concat(t.course.slug));case 3:case"end":return e.stop()}}),e)})))()}}}),c=(n(572),n(39)),l=n(43),d=n.n(l),m=n(334),v=n(319),f=n(696),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent"},on:{click:function(e){return t.openCourse()}}},[n("v-img",{attrs:{src:t.course.capa.url}}),t._v(" "),n("v-card-title",[t._v(t._s(t.course.titulo))]),t._v(" "),n("div",{staticClass:"footer-card"},[n("v-card-subtitle",{staticClass:"mt-0"},[t._v(t._s(t.course.nomeDoAutor))])],1)],1)}),[],!1,null,"4254f818",null);e.a=component.exports;d()(component,{VCard:m.a,VCardSubtitle:v.b,VCardTitle:v.d,VImg:f.a})},738:function(t,e,n){"use strict";var o=n(574);n.n(o).a},739:function(t,e,n){(e=n(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,"*[data-v-27eaf858]{font-family:Roboto,sans-serif}#main-col[data-v-27eaf858]{padding:20px 24px 50px;max-width:700px}[data-v-27eaf858] .row{width:100%;margin:0}.user__image[data-v-27eaf858]{cursor:pointer}#title[data-v-27eaf858]{color:var(--primary);line-height:16.4px;font-weight:900;font-size:.9rem;margin-bottom:16px}.header_img[data-v-27eaf858]{width:24px;height:24px;margin-right:20px}#bell[data-v-27eaf858]{color:#737373;width:22px;height:22px;margin-right:5px;margin-top:5px}[data-v-27eaf858] .v-input input,[data-v-27eaf858] .v-label{font-size:.87rem!important;font-weight:500;color:rgba(0,0,0,.25)!important;font-family:Montserrat,sans-serif}[data-v-27eaf858] .v-input input{color:rgba(0,0,0,.5)!important}[data-v-27eaf858] .v-input__slot{margin-bottom:0;margin-bottom:10px!important}[data-v-27eaf858] fieldset{border-color:rgba(0,0,0,.1);border-radius:0}[data-v-27eaf858] .v-text-field.v-text-field--enclosed{margin:16px 0 0!important}[data-v-27eaf858] .v-text-field--outlined>.v-input__control>.v-input__slot{min-height:48px}[data-v-27eaf858] .v-input:not(.v-input--is-focused)>.v-input__control>.v-input__slot>.v-text-field__slot>.v-label{line-height:12px}[data-v-27eaf858] .v-text-field--enclosed .v-input__prepend-inner{margin-top:0;align-self:center}[data-v-27eaf858] .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 19px}[data-v-27eaf858] .theme--light.v-icon{color:rgba(0,0,0,.9)}#header[data-v-27eaf858]{height:auto;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.05)}.welcome[data-v-27eaf858]{padding-left:1rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}h1[data-v-27eaf858]{font-weight:900;font-size:1.5rem;line-height:24px}.xp[data-v-27eaf858]{font-size:1rem;-webkit-box-flex:center;flex:center}.welcome-title[data-v-27eaf858],.xp[data-v-27eaf858]{font-weight:900;color:#1a1a1a}.welcome-title[data-v-27eaf858]{font-size:.87rem}.welcome-subtitle[data-v-27eaf858]{line-height:10px;color:var(--primary);font-size:.75rem;font-weight:500;font-family:Montserrat,sans-serif;text-transform:uppercase}.article-container[data-v-27eaf858]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.max-content[data-v-27eaf858]{max-height:100vh;width:100%;box-sizing:border-box;margin:0 auto}.title-section[data-v-27eaf858]{font-weight:900;font-size:.9rem;line-height:17px;color:var(--primary);padding:1.25em 0 .5em 1.6em;text-transform:uppercase}@media (min-width:992px){#page[data-v-27eaf858]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}}",""]),t.exports=e}}]);