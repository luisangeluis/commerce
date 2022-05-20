import { printProducts } from "./ui.js";

const url = 'https://e-commerce-api-academlo.herokuapp.com/api/products';
let editingID = 0;
const containerProducts = document.querySelector('.products-container');
const formEdit = document.querySelector('#form-edit')


const getData = async (pURL) => {

    let data = await axios.get(url);

    if (!data)
        throw new Error('Hay un error');
    else
        return data;
}

const getProducts = async () => {
    getData(url)
        .then(response => {
            let products = response.data;
            // console.log(products);
            printProducts(products, containerProducts);
        })
        .catch(error => {
            console.log(error.message);
        });
}

const createProduct = () => {
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let image = document.querySelector('#image').value;

    // console.log(image);

    const product = {
        name,
        price,
        image
    }


    axios.post("https://e-commerce-api-academlo.herokuapp.com/api/products", product)
        .then(response => {
            console.log(response);
            getProducts();
        }).catch(error => {
            console.log(error);
        })



}

const deleteProduct=(id)=>{
    axios.delete(`${url}/${id}`)
        .then(response=>{
            console.log(response);
            alert('La tarea se eliminó correctamente');
            getProducts();
        })
        .catch(error=>{
            alert('No se pudo eliminar la tarea');
        });
}

const editProduct = (id) => {
    console.log('hola');
    
    axios.get(`${url}/${id}`)
        .then(response=>{
            console.log(response);
            editingID = id;

            // const formEdit = document.querySelector('#form-edit')
            formEdit.querySelector('#name').value = response.data.name;
            formEdit.querySelector('#price').value = response.data.price;
            formEdit.querySelector('#img-edit').src = response.data.image;

        });

}

function updateProduct() {
    const productEdited = {
        name: formEdit.querySelector('#name').value,
        price: formEdit.querySelector('#price').value,
        image: formEdit.querySelector('#image').value
    }

    axios.put(`${url}/${editingID}`, productEdited)
        .then(function (response) {
            alert('Se editó el producto correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo editar el producto');
        })
}

// const addToCart = (id) =>{
    
//     console.log(id);
//    // tome el id del producto cuando de click y llevar al botton de cart como text ocupando local storage y despues
//    //combertirlo de texto a un objeto ocupan JSON.parce / de objeto a texto json.stringify
    
// }



export { getProducts, createProduct, editProduct,updateProduct,deleteProduct};