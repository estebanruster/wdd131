const hamButton2 = document.querySelector("#menuCatalogue");
const navigation2 = document.querySelector("#nav2");
const subtitle = document.querySelector("#subtitle");
const all = document.querySelector("#all");
const shirts = document.querySelector("#shirts");
const agendas = document.querySelector("#notebooksAgendas");
const thermos = document.querySelector("#thermos");

const products = [
    {
        productType: "Shirt",
        description: "Adult Size",
        size: "s, m, l, xl",
        colors: "Black, White, Red",
        price: "$270 MXN",
        image: "images/1.webp"
    },
    {
        productType: "Shirt",
        description: "Child Size",
        size: "4, 6, 8, 10, 12",
        colors: "Black, White, Red",
        price: "$250 MXN",
        image: "images/2.webp"
    },
    {
        productType: "Thermo",
        description: "Thermo with handle",
        size: "40 oz",
        colors: "Black, White, Blue, Pink",
        price: "$650 MXN",
        image: "images/3.webp"
    },
    {
        productType: "Thermo",
        description: "Digital thermo",
        size: "20 oz",
        colors: "Black, White, Blue, Green",
        price: "$300 MXN",
        image: "images/4.webp"
    },
    {
        productType: "Agenda",
        description: "Daily agenda",
        size: "Half letter, A5",
        colors: "Personalized",
        price: "$400 MXN",
        image: "images/5.webp"
    },
    {
        productType: "Notebook",
        description: "100 pages notebook",
        size: "A6",
        colors: "Personalized",
        price: "$120 MXN",
        image: "images/6.webp"
    },
];

hamButton2.addEventListener("click", () => {
    navigation2.classList.toggle("open");
    hamButton2.classList.toggle("open");
});

function productTemplate(product) {
    return `<section class="template">
            <h4>${product.productType}</h4>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Description:</th>
                        <td>${product.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">Colors:</th>
                        <td>${product.colors}</td>
                    </tr>
                    <tr>
                        <th scope="row">Size:</th>
                        <td>${product.size}</td>
                    </tr>
                    <tr>
                        <th scope="row">Price:</th>
                        <td>${product.price}</td>
                    </tr>
                </tbody>
            </table>
            <img loading="lazy" src="${product.image}" alt="${product.description}">
            </section>`;
}

function renderCatalogue(products) {
    const html = products.map(productTemplate);
    document.querySelector("#products").innerHTML = html.join("");
}

all.addEventListener("click", () => {
    subtitle.textContent = "All";
    renderCatalogue(products);
});

shirts.addEventListener("click", () => {
    subtitle.textContent = "Shirts";
    renderCatalogue(products.filter(product => product.productType === "Shirt"));
});

agendas.addEventListener("click", () => {
    subtitle.textContent = "Notebooks and Agendas";
    renderCatalogue(products.filter(product => product.productType === "Agenda" || product.productType === "Notebook"));
});

thermos.addEventListener("click", () => {
    subtitle.textContent = "Thermos";
    renderCatalogue(products.filter(product => product.productType === "Thermo"));
});

renderCatalogue(products)

