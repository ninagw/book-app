"use strict";exports.id=70,exports.ids=[70],exports.modules={70:(o,r,t)=>{t.r(r),t.d(r,{default:()=>App});var e=t(997),n=t(344),i=t.n(n),c=t(518);let l=c.createGlobalStyle`
:root{
  --background-color: #0D4028;
  --text-color: #D1AF94; 
  --lightgrey-color: #F1F0F0;
  --pink-color: #DDA2B7;
  // --button-text-color: #ffffff;
  // --accent-color: #078080; 
  // --secondary-color: #f45d48;
  --border-radius: 4px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${i().style.fontFamily};
    color: var(--text-color);
    background-color: var(--background-color);
  }

  header {
    padding: 20px 0 20px 0;
    width: 100%;
    // position: sticky;
    // top: 0;
    // z-index: 10;
  }
   
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h1 {
    text-align: center;
    margin: 0;
  }
`;function App({Component:o,pageProps:r}){return(0,e.jsxs)(e.Fragment,{children:[e.jsx(l,{}),e.jsx(o,{...r,books:Object(function(){var o=Error("Cannot find module '../lib/books.json'");throw o.code="MODULE_NOT_FOUND",o}())})]})}!function(){var o=Error("Cannot find module '../lib/books.json'");throw o.code="MODULE_NOT_FOUND",o}()}};