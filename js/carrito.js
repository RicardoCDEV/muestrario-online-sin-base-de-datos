const carritoProducts = document.querySelector(".carrito-products");
const carritoContentSection = document.querySelector(".carrito-content-section");
const carritoIcon = document.querySelector(".carrito-icon");
const selectedProduct = document.querySelector(".product-selected-section");
const totalText = document.querySelector(".total-text");
let productsInCarrito = []; // Productos en carrito

const texto = document.createElement("p");
texto.setAttribute("class", "none-product");
texto.textContent = "No tienes productos agragados.";
carritoProducts.appendChild(texto);
cargarProductosACarrito();


/* ------------------------------------------------INICIO DE FUNCIONES DECLARADAS------------------------------------------------ */

    function cargarProductosACarrito(){
        const myProducts = JSON.parse(localStorage.getItem("productosEnCarrito"));
        myProducts.forEach(producto=>checkProduct(producto.id, producto.cant));
    }

    function guardarEnMemoria(){
        localStorage.setItem("productosEnCarrito", JSON.stringify(productsInCarrito));
        console.log(JSON.parse(localStorage.getItem("productosEnCarrito")));
    }

    function actualizarTotal(){
        guardarEnMemoria();
        totalText.textContent = "Total: $"+productsInCarrito.reduce((total, producto)=>total+producto.cant*producto.precio, 0);
    }

    //crea todo el contenido html del producto y lo pone en el carrito
    function crearHtmlInCarrito(nuevoProducto){
        
        if(carritoProducts.firstElementChild!==null && carritoProducts.firstElementChild.classList.contains("none-product")){
            carritoProducts.firstElementChild.remove();
        }
        
        const {src, nombre, precio, id, cant} = nuevoProducto;
        
        const newProductInCarrito = document.createElement("tr");

        newProductInCarrito.addEventListener("click", evento=> {
            if(!evento.target.classList.contains("product-erase-buttom")){
                productoSeleccionado(id, selectedProduct);
            }
        });
        
        newProductInCarrito.setAttribute("class", "carrito-info-row");
        newProductInCarrito.setAttribute("id", id);

        newProductInCarrito.appendChild(document.createElement("th"));
        newProductInCarrito.children[0].setAttribute("class", "carrito-info-colum");
        newProductInCarrito.children[0].appendChild(document.createElement("img"));
        newProductInCarrito.children[0].children[0].setAttribute("class", "product-img-carrito");
        newProductInCarrito.children[0].children[0].setAttribute("src", src);

        newProductInCarrito.appendChild(document.createElement("th"));
        newProductInCarrito.children[1].setAttribute("class", "carrito-info-colum");
        newProductInCarrito.children[1].appendChild(document.createElement("h3"));
        newProductInCarrito.children[1].children[0].setAttribute("class", "product-name-carrito");
        newProductInCarrito.children[1].children[0].textContent = nombre;

        newProductInCarrito.appendChild(document.createElement("th"));
        newProductInCarrito.children[2].setAttribute("class", "carrito-info-colum");
        newProductInCarrito.children[2].appendChild(document.createElement("p"));
        newProductInCarrito.children[2].children[0].setAttribute("class", "product-price-carrito");
        newProductInCarrito.children[2].children[0].textContent = `$${precio}`;

        newProductInCarrito.appendChild(document.createElement("th"));
        newProductInCarrito.children[3].setAttribute("class", "carrito-info-colum");
        newProductInCarrito.children[3].appendChild(document.createElement("p"));
        newProductInCarrito.children[3].children[0].setAttribute("class", "product-cant-carrito");
        newProductInCarrito.children[3].children[0].textContent = `${cant}`;

        newProductInCarrito.appendChild(document.createElement("th"));
        newProductInCarrito.children[4].addEventListener("click", evento=>{//evento para que cuando se presione el boton de borrar el producto ejecute deleteProductOfCarrito
            evento.stopPropagation();
            if(evento.target.classList.contains("product-erase-buttom")){
                deleteProductOfCarrito(evento.target.parentElement.id);
            }else if(evento.target.classList.contains("product-erase-buttom-text")){
                deleteProductOfCarrito(evento.target.parentElement.parentElement.id);
            }
        })
        newProductInCarrito.children[4].setAttribute("class", "carrito-info-colum product-erase-buttom");
        newProductInCarrito.children[4].appendChild(document.createElement("p"));
        newProductInCarrito.children[4].children[0].setAttribute("class", "product-erase-buttom-text");
        newProductInCarrito.children[4].children[0].textContent = "X";

        carritoProducts.appendChild(newProductInCarrito);
    }


    //revisa si el producto ya habia sido agragado al producto
    function checkProduct(elProductoId,canti){
        if(!productsInCarrito.some(producto => producto.id===elProductoId)){
            const {src, ptInfo:{nombre, precio, id}} = estanteria.find(producto=>producto.ptInfo.id === elProductoId);
            nuevoProducto = {src, nombre, precio, id, cant:canti};
            productsInCarrito = [...productsInCarrito,nuevoProducto];
            crearHtmlInCarrito(nuevoProducto);
            actualizarTotal();
        }else{
            const index = productsInCarrito.findIndex(producto => producto.id===elProductoId);
            productsInCarrito[index].cant++;//aumenta la cantidad de productos con el mismo id
            for(let i=0; i<productsInCarrito.length; i++){
                if(productsInCarrito[index].id === carritoProducts.children[i].id){
                    carritoProducts.children[i].children[3].children[0].textContent = productsInCarrito[index].cant;
                    break;
                }
            }
            actualizarTotal();
        }
    }


    //pone el contenido dentro de la etiqueta con la clase .product-selected-section
    function addProduct(elProductoId){
        checkProduct(elProductoId, 1);
    }


    //elimina un producto del carrito
    function deleteProductOfCarrito(id){
        for(let i=0; i<carritoProducts.children.length; i++){
            if(carritoProducts.children[i].id===id){
                const index = productsInCarrito.findIndex(producto=>producto.id===id);
                if(productsInCarrito[index].cant>1){
                    productsInCarrito[index].cant--;
                    carritoProducts.children[i].children[3].children[0].textContent = productsInCarrito[index].cant;
                }else{
                    carritoProducts.children[i].remove();
                    productsInCarrito = productsInCarrito.filter(producto=>producto.id!=id);
                    if(carritoProducts.firstElementChild === null){
                        const texto = document.createElement("p");
                        texto.setAttribute("class", "none-product");
                        texto.textContent = "No tienes productos agregados.";
                        carritoProducts.appendChild(texto);
                    }
                }
                actualizarTotal();
                break;
            }
        }
    }

/* ------------------------------------------------FIN DE FUNCIONES DECLARADAS------------------------------------------------ */


/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */

    carritoContentSection.addEventListener("click", (evento)=>{
        if(evento.target.id==="close" || evento.target.id==="background-carrito"){
            carritoContentSection.style.display = "none";
        }
    })

    carritoIcon.addEventListener("click", ()=>carritoContentSection.style.display = "block");

    

/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */