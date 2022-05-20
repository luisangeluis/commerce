import { printProduct } from "./ui.js";

const addToCart = (product) => {
    const carrito = document.querySelector('#main-menu');
    printProduct(product, carrito);
}

const getProduc =async(id) => {
    let product = {};
    axios.get(`https://e-commerce-api-academlo.herokuapp.com/api/products/${id}`)
        .then(response => {
            console.log(response.data);
            // product = response;
            product = response.data

            addToCart(product)

        }).catch(error => {
            console.log(error);

        })
    return product;
}

export { getProduc };