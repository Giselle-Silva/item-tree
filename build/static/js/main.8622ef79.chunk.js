(this["webpackJsonpitem-tree"]=this["webpackJsonpitem-tree"]||[]).push([[0],{29:function(e,c,t){},55:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),o=t(21),i=t.n(o),r=(t(29),t(4)),s=t(10),l=t(11),d=t.n(l),A=t(22),h=t(56),m=t(23),j=t.n(m),b=Object(n.createContext)({}),f=t(1);function u(e){var c=Object(n.useContext)(b).checkBoxMain;return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"item-checkbox",children:Object(f.jsx)(h.a.Group,{controlId:"formBasicCheckbox",children:Object(f.jsx)(h.a.Check,{type:"checkbox",label:e.label,id:e.id,name:e.name,onClick:function(t){e.clickSecondary(c,e.dataSecondary)}})})})})}function x(){var e=Object(n.useState)({}),c=Object(r.a)(e,2),t=c[0],a=c[1],o=Object(n.useContext)(b).setCheckBoxMain;Object(n.useEffect)((function(){(function(){var e=Object(A.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=window.location.href,e.next=3,j.a.get("".concat(c,"/data.json")).then((function(e){a(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(e,c){var t=document.querySelector("#checkbox-secondary"+c),n=document.querySelector("#check-box-main"+e);!0===t.checked?(n.checked=!0,n.indeterminate=!0):(n.checked=!1,n.indeterminate=!1)};return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:"listGroup",children:Object.keys(t).map((function(e,c){return Object(f.jsxs)("li",{className:"travelcompany-input",children:[Object(f.jsx)("div",{className:"item-checkbox",children:Object(f.jsxs)("div",{className:"checkbox-main",id:"checkbox-main"+c,children:[Object(f.jsx)(h.a.Group,{controlId:"formBasicCheckbox",children:Object(f.jsx)(h.a.Check,{type:"checkbox",id:"check-box-main"+c,name:"check-box-main"+c,label:t[e].name,value:"0",onClick:function(e){!function(e){var c=document.querySelectorAll(".list-secondary"+e+' li input[type="checkbox"]'),t=document.querySelector("#check-box-main"+e);if(!0===t.checked||!0===t.indeterminate){var n,a=Object(s.a)(c);try{for(a.s();!(n=a.n()).done;)n.value.checked=c.checked=!0}catch(r){a.e(r)}finally{a.f()}}else{var o,i=Object(s.a)(c);try{for(i.s();!(o=i.n()).done;)o.value.checked=c.checked=!1}catch(r){i.e(r)}finally{i.f()}}}(c)}})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAkhJREFUeJzt1r9PE2Ecx/H394HBoiw9jAsOprILMmGigz03KxoXf8W0V4KK/g1N/wQTQPzVRE1cjKNhEAYWR4u/BmMKMTjXxEQPhz6PA5QUPY3C3TH4fW1P0vu0n0/umgOllFJKKaWUUkoppZRSSqkt8Aql3mw+OJNUftYvn9177NqeODNNXEFeodTLVzcrwlPPD8bjyt3I98sTgnvS6v7+LM4RYhvAhVLGmCPrx5m+fGksrmzveHAV3CSAGI62uleLcWXHNkBzpP+mg5n22YncyfrFYLu5nh+MY5hun611U8352uR2c9u64gpiYcGFlwqzmZUv+wSGAQQ5mTk4uBI26vWtRPblS2OI3G6frXVTn+drNwAX06+OcQCIGkEEKWRygx/Dpfriv0Rl/WKAmLvtcxLlIe4B4HcjnMocOLQcLi+++puIbD4oisg9QACcYzqJ8pDEABA9gshoT26oES7VX//p0qwfXBahRkf55tz96yRQHpIaACJHwNrRnoGhRtiov4m6xPODiwIPSKk8JDkA/DqCiGDd6O7c8IdvSy/fdn7UO1G6gHUPETGQTnlIegCIHsHZ07sGDr9fbdTfAfTly+ew9hHGrJXH3WrO1RIvD+u3WioqFZN98WlK4AoAlpYVex5jxLTs403ln9cmSKE8pDkARI4AgFm7E9Muv/bVaapWbXOkf2LjjdHQtan8yP5UbvtOyf8H/CzijXGjfLVq0/456T4CndYfB3Bup8rvvErFUKmk+xgqpZRSSimllFJKKaWUUv+vH5n+/2x+Su3jAAAAAElFTkSuQmCC",alt:"seta",className:"icon-arrow iconarrow"+c+" close-arrow",onClick:function(e){!function(e){var c=document.querySelector(".iconarrow"+e),t=document.querySelector(".list-secondary"+e);c.classList.contains("open-arrow")?(c.classList.remove("open-arrow"),c.classList.add("close-arrow")):(c.classList.remove("close-arrow"),c.classList.add("open-arrow")),t.classList.contains("open-list")?(t.classList.remove("open-list"),t.classList.add("close-list"),o("")):(t.classList.remove("close-list"),t.classList.add("open-list"),o(e))}(c)}})})]})}),Object(f.jsx)("ul",{className:"list-secondary"+c+" listSecondary close-list",children:Object.keys(t[e].children).map((function(c,n){return Object(f.jsx)("li",{className:"travelcompany-input checkbox-secondary",children:Object(f.jsx)(u,{label:t[e].children[c].name,name:"checkbox-secondary"+n,id:"checkbox-secondary"+n,dataSecondary:n,clickSecondary:i})},n)}))})]},c)}))})})}function O(){var e=Object(n.useState)(),c=Object(r.a)(e,2),t=c[0],a=c[1];return Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("h1",{className:"logo",children:Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"Logotipo Hiplataform"})}),Object(f.jsx)(b.Provider,{value:{checkBoxMain:t,setCheckBoxMain:a},children:Object(f.jsx)(x,{})})]})}function k(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(O,{})})}t(54);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8622ef79.chunk.js.map