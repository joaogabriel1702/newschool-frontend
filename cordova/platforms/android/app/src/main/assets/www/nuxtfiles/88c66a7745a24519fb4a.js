(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{297:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("9a59d33c",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(301),n(39)),l=n(43),c=n.n(l),d=n(289),v=n(288),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;c()(component,{VBtn:d.a,VIcon:v.a})},301:function(t,e,n){"use strict";var o=n(297);n.n(o).a},302:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},304:function(t,e,n){"use strict";n(189),n(23),n(11),n(7),n(13),n(35),n(5);var o=n(4),r=n(311),l=n.n(r),c=n(110),d=n(109);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:f(f({},Object(c.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:l.a}},h=(n(305),n(39)),x=n(43),w=n.n(x),j=n(289),k=n(288),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"0ed9528c",null),y=component.exports;w()(component,{VBtn:j.a,VIcon:k.a});var _={components:{SideMenu:y},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},C=(n(307),n(1041)),z=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=z.exports;w()(z,{VBottomNavigation:C.a,VBtn:j.a,VIcon:k.a})},305:function(t,e,n){"use strict";var o=n(298);n.n(o).a},306:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-0ed9528c]{z-index:2}#btnLogout[data-v-0ed9528c]{margin-top:5px}.mdi-close-circle[data-v-0ed9528c]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-0ed9528c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-0ed9528c],.container-page>main[data-v-0ed9528c]{display:-webkit-box;display:flex}#avatar[data-v-0ed9528c]{margin-right:1rem}.text-menu[data-v-0ed9528c]{text-transform:uppercase}.mdi-library-books[data-v-0ed9528c]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-0ed9528c]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-0ed9528c]{max-width:500px}.container-page[data-v-0ed9528c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-0ed9528c]{margin-left:0}#close-btn[data-v-0ed9528c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-0ed9528c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-0ed9528c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-0ed9528c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-0ed9528c]{width:100%}.item-menu[data-v-0ed9528c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-0ed9528c],.item-menu div[data-v-0ed9528c]{display:-webkit-box;display:flex}.item-menu div[data-v-0ed9528c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-0ed9528c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-0ed9528c]{margin-bottom:0!important}h4[data-v-0ed9528c]{font-weight:600}@media(min-width:600px){#info[data-v-0ed9528c],.menu-list[data-v-0ed9528c]{margin:0 auto}}",""]),t.exports=e},307:function(t,e,n){"use strict";var o=n(299);n.n(o).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},532:function(t,e,n){var content=n(716);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4295dd91",content,!0,{sourceMap:!1})},533:function(t,e,n){var content=n(718);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("9d30b0ec",content,!0,{sourceMap:!1})},534:function(t,e,n){var content=n(720);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("41d32a21",content,!0,{sourceMap:!1})},535:function(t,e){},674:function(t,e,n){var map={"./af":379,"./af.js":379,"./ar":380,"./ar-dz":381,"./ar-dz.js":381,"./ar-kw":382,"./ar-kw.js":382,"./ar-ly":383,"./ar-ly.js":383,"./ar-ma":384,"./ar-ma.js":384,"./ar-sa":385,"./ar-sa.js":385,"./ar-tn":386,"./ar-tn.js":386,"./ar.js":380,"./az":387,"./az.js":387,"./be":388,"./be.js":388,"./bg":389,"./bg.js":389,"./bm":390,"./bm.js":390,"./bn":391,"./bn.js":391,"./bo":392,"./bo.js":392,"./br":393,"./br.js":393,"./bs":394,"./bs.js":394,"./ca":395,"./ca.js":395,"./cs":396,"./cs.js":396,"./cv":397,"./cv.js":397,"./cy":398,"./cy.js":398,"./da":399,"./da.js":399,"./de":400,"./de-at":401,"./de-at.js":401,"./de-ch":402,"./de-ch.js":402,"./de.js":400,"./dv":403,"./dv.js":403,"./el":404,"./el.js":404,"./en-SG":405,"./en-SG.js":405,"./en-au":406,"./en-au.js":406,"./en-ca":407,"./en-ca.js":407,"./en-gb":408,"./en-gb.js":408,"./en-ie":409,"./en-ie.js":409,"./en-il":410,"./en-il.js":410,"./en-nz":411,"./en-nz.js":411,"./eo":412,"./eo.js":412,"./es":413,"./es-do":414,"./es-do.js":414,"./es-us":415,"./es-us.js":415,"./es.js":413,"./et":416,"./et.js":416,"./eu":417,"./eu.js":417,"./fa":418,"./fa.js":418,"./fi":419,"./fi.js":419,"./fo":420,"./fo.js":420,"./fr":421,"./fr-ca":422,"./fr-ca.js":422,"./fr-ch":423,"./fr-ch.js":423,"./fr.js":421,"./fy":424,"./fy.js":424,"./ga":425,"./ga.js":425,"./gd":426,"./gd.js":426,"./gl":427,"./gl.js":427,"./gom-latn":428,"./gom-latn.js":428,"./gu":429,"./gu.js":429,"./he":430,"./he.js":430,"./hi":431,"./hi.js":431,"./hr":432,"./hr.js":432,"./hu":433,"./hu.js":433,"./hy-am":434,"./hy-am.js":434,"./id":435,"./id.js":435,"./is":436,"./is.js":436,"./it":437,"./it-ch":438,"./it-ch.js":438,"./it.js":437,"./ja":439,"./ja.js":439,"./jv":440,"./jv.js":440,"./ka":441,"./ka.js":441,"./kk":442,"./kk.js":442,"./km":443,"./km.js":443,"./kn":444,"./kn.js":444,"./ko":445,"./ko.js":445,"./ku":446,"./ku.js":446,"./ky":447,"./ky.js":447,"./lb":448,"./lb.js":448,"./lo":449,"./lo.js":449,"./lt":450,"./lt.js":450,"./lv":451,"./lv.js":451,"./me":452,"./me.js":452,"./mi":453,"./mi.js":453,"./mk":454,"./mk.js":454,"./ml":455,"./ml.js":455,"./mn":456,"./mn.js":456,"./mr":457,"./mr.js":457,"./ms":458,"./ms-my":459,"./ms-my.js":459,"./ms.js":458,"./mt":460,"./mt.js":460,"./my":461,"./my.js":461,"./nb":462,"./nb.js":462,"./ne":463,"./ne.js":463,"./nl":464,"./nl-be":465,"./nl-be.js":465,"./nl.js":464,"./nn":466,"./nn.js":466,"./pa-in":467,"./pa-in.js":467,"./pl":468,"./pl.js":468,"./pt":469,"./pt-br":470,"./pt-br.js":470,"./pt.js":469,"./ro":471,"./ro.js":471,"./ru":472,"./ru.js":472,"./sd":473,"./sd.js":473,"./se":474,"./se.js":474,"./si":475,"./si.js":475,"./sk":476,"./sk.js":476,"./sl":477,"./sl.js":477,"./sq":478,"./sq.js":478,"./sr":479,"./sr-cyrl":480,"./sr-cyrl.js":480,"./sr.js":479,"./ss":481,"./ss.js":481,"./sv":482,"./sv.js":482,"./sw":483,"./sw.js":483,"./ta":484,"./ta.js":484,"./te":485,"./te.js":485,"./tet":486,"./tet.js":486,"./tg":487,"./tg.js":487,"./th":488,"./th.js":488,"./tl-ph":489,"./tl-ph.js":489,"./tlh":490,"./tlh.js":490,"./tr":491,"./tr.js":491,"./tzl":492,"./tzl.js":492,"./tzm":493,"./tzm-latn":494,"./tzm-latn.js":494,"./tzm.js":493,"./ug-cn":495,"./ug-cn.js":495,"./uk":496,"./uk.js":496,"./ur":497,"./ur.js":497,"./uz":498,"./uz-latn":499,"./uz-latn.js":499,"./uz.js":498,"./vi":500,"./vi.js":500,"./x-pseudo":501,"./x-pseudo.js":501,"./yo":502,"./yo.js":502,"./zh-cn":503,"./zh-cn.js":503,"./zh-hk":504,"./zh-hk.js":504,"./zh-tw":505,"./zh-tw.js":505};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=674},711:function(t,e,n){t.exports=n.p+"img/0dc7191.png"},712:function(t,e,n){t.exports=n.p+"img/d615762.png"},715:function(t,e,n){"use strict";var o=n(532);n.n(o).a},716:function(t,e,n){(e=n(28)(!1)).push([t.i,".main[data-v-7bfbba02]{position:relative}.innerChart[data-v-7bfbba02],.main[data-v-7bfbba02]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.innerChart[data-v-7bfbba02]{position:absolute;line-height:1.2;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.innerTitle[data-v-7bfbba02]{flex-wrap:wrap;color:#999}.innerTitle[data-v-7bfbba02],.total[data-v-7bfbba02]{font-weight:900;font-size:5vw}.total[data-v-7bfbba02]{color:#000}@media screen and (orientation:landscape){.innerTitle[data-v-7bfbba02],.total[data-v-7bfbba02]{font-size:2.5vw}@media (min-width:1000px){.innerTitle[data-v-7bfbba02],.total[data-v-7bfbba02]{font-size:1.5vw}}}@media screen and (orientation:portrait){@media (min-width:700px){.innerTitle[data-v-7bfbba02],.total[data-v-7bfbba02]{font-size:2.5vw}}}",""]),t.exports=e},717:function(t,e,n){"use strict";var o=n(533);n.n(o).a},718:function(t,e,n){(e=n(28)(!1)).push([t.i,".chartCard[data-v-e1b662e4]{width:100%;margin-bottom:1.5em;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:20px;box-shadow:0 10px 22px -13px rgba(0,0,0,.75)}.cardTitle[data-v-e1b662e4]{padding:10px 20px 0;color:var(--primary);font-size:14px}.chart[data-v-e1b662e4]{margin:20px 55px 10px}.labels[data-v-e1b662e4]{flex-wrap:wrap;-webkit-box-pack:justify;justify-content:space-between}.label[data-v-e1b662e4],.labels[data-v-e1b662e4]{display:-webkit-box;display:flex}.label[data-v-e1b662e4]{width:50%;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:20px;line-height:1.3}.labelSubject[data-v-e1b662e4]{font-size:85%}.labelIcon[data-v-e1b662e4]{height:20px;width:20px;border:5px solid #00f;border-radius:100%;margin-right:10px}.labelInfo[data-v-e1b662e4]{font-size:3vw}.labelValue[data-v-e1b662e4]{display:-webkit-box;display:flex;-webkit-box-align:baseline;align-items:baseline;font-size:5vw;grid-gap:3px;gap:3px}.labelSuffix[data-v-e1b662e4]{font-size:3vw}@media screen and (orientation:landscape){.chartCard[data-v-e1b662e4]{width:250px;margin-bottom:1.5em;margin-right:2.5em}.chart[data-v-e1b662e4]{margin:10px 50px}.label[data-v-e1b662e4]{font-size:1.5vw}.labelIcon[data-v-e1b662e4]{height:18px;width:18px}.labelInfo[data-v-e1b662e4]{font-size:1.5vw}.labelValue[data-v-e1b662e4]{font-size:2.5vw}@media (min-width:700px){.chartCard[data-v-e1b662e4]{width:46%;margin-bottom:1.5em;margin-right:16px}.labelInfo[data-v-e1b662e4]{font-size:1vw}.labelValue[data-v-e1b662e4]{font-size:2vw}}@media (min-width:1000px){.chartCard[data-v-e1b662e4]{width:25%;margin-bottom:1.5em;margin-right:3em}.label[data-v-e1b662e4],.labelInfo[data-v-e1b662e4]{font-size:1vw}.labelValue[data-v-e1b662e4]{font-size:1.5vw}.labelSuffix[data-v-e1b662e4]{font-size:1vw}}}@media screen and (orientation:portrait){@media (min-width:280px){.label[data-v-e1b662e4]{font-size:3.5vw}}@media (min-width:700px){.chartCard[data-v-e1b662e4]{width:47%;margin-bottom:1.5em;margin-right:1em}.label[data-v-e1b662e4],.labelInfo[data-v-e1b662e4]{font-size:2vw}.labelValue[data-v-e1b662e4]{font-size:3vw}.labelSuffix[data-v-e1b662e4]{font-size:2.5vw}}}",""]),t.exports=e},719:function(t,e,n){"use strict";var o=n(534);n.n(o).a},720:function(t,e,n){(e=n(28)(!1)).push([t.i,".article-container[data-v-b4e74098]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.dashboardInfo[data-v-b4e74098]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin-bottom:20px}.dashboardInfo p[data-v-b4e74098]{width:100%;height:100%;margin:0;font-size:5vw}.dashboardInfo img[data-v-b4e74098]{height:auto;width:15vw;margin-right:15px}@media screen and (orientation:portrait){.article-container[data-v-b4e74098]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap}@media (min-width:27.5em){.article-container[data-v-b4e74098]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;padding:0 1em 56px 1.5em}.dashboardFooter[data-v-b4e74098]{display:-webkit-box;display:flex}.dashboardInfo p[data-v-b4e74098]{font-size:2.5vw}.dashboardInfo[data-v-b4e74098]{width:50%}.dashboardInfo img[data-v-b4e74098]{height:auto;width:10vw}}}@media screen and (orientation:landscape){.article-container[data-v-b4e74098]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;overflow-x:auto;margin:0 2em 56px 1.5em;padding:0}.dashboardInfo p[data-v-b4e74098]{font-size:2vw}@media (min-width:48em){.dashboardInfo p[data-v-b4e74098]{font-size:2vw}.dashboardInfo[data-v-b4e74098]{width:100%}.dashboardInfo img[data-v-b4e74098]{height:auto;width:8vw}}}",""]),t.exports=e},721:function(t,e,n){"use strict";var o=n(535),r=n.n(o);e.default=r.a},989:function(t,e,n){"use strict";n.r(e);n(7),n(5),n(42);var o=n(109),r=n(44),l={extends:n(973).a,props:["data","title","total","chartColors","labels"],data:function(){return{cutout:70,colors:["#3399ff","#003399","#6d9be4","#c2daff","#e9f2ff"]}},computed:{totalTitle:function(){return this.data.reduce((function(a,b){return a+b}),0).toLocaleString()}},mounted:function(){this.title||(this.cutout=0,this.totalTitle=""),this.chartColors&&(this.colors=this.chartColors),new Chart(this.$refs.myChart,{type:"pie",data:{datasets:[{data:this.data,backgroundColor:this.colors}],labels:this.labels},options:{cutoutPercentage:this.cutout,legend:!1}})}},c=(n(715),n(39)),d={components:{PieChart:Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("canvas",{ref:"myChart",attrs:{width:"500",height:"500"}}),t._v(" "),n("div",{staticClass:"innerChart"},[t.total?n("div",{staticClass:"total"},[t._v(t._s(t.total))]):n("div",{staticClass:"total"},[t._v(t._s(t.totalTitle))]),t._v(" "),n("div",{staticClass:"innerTitle"},[t._v(t._s(t.title))])])])])}),[],!1,null,"7bfbba02",null).exports},props:["labelsSubject","data","chartTitle","chartTotal","cardTitle","labels","chartColors","labelSuffix"],data:function(){return{title:!1,colors:["#3399ff","#003399","#6d9be4","#c2daff","#e9f2ff"],labelwSubject:{labels:{display:"initial","margin-left":"55px"},label:{width:"100%","justify-content":"initial"},labelInfos:{display:"flex",gap:"5px"}}}},created:function(){this.cardTitle&&(this.title=!0),this.chartColors&&(this.colors=this.chartColors)}},v=(n(717),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chartCard"},[t.title?n("div",{staticClass:"cardTitle"},[n("h3",[t._v(t._s(t.cardTitle))])]):t._e(),t._v(" "),n("div",{staticClass:"chart"},[n("pie-chart",{attrs:{data:t.data,title:t.chartTitle,total:t.chartTotal,"chart-colors":t.colors,labels:t.labels}})],1),t._v(" "),t.labelsSubject?n("div",{staticClass:"labels",style:t.labelwSubject.labels},t._l(t.labels,(function(label,e){return n("div",{key:label,staticClass:"label",style:t.labelwSubject.label,attrs:{index:e}},[n("div",{staticClass:"labelIcon",style:{borderColor:t.colors[e]}}),t._v(" "),n("div",[n("div",{staticClass:"labelSubject"},[n("strong",{style:{Color:t.colors[e]+"!important"}},[t._v(t._s(t.labelsSubject[e]))])]),t._v(" "),n("div",{staticClass:"labelInfos",style:t.labelwSubject.labelInfos},[n("strong",[t._v(t._s(label))]),t._v(" "),n("p",[t._v(t._s(t.data[e].toLocaleString()))]),t._v(" "),t.labelSuffix?n("div",[n("p",[t._v(t._s(t.labelSuffix))])]):t._e()])])])})),0):n("div",{staticClass:"labels"},t._l(t.labels,(function(label,e){return n("div",{key:label,staticClass:"label",attrs:{index:e}},[n("div",{staticClass:"labelIcon",style:{borderColor:t.colors[e]}}),t._v(" "),n("div",{staticClass:"labelInfos"},[n("div",{staticClass:"labelInfo"},[t._v(t._s(label))]),t._v(" "),n("div",{staticClass:"labelValue"},[t._v("\n          "+t._s(t.data[e].toLocaleString())+"\n          "),t.labelSuffix?n("div",{staticClass:"labelSuffix"},[t._v("\n            "+t._s(t.labelSuffix)+"\n          ")]):t._e()]),t._v(" "),n("div",{staticClass:"labelInfo"},[t._v("\n          "+t._s((t.data[e]/(t.data.reduce((function(a,b){return a+b}),0)/100)).toFixed(2)+"%")+"\n        ")])])])})),0)])}),[],!1,null,"e1b662e4",null).exports),f=n(300),m=n(304),h={components:{ChartCard:v,HeaderBar:f.a,NavigationBar:m.a},data:function(){return{loading:!0,dashboardInfo:{}}},computed:{mostPopularCourse:function(){return this.dashboardInfo.courseViews.reduce((function(t,e){return t.frequency>e.frequency?t:e}))},lessPopularCourse:function(){return this.dashboardInfo.courseViews.reduce((function(t,e){return t.frequency<e.frequency?t:e}))},totalStudents:function(){return this.dashboardInfo.courseViews.reduce((function(t,e){return t+parseInt(e.frequency)}),0)},totalInactiveUsers:function(){return this.dashboardInfo.totalUsers-this.dashboardInfo.activeUsers}},created:function(){this.loadDashboard()},methods:{loadDashboard:function(){var t=this,e=o.a.getInfoAuth().accessToken,data={totalUsers:0,activeUsers:0,courseViews:[],nsCertificatedQuantity:0,certificateQuantity:0};Promise.all([r.a.getAll("/api/v1/user",{headers:{Authorization:e}}),r.a.getAll("/api/v1/dashboard/user/quantity",{headers:{Authorization:e}}),r.a.getAll("/api/v1/dashboard/course/views",{headers:{Authorization:e}}),r.a.getAll("/api/v1/dashboard/course-taken/user/quantity",{headers:{Authorization:e}}),r.a.getAll("/api/v1/dashboard/certificate/quantity",{headers:{Authorization:e}})]).then((function(t){data.totalUsers=t[0].data.length,data.activeUsers=t[1].data.totalElements,data.courseViews=t[2].data,data.nsCertificatedQuantity=t[3].data.totalElements,data.certificateQuantity=t[4].data.totalElements})),this.dashboardInfo=data,setTimeout((function(){t.loading=!1}),1e3)}}},x=(n(719),n(721)),w=n(43),j=n.n(w),k=n(129),y=Object(c.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("HeaderBar",{attrs:{title:"Dashboard","back-page":!0}}),t._v(" "),t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):o("article",{staticClass:"article-container"},[o("chart-card",{attrs:{"chart-title":"Usuários",data:[t.dashboardInfo.activeUsers,t.totalInactiveUsers],labels:["Ativo","Inativo"],"chart-colors":["#29bf54","#c02a2b"]}}),t._v(" "),o("chart-card",{attrs:{"card-title":"Cursos","chart-title":"Estudantes","chart-total":t.totalStudents,data:[parseInt(t.lessPopularCourse.frequency),parseInt(t.mostPopularCourse.frequency)],labels:[t.lessPopularCourse.title,t.mostPopularCourse.title],"label-suffix":"alunos","labels-subject":["Curso menos acessado","Cursos mais acessado"]}}),t._v(" "),o("div",{staticClass:"dashboardFooter"},[o("div",{staticClass:"dashboardInfo"},[o("img",{attrs:{src:n(711),alt:"aluno"}}),t._v(" "),o("p",[t._v("\n          "+t._s(t.dashboardInfo.nsCertificatedQuantity)+" alunos terminaram\n          "),o("strong",[t._v("TODOS")]),t._v(" os cursos\n        ")])]),t._v(" "),o("div",{staticClass:"dashboardInfo"},[o("img",{attrs:{src:n(712),alt:"certificado"}}),t._v(" "),o("p",[t._v(t._s(t.dashboardInfo.certificateQuantity)+" certificados")])])]),t._v(" "),o("navigation-bar")],1)],1)}),[],!1,null,"b4e74098",null);"function"==typeof x.default&&Object(x.default)(y);e.default=y.exports;j()(y,{VProgressCircular:k.a})}}]);