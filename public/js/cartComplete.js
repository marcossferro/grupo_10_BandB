const container = document.querySelector('.containerCarrito');
let carrito = JSON.parse(sessionStorage.getItem('cart'));

let tarjetaCarrito;
let total;


for (let i = 0; i < carrito.length; i++) {
    const productToShow = carrito[i];
    if(typeof tarjetaCarrito == 'undefined'){
        total = productToShow.precio
        tarjetaCarrito = 
        `
        <div class="productCartDesktop">
        <div class="carrito">
            <section class="productosAgregados">
                <article>
                    <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                    <p>${productToShow.nombre}</p>
                    <ul>
                        <li> 
                            <form class="unidadesCarrito">
                                <label for="unidadesCarrito">Unidades</label>
                                <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}" readonly>
                            </form>
                        </li>
                        <li>$ ${productToShow.precio}</li>
                    </ul>
                </article>
            </section>  
        </div>
        </div>
        
        <div class="productCartMobile">
        <div class="carrito">
            <section class="productosAgregados">
                <article>
                    <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                    <p>${productToShow.nombre}</p>
                    <ul>
                        <li> 
                            <form class="unidadesCarrito">
                                <label for="unidadesCarrito">Unidades</label>
                                <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}"readonly>
                            </form>
                        </li>
                        <li>$ ${productToShow.precio}</li>
                    </ul>
                </article>
            </section>  
        </div>
        </div> 
        <div class="totalCarrito">
        <article>
            <ul>
                <li>Total a abonar</li>
                <li>$ ${total}</li>
            </ul>
        </article>
        </div>  
        `
    }else{
        if(i != carrito.length -1){
            tarjetaCarrito +=
            `
            <div class="productCartDesktop">
            <div class="carrito">
                <section class="productosAgregados">
                    <article>
                        <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                        <p>${productToShow.nombre}</p>
                        <ul>
                            <li> 
                                <form class="unidadesCarrito">
                                    <label for="unidadesCarrito">Unidades</label>
                                    <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}"readonly>
                                </form>
                            </li>
                            <li>$ ${productToShow.precio}</li>
                        </ul>
                    </article>
                </section>  
            </div>
            </div>
            
            <div class="productCartMobile">
            <div class="carrito">
                <section class="productosAgregados">
                    <article>
                        <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                        <p>${productToShow.nombre}</p>
                        <ul>
                            <li> 
                                <form class="unidadesCarrito">
                                    <label for="unidadesCarrito">Unidades</label>
                                    <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}"readonly>
                                </form>
                            </li>
                            <li>$ ${productToShow.precio}</li>
                        </ul>
                    </article>
                </section>  
            </div>
            </div> 
            `
        }else{
            total = total + productToShow.precio
            tarjetaCarrito +=
                `
                <div class="productCartDesktop">
                <div class="carrito">
                    <section class="productosAgregados">
                        <article>
                            <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                            <p>${productToShow.nombre}</p>
                            <ul>
                                <li> 
                                    <form class="unidadesCarrito">
                                        <label for="unidadesCarrito">Unidades</label>
                                        <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}"readonly>
                                    </form>
                                </li>
                                <li>$ ${productToShow.precio}</li>
                            </ul>
                        </article>
                    </section>  
                </div>
                </div>
                
                <div class="productCartMobile">
                <div class="carrito">
                    <section class="productosAgregados">
                        <article>
                            <img src="${document.location.origin}/imgProducts/${productToShow.img}" alt="imagenProducto"> 
                            <p>${productToShow.nombre}</p>
                            <ul>
                                <li> 
                                    <form class="unidadesCarrito">
                                        <label for="unidadesCarrito">Unidades</label>
                                        <input type="number" id="unidadesCarrito" name="unidadesCarrito" value="${productToShow.cantidad}"readonly>
                                    </form>
                                </li>
                                <li>$ ${productToShow.precio}</li>
                            </ul>
                        </article>
                    </section>  
                </div>
                </div> 
                <div class="totalCarrito">
                <article>
                    <ul>
                        <li>Total a abonar</li>
                        <li>$ ${total}</li>
                    </ul>
                </article>
                </div>  
            `
        
        }
    }
}
container.innerHTML = tarjetaCarrito

