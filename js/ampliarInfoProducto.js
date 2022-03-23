export function ampliarInfoProducto(event){

    let producto={}

    
    if(event.target.classList.contains("btn")){
        
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h6").textContent
        }
        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecioProducto=document.getElementById("precioProducto")
        etiquetaPrecioProducto.textContent=producto.precio

        let etiquetaImagenProducto=document.getElementById("imagenProducto")
        etiquetaImagenProducto.src=producto.foto

        return producto
    }

}