(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1026:function(t,e,r){"use strict";r.r(e);r(8);var n=r(3),c=r(305),o=r(44),d=r(301),l=r(706),f={components:{HeaderBar:d.a,NavigationBar:c.a,CertificateCard:l.a},data:function(){return{loading:!0,certificate:[]}},computed:{allCourses:function(){return this.$store.state.courses.all}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getAll("/api/v2/course-taken/certificate/user/".concat(t.$route.params.idUser,"/course/").concat(t.$route.params.idCourse));case 2:return t.certificate=e.sent.data,e.next=5,o.a.getAll("/api/v2/course/".concat(t.$route.params.idCourse));case 5:t.certificate.course=e.sent.data,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},x=(r(809),r(39)),v=r(811),w=r(43),m=r.n(w),h=r(325),k=r(129),component=Object(x.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",[e("div",{staticClass:"container-spinner"},[e("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):e("div",{attrs:{id:"page"}},[e("div",{attrs:{id:"layout-certificates"}},[e("HeaderBar",{attrs:{title:"Certificados",route:"/aluno/curso/"+this.certificate.course.slug}}),this._v(" "),e("v-container",{staticClass:"container px-2"},[e("certificate-card",{attrs:{certificate:this.certificate}}),this._v(" "),e("navigation-bar")],1),this._v(" "),e("navigation-bar")],1)])}),[],!1,null,"964a8b1e",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;m()(component,{VContainer:h.a,VProgressCircular:k.a})},621:function(t,e,r){var content=r(810);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("12e0b77c",content,!0,{sourceMap:!1})},622:function(t,e){},809:function(t,e,r){"use strict";var n=r(621);r.n(n).a},810:function(t,e,r){(e=r(28)(!1)).push([t.i,".cards-box[data-v-964a8b1e]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;max-width:700px;width:100%}.cards-box[data-v-964a8b1e],.container[data-v-964a8b1e]{margin-bottom:25px}@media(min-width:992px){#page[data-v-964a8b1e]{-webkit-box-pack:center;justify-content:center}#layout-certificates[data-v-964a8b1e],#page[data-v-964a8b1e]{display:-webkit-box;display:flex}#layout-certificates[data-v-964a8b1e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-width:700px;width:700px;padding:20px 24px 50px}}@media(min-width:992px){#page[data-v-964a8b1e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}}",""]),t.exports=e},811:function(t,e,r){"use strict";var n=r(622),c=r.n(n);e.default=c.a}}]);