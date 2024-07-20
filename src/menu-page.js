import myMeatImage from './images/meat.jpg';
import myPlovImage from './images/plov.jpg';
import myTeaImage from './images/tea.jpg';

function createDish(dish, container) {
    const dishInfo = document.createElement("div");
    dishInfo.classList.add("dish-info");

    const dishName = document.createElement("div");
    dishName.classList.add("dish-name");
    dishName.innerText = dish[0];
    dishInfo.appendChild(dishName);

    const dishDescription = document.createElement("div");
    dishDescription.classList.add("dish-description");
    dishDescription.innerText = dish[1];
    dishInfo.appendChild(dishDescription);

    container.appendChild(dishInfo);
}

function createSection(array, image, contentSection) {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    
    const sectionImage = document.createElement("img");
    sectionImage.src = image;
    imageContainer.appendChild(sectionImage);
    section.appendChild(imageContainer);

    const sectionDishes = document.createElement("div");
    sectionDishes.classList.add("section-dishes");
    array.forEach((dish) => createDish(dish, sectionDishes));
    section.appendChild(sectionDishes);
    contentSection.appendChild(section);
}

function renderMenuPage() {
    const contentSection = document.querySelector("#content");
    contentSection.replaceChildren();

    document.body.classList.remove("fullBackground");
    const header = document.querySelector('header');
    header.classList.add("background");

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    menuHeader.innerText = "Menu";
    contentSection.appendChild(menuHeader);

    const meatDishesArray = [
        ["Shashlik - $18.99", "Marinated lamb chunks grilled on skewers, served with grilled vegetables and sumac onions"],
        ["Lyulya Kebab - $16.99", "Spiced ground beef and lamb kebabs, served with lavash bread and garlic yogurt sauce"],
        ["Kabob Shishlik - $17.99", "Tender chunks of beef marinated in onions and spices, grilled to perfection"]
    ];

    createSection(meatDishesArray, myMeatImage, contentSection);

    const plovDishesArray = [
        ["Classic Oshi Palov - $15.99", "Fragrant rice cooked with tender lamb, carrots, and chickpeas, topped with barberries"],
        ["Qurutob - $14.99", "A unique dish with flatbread pieces mixed with onions, tomatoes, and yogurt sauce"],
        ["Sabzi Palov - $13.99", "Rice cooked with tender beef and a generous amount of carrots, flavored with cumin"]
    ];

    createSection(plovDishesArray, myPlovImage, contentSection);

    const teaDishesArray = [
        ["Shir Choy - $3.99", "A comforting tea made with black tea, milk, salt, and sometimes butter"],
        ["Kuk Choy - $3.99", "Refreshing green tea often served with lemon or mint"],
        ["Choykhona Style Tea - $4.99", "Traditional black tea served in a piala, accompanied by dried fruits and nuts"]
    ];

    createSection(teaDishesArray, myTeaImage, contentSection);
}

export { renderMenuPage };