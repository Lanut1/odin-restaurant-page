import { renderAboutPage } from './about-page';

function renderHomePage() {
    const contentSection = document.querySelector("#content");
    contentSection.replaceChildren();

    const mainHeader = document.querySelector("header");
    mainHeader.classList.remove("background");

    document.body.classList.add("fullBackground");

    const infoHeader = document.createElement("div");
    infoHeader.classList.add("info-header");

    const restaurantHeader = document.createElement("div");
    restaurantHeader.classList.add("info-restaurant");
    restaurantHeader.innerText = "Tea and Pilaf";
    infoHeader.appendChild(restaurantHeader);

    const infoButton = document.createElement("button");
    infoButton.classList.add("info-button");
    infoButton.innerText = "Book table";
    infoButton.addEventListener("click", () => renderAboutPage());
    infoHeader.appendChild(infoButton);

    contentSection.appendChild(infoHeader);
}

export { renderHomePage }