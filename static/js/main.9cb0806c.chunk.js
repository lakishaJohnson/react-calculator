(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),u=a(7),s=a.n(u),l=(a(13),a(8)),i=a(2),c=a(3),o=a(5),p=a(4),b=a(0),d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Ki-Ah Shackyu Later"}),Object(b.jsx)("p",{children:"A simple calculator app"})]})},v=(a(15),[{id:"invert",keyType:"operator",value:"+/-"},{id:"clear",keyType:"function",value:"C"},{id:"multiply",keyType:"operator",value:"*"},{id:"minus",keyType:"operator",value:"-"},{id:"9",keyType:"number",value:"9"},{id:"8",keyType:"number",value:"8"},{id:"7",keyType:"number",value:"7"},{id:"add",keyType:"operator",value:"+"},{id:"6",keyType:"number",value:"6"},{id:"5",keyType:"number",value:"5"},{id:"4",keyType:"number",value:"4"},{id:"divide",keyType:"operator",value:"/"},{id:"3",keyType:"number",value:"3"},{id:"2",keyType:"number",value:"2"},{id:"1",keyType:"number",value:"1"},{id:"dot",keyType:"number",value:"."},{id:"0",keyType:"number",value:"0"},{id:"%",keyType:"number",value:"%"},{id:"allClear",keyType:"function",value:"AC"},{id:"total",keyType:"function",value:"="}]),y=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"keyboard",children:v.map((function(t,a){return Object(b.jsx)("button",{className:"buttons",id:t.id,keyType:t.keyType,value:t.value,onClick:function(t){return e.props.buttonClicked(t.target.value)},children:t.value},a)}))})}}]),a}(n.a.Component),j=y,h=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={result:r.props.value},r}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){console.log(e.target);var t=e.target.value;this.setState({result:t}),this.props.onChange(t)}},{key:"render",value:function(){var e=this,t=this.props.result;return Object(b.jsx)("div",{className:"result",children:Object(b.jsx)("input",{id:"values",name:"values",type:"text",placeholder:"0",value:t,onChange:function(t){return e.props.handleInputChange(t.target.value)}})})}}]),a}(n.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).buttonClicked=function(e){"="===e?r.calculate():"C"===e?r.backspace():"AC"===e?r.reset():"+"===e?r.setState({operation:"+",result:r.state.result+e}):"-"===e?r.setState({operation:"-",result:r.state.result+e}):"*"===e?r.setState({operation:"*",result:r.state.result+e}):"/"===e?r.setState({operation:"/",result:r.state.result+e}):r.setState({result:r.state.result+e})},r.calculate=function(){var e=r.state.result.split(/\+|-|\*|\//),t=Object(l.a)(e,2),a=t[0],n=t[1],u=r.state.operation;if("+"===u){var s=Number(a)+Number(n);r.setState({result:s.toString()})}else if("-"===u){var i=Number(a)-Number(n);r.setState({result:i.toString()})}else if("*"===u){var c=Number(a)*Number(n);r.setState({result:c.toString()})}else if("/"===u){var o=Number(a)/Number(n);r.setState({result:o.toString()})}else r.setState({result:"",operation:""})},r.backspace=function(){r.setState({result:r.state.result.slice(0,-1)})},r.reset=function(){r.setState({result:"",operation:""})},r.state={result:"",operation:""},r}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.state.result),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(h,{result:this.state.result}),Object(b.jsx)(j,{buttonClicked:this.buttonClicked})]})}}]),a}(n.a.Component),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,u=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),u(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.9cb0806c.chunk.js.map