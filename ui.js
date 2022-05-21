function printProducts(products, container) {

    let html = '';
    products.forEach(product => {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <img src="${product.image}" class="img-fluid">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <div class="text-end">
                                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary" onclick="editProduct(${product.id})">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button class="btn btn-success" onclick="addToCart(${product.id})">
                                    <i class="fa-solid fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    });

    container.innerHTML = html;
}

//Imprime de manera individual un producto en carrito
function printProduct(product, container) {
    let html = '';
    html += `<div class="col-md-6 col-lg-4 mt-3" id="${product.id}">
                    <div class="card">
                        <img src="${product.image}" class="img-fluid">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <div class="text-center">
                                <button class="btn btn-danger" onclick="removeToCar(${product.id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`


    container.innerHTML += html;
}

function printProductsToCar(products, container) {
    let html = '';
    products.forEach(product => {
        html = `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <img src="${product.image}" class="img-fluid">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <div class="text-center">
                                <button class="btn btn-danger" onclick="removeToCar(${product.id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                </div>
                        </div>
                    </div>
                </div>`
    });

    container.innerHTML = html;
}

export { printProducts, printProduct,printProductsToCar }