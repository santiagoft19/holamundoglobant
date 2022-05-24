export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

    let contenedor=document.getElementById("contenedorCarrito")

    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")


        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-4")

        let columna3=document.createElement("div")
        columna3.classList.add("col-12")
        columna3.classList.add("col-md-4")

        


    })


    modalVerCarrito.show()
}