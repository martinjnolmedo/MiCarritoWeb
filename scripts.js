console.log("oka");
let productos=[
    {
        codigo:1,
        descripcion:"hueso1",
        nombre:"hueso1",
        imagen:"img/hueso_dibujo.png",
        precio:8001,
    },
    {
        codigo:2,
        descripcion:"hueso2",
        nombre:"hueso2",
        imagen:"img/hueso_dibujo.png",
        precio:8002,
    },
    {
        codigo:3,
        descripcion:"hueso3",
        nombre:"hueso3",
        imagen:"img/hueso_dibujo.png",
        precio:8003,
    },
    {
        codigo:4,
        descripcion:"hueso4",
        nombre:"hueso4",
        imagen:"img/hueso_dibujo.png",
        precio:8004,
    },
    {
        codigo:5,
        descripcion:"hueso5",
        nombre:"hueso5",
        imagen:"img/hueso_dibujo.png",
        precio:8005,
    },
    {
        codigo:6,
        descripcion:"hueso6",
        nombre:"hueso6",
        imagen:"img/hueso_dibujo.png",
        precio:8006,
    },
    {
        codigo:7,
        descripcion:"hueso7",
        nombre:"hueso7",
        imagen:"img/hueso_dibujo.png",
        precio:8007,
    },
    {
        codigo:8,
        descripcion:"hueso8",
        nombre:"hueso8",
        imagen:"img/hueso_dibujo.png",
        precio:8008,
    },
]
let productosHuesos="";
for (let index = 0; index < productos.length; index++) {
    productosHuesos+=`
        <div id="Productos">
            <p class="parrafo-verde">${productos[index].nombre}</p>
            <img src=${productos[index].imagen} alt="Esto es un hueso" width="256" height="147">
            <p class="parrafo-verde">Precio $${productos[index].precio}</p>
            <input type="button" value="Agregar al carrito" id="btnAgregarAlCarrito">
        </div>
    `;    
}
const listaProductos=document.getElementById("listaProductos")
listaProductos.innerHTML=productosHuesos