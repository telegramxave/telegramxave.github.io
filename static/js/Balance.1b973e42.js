(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Balance"],{"23fa":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),i=n("d3f3"),o=n.n(i),a=function(e){return Object(c["pushScopeId"])("data-v-776ac159"),e=e(),Object(c["popScopeId"])(),e},r={class:"home-content"},l=a((function(){return Object(c["createElementVNode"])("div",{class:"background-top"},null,-1)})),s={class:"balance-card"},u={class:"balance-card_top"},d={class:"network-btn"},b={class:"balance-card_bottom"},m={class:"top"},h={class:"details"},f=a((function(){return Object(c["createElementVNode"])("i",{class:"iconfont icon-balance-details"},null,-1)})),v={class:"bottom"},j={class:"balance-num"},p={class:"balance-list"},O=["onClick"],g={class:"left"},k={class:"right"},w=a((function(){return Object(c["createElementVNode"])("img",{src:o.a,style:{width:"1rem"},alt:"",srcset:""},null,-1)})),N=a((function(){return Object(c["createElementVNode"])("img",{src:o.a,style:{width:"1rem"},alt:"",srcset:""},null,-1)})),V={key:2,style:{width:"100%",height:"calc(50vw - 30px)",display:"flex","justify-content":"center","align-items":"center"}},y=a((function(){return Object(c["createElementVNode"])("img",{src:o.a,style:{width:"1rem"},alt:"",srcset:""},null,-1)})),E=[y],$={class:"nft-name"},B={class:"van-ellipsis"},_={class:"van-ellipsis"},C=["src"];function L(e,t,i,o,a,y){var L=Object(c["resolveComponent"])("van-tab"),T=Object(c["resolveComponent"])("van-tabs"),S=Object(c["resolveComponent"])("van-image"),D=Object(c["resolveComponent"])("van-empty"),x=Object(c["resolveComponent"])("van-grid-item"),U=Object(c["resolveComponent"])("van-grid"),A=Object(c["resolveComponent"])("van-image-preview");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("section",r,[l,Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("span",d,Object(c["toDisplayString"])(""===e.$store.state.currentAccount?e.$t("unconnectedWallet"):e.$store.getters.netName),1),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(y.currentAccountSplit),1)]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("totalBalance")),1),Object(c["createElementVNode"])("div",h,[f,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("balanceDetails")),1)])]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("span",j,"$ "+Object(c["toDisplayString"])(e.$f.formatNumUnit(y.userTotalBalance)),1)])])]),Object(c["createElementVNode"])("div",p,[Object(c["createVNode"])(T,{active:a.active,"onUpdate:active":t[0]||(t[0]=function(e){return a.active=e}),shrink:"",color:"#3F80F7",style:{"--van-tabs-nav-background-color":"#fff"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(L,{title:e.$t("token1"),name:"token"},null,8,["title"]),Object(c["createVNode"])(L,{title:e.$t("nft"),name:"nft"},null,8,["title"])]})),_:1},8,["active"]),Object(c["withDirectives"])(Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(y.userTokenList,(function(t,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:"balance-item",key:i,onClick:Object(c["withModifiers"])((function(e){return y.goTokenDetails(t)}),["stop"])},[Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(S,{round:"",width:"0.6rem",height:"0.6rem","icon-size":"0.6rem","lazy-load":"","show-loading":"",class:"icon-left",src:e.$f.formatIcon(y.formatChain(t)),"error-icon":n("aecc")},null,8,["src","error-icon"]),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.symbol),1)]),Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.$f.formatNumUnit(t.amount)),1),Object(c["createElementVNode"])("div",null,"≈ $ "+Object(c["toDisplayString"])(e.$f.formatNumUnit(t.quote)),1)])],8,O)})),128)),Object(c["withDirectives"])(Object(c["createVNode"])(D,{class:"empty",image:e.emptyNoBalanceLight,description:e.$t("noBalance")},null,8,["image","description"]),[[c["vShow"],y.userTokenList&&0===y.userTokenList.length]])],512),[[c["vShow"],"token"===a.active]]),Object(c["withDirectives"])(Object(c["createVNode"])(U,{gutter:10,clickable:"","column-num":2,center:!1,style:{"--van-grid-item-content-padding":"0","padding-top":"0.1rem"}},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.nftList,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(x,{key:t},{default:Object(c["withCtx"])((function(){return[!e.thumbnail_url&&!e.content||"image_url"!==e.content_type&&"image"!==e.content_type?e.thumbnail_url&&"video_url"===e.content_type?(Object(c["openBlock"])(),Object(c["createBlock"])(S,{key:1,src:e.thumbnail_url,width:"100%",height:"calc(50vw - 30px)",fit:"contain","lazy-load":"",onClick:Object(c["withModifiers"])((function(t){return y.videoPreview(e)}),["stop"])},{error:Object(c["withCtx"])((function(){return[N]})),_:2},1032,["src","onClick"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",V,E)):(Object(c["openBlock"])(),Object(c["createBlock"])(S,{key:0,src:e.thumbnail_url||e.content,width:"100%",height:"calc(50vw - 30px)",fit:"contain","lazy-load":"",onClick:Object(c["withModifiers"])((function(t){return y.ImagePreview({images:[e.content],closeable:!0})}),["stop"])},{error:Object(c["withCtx"])((function(){return[w]})),_:2},1032,["src","onClick"])),Object(c["createElementVNode"])("div",$,[Object(c["createElementVNode"])("div",B,Object(c["toDisplayString"])(e.contract_name),1),Object(c["createElementVNode"])("div",_,Object(c["toDisplayString"])(e.name||y.formatLength("#"+e.inner_id)),1)])]})),_:2},1024)})),128))]})),_:1},512),[[c["vShow"],"nft"===a.active]]),Object(c["withDirectives"])(Object(c["createVNode"])(D,{class:"empty",image:e.emptyNoBalanceLight,description:e.$t("noBalance")},null,8,["image","description"]),[[c["vShow"],"nft"===a.active&&a.nftList&&0===a.nftList.length]])])]),Object(c["createVNode"])(A,{show:a.videoVisible,"onUpdate:show":t[2]||(t[2]=function(e){return a.videoVisible=e}),closeable:"",images:[a.curItem.thumbnail_url],class:"image-preview"},{cover:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("video",{src:a.videoUrl,onClick:t[1]||(t[1]=function(e){return a.videoVisible=!1}),autoplay:"",name:"media",style:{width:"100%",height:"90vh"}},null,8,C)]})),_:1},8,["show","images"])],64)}n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("00b4"),n("fb6a"),n("99af");var T=n("365c"),S=n("0ae8"),D={name:"Balance",data:function(){return{active:"token",hotAddress:[],Timer_getData:null,loading1:!1,loading3:!1,refreshLoading:[!1,!1,!1],nftList:[],videoVisible:!1,videoUrl:"",curItem:{}}},computed:{currentAccount:function(){return this.$store.state.currentAccount||""},currentAccountSplit:function(){return this.currentAccount.replace(new RegExp("(.{6})(.+)(.{4})"),"$1...$3")},userTotalBalance:function(){return this.$store.getters.userTotalBalance||0},userTokenList:function(){return this.$store.getters.balanceTokens||[]}},watch:{"$store.state.currentAccount":function(){this.init()}},activated:function(){this.init()},methods:{init:function(){var e,t;this.$store.state.currentAccount&&(this.$store.dispatch("getUserTokenList"),this.getWhitelistTokens(),(null===(e=this.$store.state)||void 0===e||null===(t=e.favoritesList)||void 0===t?void 0:t.length)>0||this.$store.dispatch("getUserFavorites"),this.getUserNFTList())},getTokensBalance:function(){this.$store.dispatch("getUserTokenList")},getWhitelistTokens:function(){var e=this;Object(T["vb"])(this.$store.getters.netId).then((function(t){e.$store.commit("setState",{name:"whitelistTokens",value:t||[]})}))},getUserNFTList:function(){var e=this;Object(T["Kb"])().then((function(t){e.nftList=t}))},formatChain:function(e){var t={address:e.token,chain:"matic"===e.chain?"polygon":e.chain};return/0x/.test(e.token)||(t.address="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"),t},formatLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e.length>t?e.slice(0,5)+"..."+e.slice(-5):e},goTokenDetails:function(e){this.$router.push({name:"Token",params:{id:"".concat(e.token,"-").concat(e.chain)}})},ImagePreview:S["a"],videoPreview:function(e){e.content&&(this.videoUrl=e.content,this.videoVisible=!0)}}},x=(n("72fe"),n("6b0d")),U=n.n(x);const A=U()(D,[["render",L],["__scopeId","data-v-776ac159"]]);t["default"]=A},"26df":function(e,t,n){},"72fe":function(e,t,n){"use strict";n("26df")},d3f3:function(e,t,n){e.exports=n.p+"static/img/ave-empty.067f8121.png"}}]);