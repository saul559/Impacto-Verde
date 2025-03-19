const products = [
    { name: "Carne", co2: 27, img: "https://cdnx.jumpseller.com/la-familia-avilena-envios/image/37105243/resize/140/140?1688356674", flag: "https://flagcdn.com/w40/ar.png" },
    { name: "Pollo", co2: 3.2, img: "https://www.trainerclub.es/wp-content/uploads/12.jpg.webp", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Arroz", co2: 4.5, img: "https://www.gastronomiavasca.net/uploads/image/file/3900/w700_arroz_basmati.jpg", flag: "https://flagcdn.com/w40/in.png" },
    { name: "Pan", co2: 0.75, img: "https://abmauri.es/wp-content/uploads/2020/08/articulo-1-imagen.jpg", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Papas", co2: 0.5, img: "https://agraliajardin.com/wp-content/uploads/2022/02/imagen-portada-patatas-1.jpg", flag: "https://flagcdn.com/w40/nl.png" }
];

const treeAbsorption = 22;
let totalCO2 = 0;
let addedProducts = [];

function updateResults() {
    document.getElementById("totalCO2").innerText = totalCO2.toFixed(2);
    document.getElementById("treesNeeded").innerText = Math.ceil(totalCO2 / treeAbsorption);
    document.getElementById("itemCount").innerText = addedProducts.length;
}

function addProduct(co2) {
    if (addedProducts.length < 10) {
        addedProducts.push(co2);
        totalCO2 += co2;
        updateResults();
    } else {
        alert("Has alcanzado el límite de 10 alimentos.");
    }
}

function undoLastProduct() {
    if (addedProducts.length > 0) {
        totalCO2 -= addedProducts.pop();
        if (totalCO2 < 0) totalCO2 = 0;
        updateResults();
    }
}

function clearAllProducts() {
    addedProducts = [];
    totalCO2 = 0;
    updateResults();
}

const productContainer = document.getElementById("products");
products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = ` 
        <img src="${product.img}" alt="${product.name}" onclick="addProduct(${product.co2})">
        <img src="${product.flag}" alt="Bandera" style="width: 25px; height: 16px; margin-top: 5px;">
    `;
    productContainer.appendChild(div);
});
