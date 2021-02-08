/* ------------------------------------------------INICIO DE FUNCIONES DECLARADAS------------------------------------------------ */

    //pone el contenido dentro de la etiqueta con la clase .product-selected-section
    function productoSeleccionado(id,selectedPSet){//pone el contenido dentro de la etiqueta con la clase .product-selected-section
    
        const product = estanteria.find(producto=>producto.ptInfo.id === id);//busca en estanteria al producto que tiene el mismo id que el que fue presionado
    
        const selProductDiv = selectedPSet.children[0].children[0];console.log("otro id: " +product.ptInfo.id)

        selProductDiv.children[1].children[0].children[0].src = product.src;
        if(selProductDiv.children[1].children[0].children[0].height > selProductDiv.children[1].children[0].children[0].width){//acomoda la imagen dependiendo de sus dimenciones en su contenedor
            selProductDiv.children[1].children[0].children[0].classList.add("case1");
            selProductDiv.children[1].children[0].children[0].classList.remove("case2");
            selProductDiv.children[1].children[0].children[0].classList.remove("case3");
        }else if(selProductDiv.children[1].children[0].children[0].height < selProductDiv.children[1].children[0].children[0].width){
            selProductDiv.children[1].children[0].children[0].classList.add("case2");
            selProductDiv.children[1].children[0].children[0].classList.remove("case1");
            selProductDiv.children[1].children[0].children[0].classList.remove("case3");
        }else{
            selProductDiv.children[1].children[0].children[0].classList.add("case3");
            selProductDiv.children[1].children[0].children[0].classList.remove("case1");
            selProductDiv.children[1].children[0].children[0].classList.remove("case2");
        }
        //se pone la informacion del producto seleccionado
        selProductDiv.children[1].children[1].children[0].textContent = product.ptInfo.nombre;
        selProductDiv.children[1].children[1].children[1].textContent = "$" + product.ptInfo.precio;
        selProductDiv.children[1].children[1].children[2].textContent = product.ptInfo.estado;
        selProductDiv.children[1].children[1].children[3].textContent = `Vendedor(a): ${product.ptInfo.vendedor.nombre} (${product.ptInfo.vendedor.tlf})`;

        selProductDiv.children[2].children[0].children[0].textContent = product.ptInfo.descripcion;

        selProductDiv.children[2].children[1].children[0].setAttribute("for", product.ptInfo.id);
        selProductDiv.children[2].children[1].children[0].children[1].id = product.ptInfo.id;

        
        selectedProduct.style.display = "block";
    }

/* ------------------------------------------------FIN DE FUNCIONES DECLARADAS------------------------------------------------ */





/* ------------------------------------------------INICIO DE VARIABLES------------------------------------------------ */

    let products = document.querySelectorAll('.product');

    const addButton = document.querySelector(".add-button-label");

/* ------------------------------------------------FIN DE VARIABLES------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */

    addButton.addEventListener("click", ()=>addProduct(selectedProduct.children[0].children[0].children[2].children[1].children[0].children[1].id));

    //activa la seccion de producto seleccionado y pone la informacion del producto selecionado en el section de producto seleccionado
    products.forEach((producto)=> {producto.addEventListener("click", ()=>{
        document.body.style.overflow = "hidden";
        productoSeleccionado(producto.id, selectedProduct);
    })});

    //desactiva el section de producto seleccionado cuando se le da al boton X o cuando se cliquea fuera del section de producto seleccionado
    selectedProduct.children[0].addEventListener("click", (evento)=>{
        if(evento.target.id==="close" || evento.target===selectedProduct.children[0]){
            selectedProduct.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    });
/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */