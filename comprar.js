import { printProductsToCar, printProduct } from "./ui.js";

const carrito = document.querySelector('#main-menu');
let addedProducts = [];

console.log(addedProducts);

const addToCart = (id) => {
    let product = {};
    axios.get(`https://e-commerce-api-academlo.herokuapp.com/api/products/${id}`)
        .then(response => {
            product = response.data;
            let productAsText = JSON.stringify(product);
            localStorage.setItem(`${product.id}`,productAsText);

            carrito.innerHTML ="";

            for(let i =0; i<localStorage.length;i++){
                let key = localStorage.key(i);

                if(!carrito.querySelector('#key')){
                    let value = JSON.parse(localStorage.getItem(key));
                    console.log(value);
                    printProduct(value,carrito);
                }
            }
           
        }).catch(error => {
            console.log(error);

        })
    return product;
}

const removeToCar = (id) => {
    for(let i =0; i<localStorage.length;i++){

        let key = localStorage.key(i);

        if(id == key){
            localStorage.removeItem(key);
        }
    }

    carrito.innerHTML ='';
    for(let i =0; i<localStorage.length;i++){

        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));

        printProduct(value,carrito);
    }
}


export { addToCart, removeToCar };