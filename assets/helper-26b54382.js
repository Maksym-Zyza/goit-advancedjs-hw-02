const h=o=>{const t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),a=Math.floor(o%864e5%36e5/6e4),r=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:a,seconds:r}},u=o=>String(o).padStart(2,"0"),i=()=>`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`;export{u as a,h as c,i as g};
//# sourceMappingURL=helper-26b54382.js.map
