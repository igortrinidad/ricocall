(function(e){function t(t){for(var o,i,a=t[0],l=t[1],c=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"16a3":function(e,t,n){"use strict";n("2e29")},"2c93":function(e,t,n){"use strict";n("2fef")},"2e29":function(e,t,n){},"2fef":function(e,t,n){},"3bff":function(e,t,n){"use strict";var o=n("0e44"),r=n("2b0e"),s=n("2f62"),i={loggedUser:null,loggedUserType:null,loggedUserToken:null},a={getterLoggedUser:function(e){return e.loggedUser},getterLoggedUserType:function(e){return e.loggedUserType},getterLoggedUserToken:function(e){return e.loggedUserToken}},l=(n("b0c0"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("fae1")),c=n("b048"),u=n("a18c"),d={attemptUserLogin:function(e,t){var n=t.email,o=t.password;l["a"].post("/user/auth/login",{email:n,password:o},{loader:!0}).then((function(t){var n=t.data.token;e.commit("setLoggedUserToken",{token:n}),e.dispatch("getLoggedUser",{})})).catch((function(e){e.response&&401==e.response.status?Object(c["b"])("Ops, check your credentials..."):Object(c["b"])("Ops, something goes wrong with this app!")}))},getLoggedUser:function(e,t){var n=t.redirect,o=void 0===n||n;l["a"].get("/user/auth/getLoggedUser").then((function(t){var n=t.data,r=n.user;if(e.commit("setLoggedUser",{user:r}),Object(c["c"])("Welcome ".concat(r.name," !")),e.dispatch("setupTwilioDevice"),o){var s=new URLSearchParams(window.location.search),i=s.get("redirectTo");i?u["a"].push(i,(function(){})):u["a"].push("/home",(function(){}))}})).catch((function(t){t.response&&403==t.response.status?(Object(c["b"])("Sorry, it's seems that somebody blocked you :/"),e.dispatch("logoutUser",{showNotification:!1})):Object(c["b"])("Ops, something did wrong with this app, comeback later!")}))},registerUser:function(e,t){var n=t.user;l["a"].post("/user/auth/register",n,{loader:!0}).then((function(t){var n=t.data.token;e.commit("setLoggedUserToken",{token:n}),e.dispatch("getLoggedUser",{})})).catch((function(){Object(c["b"])("Erro ao cadastrar, verifique os dados.")}))},logoutUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.showNotification,o=void 0===n||n;r["a"].prototype.$socket.emit("leaveRoom",{userId:e.getters.getterLoggedUser.id}),e.commit("setLogout"),o&&Object(c["c"])("Successfully logout"),u["a"].push("/",(function(){})),e.dispatch("destroyTwilioDevice")}},f={setLoggedUserToken:function(e,t){var n=t.type,o=t.token;e.loggedUserType=n,e.loggedUserToken=o},setLoggedUser:function(e,t){var n=t.user;e.loggedUser=n},setLogout:function(e){e.loggedUser=null,e.loggedUserToken=null,e.loggedUserType=null}},p={state:i,getters:a,actions:d,mutations:f},g={loaderShow:!1,loaderInstances:0},m={getterLoaderShow:function(e){return e.loaderShow},getterLoaderInstances:function(e){return e.loaderInstances}},h={setLoaderShow:function(e,t){if(t){var n=e.getters.getterLoaderInstances,o=n+1;e.commit("setLoaderShow",{loaderShow:!0,loaderInstances:o})}else e.dispatch("setLoaderOff")},setLoaderOff:function(e){setTimeout((function(){var t=e.getters.getterLoaderInstances;if(1===t)e.commit("setLoaderShow",{loaderShow:!1,loaderInstances:0});else{var n=t-1;e.commit("setLoaderShow",{loaderShow:!0,loaderInstances:n})}}),500)},resetLoader:function(e){e.commit("resetLoader")}},b={setLoaderShow:function(e,t){var n=t.loaderShow,o=t.loaderInstances;e.loaderShow=n,e.loaderInstances=o},resetLoader:function(e){e.loaderShow=!1,e.loaderInstances=0}},v={state:g,getters:m,actions:h,mutations:b},w={},y={},k=n("e736"),x=n("5c7d");Object(x["getLogger"])(k["Device"].packageName);var C={setupTwilioDevice:function(){l["a"].get("/twilio/token").then((function(e){var t=e.data,n=t.token;k["Device"].setup(n),k["Device"].on("ready",(function(e){console.log("Ready"),console.log(e)})),k["Device"].on("error",(function(e){console.log("Error: "+e.message)})),k["Device"].on("incoming",(function(e){console.log("Incoming connection from "+e.parameters.From),e.accept()}))}))},destroyTwilioDevice:function(){k["Device"].destroy()}},O={},L={state:w,getters:y,actions:C,mutations:O};r["a"].use(s["a"]);var U=new s["a"].Store({modules:{auth:p,general:v,caller:L},plugins:[Object(o["a"])({key:"ricocall"})]});t["a"]=U},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full block m-auto h-screen overflow-y-auto bg-blue p-3 md:p-10",attrs:{id:"app"}},[n("div",{staticClass:"w-full shadow-md flex h-full relative"},[n("SideMenu"),n("div",{staticClass:" w-full h-full overflow-y-auto  flex flex-wrap bg-white"},[n("MainHeader"),n("router-view")],1)],1),n("Loader")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-blue side-menu-container items-start md:h-full max-w-full md:max-w-1/3 absolute md:static bg-grey-light p-6  shadow-sm z-10 flex flex-wrap",class:[e.sideMenuIsOpen?"h-full menu-open w-full":""]},[e.sideMenuIsOpen?n("button",{staticClass:"cursor-pointer focus:outline-none flex text-black",attrs:{"aria-label":"Close side menu"},on:{click:function(t){return e.close()}}},[n("feather",{attrs:{type:"x",size:"28"}})],1):n("button",{staticClass:"cursor-pointer focus:outline-none flex text-black",attrs:{"aria-label":"open side menu"},on:{click:function(t){e.sideMenuIsOpen=!0}}},[n("feather",{attrs:{type:"menu"}})],1),n("div",{staticClass:"side-menu-content h-full w-full flex"},[e.sideMenuIsOpen?n("div",{staticClass:"w-full flex flex-col h-full"},[n("router-link",{staticClass:"inline-block w-full flex items-center justify-center",attrs:{to:"/"}},[n("img",{attrs:{src:"/logo.svg",width:"128px",alt:"Ricocall Logo"}})]),e.$store.getters.getterLoggedUser?n("div",{staticClass:"flex max-h-full overflow-y-auto mb-4"},[n("UserList")],1):e._e()],1):e._e()])])},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex flex-wrap"},[e._m(0),e._l(e.sortedUserList(),(function(t){return n("div",{key:t.id,staticClass:"w-full"},[n("button",{staticClass:"button bg-white shadow-sm flex justify-center w-full rounded-full text-blue mb-3 text-sm",on:{click:function(n){return e.call(t)}}},[n("span",{staticClass:"w-3/4 max-w-3/4 ellipsis text-left"},[e._v(e._s(t.name))]),n("span",{staticClass:"text-xs ml-2",class:[e.getUserStatusClass(e.checkUserStatus(t))]},[e._v(e._s(e.checkUserStatus(t)))])])])}))],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"w-full mb-4"},[n("span",{staticClass:"border-b-4 border-yellow"},[e._v("Contacts")])])}],u=(n("c975"),n("fb6a"),n("e736")),d=(n("4de4"),n("b64b"),function(e,t){for(var n=0;n<e.length;n++){var o=Object.keys(t).filter((function(o){return t[o]===e[n][o]}));if(o.length===Object.keys(t).length)return e[n]}return!1}),f={name:"UserList",data:function(){return{users:[],onlineUsers:[]}},mounted:function(){var e=this;this.getUsers(),this.joinSocketRoom(),this.$socket.on("onlineUsers",(function(t){var n=t.onlineUsers;e.onlineUsers=n}))},methods:{getUsers:function(){var e=this;this.$api.get("/users/get").then((function(t){var n=t.data;e.users=n.users}))},call:function(e){"online"==this.checkUserStatus(e)&&u["Device"].connect({From:this.$store.getters.getterLoggedUser.id,To:e.id})},joinSocketRoom:function(){this.$socket.emit("joinRoom",{userId:this.$store.getters.getterLoggedUser.id})},checkUserStatus:function(e){var t=d(this.onlineUsers,{userId:e.id});return t?t.status:"offline"},getUserStatusClass:function(e){return"busy"==e?"text-blue":"online"==e?"text-green":"text-grey"},sortedUserList:function(){var e=this,t=["online","busy","offline"];return this.users.slice().sort((function(n,o){return t.indexOf(e.checkUserStatus(n))-t.indexOf(e.checkUserStatus(o))}))}}},p=f,g=n("2877"),m=Object(g["a"])(p,l,c,!1,null,null,null),h=m.exports,b={name:"SideMenu",components:{UserList:h},data:function(){return{sideMenuIsOpen:!1}},mounted:function(){window.innerWidth>798&&(this.sideMenuIsOpen=!0)},methods:{close:function(){this.sideMenuIsOpen&&(this.sideMenuIsOpen=!1)}}},v=b,w=(n("2c93"),Object(g["a"])(v,i,a,!1,null,null,null)),y=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.getters.getterLoggedUser?n("div",{staticClass:"w-full flex justify-end p-4 w-full h-16"},[n("router-link",{staticClass:"button-sm flex items-center text-grey hover:text-black",class:["Home"==e.$route.name?"border-b-4 border-yellow text-black":""],attrs:{to:{name:"Home"},"aria-label":"logout"},on:{click:function(t){return e.logout()}}},[e._v(" Home ")]),n("router-link",{staticClass:"button-sm flex items-center text-grey hover:text-black",class:["Settings"==e.$route.name?"border-b-4 border-yellow text-black":""],attrs:{to:{name:"Settings"},"aria-label":"logout"},on:{click:function(t){return e.logout()}}},[e._v(" Settings ")]),n("button",{staticClass:"button-sm flex items-center text-grey hover:text-black",attrs:{"aria-label":"logout"},on:{click:function(t){return e.logout()}}},[e._v(" "+e._s(e.$store.getters.getterLoggedUser.name)+" logout ")])],1):e._e()},x=[],C=n("5530"),O=n("2f62"),L={name:"Header",methods:Object(C["a"])(Object(C["a"])({},Object(O["b"])(["logoutUser"])),{},{logout:function(){this.logoutUser()}})},U=L,_=Object(g["a"])(U,k,x,!1,null,null,null),j=_.exports,I={name:"App",components:{SideMenu:y,MainHeader:j}},S=I,$=(n("034f"),Object(g["a"])(S,r,s,!1,null,null,null)),E=$.exports,T=n("a18c"),P=n("3bff");n("8af5"),n("7766"),P["a"].dispatch("resetLoader"),P["a"].getters.getterLoggedUser&&P["a"].dispatch("getLoggedUser",{loader:!0}),new o["a"]({router:T["a"],store:P["a"],render:function(e){return e(E)}}).$mount("#app")},"74ae":function(e,t,n){"use strict";n("b4ad")},7766:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=n("8055"),s=n.n(r);t["default"]=function(){var e=s()("https://ricocall.igortrindade.dev",{reconnectionDelay:2e3,reconnectionDelayMax:5e3,reconnectionAttempts:20});e.on("connect",(function(){console.log("Socket successfully connected")})),o["a"].prototype.$socket=e}()},"85ec":function(e,t,n){},"8af5":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=n("62ad"),s=n.n(r),i=n("fae1"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-full absolute inset-0 z-50 my-auto bg-smoke flex items-center justify-center loader",class:[e.getterLoaderShow?"flex":"hidden"],attrs:{id:"loader"}},[n("div",{staticClass:"spinnerx"})])},l=[],c=n("5530"),u=n("2f62"),d={name:"Loader",computed:Object(c["a"])({},Object(u["c"])(["getterLoaderShow"]))},f=d,p=(n("74ae"),n("2877")),g=Object(p["a"])(f,a,l,!1,null,null,null),m=g.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block w-full mt-2"},[e.label?n("label",{staticClass:"block mb-2",attrs:{for:e.getId}},[n("span",{staticClass:"border-b-2 border-yellow"},[e._v(e._s(e.label))])]):e._e(),n("div",{staticClass:"relative check-input"},[n("input",{staticClass:"block appearance-none outline-none w-full h-full border-2 border-grey-medium focus:border-yellow bg-grey-light text-grey-darker text-lg py-2 pr-4 pl-10",class:{"border-red":e.validation.filled&&e.validation.hasError},attrs:{id:e.getId,type:e.getType,placeholder:e.label,autocapitalize:e.autocapitalize,required:e.required,"aria-required":e.required,"aria-labelledby":"#id","aria-invalid":e.validation.hasError},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.makeAction()}}}),n("div",{staticClass:"text-black icon-highlight h-full absolute pin-y top-0 flex items-center text-grey pointer-events-none pl-2"},[n("feather",{staticClass:"icon-highlight",attrs:{type:e.icon}})],1),"password"===e.type?n("button",{staticClass:"h-full absolute pin-y top-0 right-0 mr-3 flex items-center text-grey pl-2 text-black hover:shadow-sm focus:outline-none focus:shadow",on:{click:function(t){e.showPassword=!e.showPassword}}},[n("feather",{attrs:{type:e.showPassword?"eye-off":"eye",size:"18"}})],1):e._e()])])},b=[],v=(n("ac1f"),n("5319"),{name:"InputWithIcon",props:{icon:{type:String,default:"plus"},type:{type:String,default:"text"},placeholder:{type:String,default:""},value:{required:!0},id:{required:!1},label:{type:String,default:""},action:{type:Function,required:!1},autocapitalize:{type:String,default:"sentences"},required:{type:Boolean,default:!1},validation:{type:Object,default:function(){return{hasError:!1,checked:!1}}}},data:function(){return{showPassword:!1}},computed:{getId:function(){return this.id?this.id:this.label.replace(/[^\w\s]/gi,"").toLowerCase()},getType:function(){return"password"!==this.type?this.type:"password"===this.type&&this.showPassword?"text":this.type}},methods:{change:function(){this.$emit("input",this.value)},makeAction:function(){this.action&&"function"==typeof this.action&&this.action()}}}),w=v,y=(n("16a3"),Object(p["a"])(w,h,b,!1,null,null,null)),k=y.exports,x=n("b048");t["default"]=function(){o["a"].config.productionTip=!1,o["a"].prototype.$api=i["a"],o["a"].prototype.$notifications=new x["a"],o["a"].use(s.a),o["a"].component("InputWithIcon",k),o["a"].component("Loader",m),o["a"].directive("click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(o){e==o.target||e.contains(o.target)||n.context[t.expression](o)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}})}()},9242:function(e,t,n){n("99af"),n("4de4"),n("a15b"),n("d81d");var o,r=n("7037"),s=n("970b"),i=n("5bc3"),a=n("9523"),l=(o=function(){"use strict";function e(){var t=this;s(this,e),a(this,"validation",(function(e){return t[e].length?t.errors.filter((function(t){return t.item==e})).length?{hasError:!0,checked:!1,filled:!0}:{hasError:!1,checked:!0,filled:!0}:{hasError:!0,checked:!1,filled:!1}}))}return i(e,[{key:"errors",get:function(){var e=this;return this.requireds.filter((function(t){if("boolean"!=typeof e[t.item]||e[t.item])return"function"==typeof t.validation?t.validation(e[t.item],e):"string"==typeof e[t.item]&&!e[t.item].length||Array.isArray(e[t.item])&&!e[t.item].length||"object"==r(e[t.item])&&!e[t.item]?t:void 0}))}},{key:"hasError",get:function(){return!!this.errors.length}},{key:"errorPhrase",get:function(){return{init:"Please, check this information ",end:" to procceed."}}},{key:"validationPhrase",get:function(){return this.errorPhrase.init+this.errors.map((function(e){return e.label})).join(", ")+this.errorPhrase.end}},{key:"validationPhraseHtml",get:function(){return"".concat(this.errorPhrase.init," <b>").concat(this.errors.map((function(e){return e.label})).join(", "),"</b> ").concat(this.errorPhrase.end)}}]),e}(),o);e.exports=l},a18c:function(e,t,n){"use strict";var o=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-3/4 flex flex-wrap items-center justify-center"},[n("div",{staticClass:"w-full max-w-sm flex flex-wrap justify-center p-4"},[n("img",{attrs:{src:"/logo.svg",width:"144px",alt:"Ricocall Logo"}}),"signin"==e.type?n("div",{staticClass:"w-full my-8"},[n("SignIn",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("div",{staticClass:"w-full p-4 border border-grey-light shadow-sm mt-6"},[n("p",[e._v("New to Ricocall? "),n("button",{staticClass:"text-blue font-bold",on:{click:function(t){return e.changeView("signup")}}},[e._v("Create an account !")])])])],1):e._e(),"signup"==e.type?n("div",{staticClass:"w-full my-8"},[n("SignUp",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("div",{staticClass:"w-full p-4 border border-grey-light shadow-sm mt-6"},[n("p",[e._v("Already have a Ricocall account? "),n("button",{staticClass:"text-blue font-bold px-0",on:{click:function(t){return e.changeView("signin")}}},[e._v("To go login !")])])])],1):e._e(),"recover"==e.type?n("div",{staticClass:"w-full my-8"},[n("Recover",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("div",{staticClass:"w-full p-4 border border-grey-light shadow-sm mt-6"},[n("p",[e._v("Already have a Ricocall account? "),n("button",{staticClass:"text-blue font-bold px-0",on:{click:function(t){return e.changeView("signin")}}},[e._v("To go login !")])])])],1):e._e()])])},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex flex-wrap p-4 border border-grey-light shadow-sm"},[n("InputWithIcon",{attrs:{id:"email",icon:"mail",label:"Insert your email",required:!0,type:"email",validation:e.user.validation("email")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("InputWithIcon",{staticClass:"mt-4",attrs:{icon:"key",label:"Insert your password",type:"password",required:!0,validation:e.user.validation("password")},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("p",{staticClass:"w-full text-right"},[n("button",{staticClass:"button-sm text-blue font-bold px-0",on:{click:function(t){return e.$emit("input","recover")}}},[e._v(" Forgot your password? ")])]),n("button",{staticClass:"button bg-yellow mt-4",attrs:{disabled:!e.user.email||!e.user.password},on:{click:function(t){return e.login()}}},[e._v(" Sign In ")])],1)},l=[],c=n("5530"),u=(n("b0c0"),n("d4ec")),d=n("bee2"),f=n("262e"),p=n("2caf"),g=n("9242"),m=function(e){Object(f["a"])(n,e);var t=Object(p["a"])(n);function n(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u["a"])(this,n),e=t.call(this),e.id=o.id||null,e.name=o.name||"",e.email=o.email||"",e.password=o.password||"",e.password_confirmation=o.password_confirmation||"",e.created_at=o.created_at||"",e.updated_at=o.updated_at||"",e.isBlocked=o.isBlocked||!1,e}return Object(d["a"])(n,[{key:"requireds",get:function(){return[{item:"name",label:"name"},{item:"email",label:"email",validation:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!t.test(String(e).toLowerCase())}},{item:"password",label:"senha",validation:function(e){if(e.length<6)return!0}}]}},{key:"errorPhrase",get:function(){return{init:"Please check the information: ",end:" to procced"}}}]),n}(g),h=n("2f62"),b={name:"SignIn",data:function(){return{user:new m}},methods:Object(c["a"])(Object(c["a"])({},Object(h["b"])(["attemptUserLogin"])),{},{login:function(){var e=this.user,t=e.email,n=e.password;this.attemptUserLogin({email:t,password:n})}})},v=b,w=n("2877"),y=Object(w["a"])(v,a,l,!1,null,null,null),k=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex flex-wrap p-4 border border-grey-light shadow-sm"},[n("InputWithIcon",{attrs:{icon:"user",id:"username",label:"Insert your username",required:!0,validation:e.user.validation("name")},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),n("InputWithIcon",{staticClass:"mt-4",attrs:{icon:"mail",label:"Inser your email",required:!0,type:"email",validation:e.user.validation("email")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("InputWithIcon",{staticClass:"mt-4",attrs:{icon:"key",label:"Password",type:"password",required:!0,validation:e.user.validation("password")},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("p",{staticClass:"w-full text-right"},[n("button",{staticClass:"button-sm text-blue font-bold px-0",on:{click:function(t){return e.$emit("input","recover")}}},[e._v(" Forgot your password? ")])]),n("button",{staticClass:"button bg-yellow mt-4 hover:shadow-sm focus:outline-none focus:shadow",attrs:{disabled:e.user.hasError},on:{click:function(t){return e.checkEmail()}}},[e._v(" Sign Up ")])],1)},C=[],O={name:"SignUp",data:function(){return{user:new m}},methods:{checkEmail:function(){var e=this;this.$api.post("/user/auth/checkEmail",this.user).then((function(){e.$notifications.error("You already have an account, please login.")})).catch((function(){e.$store.dispatch("registerUser",{user:e.user}).then((function(e){var t=e.data;console.log(t)}))}))}}},L=O,U=Object(w["a"])(L,x,C,!1,null,null,null),_=U.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex flex-wrap p-4 border border-grey-light shadow-sm"},[n("InputWithIcon",{attrs:{id:"email",icon:"mail",label:"Insert your email",required:!0,type:"email",validation:e.user.validation("email")},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("button",{staticClass:"button bg-yellow mt-4",attrs:{disabled:!e.user.email},on:{click:function(t){return e.checkEmail()}}},[e._v(" Recover password ")])],1)},I=[],S={name:"SignIn",data:function(){return{user:new m}},methods:Object(c["a"])(Object(c["a"])({},Object(h["b"])(["attemptUserLogin"])),{},{checkEmail:function(){var e=this,t=this.user.email;this.$api.post("/user/auth/checkEmail",{email:t}).then((function(){e.$api.post("/user/auth/generateNewPassword",{email:t},{loader:!0}).then((function(){e.$notifications.info("We've sent you a new password"),e.$emit("input","signin")}))})).catch((function(){e.$notifications.error("We didn't found your email ".concat(t))}))}})},$=S,E=Object(w["a"])($,j,I,!1,null,null,null),T=E.exports,P={name:"Login",components:{SignIn:k,SignUp:_,Recover:T},data:function(){return{type:"signin"}},methods:{changeView:function(e){this.type=e,setTimeout((function(){"signin"==e?document.getElementById("email").focus():document.getElementById("username").focus()}),200)}}},M=P,q=Object(w["a"])(M,s,i,!1,null,null,null),D=q.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-full flex items-center justify-center"},[n("h1",[e._v("Home")]),n("Caller")],1)},R=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full p-4"},[n("div",{staticClass:"w-full flex justify-between my-3"},[n("button",{staticClass:"bg-red p-3 text-white",on:{click:function(t){return e.disconnect()}}},[e._v("Desligar")])])])},B=[],F=n("e736"),z=n("5c7d"),H=Object(z["getLogger"])(F["Device"].packageName);H.setLevel("DEBUG");var V={name:"Caller",data:function(){return{}},mounted:function(){},methods:{disconnect:function(){F["Device"].disconnectAll()}}},N=V,J=Object(w["a"])(N,W,B,!1,null,null,null),Z=J.exports,G={name:"Home",components:{Caller:Z}},Y=G,K=Object(w["a"])(Y,A,R,!1,null,null,null),Q=K.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-3/4 flex  justify-center p-6"},[n("div",{staticClass:"w-full max-w-sm justify-center p-4 w-full border border-grey-light shadow-sm mt-6"},[n("h2",[e._v("Application Settings")]),n("InputWithIcon",{staticClass:"mt-4",attrs:{icon:"key",label:"Twilio TwiML app router endpoint",type:"text"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),n("button",{staticClass:"button bg-yellow mt-4",on:{click:function(t){return e.updateTwilioVoiceUrl()}}},[e._v(" Update ")])],1)])},ee=[],te={name:"ApplicationSettings",data:function(){return{url:"https://ricocall.igortrindade.dev/api/twilio/routeIncomingCall"}},methods:{updateTwilioVoiceUrl:function(){var e=this;this.$api.post("/twilio/updateApplicationVoiceUrl",{url:this.url},{loader:!0}).then((function(){e.$notifications.success("Twilio Voice Url successfully updated!")})).catch((function(){e.$notifications.error("Error while trying to update Twilio Voice Url")}))}}},ne=te,oe=Object(w["a"])(ne,X,ee,!1,null,null,null),re=oe.exports,se=n("3bff"),ie=n("b048");o["a"].use(r["a"]);var ae=[{path:"/",name:"Login",component:D},{path:"/home",name:"Home",component:Q,meta:{requireAuth:!0}},{path:"/settings",name:"Settings",component:re,meta:{requireAuth:!0}}],le=new r["a"]({mode:"history",base:"/",routes:ae});le.beforeEach((function(e,t,n){if(setTimeout((function(){window.scrollTo(0,0);var e=document.getElementById("main-content");e&&(e.scrollTop=0)}),200),e.meta.requireAuth&&!se["a"].getters.getterLoggedUser)return Object(ie["d"])("Please sign in again!"),void le.push("/",(function(){}));n()}));t["a"]=le},b048:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u}));var o=n("d4ec"),r=n("ade3"),s=n("2685"),i=n.n(s),a=function e(){Object(o["a"])(this,e),Object(r["a"])(this,"success",l),Object(r["a"])(this,"error",c),Object(r["a"])(this,"warning",u),Object(r["a"])(this,"info",d)},l=function(e){i.a.show({class:"custom-notify",position:e.position||"bottomRight",title:e.title||"",message:"string"==typeof e?e:e.message||"",theme:"dark",color:"#03DFAE",titleColor:"#000",messageColor:"#000",iconColor:"#000",progressBarColor:"#000",timeout:3e3,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"bounceInLeft",transitionInMobile:"bounceInLeft"})},c=function(e){i.a.show({class:"custom-notify",position:e.position||"bottomRight",title:e.title||"",message:"string"==typeof e?e:e.message||"",theme:"dark",color:"#ff0f4a",titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",progressBarColor:"#fff",timeout:3e3,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"bounceInLeft",transitionInMobile:"bounceInLeft"})},u=function(e){i.a.show({class:"custom-notify",position:e.position||"bottomRight",title:e.title||"",message:"string"==typeof e?e:e.message||"",color:"#FFC400",titleColor:"#22292F",messageColor:"#22292F",iconColor:"#22292F",progressBarColor:"#22292F",timeout:3e3,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"bounceInLeft",transitionOut:"fadeOut",transitionInMobile:"bounceInLeft",transitionOutMobile:"fadeOutDown"})},d=function(e){i.a.show({class:"custom-notify",position:e.position||"bottomRight",title:e.title||"",message:"string"==typeof e?e:e.message||"",theme:"dark",color:"#270E66",titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",progressBarColor:"#fff",timeout:3e3,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"bounceInLeft",transitionInMobile:"bounceInLeft"})}},b4ad:function(e,t,n){},fae1:function(e,t,n){"use strict";n("d3b7");var o=n("bc3a"),r=n.n(o),s=n("3bff");r.a.defaults.baseURL="https://ricocall.igortrindade.dev/api",r.a.defaults.headers.common["Content-Type"]="application/json",r.a.defaults.headers.common["Accept"]="application/json",r.a.interceptors.request.use((function(e){return s["a"].getters.getterLoggedUserToken&&!e.crossDomain&&(e.headers.authorization="Bearer ".concat(s["a"].getters.getterLoggedUserToken)),e.loader&&s["a"].dispatch("setLoaderShow",!0),e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){return e.config.loader&&s["a"].dispatch("setLoaderShow",!1),e}),(function(e){return setTimeout((function(){s["a"].dispatch("resetLoader")}),2500),e.response&&e.response.status&&e.response.status,Promise.reject(e)})),t["a"]=r.a}});
//# sourceMappingURL=app.67680e55.js.map