import "../styles/globals.css";
import { Router } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { wrapper } from "../redux/store";

import { AnimatePresence, motion } from "framer-motion";

const progress = new ProgressBar({
  size: 2,
  color: "#658e75",
  delay: 100,
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default wrapper.withRedux(MyApp);
