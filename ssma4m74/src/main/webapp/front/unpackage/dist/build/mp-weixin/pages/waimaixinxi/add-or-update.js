(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waimaixinxi/add-or-update"],{"12c2":function(e,n,i){"use strict";i.r(n);var a=i("2763"),r=i.n(a);for(var t in a)"default"!==t&&function(e){i.d(n,e,(function(){return a[e]}))}(t);n["default"]=r.a},"248b":function(e,n,i){},2763:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,n,i,a,r,t,u){try{var o=e[t](u),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(a,r){var u=e.apply(n,i);function o(e){t(u,a,r,o,c,"next",e)}function c(e){t(u,a,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("d067"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{shangjiazhanghao:"",shangjiaxingming:"",dianpumingcheng:"",waimaimingcheng:"",fenlei:"",waimaifengmian:"",waimaifenliang:"",waimaizhuliao:"",waimaixiangqing:"",yueshoushuliang:"",peisongjiage:"",qisongjiage:"",peisongshijian:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",price:""},dianpumingchengOptions:[],dianpumingchengIndex:0,fenleiOptions:[],fenleiIndex:0,user:{},ro:{shangjiazhanghao:!1,shangjiaxingming:!1,dianpumingcheng:!1,waimaimingcheng:!1,fenlei:!1,waimaifengmian:!1,waimaifenliang:!1,waimaizhuliao:!1,waimaixiangqing:!1,yueshoushuliang:!1,peisongjiage:!1,qisongjiage:!1,peisongshijian:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var i=this;return u(a.default.mark((function r(){var t,u,o,c;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.getStorageSync("nowTable"),r.next=3,i.$api.session(t);case 3:return u=r.sent,i.user=u.data,r.next=7,i.$api.option("shanghuxinxi","dianpumingcheng",{});case 7:return u=r.sent,i.dianpumingchengOptions=u.data,r.next=11,i.$api.option("shipinfenlei","fenlei",{});case 11:if(u=r.sent,i.fenleiOptions=u.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=21;break}return i.ruleForm.id=n.id,r.next=19,i.$api.info("waimaixinxi",i.ruleForm.id);case 19:u=r.sent,i.ruleForm=u.data;case 21:if(!n.cross){r.next=100;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 24:if((r.t1=r.t0()).done){r.next=100;break}if(c=r.t1.value,"shangjiazhanghao"!=c){r.next=30;break}return i.ruleForm.shangjiazhanghao=o[c],i.ro.shangjiazhanghao=!0,r.abrupt("continue",24);case 30:if("shangjiaxingming"!=c){r.next=34;break}return i.ruleForm.shangjiaxingming=o[c],i.ro.shangjiaxingming=!0,r.abrupt("continue",24);case 34:if("dianpumingcheng"!=c){r.next=38;break}return i.ruleForm.dianpumingcheng=o[c],i.ro.dianpumingcheng=!0,r.abrupt("continue",24);case 38:if("waimaimingcheng"!=c){r.next=42;break}return i.ruleForm.waimaimingcheng=o[c],i.ro.waimaimingcheng=!0,r.abrupt("continue",24);case 42:if("fenlei"!=c){r.next=46;break}return i.ruleForm.fenlei=o[c],i.ro.fenlei=!0,r.abrupt("continue",24);case 46:if("waimaifengmian"!=c){r.next=50;break}return i.ruleForm.waimaifengmian=o[c],i.ro.waimaifengmian=!0,r.abrupt("continue",24);case 50:if("waimaifenliang"!=c){r.next=54;break}return i.ruleForm.waimaifenliang=o[c],i.ro.waimaifenliang=!0,r.abrupt("continue",24);case 54:if("waimaizhuliao"!=c){r.next=58;break}return i.ruleForm.waimaizhuliao=o[c],i.ro.waimaizhuliao=!0,r.abrupt("continue",24);case 58:if("waimaixiangqing"!=c){r.next=62;break}return i.ruleForm.waimaixiangqing=o[c],i.ro.waimaixiangqing=!0,r.abrupt("continue",24);case 62:if("yueshoushuliang"!=c){r.next=66;break}return i.ruleForm.yueshoushuliang=o[c],i.ro.yueshoushuliang=!0,r.abrupt("continue",24);case 66:if("peisongjiage"!=c){r.next=70;break}return i.ruleForm.peisongjiage=o[c],i.ro.peisongjiage=!0,r.abrupt("continue",24);case 70:if("qisongjiage"!=c){r.next=74;break}return i.ruleForm.qisongjiage=o[c],i.ro.qisongjiage=!0,r.abrupt("continue",24);case 74:if("peisongshijian"!=c){r.next=78;break}return i.ruleForm.peisongshijian=o[c],i.ro.peisongshijian=!0,r.abrupt("continue",24);case 78:if("thumbsupnum"!=c){r.next=82;break}return i.ruleForm.thumbsupnum=o[c],i.ro.thumbsupnum=!0,r.abrupt("continue",24);case 82:if("crazilynum"!=c){r.next=86;break}return i.ruleForm.crazilynum=o[c],i.ro.crazilynum=!0,r.abrupt("continue",24);case 86:if("clicktime"!=c){r.next=90;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,r.abrupt("continue",24);case 90:if("clicknum"!=c){r.next=94;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,r.abrupt("continue",24);case 94:if("price"!=c){r.next=98;break}return i.ruleForm.price=o[c],i.ro.price=!0,r.abrupt("continue",24);case 98:r.next=24;break;case 100:i.styleChange();case 101:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},dianpumingchengChange:function(e){var n=this;return u(a.default.mark((function i(){var r;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n.dianpumingchengIndex=e.target.value,n.ruleForm.dianpumingcheng=n.dianpumingchengOptions[n.dianpumingchengIndex],i.next=4,n.$api.follow("shanghuxinxi","dianpumingcheng",{columnValue:n.ruleForm.dianpumingcheng});case 4:r=i.sent,r.data.shangjiazhanghao&&(n.ruleForm.shangjiazhanghao=r.data.shangjiazhanghao),r.data.shangjiaxingming&&(n.ruleForm.shangjiaxingming=r.data.shangjiaxingming),r.data.yueshoushuliang&&(n.ruleForm.yueshoushuliang=r.data.yueshoushuliang),r.data.peisongjiage&&(n.ruleForm.peisongjiage=r.data.peisongjiage),r.data.qisongjiage&&(n.ruleForm.qisongjiage=r.data.qisongjiage);case 10:case"end":return i.stop()}}),i)})))()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fenleiChange:function(e){this.fenleiIndex=e.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},waimaifengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.waimaifengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.peisongjiage||e.$validate.isIntNumer(e.ruleForm.peisongjiage)){n.next=3;break}return e.$utils.msg("配送价格应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.qisongjiage||e.$validate.isIntNumer(e.ruleForm.qisongjiage)){n.next=6;break}return e.$utils.msg("起送价格应输入整数"),n.abrupt("return");case 6:if(e.ruleForm.peisongshijian){n.next=9;break}return e.$utils.msg("配送时间不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.thumbsupnum||e.$validate.isIntNumer(e.ruleForm.thumbsupnum)){n.next=12;break}return e.$utils.msg("赞应输入整数"),n.abrupt("return");case 12:if(!e.ruleForm.crazilynum||e.$validate.isIntNumer(e.ruleForm.crazilynum)){n.next=15;break}return e.$utils.msg("踩应输入整数"),n.abrupt("return");case 15:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=18;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 18:if(e.ruleForm.price){n.next=21;break}return e.$utils.msg("价格不能为空"),n.abrupt("return");case 21:if(!e.ruleForm.price||e.$validate.isNumber(e.ruleForm.price)){n.next=24;break}return e.$utils.msg("价格应输入数字"),n.abrupt("return");case 24:if(!e.ruleForm.id){n.next=29;break}return n.next=27,e.$api.update("waimaixinxi",e.ruleForm);case 27:n.next=31;break;case 29:return n.next=31,e.$api.add("waimaixinxi",e.ruleForm);case 31:e.$utils.msgBack("提交成功");case 32:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(i,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},"7ad6":function(e,n,i){"use strict";(function(e){i("7808");a(i("66fd"));var n=a(i("b471"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"89ce":function(e,n,i){"use strict";var a=i("248b"),r=i.n(a);r.a},b471:function(e,n,i){"use strict";i.r(n);var a=i("f651"),r=i("12c2");for(var t in r)"default"!==t&&function(e){i.d(n,e,(function(){return r[e]}))}(t);i("89ce");var u,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"24a66791",null,!1,a["a"],u);n["default"]=c.exports},f651:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return t})),i.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"d067"))}},r=function(){var e=this,n=e.$createElement;e._self._c},t=[]}},[["7ad6","common/runtime","common/vendor"]]]);