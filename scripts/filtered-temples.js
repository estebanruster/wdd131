const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const subtitle = document.querySelector("#subtitle");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Querétaro Mexico",
        location: "Querétaro, Mexico",
        dedicated: "Under construction",
        area: 27500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/queretaro-mexico-temple/queretaro-mexico-temple-23845.jpg",
    },
    {
        templeName: "Torreón Mexico",
        location: "Durango, Mexico",
        dedicated: "Under construction",
        area: 10000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/torreon-mexico-temple/torreon-mexico-temple-22103.jpg",
    },
    {
        templeName: "Oaxaca Mexico",
        location: "Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oaxaca-mexico-temple/oaxaca-mexico-temple-41776.jpg",
    },
];

function templeTemplate(temple) {
    return `<section>
            <h3>${temple.templeName}</h3>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Location:</th>
                        <td>${temple.location}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dedicated:</th>
                        <td>${temple.dedicated}</td>
                    </tr>
                    <tr>
                        <th scope="row">Size:</th>
                        <td>${temple.area} sq ft</td>
                    </tr>
                </tbody>
            </table>
            <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
            </section>`;
}

function renderTemples(temples) {
    const html = temples.map(templeTemplate);
    document.querySelector("div").innerHTML = html.join("");
}

const oldTemples = document.querySelector("#old");
oldTemples.addEventListener("click", () => {
    renderTemples(temples.filter(temple => temple.dedicated.charAt(1) < 9 && temple.dedicated.charAt(0) == 1));
    subtitle.textContent = "Old";
});

const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
    renderTemples(temples.filter(temple => temple.dedicated.charAt(0) == 2));
    subtitle.textContent = "New";
});

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
    renderTemples(temples.filter(temple => temple.area < 10000));
    subtitle.textContent = "Small";
});

const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
    renderTemples(temples.filter(temple => temple.area > 90000));
    subtitle.textContent = "Large";
});

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    renderTemples(temples);
    subtitle.textContent = "Home";
});
renderTemples(temples);