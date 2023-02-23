import "../styles/globals.css";
import { Html, Head, Main, NextScript } from "next/document";

const RootLayout = ({ children }) => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
      {children}
    </body>
  </Html>
);

export default RootLayout;
