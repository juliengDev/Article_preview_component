import "../css/style.css";
import "../src/home";

const btnShareEl = document.querySelector<HTMLButtonElement>(".btn__share");
const socialLinksEl = document.querySelector<HTMLDivElement>(".social");

btnShareEl?.addEventListener("click", () => {
  if (socialLinksEl) socialLinksEl.classList.toggle("social-visible");
});
