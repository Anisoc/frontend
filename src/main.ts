import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import "./main.css";

const app = HMR(App, { target: document.body }, "anisoc");

export default app;
