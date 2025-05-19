import { createGlobalStyle } from "styled-components";
import { Montserrat, Roboto, Roboto_Flex } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const robotoThin = Roboto({ subsets: ["latin"], weight: "100" });
const robotoLight = Roboto({ subsets: ["latin"], weight: "300" });
const robotoRegular = Roboto({ subsets: ["latin"], weight: "400" });
const robotoMedium = Roboto({ subsets: ["latin"], weight: "500" });
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });
// const roboto = Roboto_Flex({subsets: ["latin"], weight ? "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "1000" | "variable",});



export default createGlobalStyle`
:root{
  --background-color: #0D4028; // Dark Green
  --text-color: #D1AF94; // BEIGE
  --lightgrey-color: #F1F0F0; // LIGHTGREY
  --pink-color: #DDA2B7; // POWDER PINK
  --button-text-color: #ffffff; // WHITE
  // --accent-color: #078080; 
  // --secondary-color: #f45d48;
  --border-radius: 4px;

  --font-size-h1: 32px;
  --font-weight-h1: 700;
  --line-height-h1: 45px;
  --font-size-h2: 28px;
  --font-weight-h2: 700;
  --line-height-h2: 40px;
  --font-size-h3: 22px;
  --font-weight-h3: 500;
  --line-height-h3: 30px;
  --font-size-h4: 18px;
  --font-weight-h4: 400;
  --line-height-h4: 24px;
  --font-size-copy: 18px;
  --font-weight-copy: 300;
  --line-height-copy: 24px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${robotoLight.style.fontFamily}, 'Roboto', sans-serif;
    // font-family: ${roboto.style.fontFamily};
    // font-variation-settings: "wght" 300; /* Beispiel für Variationsachsen */ 
    color: var(--text-color);
    background-color: var(--background-color);
    
    
  }

  header {
    width: 100%;
    // position: sticky;
    // top: 0;    padding: 0 20px;
    // z-index: 10;
  }
   
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 5px;
  }

  h1 {
    font-family: ${montserrat.style.fontFamily};
    text-align: center;
    margin: 0;
  }

  h2 {
    font-family: ${robotoMedium.style.fontFamily}, 'Roboto', sans-serif;
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-h2);
  }
  
  h3 {
    font-family: ${robotoMedium.style.fontFamily}, 'Roboto', sans-serif;
    font-size: var(--font-size-h3);
    font-weight: var(--font-weight-h3);
  }

  h4 {
    font-family: ${robotoMedium.style.fontFamily}, 'Roboto', sans-serif;
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-h4);
  }

  p {
    font-weight: var(--font-weight-copy);
    font-size: var(--font-size-copy);
  }
`;
