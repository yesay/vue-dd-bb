webpackJsonp([1],{0:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return d.default.Promise(function(e,t){f.default.get("/auth/getConfig",{params:{corpid:getParamByName("corpid")||"ding1b56d2f4ba72e91635c2f4657eb6378f",appid:getParamByName("appid")||"2545",suitekey:getParamByName("suiteKey")||"suiteiyfdj0dfixywzqwg",paramUrl:document.URL},timeout:2e3}).then(function(o){if(200==o.status&&200==o.data.code){var n=o.data.result,i={agentId:n.agentId,corpId:n.corpId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,signature:n.signature,type:0,jsApiList:["runtime.info","runtime.permission.requestAuthCode","runtime.permission.requestOperateAuthCode","biz.alipay.pay","biz.contact.choose","biz.contact.complexChoose","biz.contact.complexPicker","biz.contact.createGroup","biz.customContact.choose","biz.customContact.multipleChoose","biz.ding.post","biz.map.locate","biz.map.view","biz.util.openLink","biz.util.open","biz.util.share","biz.util.ut","biz.util.uploadImage","biz.util.previewImage","biz.util.datepicker","biz.util.timepicker","biz.util.datetimepicker","biz.util.chosen","biz.util.encrypt","biz.util.decrypt","biz.chat.pickConversation","biz.telephone.call","biz.navigation.setLeft","biz.navigation.setTitle","biz.navigation.setIcon","biz.navigation.close","biz.navigation.setRight","biz.navigation.setMenu","biz.user.get","ui.progressBar.setColors","device.base.getInterface","device.connection.getNetworkType","device.launcher.checkInstalledApps","device.launcher.launchApp","device.notification.confirm","device.notification.alert","device.notification.prompt","device.notification.showPreloader","device.notification.hidePreloader","device.notification.toast","device.notification.actionSheet","device.notification.modal","device.geolocation.get"]};e(i)}else t({errCode:-2,msg:"接口请求失败"}),(0,T.logException)(new Error("config接口请求失败"),this)}).catch(function(e){t({errCode:-2,msg:"接口请求失败"}),(0,T.logException)(new Error("config接口请求失败"),e)})})}function u(){return d.default.Promise(function(e,t){var n;m.default.use(h.default),m.default.use(D.default),m.default.use(A.default);var i=new h.default({transitionOnLoad:!1});i.map((n={},r(n,w.default.BASE_PATH,{component:function(e){o.e(2,function(){var t=o(58).default;e(t)})},subRoutes:{"/":{component:function(e){o.e(3,function(){var t=o(64).default;e(t)})}},"/member":{component:function(e){o.e(4,function(){var t=o(74).default;e(t)})}}}}),r(n,w.default.BASE_PATH+"/user/sign_in",{component:function(e){o.e(5,function(){var t=o(82).default;e(t)})}}),r(n,w.default.BASE_PATH+"/user/bind",{component:function(e){o.e(6,function(){var t=o(86).default;e(t)})}}),n)),i.redirect({"*":w.default.BASE_PATH});var a=window.sessionStorage;a.clear();var u=1*a.getItem("count")||0;a.setItem("/",0),i.beforeEach(function(e){var t=e.to,o=e.from,n=e.next,i=a.getItem(t.path),r=a.getItem(o.path);i?i>r||!r?G("UPDATE_DIRECTION","forward"):G("UPDATE_DIRECTION","reverse"):(++u,a.setItem("count",u),"/"!==t.path&&a.setItem(t.path,u),G("UPDATE_DIRECTION","forward")),G("UPDATE_LOADING",!0),setTimeout(function(){try{j.biz.navigation.setRight({show:!1})}catch(e){console.error(e)}n()},10)}),i.afterEach(function(){G("UPDATE_LOADING",!1)}),(0,S.sync)(C.default,i),i.start(z.default,"#app"),I.default.attach(document.body),e()})}var c=o(1),d=i(c),l=o(5),f=i(l),s=o(47),p=i(s),g=o(31),m=i(g),b=o(32),h=i(b);o(48);var y=o(35),v=n(y),S=o(34),E=o(49),C=i(E),_=o(36),I=i(_),O=o(30),w=i(O),R=o(52),D=i(R),P=o(38),A=i(P),x=o(41),N=i(x),T=o(40),U=o(53),z=i(U);for(var L in p.default)f.default.defaults[L]=p.default[L];N.default.config(T.sentry_url,{tag:{git_commit:"v0.0.1"}}).install();var j=window.dd,G=C.default.commit||C.default.dispatch;console.log("dev"),m.default.config.debug=!0,m.default.config.devtools=!0,m.default.component("alert",v.Alert),m.default.component("loading",v.Loading),m.default.component("group",v.Group),m.default.component("cell",v.Cell),m.default.component("x-input",v.XInput),m.default.component("x-button",v.XButton),m.default.component("flexbox",v.Flexbox),m.default.component("flexbox-item",v.FlexboxItem);var M=null;a().then(function(e){M=e,j.config(M)}).catch(function(e){alert(JSON.stringify(e))}).finally(function(){u().then(function(){document.querySelector("#init-loading").remove(),console.log("init vue 完成"),setTimeout(function(){null!=M?G("DDCONFIG_SUCCESS",M):G("DDCONFIG_ERROR",!1)},300)})});({corpid:getParamByName("corpid")||"ding1b56d2f4ba72e91635c2f4657eb6378f",appid:getParamByName("appid")||"2545",suitekey:getParamByName("suiteKey")||"suiteiyfdj0dfixywzqwg",paramUrl:document.URL})},47:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(40),a=o(30),u=n(a),c={method:"get",baseURL:u.default.API_HOST,transformRequest:[function(e){return e}],transformResponse:[function(e){var t=null;try{t=JSON.parse(e)}catch(e){(0,r.logException)(new Error("接口返回不是一个对象"),t)}if("object"==("undefined"==typeof t?"undefined":i(t)))switch(t.status){case 200:break;default:(0,r.logException)(new Error(t.status+" 错误"),t)}return e}],data:{},timeout:5e3};t.default=c},48:function(e,t){},49:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(33),u=n(a),c=o(50),d=n(c);r.default.use(u.default),t.default=new u.default.Store({modules:{app:d.default}})},50:function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var i,r=o(51),a={isLoading:!1,direction:"forward",ddConfig:null,ddConfigStatus:null,code:null,user:null},u=(i={},n(i,r.UPDATE_LOADING,function(e,t){e.isLoading=t}),n(i,r.UPDATE_DIRECTION,function(e,t){e.direction=t}),n(i,r.DDCONFIG_SUCCESS,function(e,t){e.ddConfig=t,e.ddConfigStatus=!0}),n(i,r.DDCONFIG_ERROR,function(e,t){e.ddConfig=null,e.ddConfigStatus=!1}),n(i,r.UPDATE_CODE,function(e,t){e.code=t}),n(i,r.LOGIN_SUCCESS,function(e,t){e.user=t}),n(i,r.LOGIN_ERROR,function(e,t){e.user=!1}),i);t.default={state:a,mutations:u}},51:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_LOADING="UPDATE_LOADING",t.UPDATE_DIRECTION="UPDATE_DIRECTION",t.DDCONFIG_SUCCESS="DDCONFIG_SUCCESS",t.DDCONFIG_ERROR="DDCONFIG_ERROR",t.UPDATE_CODE="UPDATE_CODE",t.LOGIN_SUCCESS="LOGIN_SUCCESS",t.LOGIN_ERROR="LOGIN_ERROR"},52:function(e,t,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(30),r=t(i),a={};window.getParamByName=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null},a.install=function(e,t){e.cookie=function(e,t,o){var n,i,r,a;return arguments.length>1&&"[object Object]"!==String(t)?(o=$.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires&&(n=24*o.expires*60*60*1e3,i=o.expires=new Date,i.setTime(i.getTime()+n)),t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:t,o.expires?"; expires="+o.expires.toUTCString():"","; path=/",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")):(o=t||{},a=o.raw?function(e){return e}:decodeURIComponent,(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?a(r[1]):null)},e.prototype.base_path=r.default.BASE_PATH,e.prototype.localStorage={getItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":n(localStorage)))try{return JSON.parse(localStorage.getItem(e))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},setItem:function(e,t){if("object"===("undefined"==typeof localStorage?"undefined":n(localStorage)))try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},removeItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":n(localStorage)))try{return localStorage.removeItem(e)}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},getUseSize:function(){if("object"===("undefined"==typeof localStorage?"undefined":n(localStorage)))try{return JSON.stringify(localStorage).length}catch(e){alert("请关闭[无痕浏览]模式后再试!")}}},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}},function(t){"object"===n(e)&&"object"===n(e.exports)?e.exports=t:window.bb?window.bb.bbPlugin=t:window.bb={bbPlugin:t}}(a)}).call(t,o(39)(e))},53:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(54),u=n(a),c=o(55),d=n(c);o(56);var l=o(49),f=n(l),s=o(57),p=r.default.extend({template:u.default,store:f.default,vuex:{getters:{route:function(e){return e.route},isLoading:function(e){return e.app.isLoading},direction:function(e){return e.app.direction},ddConfig:function(e){return e.app.ddConfig},ddConfigStatus:function(e){return e.app.ddConfigStatus},code:function(e){return e.app.code},userInfo:function(e){return e.app.user}},actions:{getRequestAuthCode:s.getRequestAuthCode}},watch:{ddConfigStatus:function(e,t){e===!0&&this.getRequestAuthCode(this.ddConfig.corpId)},userInfo:function(e,t){e&&""==e.mobile&&this.$router.go(this.base_path+"/user/bind")}},ready:function(){console.log("APP ready 应该只执行一次")},data:function(){return d.default},methods:{},computed:{showConfigErrorDialog:function(){return this.ddConfigStatus===!1},showCodeErrorDialog:function(){return this.code===!1}}});t.default=p},54:function(e,t){e.exports='<div>\n    <router-view :transition="\'vux-pop-\' + (direction === \'forward\' ? \'in\' : \'out\')">\n\n    </router-view>\n    <alert :show="showConfigErrorDialog" title="发生错误">\n        dd.config配置失败\n    </alert>\n    <alert :show="showCodeErrorDialog" title="发生错误">\n        免登陆code获取失败\n    </alert>\n</div>'},55:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={routerTransition:{forward:"slideRL",back:"slideLR"}};t.default=o},56:function(e,t){},57:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e,t){var o=e.dispatch,n=e.state;callJsApi("runtime.permission.requestAuthCode",{corpId:n.app.ddConfig.corpId||t}).then(function(e){o(c.UPDATE_CODE,e.code),a({dispatch:o,state:n},e.code),console.log("获取到了免登陆code=>"+e.code)}).catch(function(e){o(c.UPDATE_CODE,!1),(0,s.logException)(new Error("获取免登陆code失败"),e)})}function a(e,t){var o=e.dispatch,n=e.state;f.default.get("/user/getUserinfo",{params:{code:t,corpId:n.app.ddConfig.corpId,suiteKey:window.getParamByName("suiteKey")},timeout:5e3}).then(function(e){if(200==e.status&&200==e.data.code){var t=e.data.result;o(c.LOGIN_SUCCESS,t)}else o(c.LOGIN_ERROR,!1),(0,s.logException)(new Error("获取用户信息"),this)}).catch(function(e){o(c.LOGIN_ERROR,!1),(0,s.logException)(new Error("获取用户信息"),e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequestAuthCode=r,t.getUserInfo=a;var u=o(51),c=i(u),d=o(30),l=(n(d),o(5)),f=n(l),s=o(40)}});