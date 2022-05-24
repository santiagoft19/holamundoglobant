export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

    let contenedor=document.getElementById("contenedorCarrito")

    contenedor.innerHTML=''
    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")


        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

      

        let nombre=document.createElement("h5")
        nombre.textContent=producto.nombre

        //foto
        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        //precio
        let precio=document.createElement("h4")
        precio.textContent=producto.precio

        let cantidad=document.createElement("h5")
        cantidad.textContent="cantidad: "+ producto.cantidad

        //padres e hijos
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)


        


    })


    modalVerCarrito.show()
}