import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";

import { Discord, Github } from "./components/Social";

const SITE_ROOT = "https://turbo.build";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {

 
 

    
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
   
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.


    return <>Last updated on {dateString}</>;
  },
  unstable_flexsearch: true,
  
 
  
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const router = useRouter();
    const { systemTheme = "dark" } = useTheme();
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    const asPath = router.asPath;

    let ogUrl;

   
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-${systemTheme}/favicon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-${systemTheme}/favicon.png`}
        />
        <link
          rel="mask-icon"
          href={`/images/favicon-${systemTheme}/favicon.png`}
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href={`/images/favicon-${systemTheme}/favicon.png`}
        />
 
   
       
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },

 
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
