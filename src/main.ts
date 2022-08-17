import "./index.css";
import Welcome from "./components/Welcome";

const app = document.querySelector<HTMLElement>("#app");

app!.innerHTML = `${Welcome}`;
