export function agregarCarrito(carrito){

    let cantidadTotal=0
    carrito.forEach(function(producto){
        cantidadTotal=cantidadTotal+Number(producto.cantidad)
        console.log(cantidadTotal)
    
    })

    let pildora=document.getElementById("pildora")
    
    pildora.textContent=cantidadTotal
    console.log(pildora.textContent)
    pildora.classList.remove("invisible")
    console.log(carrito)
}