/* ------------------------------------------------INICIO DE VARIABLES------------------------------------------------ */

    const cotizationLabel = document.querySelector(".cotization-label");
    
    const twitterSpan = document.querySelector(".twitter-span");

    const background = document.querySelector(".background");
    
    const background2 = document.querySelector(".background2");

    const navbarButton = document.querySelector(".icon-menu");

    const navbar = document.querySelector("nav");

/* ------------------------------------------------FIN DE VARIABLES------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES DECLARADAS------------------------------------------------ */

    

/* ------------------------------------------------FIN DE FUNCIONES DECLARADAS------------------------------------------------ */





/* ------------------------------------------------INICIO DE FUNCIONES CON EVENTOS------------------------------------------------ */

    cotizationLabel.addEventListener("click", ()=>{
        background.style.display = "block";
        twitterSpan.style.transform = "translateY(0%)";
    })

    background.addEventListener("click", ()=>{
        twitterSpan.style.transform = "translateY(-200%)";
        background.style.display = "none";
    })

    navbarButton.addEventListener("click", ()=>{
        if(navbar.style.transform === "translateX(-100%)"){
            background2.style.display = "block";
            navbar.style.transform = "translateX(0%)";
        }else{
            background2.style.display = "none";
            navbar.style.transform = "translateX(-100%)";
        }
    })

    background2.addEventListener("click", ()=>{
        navbar.style.transform = "translateX(-100%)";
        background2.style.display = "none";
    })

/* ------------------------------------------------FIN DE FUNCIONES CON EVENTOS------------------------------------------------ */