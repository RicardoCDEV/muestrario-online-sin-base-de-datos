/* ------------------------------------------------INICIO DE VARIABLES------------------------------------------------ */

//estateria contiene los productos de la pagina
const estanteria = [
    {
        src: "img/testImg/gtr.jpg",
        ptInfo : {
            id: "ptr1",
            nombre: "Guitarra española cadete 3/4 José Ribera HG623",
            precio: 80,
            estado: "Usado",
            tags:["Usado","Instrumentos"],
            descripcion: "Oferta Guitarra clásica medida 3/4 cadete entre 8-10 años aprox. HG623 de Jose Ribera.Tapa de abeto y costados de linden.",
            vendedor: {
                nombre: "Nombre de vendedor",
                tlf: "0000 000 00 00"
            }
        }
    },
    {
        src: "img/testImg/donaB.jpg",
        ptInfo : {
            id: "ptr2",
            nombre: "Doña Bárbara - Rómulo Gallegos",
            precio: 5,
            estado: "Usado",
            tags:["Usado", "Libros Físicos"],
            descripcion: "Doña Bárbara, de Rómulo Gallegos.",
            vendedor: {
                nombre: "Nombre de vendedor",
                tlf: "0000 000 00 00"
            }
        }
    },
    {
        src: "https://http2.mlstatic.com/D_NQ_NP_911204-MLV44692806159_012021-V.webp",
        ptInfo : {
            id: "ptr3",
            nombre: "iPhone 11 Pro 256 Gb",
            precio: 400,
            estado: "Nuevo",
            tags:["Nuevo", "Teléfono"],
            descripcion: "Descripción FAVOR LEER TODA LA DESCRIPCION. El precio estan descritos al lado de cada articulo en REF. *CONTENIDO: *EQUIPO. *VIDRIO TEMPLADO ANTISHOCK. *AURICULARES ORIGINALES. *GARANTIA 6 MESES. *CAJA. *FORRO DE GOMA SENCILLO. *FORRO BALLISTICK ANTISHOCK",
            vendedor: {
                nombre: "Nombre de vendedor",
                tlf: "0000 000 00 00"
            }
        }
    },
    {
        src: "https://http2.mlstatic.com/D_NQ_NP_745112-MLV44755762646_012021-V.webp",
        ptInfo : {
            id: "ptr4",
            nombre: "Celular Motorola G8 Plus 4gb Ram 64gb Rom Dual Sim ",
            precio: 390,
            estado: "Nuevo",
            tags:["Nuevo", "Teléfono"],
            descripcion: "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. Con una pantalla Full HD+ de 6.3 pulgadas, el Moto G8 Plus está potenciado por un procesador Snapdragon 665, acompañado de 4GB de memoria RAM y 64GB de almacenamiento interno expandible. La cámara trasera del Moto G8 Plus es triple, de 48 MP + 16 MP + 5 MP, mientras que su cámara frontal para selfies es de 25 MP. El Moto G8 Plus completa sus características con una batería de 4000 mAh con carga rápida, lector de huellas y corre Android 9.0 Pie. Características Principales: Pantalla: 6.3\", 1080 x 2280 pixels, Procesador: Snapdragon 665 2GHzRAM: 4G, BAlmacenamiento: 64GB, Expansión: microSD, Cámara: Triple, 48MP+16MP+5MP, Batería: 4000 mAh.",
            vendedor: {
                nombre: "Nombre de vendedor",
                tlf: "0000 000 00 00"
            }
        }
    },
    {
        src: "https://http2.mlstatic.com/D_NQ_NP_695352-MLV41875586455_052020-W.webp",
        ptInfo : {
            id: "ptr5",
            nombre: "Laptop Dell Latitude 7400/ Ci7/16gb/512gb /14/negra",
            precio: 2000,
            estado: "Nuevo",
            tags:["Nuevo", "Laptop", "Computadora"],
            descripcion: "Trabaje más rápido: empiece la jornada laboral más rápido con el inicio de sesión a través del lector de huellas dactilares opcional en el botón de encendido o con la cámara de infrarrojos opcional y Windows Hello, para una autenticación sin complicaciones. Trabaje en cualquier lugar: La sintonización de antenas dinámicas permite una cobertura de red global sin necesidad de cambiar piezas y mantiene el portátil pequeño con carcasas de pantalla estrechas. Rendimiento mejorado: incrementa la productividad, la capacidad de gestión y la seguridad de su empresa. Le damos la bienvenida a un diseño más inteligente: el nuevo diseño con ángulos reduce el tamaño en más de un 6 % con respecto la generación Latitude anterior, lo que lo convierte en nuestro portátil comercial de 14\" más pequeño. Trabaje con rapidez y ventilación: la tecnología de ventiladores utiliza un material de polímero de cristal líquido. Esto permite la creación de aspas de ventiladores más delgadas y proporciona un flujo de aire máximo para una experiencia general de refrigeración. Seguridad: Se trata de una opción de pantalla de privacidad dinámica que proporciona una mejor eficiencia energética y relación de contraste para evitar que las personas vean la pantalla.",
            vendedor: {
                nombre: "DELL",
                tlf: "0000 000 00 00"
            }
        }
    },
    {
        src: "https://http2.mlstatic.com/D_NQ_NP_932412-MLV28729000413_112018-O.webp",
        ptInfo : {
            id: "ptr6",
            nombre: "Juego De Sala/ Juego De Recibo/ Sofas Modernos",
            precio: 800,
            estado: "Nuevo",
            tags:["Nuevo", "Muebles", "Hogar"],
            descripcion: "Este es un producto personalizado, mandado a hacer, custom made, fabriqué a le gusté. No está disponible para entrega inmediata, tome sus previsiones antes de pulsar comprar. No oferte por favor pregunte primero y asegúrese de que sea el producto que busca y bajo la forma de entrega y venta, la cual consiste en que usted escoja el modelo, tamaño y color de su preferencia y luego de haber recibido toda la información y estar de acuerdo con abonar la mitad para mandarlo a procesar, es cuando va a pulsar \"comprar \" y el paso siguiente es el abono. ",
            vendedor: {
                nombre: "Nombre de vendedor",
                tlf: "0000 000 00 00"
            }
        }
    },
    
]

    //productsSection es el contenedor de lso productos de la pagina
    const productsSection = document.querySelector(".products-container");

/* ------------------------------------------------FIN DE VARIABLES------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES DECLARADAS------------------------------------------------ */

    //crearInfo  agrega las etiquetas y los atributos de las misma del la informacion del producto que se va a poner dentro del div con .product
    function crearInfo(info,producto){
        info.appendChild(document.createElement("h3"));
        info.children[0].setAttribute("class", "product-name");
        info.children[0].textContent = producto.ptInfo.nombre;

        info.appendChild(document.createElement("h4"));
        info.children[1].setAttribute("class", "product-price");
        info.children[1].textContent = "$" + producto.ptInfo.precio;

        info.appendChild(document.createElement("h4"));
        info.children[2].setAttribute("class", "product-state");
        info.children[2].textContent = producto.ptInfo.estado;
    }

    //crea la etiqueta con .product y todo el contenido de ella para luego ponerla dentro de productSection
    function crearProducto(producto,estante){
        //crea contenedor del producto
        const productDiv = document.createElement("div");
        productDiv.setAttribute("class", "product");
        productDiv.setAttribute("id", producto.ptInfo.id);
    
        //crea como hijo contenedor de imagen del producto
        productDiv.appendChild(document.createElement("div"));
        productDiv.children[0].setAttribute("class", "product-image-container");

        //se crea la etiqueta img
        productDiv.children[0].appendChild(document.createElement("img"));
        productDiv.children[0].children[0].setAttribute("src", producto.src);
        productDiv.children[0].children[0].setAttribute("alt", "");
        productDiv.children[0].children[0].setAttribute("class", "product-image");
        //condiciones para adaptar a la imagen al contenedor dependiendo de su anchura y altura
        if(productDiv.children[0].children[0].height > productDiv.children[0].children[0].width){//si la altura es mayor a la anchura
            productDiv.children[0].children[0].classList.add("case1");
        }else if(productDiv.children[0].children[0].height < productDiv.children[0].children[0].width){//si la altura es menor a la anchira
            
            productDiv.children[0].children[0].classList.add("case2");
        }else{//si la anchura y altura son iguales
            productDiv.children[0].children[0].classList.add("case3");
        }
    
        productDiv.appendChild(document.createElement("div"));
        productDiv.children[1].setAttribute("class", "product-info");
        crearInfo(productDiv.children[1],producto);

        estante.appendChild(productDiv);
    }

    //se encarga de poner los productos dentro de estanteria en la section de productos de la pagina
    estanteria.forEach( (producto)=>{
        crearProducto(producto, productsSection);
    } );

/* ------------------------------------------------FIN DE FUNCIONES DECLARADAS------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */

    

/* ------------------------------------------------FIN DE FUNCIONES CON EVENTOS------------------------------------------------ */