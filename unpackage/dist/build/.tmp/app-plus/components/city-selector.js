(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/city-selector"],{"2c1b":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"4b6f":function(t,i,e){},7505:function(t,i,e){"use strict";e.r(i);var n=e("938d"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"807a":function(t,i,e){"use strict";var n=e("4b6f"),a=e.n(n);a.a},"938d":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("39dd"));function a(t){return t&&t.__esModule?t:{default:t}}var s={name:"city-selector",data:function(){return{other:{label:"",value:"0"},showRank:0,cityList:[{identify:"province",name:"0",showList:n.default[this.platform]},{identify:"city",name:"0",showList:[]},{identify:"county",name:"0",showList:[]},{identify:"town",name:"0",showList:[]}],valueObj:{province:{label:"",value:"0"},city:{label:"",value:"0"},county:{label:"",value:"0"},town:{label:"",value:"0"}}}},props:{platform:String,default:"jd"},methods:{onChooseClick:function(t){""!=t.childrens&&t.childrens?(this.valueObj[this.cityList[this.showRank].identify].label=t.label,this.valueObj[this.cityList[this.showRank].identify].value=t.value,this.cityList[this.showRank].name=t.label,this.showRank++,this.cityList[this.showRank].showList=t.childrens):(this.valueObj.town.label="",this.valueObj.town.value="0",this.valueObj[this.cityList[this.showRank].identify].label=t.label,this.valueObj[this.cityList[this.showRank].identify].value=t.value,this.$emit("confirm",this.valueObj))},onRankClick:function(t){this.showRank=t}},computed:{}};i.default=s},dcbd:function(t,i,e){"use strict";e.r(i);var n=e("2c1b"),a=e("7505");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("807a");var l=e("2877"),u=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,null,null);i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/city-selector-create-component',
    {
        'components/city-selector-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("dcbd"))
        })
    },
    [['components/city-selector-create-component']]
]);                
