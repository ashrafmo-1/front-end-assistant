// Import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
