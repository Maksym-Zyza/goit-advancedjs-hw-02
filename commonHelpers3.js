import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-32231325.js";const u=document.querySelector(".form");u.addEventListener("submit",p);const c=(e,t)=>new Promise((a,o)=>{setTimeout(()=>{Math.random()>.3?a({position:e,delay:t}):o({position:e,delay:t})},t)});function p(e){e.preventDefault();const{delay:t,step:a,amount:o}=e.target.elements,s={delay:Number(t.value),step:Number(a.value),amount:Number(o.value)};console.log(s),s.delay>=0&&s.step>=0&&s.amount>0?(d(s.delay,s.step,s.amount),u.reset()):r("❗️ All values must be positive","#fa903e")}function d(e,t,a){setTimeout(()=>{for(let o=0;o<a;o++){const s=o===0?0:t*o;c(o,s).then(({position:m,delay:i})=>{const n=`✅ Fulfilled promise ${m} in ${i}ms`;r(n,"#9ae39c")}).catch(({position:m,delay:i})=>{const n=`❌ Rejected promise ${m} in ${i}ms`;r(n,"#e39c9a")})}},e)}function r(e,t){l.show({message:e,drag:!0,close:!1,timeout:7e3,position:"topRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:t})}
//# sourceMappingURL=commonHelpers3.js.map
