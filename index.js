import { getProducts,createProduct,editProduct,updateProduct,deleteProduct } from "./crud.js";
window.createProduct = createProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.deleteProduct =deleteProduct;
getProducts();
