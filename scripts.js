console.log("oka");
let productos=[
    {
        codigo:1,
        descripcion:"Esta es la descripción del primer producto",
        nombre:"Hueso 1",
        imagen:"img/hueso_dibujo.png",
        precio:8001,
    },
    {
        codigo:2,
        descripcion:"Esta es la descripción del segundo producto",
        nombre:"Hueso 2",
        imagen:"img/hueso_dibujo.png",
        precio:8002,
    },
    {
        codigo:3,
        descripcion:"Esta es la descripción del tercer producto",
        nombre:"Hueso 3",
        imagen:"img/hueso_dibujo.png",
        precio:8003,
    },
    {
        codigo:4,
        descripcion:"Esta es la descripción del cuarto producto",
        nombre:"Hueso 4",
        imagen:"img/hueso_dibujo.png",
        precio:8004,
    },
    {
        codigo:5,
        descripcion:"Esta es la descripción del quinto producto",
        nombre:"Hueso 5",
        imagen:"img/hueso_dibujo.png",
        precio:8005,
    },
    {
        codigo:6,
        descripcion:"Esta es la descripción del sexto producto",
        nombre:"Hueso 6",
        imagen:"img/hueso_dibujo.png",
        precio:8006,
    },
    {
        codigo:7,
        descripcion:"Esta es la descripción del séptimo producto",
        nombre:"Hueso 7",
        imagen:"img/hueso_dibujo.png",
        precio:8007,
    },
    {
        codigo:8,
        descripcion:"Esta es la descripción del octavo producto",
        nombre:"Hueso 8",
        imagen:"img/hueso_dibujo.png",
        precio:8008,
    },
]
let productosHuesos="";
for (let index = 0; index < productos.length; index++) {
    productosHuesos+=`
        <div id="Productos">
            <h3 class="parrafo-verde">${productos[index].nombre}</h3>
            <p class="parrafo-verde">${productos[index].descripcion}</p>
            <img src=${productos[index].imagen} alt="Esto es un hueso" width="256" height="147">
            <p class="parrafo-verde">Precio $${productos[index].precio}</p>
            <input type="button" value="  Agregar al carrito  " id="btnAgregarAlCarrito" class="botonAgregarCarrito">
        </div>
    `;    
}
//Ingresar los datos de los productos
const listaProductos=document.getElementById("listaProductos");
listaProductos.innerHTML=productosHuesos;

//Guardar en variables los elementos a modificar
const botonesAgregarAlCarrito=document.querySelectorAll(".botonAgregarCarrito");
const listaCarrito=document.querySelector("#carrito ul");
const totalCarrito=document.querySelector("#carrito h3");
let totalAPagar=0;

//Agregar un listener a los botones
for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
    function agregarElementoAlCarro(){
        const elementoLi=document.createElement("li");
        elementoLi.innerText+=`${productos[i].nombre} $${productos[i].precio}`;
        listaCarrito.appendChild(elementoLi); //es lo mismo que listaCarrito.innerHTML=elementoLi;
        totalAPagar+=productos[i].precio;
        totalCarrito.innerText="Total a pagar: $"+totalAPagar;
    }
    botonesAgregarAlCarrito[i].addEventListener("click",agregarElementoAlCarro);
}

//Agregar el listener al botón borrar
const btnBorrar=document.querySelector("#botonBorrar");
const btnPagar=document.querySelector("#botonPagar");
function borrarCarrito() {
    listaCarrito.innerHTML="";
    totalCarrito.innerText="$0";
}
btnBorrar.addEventListener("click",borrarCarrito);
console.log(totalCarrito);