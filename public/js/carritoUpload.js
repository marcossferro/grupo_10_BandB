let url = window.location.href;
const boton_carrito = document.getElementById("boton_carrito");
const boton_comprar = document.getElementById("boton_comprar");
const producto_precio = document.getElementById("producto_precio");
const producto_nombre = document.querySelector(".tituloProducto");
const producto_detalle = document.querySelector(".detalleProducto");
const producto_img = document.querySelector(".imagenProducto");
const producto_cantidad = document.getElementById("producto_cantidad");
const producto_id = url.slice(url.lastIndexOf('/')+1);
let pepe = producto_precio.outerText.slice(producto_precio.outerText.indexOf('$ ')+2)
console.log(pepe);

function addProduct(){
    let carrito = JSON.parse(sessionStorage.getItem('cart')) || []; // Si existe, trae el array, sino crea uno vacio
    let imagen = producto_img.src.slice(producto_img.src.indexOf('imgProducts/')+12);
    let productoAgregado = { 
        productoId: producto_id,
        nombre: producto_nombre.outerText,
        img: imagen,
        precio: parseInt(producto_precio.outerText.slice(producto_precio.outerText.indexOf('$ ')+2)),
        cantidad: parseInt(producto_cantidad.value)
     }
    if(producto_cantidad.value == ''){
        alert('Tenes que agregar la cantidad');
    }else if(!sessionStorage.getItem('cart')){ // Si el carrito no existe, lo creo
        carrito.push(productoAgregado);
        sessionStorage.setItem('cart', JSON.stringify(carrito));
        // HASTA ACA OK

    }else{ // Si el carrito existe, chequeo si existe el producto
        /* Si el producto existe dentro de Session:
            1- Filtra todos los productos que coincidar con el ID indicado (deberia ser solo 1)
            2- Crea un nuevo objeto del producto en cuestion, pero le suma la cantidad indicada a la existente
            3- Crea un nuevo array con los objetos que no coincidan con el ID indicado, para no perder los datos existentes
            4- Pushea los nuevos datos del ID indicado al Nuevo array
            5- Reemplaza la session "Cart", por la nueva.
        */
        if(JSON.parse(sessionStorage.getItem('cart')).filter(e => e.productoId == producto_id) != ''){
            let carritoFiltrado = carrito.filter(e => e.productoId == producto_id); // 1
            let cambioProducto = { // 2
                productoId: producto_id,
                nombre: producto_nombre.outerText,
                img: imagen,
                precio: parseInt(producto_precio.outerText.slice(producto_precio.outerText.indexOf('$ ')+2)),
                cantidad: carritoFiltrado[0].cantidad = carritoFiltrado[0].cantidad + parseInt(producto_cantidad.value)
            }; 
            let nuevoCarrito = carrito.filter(e => e.productoId != producto_id); // 3
            nuevoCarrito.push(cambioProducto); // 4
            sessionStorage.setItem('cart', JSON.stringify(nuevoCarrito)); // 5

        }else{
            carrito.push(productoAgregado);
            sessionStorage.setItem('cart', JSON.stringify(carrito));
        }
    };
}
        
//     function mostrarDatos(){
//         var carritoProducto = [];
//         for(let i=0 ; i<sessionStorage.length ; i++){
//             var producto = sessionStorage.key(i);
//             var precio = sessionStorage.getItem(producto);
//             carritoProducto.push({producto, precio});
//         }
//     }


// function borrarTodo() {sessionStorage.clear(); mostrarDatos(); }
