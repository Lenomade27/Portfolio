


function view_project(project){
    const element = document.getElementById("acceuil");
    let element2;
    const element3 = document.getElementById("body");
    switch(project){
        case 0:
        element.style.display = "";
        element3.style.backgroundImage = "none";
        break;
        case 11:
        element2 = document.getElementById("strong_box");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/elec1.jpg')";
        break;
        case 12:
        element2 = document.getElementById("escape");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/signal.jpg')";
        break;
        case 13:
        element2 = document.getElementById("fast_furious");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/mecha.jpeg')";
        break;
        case 14:
        element2 = document.getElementById("projet_aqm");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/indus.jpg')";
        break;
        case 15:
        element2 = document.getElementById("data_x");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/bdd.jpg')";
        break;
        case 16:
        element2 = document.getElementById("contain_house");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/btp.jpg')";
        break;
        case 21:
        element2 = document.getElementById("worldwide_weather");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/pixelcut-export.jpeg')";
        break;
        case 22:
        element2 = document.getElementById("poo");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/poo.jpg')";
        break;
        case 23:
        element2 = document.getElementById("reseaux");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/reseaux.jpg')";
        break;
        case 24:
        element2 = document.getElementById("web");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/web.jpg')";
        break;
        case 101:
        element2 = document.getElementById("cesiplayground");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/logo_lions_GS.png')";
        break;
        case 102:
        element2 = document.getElementById("grm");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/gamingrouen.jpg')";
        break;
        case 103:
        element2 = document.getElementById("game_jam");
        element.style.display = "none";
        element2.style.display = "flex";
        element3.style.backgroundImage = "url('Image/Manette.jpg')";
        break;
    }
    
    

}

