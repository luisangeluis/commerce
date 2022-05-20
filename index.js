import { getProducts,createProduct,editProduct,updateProduct,deleteProduct} from "./crud.js";
import { addToCart,removeToCar } from "./comprar.js";

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show')
});




window.createProduct = createProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.deleteProduct =deleteProduct;
window.addToCart = addToCart;
window.removeToCar = removeToCar;

getProducts();
