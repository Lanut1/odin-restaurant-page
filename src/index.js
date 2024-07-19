import { renderHomePage } from "./home-page";
import { renderAboutPage } from "./about-page";
import { renderMenuPage } from "./menu-page";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => renderHomePage());

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => renderHomePage());

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", () => renderAboutPage());

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => renderMenuPage());