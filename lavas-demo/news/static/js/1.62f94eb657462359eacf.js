webpackJsonp([1],{173:function(e,a,t){"use strict";a.a={beforeRouteLeave:function(e,a,t){this.setPageLoading(!0),t()}}},468:function(e,a,t){t(490);var r=t(45)(t(476),t(503),"data-v-1bb11718",null);e.exports=r.exports},471:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(495);t.n(r);a.default={name:"morphSearch",props:{history:{type:Array}},directives:{focus:r.focus},data:function(){return{open:!1,query:"",focused:!1}},methods:{search:function(e){e&&(this.open=!1,this.focused=!1,this.query=e,this.$emit("search",this.query))},deleteHistory:function(e){this.$emit("delete-history",e)},handleFocus:function(){this.focused=!0,this.open=!0}}}},476:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(55),s=t.n(r),n=t(54),o=t.n(n),c=t(62),i=t.n(c),p=t(63),l=(t(174),t(173)),d=t(498),A=t.n(d);a.default={name:"search",components:{MorphSearch:A.a},mixins:[l.a],computed:i()({},t.i(p.b)(["hotNews","searchHistory","searchResult"])),data:function(){return{lastQuery:""}},methods:i()({},t.i(p.a)(["setPageLoading","setAppHeader","getHotNews","searchNews","deleteQueryHistory","hideMenuTabs"]),{handleSearch:function(e){var a=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.setPageLoading(!0),t.next=3,a.searchNews(e);case 3:a.lastQuery=e,a.setPageLoading(!1);case 5:case"end":return t.stop()}},t,a)}))()},handleDeleteHistory:function(e){this.deleteQueryHistory(e)}}),activated:function(){this.setAppHeader({show:!1}),this.setPageLoading(!1),this.hideMenuTabs()},mounted:function(){var e=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getHotNews();case 2:case"end":return a.stop()}},a,e)}))()}}},482:function(e,a,t){a=e.exports=t(463)(!0),a.push([e.i,".app-search-page[data-v-1bb11718]{background:#eee!important}.app-search-page header[data-v-1bb11718]{display:flex;align-items:center;height:52px;background:#3e98f0;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.app-search-page header .search-wrapper[data-v-1bb11718]{flex:1}.app-search-page .result-wrapper[data-v-1bb11718]{padding:6px}.app-search-page .result-wrapper .result-card[data-v-1bb11718]{background:#fff;margin-bottom:6px;transition:transform .2s ease-in-out;transform:translateZ(0)}.app-search-page .result-wrapper .result-card.slide-left-enter[data-v-1bb11718]{transform:translate(100%)}.app-search-page .result-wrapper .result-card.slide-right-enter[data-v-1bb11718]{transform:translate(-100%)}.app-search-page .result-wrapper .result-card.slide-right-leave-active[data-v-1bb11718]{transform:translate(100%)}.app-search-page .result-wrapper .result-card.slide-left-leave-active[data-v-1bb11718]{transform:translate(-100%)}.app-search-page .result-wrapper .result-card .card__row[data-v-1bb11718]{height:52px}.app-search-page .result-wrapper .result-card .card__row .card__title[data-v-1bb11718]{font-size:16px;padding:12px 16px}.app-search-page .result-wrapper .result-card .card__text[data-v-1bb11718]{padding:0}.app-search-page .result-wrapper .result-card .card__text .news-date[data-v-1bb11718]{text-align:right;white-space:normal}","",{version:3,sources:["/Users/zoumiaojiang/work/lavas/lavas-demo-news/src/pages/Search.vue"],names:[],mappings:"AACA,kCACE,yBAA4B,CAC7B,AACD,yCACE,aAAc,AACd,mBAAoB,AACpB,YAAa,AACb,mBAAoB,AACpB,6FAAoG,CACrG,AACD,yDACE,MAAQ,CACT,AACD,kDACE,WAAa,CACd,AACD,+DACE,gBAAiB,AACjB,kBAAmB,AACnB,qCAAuC,AACvC,uBAAgC,CACjC,AACD,gFACE,yBAA8B,CAC/B,AACD,iFACE,0BAA+B,CAChC,AACD,wFACE,yBAA8B,CAC/B,AACD,uFACE,0BAA+B,CAChC,AACD,0EACE,WAAa,CACd,AACD,uFACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,2EACE,SAAW,CACZ,AACD,sFACE,iBAAkB,AAClB,kBAAoB,CACrB",file:"Search.vue",sourcesContent:["\n.app-search-page[data-v-1bb11718] {\n  background: #eee !important;\n}\n.app-search-page header[data-v-1bb11718] {\n  display: flex;\n  align-items: center;\n  height: 52px;\n  background: #3e98f0;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.app-search-page header .search-wrapper[data-v-1bb11718] {\n  flex: 1;\n}\n.app-search-page .result-wrapper[data-v-1bb11718] {\n  padding: 6px;\n}\n.app-search-page .result-wrapper .result-card[data-v-1bb11718] {\n  background: #fff;\n  margin-bottom: 6px;\n  transition: transform 0.2s ease-in-out;\n  transform: translate3d(0, 0, 0);\n}\n.app-search-page .result-wrapper .result-card.slide-left-enter[data-v-1bb11718] {\n  transform: translate(100%, 0);\n}\n.app-search-page .result-wrapper .result-card.slide-right-enter[data-v-1bb11718] {\n  transform: translate(-100%, 0);\n}\n.app-search-page .result-wrapper .result-card.slide-right-leave-active[data-v-1bb11718] {\n  transform: translate(100%, 0);\n}\n.app-search-page .result-wrapper .result-card.slide-left-leave-active[data-v-1bb11718] {\n  transform: translate(-100%, 0);\n}\n.app-search-page .result-wrapper .result-card .card__row[data-v-1bb11718] {\n  height: 52px;\n}\n.app-search-page .result-wrapper .result-card .card__row .card__title[data-v-1bb11718] {\n  font-size: 16px;\n  padding: 12px 16px;\n}\n.app-search-page .result-wrapper .result-card .card__text[data-v-1bb11718] {\n  padding: 0;\n}\n.app-search-page .result-wrapper .result-card .card__text .news-date[data-v-1bb11718] {\n  text-align: right;\n  white-space: normal;\n}"],sourceRoot:""}])},486:function(e,a,t){a=e.exports=t(463)(!0),a.push([e.i,".search-wrapper[data-v-523d3d9c]{display:flex;align-items:center;z-index:999}.search-wrapper .search-form[data-v-523d3d9c]{flex:1;display:flex}.search-wrapper .search-form .search-input[data-v-523d3d9c]{flex:1;outline:none;font-size:16px;height:50px;color:#fff}.search-wrapper .search-form .search-input[data-v-523d3d9c]::-webkit-input-placeholder{color:#fff}.search-wrapper .search-form .search-input[data-v-523d3d9c]:-moz-placeholder,.search-wrapper .search-form .search-input[data-v-523d3d9c]::-moz-placeholder{color:#fff}.search-wrapper .search-form .search-input[data-v-523d3d9c]:-ms-input-placeholder{color:#fff}.search-wrapper .clear-btn[data-v-523d3d9c]{color:#fff}.search-wrapper .close-btn[data-v-523d3d9c]{position:absolute;left:0;top:2px;background:#3e98f0;color:#fff}.search-wrapper .search-history-wrapper[data-v-523d3d9c]{display:none;position:absolute;top:52px;bottom:0;right:0;left:0;background:#fff;overflow-x:hidden;overflow-y:auto}.search-wrapper.open .search-history-wrapper[data-v-523d3d9c]{display:block}.search-wrapper.open .search-history-wrapper .history-list[data-v-523d3d9c]{opacity:1}","",{version:3,sources:["/Users/zoumiaojiang/work/lavas/lavas-demo-news/src/components/MorphSearch.vue"],names:[],mappings:"AACA,iCACE,aAAc,AACd,mBAAoB,AACpB,WAAa,CACd,AACD,8CACE,OAAQ,AACR,YAAc,CACf,AACD,4DACE,OAAQ,AACR,aAAc,AACd,eAAgB,AAChB,YAAa,AACb,UAAY,CACb,AACD,uFACE,UAAY,CACb,AAID,2JACE,UAAY,CACb,AACD,kFACE,UAAY,CACb,AACD,4CACE,UAAY,CACb,AACD,4CACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,mBAAoB,AACpB,UAAY,CACb,AACD,yDACE,aAAc,AACd,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,QAAS,AACT,OAAQ,AACR,gBAAiB,AACjB,kBAAmB,AACnB,eAAiB,CAClB,AACD,8DACE,aAAe,CAChB,AACD,4EACE,SAAW,CACZ",file:"MorphSearch.vue",sourcesContent:["\n.search-wrapper[data-v-523d3d9c] {\n  display: flex;\n  align-items: center;\n  z-index: 999;\n}\n.search-wrapper .search-form[data-v-523d3d9c] {\n  flex: 1;\n  display: flex;\n}\n.search-wrapper .search-form .search-input[data-v-523d3d9c] {\n  flex: 1;\n  outline: none;\n  font-size: 16px;\n  height: 50px;\n  color: #fff;\n}\n.search-wrapper .search-form .search-input[data-v-523d3d9c]::-webkit-input-placeholder {\n  color: #fff;\n}\n.search-wrapper .search-form .search-input[data-v-523d3d9c]:-moz-placeholder {\n  color: #fff;\n}\n.search-wrapper .search-form .search-input[data-v-523d3d9c]::-moz-placeholder {\n  color: #fff;\n}\n.search-wrapper .search-form .search-input[data-v-523d3d9c]:-ms-input-placeholder {\n  color: #fff;\n}\n.search-wrapper .clear-btn[data-v-523d3d9c] {\n  color: #fff;\n}\n.search-wrapper .close-btn[data-v-523d3d9c] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  background: #3e98f0;\n  color: #fff;\n}\n.search-wrapper .search-history-wrapper[data-v-523d3d9c] {\n  display: none;\n  position: absolute;\n  top: 52px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #fff;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.search-wrapper.open .search-history-wrapper[data-v-523d3d9c] {\n  display: block;\n}\n.search-wrapper.open .search-history-wrapper .history-list[data-v-523d3d9c] {\n  opacity: 1;\n}"],sourceRoot:""}])},490:function(e,a,t){var r=t(482);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(464)("348152b3",r,!0)},494:function(e,a,t){var r=t(486);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(464)("968435b6",r,!0)},495:function(e,a,t){"use strict";var r=t(32);r="default"in r?r.default:r;/^2\./.test(r.version)||r.util.warn("VueFocus 2.1.0 only supports Vue 2.x, and does not support Vue "+r.version);var s={inserted:function(e,a){a.value?e.focus():e.blur()},componentUpdated:function(e,a){a.modifiers.lazy&&Boolean(a.value)===Boolean(a.oldValue)||(a.value?e.focus():e.blur())}},n={directives:{focus:s}};a.version="2.1.0",a.focus=s,a.mixin=n},498:function(e,a,t){t(494);var r=t(45)(t(471),t(507),"data-v-523d3d9c",null);e.exports=r.exports},503:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-search-page"},[t("header",[t("v-btn",{attrs:{light:"",icon:""},nativeOn:{click:function(a){e.$router.go(-1)}}},[t("v-icon",[e._v("arrow_back")])],1),e._v(" "),t("morph-search",{staticClass:"search-wrapper",attrs:{history:e.searchHistory},on:{search:e.handleSearch,"delete-history":e.handleDeleteHistory}})],1),e._v(" "),t("div",{staticClass:"result-wrapper"},[t("transition",{attrs:{name:"slide-left"}},[t("v-card",{directives:[{name:"show",rawName:"v-show",value:e.searchResult&&e.searchResult.length,expression:"searchResult && searchResult.length"}],staticClass:"result-card"},[t("v-card-row",{staticClass:"blue darken-4"},[t("v-card-title",[t("v-icon",{staticClass:"red--text text--lighten-1"},[e._v("search")]),e._v(" "),t("span",{staticClass:"white--text"},[e._v("“"+e._s(e.lastQuery)+"”的搜索结果")])],1)],1),e._v(" "),t("v-card-text",[t("v-list",{attrs:{"two-line":""}},e._l(e.searchResult,function(a,r){return t("v-list-item",{key:r},[t("v-list-tile",{attrs:{avatar:"",ripple:""}},[t("v-list-tile-content",[t("v-list-tile-title",[e._v(e._s(a.title))]),e._v(" "),t("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[e._v(e._s(a.abs))])],1),e._v(" "),t("v-list-tile-action",[t("v-list-tile-action-text",{staticClass:"news-date"},[e._v(e._s(e._f("formatDateToNow")(a.ts)))]),e._v(" "),t("v-icon",{staticClass:"grey--text text--lighten-1"},[e._v("star_border")])],1)],1)],1)}))],1)],1)],1),e._v(" "),t("v-card",{staticClass:"result-card"},[t("v-card-row",{staticClass:"blue darken-4"},[t("v-card-title",[t("v-icon",{staticClass:"red--text text--lighten-1"},[e._v("whatshot")]),e._v(" "),t("span",{staticClass:"white--text"},[e._v("热搜榜")])],1)],1),e._v(" "),t("v-card-text",[t("v-list",{directives:[{name:"show",rawName:"v-show",value:e.hotNews&&e.hotNews.length,expression:"hotNews && hotNews.length"}],attrs:{"two-line":""}},e._l(e.hotNews,function(a,r){return t("v-list-item",{key:r},[t("v-list-tile",{attrs:{avatar:"",ripple:""}},[t("v-list-tile-content",[t("v-list-tile-title",[e._v(e._s(a.title))]),e._v(" "),t("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[e._v(e._s(a.abs))])],1),e._v(" "),t("v-list-tile-action",[t("v-list-tile-action-text",{staticClass:"news-date"},[e._v(e._s(e._f("formatDateToNow")(a.ts)))]),e._v(" "),t("v-icon",{staticClass:"grey--text text--lighten-1"},[e._v("star_border")])],1)],1)],1)}))],1)],1)],1)])},staticRenderFns:[]}},507:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"search-wrapper",class:{open:e.open}},[t("form",{staticClass:"search-form",on:{submit:function(a){a.preventDefault(),e.search(e.query)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"},{name:"focus",rawName:"v-focus",value:e.focused,expression:"focused"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:e.query},on:{focus:e.handleFocus,blur:function(a){e.focused=!1},input:function(a){a.target.composing||(e.query=a.target.value)}}})]),e._v(" "),t("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"close-btn",attrs:{icon:"",ripple:""},nativeOn:{click:function(a){e.open=!1}}},[t("v-icon",{staticClass:"close-icon"},[e._v("arrow_back")])],1),e._v(" "),t("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"clear-btn",attrs:{icon:"",ripple:""},nativeOn:{click:function(a){e.query=""}}},[t("v-icon",{staticClass:"clear-icon"},[e._v("close")])],1),e._v(" "),t("div",{staticClass:"search-history-wrapper"},[t("v-list",{staticClass:"history-list",attrs:{subheader:""}},[t("v-subheader",{attrs:{inset:""}},[e._v("历史记录")]),e._v(" "),e._l(e.history,function(a,r){return t("v-list-item",{key:r,on:{click:function(t){e.search(a)}}},[t("v-list-tile",{attrs:{avatar:""}},[t("v-list-tile-avatar",[t("v-icon",[e._v("search")])],1),e._v(" "),t("v-list-tile-content",[t("v-list-tile-title",[e._v(e._s(a))])],1),e._v(" "),t("v-list-tile-action",[t("v-btn",{staticClass:"grey--text",attrs:{icon:"",ripple:""},nativeOn:{click:function(t){t.stopPropagation(),e.deleteHistory(a)}}},[t("v-icon",[e._v("close")])],1)],1)],1),e._v(" "),t("v-divider",{attrs:{inset:""}})],1)})],2)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.62f94eb657462359eacf.js.map