import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Layout from "./Layout";

document.addEventListener("DOMContentLoaded", () => {
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
      let page = pages[`./pages/${name}.tsx`];
      page.default.layout =
        page.default.layout || ((page) => <Layout children={page} />);
      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
  }).then(() => {});
});
