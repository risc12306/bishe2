(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{OUHG:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp"));a("g9YV");var i=l(a("wCAj"));a("P2fV");var u=l(a("NJEC"));a("/zsF");var o=l(a("PArb"));a("5NDa");var d=l(a("5rEg"));a("miYZ");var c=l(a("tsqr")),s=l(a("MVZn")),f=l(a("lwsE")),v=l(a("W8MJ")),m=l(a("a1gu")),h=l(a("Nsbk")),p=l(a("7W2i")),y=n(a("q1tI")),g=l(a("Y+p1")),k=l(a("Ayz/")),E=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,m.default)(this,(0,h.default)(t).call(this,e)),a.index=0,a.cacheOriginData={},a.toggleEditable=function(e,t){e.preventDefault();var n=a.state.data,l=n.map(function(e){return(0,s.default)({},e)}),r=a.getRowByKey(t,l);r&&(r.editable||(a.cacheOriginData[t]=(0,s.default)({},r)),r.editable=!r.editable,a.setState({data:l}))},a.newMember=function(){var e=a.state.data,t=e.map(function(e){return(0,s.default)({},e)});t.push({key:"NEW_".concat(a.index),name:"",editable:!0,isNew:!0}),a.index+=1,a.setState({data:t})},a.state={data:e.value,loading:!1,value:e.value},a}return(0,p.default)(t,e),(0,v.default)(t,[{key:"getRowByKey",value:function(e,t){var a=this.state.data;return(t||a).filter(function(t){return t.key===e})[0]}},{key:"remove",value:function(e){var t=this.state.data,a=this.props.handleRemove,n={};t.filter(function(t){if(t.key!==e)return t;n=t});console.log("remove "+JSON.stringify(n)),a(n)}},{key:"handleKeyPress",value:function(e,t){"Enter"===e.key&&this.saveRow(e,t)}},{key:"handleFieldChange",value:function(e,t,a){var n=this.state.data,l=n.map(function(e){return(0,s.default)({},e)}),r=this.getRowByKey(a,l);r&&(r[t]=e.target.value,this.setState({data:l}))}},{key:"saveRow",value:function(e,t){var a=this;e.persist(),this.setState({loading:!0}),setTimeout(function(){if(a.clickedCancel)a.clickedCancel=!1;else{var n=a.getRowByKey(t)||{};if(!n.name)return c.default.error("\u8bf7\u586b\u5199\u5b8c\u89d2\u8272\u4fe1\u606f\u3002"),e.target.focus(),void a.setState({loading:!1});delete n.isNew,a.toggleEditable(e,t);var l=a.state.data,r=a.props.handleAdd,i={};l.filter(function(e){e.key===t&&(i=e)}),r(i),a.setState({loading:!1})}},500)}},{key:"cancel",value:function(e,t){this.clickedCancel=!0,e.preventDefault();var a=this.state.data,n=a.map(function(e){return(0,s.default)({},e)}),l=this.getRowByKey(t,n);this.cacheOriginData[t]&&(Object.assign(l,this.cacheOriginData[t]),delete this.cacheOriginData[t]),l.editable=!1,this.setState({data:n}),this.clickedCancel=!1}},{key:"render",value:function(){var e=this,t=[{title:"id",dataIndex:"id",key:"id",width:"40%"},{title:"\u89d2\u8272\u540d",dataIndex:"name",key:"name",width:"40%",render:function(t,a){return a.editable?y.default.createElement(d.default,{value:t,onChange:function(t){return e.handleFieldChange(t,"name",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"name"}):t}},{title:"\u64cd\u4f5c",key:"action",render:function(t,a){var n=e.state.loading;return a.editable&&n?null:a.editable?a.isNew?y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u6dfb\u52a0"),y.default.createElement(o.default,{type:"vertical"}),y.default.createElement(u.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},y.default.createElement("a",null,"\u5220\u9664"))):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u4fdd\u5b58"),y.default.createElement(o.default,{type:"vertical"}),y.default.createElement("a",{onClick:function(t){return e.cancel(t,a.key)}},"\u53d6\u6d88")):y.default.createElement("span",null,y.default.createElement("a",{onClick:function(t){return e.toggleEditable(t,a.key)}},"\u7f16\u8f91"),y.default.createElement(o.default,{type:"vertical"}),y.default.createElement(u.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},y.default.createElement("a",null,"\u5220\u9664")))}}],a=this.state,n=a.loading,l=a.data;return y.default.createElement(y.Fragment,null,y.default.createElement(i.default,{loading:n,columns:t,dataSource:l,pagination:!1,rowClassName:function(e){return e.editable?k.default.editable:""}}),y.default.createElement(r.default,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember,icon:"plus"},"\u65b0\u589e\u89d2\u8272"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,g.default)(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(y.PureComponent),w=E;t.default=w},gooO:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("Q9mQ");var i=n(a("diRs"));a("Pwec");var u=n(a("CtXQ")),o=n(a("lwsE")),d=n(a("W8MJ")),c=n(a("a1gu")),s=n(a("Nsbk")),f=n(a("7W2i"));a("y8nQ");var v=n(a("Vl3Y"));a("iQDF");var m=n(a("+eQT"));a("OaEy");var h,p,y,g=n(a("2fM7")),k=l(a("q1tI")),E=a("MuoO"),w=(n(a("WnAZ")),n(a("zHco"))),b=n(a("OUHG")),C=n(a("Ayz/")),N=(g.default.Option,m.default.RangePicker,h=(0,E.connect)(function(e){var t=e.role,a=e.loading;return{submitting:a.effects["form/submitAdvancedForm"],data:t.list}}),p=v.default.create(),h(y=p(y=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.state={width:"100%"},a.getErrorInfo=function(){var e=a.props.form.getFieldsError,t=e(),n=Object.keys(t).filter(function(e){return t[e]}).length;if(!t||0===n)return null;var l=function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)},r=Object.keys(t).map(function(e){return t[e]?k.default.createElement("li",{key:e,className:C.default.errorListItem,onClick:function(){return l(e)}},k.default.createElement(u.default,{type:"cross-circle-o",className:C.default.errorIcon}),k.default.createElement("div",{className:C.default.errorMessage},t[e][0]),k.default.createElement("div",{className:C.default.errorField},fieldLabels[e])):null});return k.default.createElement("span",{className:C.default.errorIcon},k.default.createElement(i.default,{title:"\u8868\u5355\u6821\u9a8c\u4fe1\u606f",content:r,overlayClassName:C.default.errorPopover,trigger:"click",getPopupContainer:function(e){return e.parentNode}},k.default.createElement(u.default,{type:"exclamation-circle"})),n)},a.resizeFooterToolbar=function(){requestAnimationFrame(function(){var e=document.querySelectorAll(".ant-layout-sider")[0];if(e){var t="calc(100% - ".concat(e.style.width,")"),n=a.state.width;n!==t&&a.setState({width:t})}})},a.validate=function(){var e=a.props,t=e.form.validateFieldsAndScroll,n=e.dispatch;t(function(e,t){e||n({type:"form/submitAdvancedForm",payload:t})})},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"role/fetch"}),window.addEventListener("resize",this.resizeFooterToolbar,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"handleSave",value:function(e){var t=this.props.dispatch;t({type:"role/add",payload:e})}},{key:"handleRemove",value:function(e){var t=this.props.dispatch;t({type:"role/remove",payload:e})}},{key:"render",value:function(){var e=this.props,t=(e.form.getFieldDecorator,e.submitting,e.data);this.state.width;return k.default.createElement(w.default,{title:"\u7cfb\u7edf\u7ba1\u7406\u5458\u64cd\u4f5c",wrapperClassName:C.default.advancedForm},k.default.createElement(r.default,{title:"\u89d2\u8272\u7ba1\u7406",bordered:!1},k.default.createElement(b.default,{value:t,handleAdd:this.handleSave.bind(this),handleRemove:this.handleRemove.bind(this)})))}}]),t}(k.PureComponent))||y)||y),R=N;t.default=R}}]);