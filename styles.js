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
    gap: 5px;
  }

  h1 {
    font-family: ${montserrat.style.fontFamily};
    text-align: center;
    margin: 0;
  }

  h2, h3 {
    font-family: ${robotoMedium.style.fontFamily}, 'Roboto', sans-serif;
  }
`;
