function renderAboutPage() {
    const contentSection = document.querySelector("#content");
    contentSection.replaceChildren();

    document.body.classList.remove("fullBackground");
    const header = document.querySelector('header');
    header.classList.add("background");

    const aboutHeader = document.createElement("div");
    aboutHeader.classList.add("about-header");
    aboutHeader.innerText = "About Tea&Pilaf";
    contentSection.appendChild(aboutHeader);

    const aboutInfo = document.createElement("div");
    aboutInfo.classList.add("about-info");
    aboutInfo.innerText = "Tea and Pilaf is The Best City's premier destination for authentic Central Asian cuisine. " + 
    "Established in 2021, our restaurant brings the rich flavors and warm hospitality of the Silk Road to your table. " +
    "Tea and Pilaf was born from a passion for sharing the tastes of Central Asia with our community. " +
    "Our chefs, trained in the traditional cooking methods of the region, bring authenticity to every dish. " +
    "Step into our restaurant and be transported to a Central Asian chaikhana (tea house), " +
    "with decor featuring handcrafted textiles and ceramics from the region, creating a warm and inviting atmosphere for your dining experience.";
    contentSection.appendChild(aboutInfo);

    const informationSection = document.createElement("div");
    informationSection.classList.add("information-section");

    const contactsInfo = document.createElement("div");
    contactsInfo.classList.add("contacts-info");
    
    const contactsInfoHeader = document.createElement("div");
    contactsInfoHeader.classList.add("contacts-info-header");
    contactsInfoHeader.innerText = "Contact Us";
    contactsInfo.appendChild(contactsInfoHeader);

    const contactsAddress = document.createElement("div");
    contactsAddress.classList.add("contacts-address");
    contactsAddress.innerText = "Address: 123 Silk Road Avenue, The Best City";
    contactsInfo.appendChild(contactsAddress);

    const contactsPhone = document.createElement("div");
    contactsPhone.classList.add("contacts-phone");
    contactsPhone.innerText = "Phone: (555) 123-4567";
    contactsInfo.appendChild(contactsPhone);

    const contactsEmail = document.createElement("div");
    contactsEmail.classList.add("contacts-email");
    contactsEmail.innerText = "Email: info@teaandpilaf.com";
    contactsInfo.appendChild(contactsEmail);

    informationSection.appendChild(contactsInfo);

    const workingHours = document.createElement("div");
    workingHours.classList.add("working-hours");

    const workingHoursHeader = document.createElement("div");
    workingHoursHeader.classList.add("working-hours-header");
    workingHoursHeader.innerText = "Hours of Operation";
    workingHours.appendChild(workingHoursHeader);

    const workingHoursInfo = document.createElement("div");
    workingHoursInfo.classList.add("working-hours-info");
    workingHoursInfo.innerText = `Monday - Thursday: 11:00 AM - 9:00 PM
    Friday - Saturday: 11:00 AM - 10:00 PM
    Sunday: 12:00 PM - 8:00 PM`;
    workingHours.appendChild(workingHoursInfo);

    informationSection.appendChild(workingHours);
    contentSection.appendChild(informationSection);
}

export { renderAboutPage };