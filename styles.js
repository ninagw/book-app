import { createGlobalStyle } from "styled-components";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const robotoThin = Roboto({ subsets: ["latin"], weight: "100" });
const robotoLight = Roboto({ subsets: ["latin"], weight: "300" });
const robotoRegular = Roboto({ subsets: ["latin"], weight: "400" });
const robotoMedium = Roboto({ subsets: ["latin"], weight: "500" });
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });




export default createGlobalStyle`
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
    font-family: ${robotoLight.style.fontFamily};
    color: var(--text-color);
    background-color: var(--background-color);
    padding: 0 20px;
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
    font-family: ${montserrat.style.fontFamily};
    text-align: center;
    margin: 0;
  }

  h2 {
    font-family: ${robotoMedium.style.fontFamily};
  }

  h3 {
    font-family: ${robotoMedium.style.fontFamily};
  }
`;
