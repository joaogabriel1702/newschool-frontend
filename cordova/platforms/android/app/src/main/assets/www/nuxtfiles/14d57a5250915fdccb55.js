(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1042:function(t,e,n){"use strict";n.r(e);n(8);var o=n(3),r=(n(36),n(305)),c=n(44),l=n(301),d={components:{NavigationBar:r.a,HeaderBar:l.a},data:function(){return{computedSelection:[],cmpSelect:[],correct:!1,loading:!0,try:1,hasthtag:"",badgePoints:0,tryMessage:"",headerNotification:"",textNotification:""}},computed:{test:function(){return this.$store.state.courses.currentTest},alternativeRule:function(){return[!!this.computedSelection.length||"Selecione uma alternativa"]},idUser:function(){return this.$store.state.user.data.id},user:function(){return this.$store.state.user.data},courseId:function(){return this.$store.state.courses.current.id},slug:function(){return this.$route.params.courseSlug},selected:{get:function(){return this.$data.computedSelection},set:function(t){this.$data.cmpSelect=t}}},watch:{setCorrect:function(t){this.correct=t},cmpSelect:function(t){this.computedSelection=t,this.computedSelection.length>1&&this.computedSelection.shift()}},mounted:function(){this.loading=!1},methods:{resetBadgeAndContinue:function(){this.badgePoints=0,this.try=1,this.correct=!1,this.advanceCourse()},nextTest:function(){var t=this;this.$refs.form.validate()&&c.a.post("".concat("/api/v2/test/").concat(this.test.id,"/check-test"),{chosenAlternative:this.computedSelection[0]}).then((function(e){e.data.isCorrect?(t.$refs.form.reset(),t.getPointsAndNotificate()):(t.try<4&&t.try++,t.computedSelection=[])}))},getPointsAndNotificate:function(){this.badgePoints={1:10,2:5,3:2,4:1}[this.try],this.tryMessage={1:"De \n primeira!!",2:"Na \n segunda!",3:"Na \n terceira!",4:"Na \n última!"}[this.try],this.hasthtag=this.tryMessage.split("\n").join(""),this.headerNotification={1:"Mandou Bem!",2:"Nossa, foi por pouco!",3:"Continue Estudando!",4:"Não desista!"}[this.try],this.textNotification={1:"Parabéns por acertar de primeira, você vai longe!",2:"Você quase acertou de primeira, continue estudando, você está quase lá.",3:"Você acertou na terceira tentativa, agora é pegar mais firme nos estudos para acertar de primeira!",4:"Você é um guerreiro(a), dedique mais tempo aos estudos e tire suas dúvidas, você é capaz de ir longe."}[this.try],this.correct=!0},onSuccess:function(t){console.log("Shared to app: "+t.app),console.log(t)},onError:function(t){alert("Sharing failed with message: "+t)},share:function(t,title,image){t.stopPropagation(),t.preventDefault();var e={message:"Se liga nessa questão que eu acertei!",subject:this.tryMessage,url:"newschool-ui-dev.eba-fdz8zprg.us-east-2.elasticbeanstalk.com/#/cadastro/".concat(this.user.inviteKey),chooserTitle:"Vem colar com nois!"};window.plugins.socialsharing.shareWithOptions(e,this.onSuccess,this.onError)},setCorrect:function(t){this.correct=t},advanceCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,c.a.post("".concat("/api/v2/course-taken/advance-on-course","/user/").concat(t.idUser,"/course/").concat(t.courseId));case 3:return e.next=5,t.$store.dispatch("courses/refreshCurrentStep");case 5:"TEST"===(n=e.sent).type?t.loading=!1:$nuxt._router.push(n.stepUrl);case 7:case"end":return e.stop()}}),e)})))()}}},v=(n(944),n(39)),m=n(947),h=n(43),f=n.n(h),x=n(290),_=n(989),k=n(337),y=n(345),w=n(289),C=n(330),j=n(129),O=n(295),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t.correct?t._e():o("HeaderBar",{attrs:{title:this.$store.state.courses.current.titulo,route:"/aluno/curso/"+t.slug}}),t._v(" "),o("v-layout",{attrs:{id:"page","justify-center":""}},[o("v-flex",{ref:"flex",staticClass:"main-container"},[t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):t._e(),t._v(" "),!t.loading&&t.correct?o("div",{staticClass:"notification__content"},[o("div",{staticClass:"bg__fire"},[o("v-row",{staticClass:"pr-10 pt-6",attrs:{id:"close",justify:"end"}},[o("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:t.resetBadgeAndContinue}},[t._v("mdi-close-circle")])],1),t._v(" "),o("div",{staticClass:"notification"},["De \n primeira!!"===t.tryMessage?o("img",{staticClass:"notification__image",attrs:{src:n(940),alt:""}}):t._e(),t._v(" "),"Na \n segunda!"===t.tryMessage?o("img",{staticClass:"notification__image",attrs:{src:n(941),alt:""}}):t._e(),t._v(" "),"Na \n terceira!"===t.tryMessage?o("img",{staticClass:"notification__image",attrs:{src:n(942),alt:""}}):t._e(),t._v(" "),"Na \n última!"===t.tryMessage?o("img",{staticClass:"notification__image",attrs:{src:n(943),alt:""}}):t._e()]),t._v(" "),o("div",{staticClass:"messages pb-5"},[o("h1",{staticClass:"message"},[t._v("\n              "+t._s(t.headerNotification)+"\n            ")]),t._v(" "),o("p",{staticClass:"message__subtext"},[t._v("\n              "+t._s(t.textNotification)+"\n            ")])])],1),t._v(" "),o("div",{staticClass:"share__achievement"},[o("p",[t._v("Compartilhe com seus amigos")]),t._v(" "),o("div",[o("div",{staticClass:"icons"},[o("button",{staticClass:"btn-block btn-primary",on:{click:function(e){return t.share(e,t.title,t.image)}}},[t._v("\n                COMPARTILHAR\n              ")])])])])]):t._e(),t._v(" "),t.loading||t.correct?t._e():o("div",{staticClass:"inner-container"},[o("v-form",{ref:"form",attrs:{"lazy-validation":""}},[o("h3",[t._v(t._s(t.test.titulo||"Título do Teste"))]),t._v(" "),o("h4",{staticClass:"mt-5"},[t._v("\n            "+t._s(t.test.pergunta||"Enunciado do teste")+"\n          ")]),t._v(" "),o("div",{staticClass:"alternatives-container"},[o("v-checkbox",{staticClass:"first-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.primeira_alternativa,value:"A"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),o("v-checkbox",{staticClass:"second-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.segunda_alternativa,value:"B"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),o("v-checkbox",{staticClass:"third-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.terceira_alternativa,value:"C"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),o("v-checkbox",{staticClass:"fourth-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.quarta_alternativa,value:"D"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),o("div",{staticClass:"base"},[o("v-btn",{staticClass:"btn-block btn-primary btn-fixed",on:{click:t.nextTest}},[t._v("\n            Próximo\n          ")])],1)],1)]),t._v(" "),t.correct?t._e():o("navigation-bar")],1)],1)}),[],!1,null,"5365756a",null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;f()(component,{VBtn:x.a,VCheckbox:_.a,VFlex:k.a,VForm:y.a,VIcon:w.a,VLayout:C.a,VProgressCircular:j.a,VRow:O.a})},297:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("a13104f8",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(303),n(39)),c=n(43),l=n.n(c),d=n(290),v=n(289),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},303:function(t,e,n){"use strict";var o=n(297);n.n(o).a},304:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},305:function(t,e,n){"use strict";n(190),n(23),n(11),n(7),n(13),n(36),n(5);var o=n(4),r=n(312),c=n.n(r),l=n(110),d=n(109);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/voluntarios"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/contribua"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:m(m({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},f=(n(307),n(39)),x=n(43),_=n.n(x),k=n(290),y=n(289),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"6c889518",null),w=component.exports;_()(component,{VBtn:k.a,VIcon:y.a});var C={components:{SideMenu:w},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},j=(n(309),n(1050)),O=Object(f.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=O.exports;_()(O,{VBottomNavigation:j.a,VBtn:k.a,VIcon:y.a})},307:function(t,e,n){"use strict";var o=n(299);n.n(o).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-6c889518]{z-index:2}#btnLogout[data-v-6c889518]{margin-top:5px}.mdi-close-circle[data-v-6c889518]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-6c889518]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-6c889518],.container-page>main[data-v-6c889518]{display:-webkit-box;display:flex}#avatar[data-v-6c889518]{margin-right:1rem}.text-menu[data-v-6c889518]{text-transform:uppercase}.mdi-library-books[data-v-6c889518]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-6c889518]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-6c889518]{max-width:500px}.container-page[data-v-6c889518]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-6c889518]{margin-left:0}#close-btn[data-v-6c889518]{cursor:pointer;font-size:30px}#flex-info-user[data-v-6c889518]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-6c889518]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-6c889518]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-6c889518]{width:100%}.item-menu[data-v-6c889518]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-6c889518],.item-menu div[data-v-6c889518]{display:-webkit-box;display:flex}.item-menu div[data-v-6c889518]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-6c889518]:hover{background-color:#e8d1ff}.col-flex-center[data-v-6c889518]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-6c889518]{margin-bottom:0!important}h4[data-v-6c889518]{font-weight:600}@media(min-width:600px){#info[data-v-6c889518],.menu-list[data-v-6c889518]{margin:0 auto}}",""]),t.exports=e},309:function(t,e,n){"use strict";var o=n(300);n.n(o).a},310:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},677:function(t,e,n){var content=n(945);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("67e7e024",content,!0,{sourceMap:!1})},678:function(t,e){},940:function(t,e,n){t.exports=n.p+"img/5057757.png"},941:function(t,e,n){t.exports=n.p+"img/e0c30ea.png"},942:function(t,e,n){t.exports=n.p+"img/5c731bd.png"},943:function(t,e,n){t.exports=n.p+"img/ba940d1.png"},944:function(t,e,n){"use strict";var o=n(677);n.n(o).a},945:function(t,e,n){var o=n(28),r=n(353),c=n(946);e=o(!1);var l=r(c);e.push([t.i,"h1[data-v-5365756a]{font-weight:900;font-size:1em;line-height:36px;text-align:center;color:var(--primary)}@media screen and (max-width:20.625em){h1[data-v-5365756a]{font-size:14px}}h3[data-v-5365756a]{font-weight:900;font-size:14px}h3[data-v-5365756a],h4[data-v-5365756a]{font-family:Roboto;line-height:16px;color:#1a1a1a}h4[data-v-5365756a]{font-size:12px;font-weight:400;text-align:justify}.main-container[data-v-5365756a]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0 2rem}.inner-container[data-v-5365756a]{margin:1em 6px 0;padding:0 .5em!important}[data-v-5365756a] .btn-primary{margin-top:25px}label[data-v-5365756a]{text-align:justify}.mdi-close-circle[data-v-5365756a]:before{color:var(--primary);width:20px;height:20px;z-index:9999999}.notification[data-v-5365756a]{width:193px;height:193px;margin-top:100px}.bg__fire[data-v-5365756a]{background-image:url("+l+');background-repeat:no-repeat;background-size:cover}.messages[data-v-5365756a]{padding:0 2em}.base[data-v-5365756a]{position:absolute;bottom:96px;width:92%;margin:0 auto}.message[data-v-5365756a]{font-size:24px;color:#000;z-index:9999;margin-top:5%;font-weight:600}.message__subtext[data-v-5365756a]{margin-top:2%;text-align:center;z-index:9999;font-size:16px}.notification__content[data-v-5365756a]{max-width:480px;margin:0 auto}[data-v-5365756a] .main-container{padding:0!important}.share__achievement[data-v-5365756a]{margin-top:10%}.share__achievement p[data-v-5365756a]{font-size:12px;text-align:center}.icons[data-v-5365756a]{margin:5% auto;width:60%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;justify-content:space-around}.notification__image[data-v-5365756a]{position:absolute;z-index:999;height:200px;width:auto;max-height:280px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-v-5365756a] .theme--light.v-label{color:#000!important;font-weight:600;font-size:14px!important;font-family:Roboto}[data-v-5365756a] .first-alternative>div>div>label:before{content:"A:";font-weight:400;color:var(--primary);margin-right:.5em}[data-v-5365756a] .second-alternative>div>div>label:before{content:"B:";font-weight:400;color:var(--primary);margin-right:.5em}[data-v-5365756a] .third-alternative>div>div>label:before{content:"C:";font-weight:400;color:var(--primary);margin-right:.5em}[data-v-5365756a] .fourth-alternative>div>div>label:before{content:"D:";font-weight:400;color:var(--primary);margin-right:.5em}.icons[data-v-5365756a]:hover{cursor:pointer}[data-v-5365756a] .mdi-checkbox-blank-outline:before{content:url(https://api.iconify.design/bi:circle.svg?height=16);vertical-align:-.125em}[data-v-5365756a] .mdi-checkbox-marked:before{content:url(https://api.iconify.design/bi:check-circle-fill.svg?color=rgb%28104%2C0%2C201%29&height=16);vertical-align:-.125em}@media(min-width:480px){.notification__content[data-v-5365756a]{top:0;height:100vh}.messages[data-v-5365756a]{margin-top:-12%}.btn-block[data-v-5365756a]{width:96%;padding:5px auto}#page[data-v-5365756a]{height:100vh;overflow:hidden}}',""]),t.exports=e},946:function(t,e,n){t.exports=n.p+"img/7fbd961.png"},947:function(t,e,n){"use strict";var o=n(678),r=n.n(o);e.default=r.a}}]);