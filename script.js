var counter = 0;

function toggleMenu(){
    checkDesktop()

    counter == 0 ? (hideMenu(), counter++) : {}

    var menuList = document.getElementById("menuList");
    
    if(menuList.style.opacity == "0"){
        menuList.style.opacity = "100"
        console.log("toggling menu OPEN")
    }
    else{
        menuList.style.opacity = "0"
        console.log("toggling menu CLOSED")
    }
}

function hideMenu(){
    let element = document.getElementById("menuList")
    element.setAttribute('style', 'opacity: 0;')
}

function checkDesktop(){
    const mq = window.matchMedia( "max-width:700px" );
    mq == false ? (hideMenu(), counter--) : {}
}