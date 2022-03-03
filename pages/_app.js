import "../styles/globals.css";
import { Router } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { wrapper } from "../redux/store";

const progress = new ProgressBar({
  size: 2,
  color: "#658e75",
  delay: 100,
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
