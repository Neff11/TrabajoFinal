let productos =
 [[0,"Doritos", 15],    
 [1, "Pastel", 24],
 [2,"Paleta",3],
 [3, "Agua", 7], 
 [4 ,"Refresco",10]];

let carrito=[];

window.addEventListener("load", cargar);
function cargar(){

    s=document.querySelector('section');
    for ( i= 0; i < productos.length; i++) {
        
        s.innerHTML += 
        " <div id='"+ productos[i][0] +"'>"+ 
        "<h1>"+ productos[i][1] +"</h1>"+
        "<p>$"+ productos[i][2] +"</p>"+
        "<button onclick='agregar("+ productos[i][0] +")'>+</button>"+
        "</div> ";
    }

}

function agregar(id){
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
}

function mostrarCarrito(){
    listaProductos = document.querySelector('nav');
    for ( i = 0; i < carrito.length; i++) {
        for (let j = 0; j < productos.length; j++) {
            if (productos[j][0]== carrito[i]) {
                listaProductos.innerHTML += " <div id='lista'>"+ 
                "<h1>"+ productos[j][1] +"</h1>"+
                "<h1>$"+ productos[j][2] +"</h1>"+

            "</div> ";
            }            
        }
    }
}

function visibilidad(){
    document.querySelector('nav').classList.toggle("visible");
    document.querySelector('Section').classList.toggle("sn");
    mostrarCarrito();

}