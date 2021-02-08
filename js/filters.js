/* ------------------------------------------------INICIO DE VARIABLES------------------------------------------------ */

    //va a contener las etiquetas de todos los productos sin repetirse
    const etiquetas = [];

    const filterSection = document.querySelector(".filter-chackboxs");

    const filterButton = document.querySelector("#filter-button");

    const eraseFilterButton = document.querySelector("#quitar-filtros-button");

    let etiquetasFiltradas = [];

/* ------------------------------------------------FIN DE VARIABLES------------------------------------------------ */




/* ------------------------------------------------INICIO DE FUNCIONES DECLARADAS------------------------------------------------ */

    function recogerEtiquetas(){//permite tomar las etiquetas que se encuentran el los objetos de estanteria, sin que se repitan
        estanteria.forEach( producto=>{
            producto.ptInfo.tags.forEach(etiqueta=>{
                if(!etiquetas.includes(etiqueta)){
                    etiquetas.push(etiqueta);
                }
            });
        } )
    }

    function crearFiltro(etiqueta){
        const newFilter = document.createElement("div");
        newFilter.setAttribute("class", "filter-container");

        //creacion de la etiqueta input
        newFilter.appendChild(document.createElement("input"));
        newFilter.children[0].setAttribute("type", "checkbox");
        newFilter.children[0].setAttribute("class", "categoria");
        newFilter.children[0].setAttribute("id", etiqueta);

        //creacion de la etiqueta
        newFilter.appendChild(document.createElement("label"));
        newFilter.children[1].setAttribute("class", "checkbox-label");
        newFilter.children[1].classList.add("icon-ok");
        newFilter.children[1].setAttribute("for", etiqueta);

        //creacion del texto de la etiqueta
        newFilter.appendChild(document.createElement("p"));
        newFilter.children[2].setAttribute("class", "label-text");
        newFilter.children[2].textContent = etiqueta;

        return newFilter;
    }
    
    function ponerEtiquetas(){
        etiquetas.forEach( etiqueta=>{
            filterSection.appendChild(crearFiltro(etiqueta));
        } )
    }

    function filtrarProductos(){
        let bool = true;
        for(let i=0; i<productsSection.children.length; i++){
            for(let j=0; j<estanteria[i].ptInfo.tags.length; j++){
                if(etiquetasFiltradas.includes(estanteria[i].ptInfo.tags[j])){
                    productsSection.children[i].style.display = "block";
                    break;
                }else{
                    productsSection.children[i].style.display = "none";
                }
            }
        }
    }

    function mostrarTodo(){
        for(let i=0; i<productsSection.children.length; i++){
            if(productsSection.children[i].style.display === "none"){
                productsSection.children[i].style.display = "block";
            }
        }
    }

    //se encarga de recolectar los id de las etiquetas selecionados y luego ocultar los productos que no tienen las etiquetas seleccionadas y mostrar los que si lo tienen
    function recolectarOpciones(){
        etiquetasFiltradas = [];
        for(let i=0; i<filterSection.children.length; i++){
            if(filterSection.children[i].children[0].checked){
                etiquetasFiltradas.push(filterSection.children[i].children[0].id);
            }
        }
        console.log(etiquetasFiltradas);
        filtrarProductos();
    }

/* ------------------------------------------------FIN DE FUNCIONES DECLARADAS------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */

    filterButton.addEventListener("click", ()=>{
        recolectarOpciones();
    });


    eraseFilterButton.addEventListener("click", ()=>{
        mostrarTodo();
    });

/* ------------------------------------------------FIN DE FUNCIONES CON EVENTOS------------------------------------------------ */





/* ------------------------------------------------INICIO DE INSTRUCIONES------------------------------------------------ */
    
    recogerEtiquetas();
    ponerEtiquetas();

/* ------------------------------------------------FIN DE INSTRUCIONES------------------------------------------------ */