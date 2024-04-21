"use strict";exports.id=834,exports.ids=[834],exports.modules={9834:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s(997),d=s(6859),a=s(4298),c=s.n(a);function n(){return(0,r.jsxs)(d.Html,{lang:"en",children:[r.jsx(d.Head,{}),(0,r.jsxs)("body",{children:[r.jsx(c(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}),r.jsx(d.Main,{}),r.jsx(d.NextScript,{})]})]})}}};