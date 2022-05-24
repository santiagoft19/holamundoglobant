/*funcuion para llenar dinamicamente la tienda*/
export function llenarTienda(){


    let productos=[
       {nombre:"Bolso",precio:80000,foto:"../img/p1.jpg",descripcion:"Bolso original de Deadpool"},
       {nombre:"Vaso",precio:20000,foto:"../img/p2.jpg",descripcion:"Vaso malteada"},
       {nombre:"Buso",precio:100000,foto:"../img/p3.jpg",descripcion:"Buso Deadpool"},
       {nombre:"Posillo",precio:30000,foto:"../img/p4.webp",descripcion:"Posillo de Deadpool"},
       {nombre:"Camibuso",precio:12000,foto:"../img/p5.jpg",descripcion:"Camibuso de Deadpool"},
       {nombre:"Juguete",precio:50000,foto:"../img/p6.jpg",descripcion:"Juguete coleccionable de Deadpool"},
       {nombre:"Medias",precio:15000,foto:"../img/p7.webp",descripcion:"Medias de Deadpool"},
       {nombre:"Cuadros",precio:100000,foto:"../img/p8.png",descripcion:"Cuadros del heroe"},
       {nombre:"Pantalon",precio:50000,foto:"../img/p9.jpg",descripcion:"Pantalon Deadpool"},
       {nombre:"Gorra",precio:30000,foto:"../img/p10.jpg",descripcion:"Gorra de fans de Deadpool"}

   ]
    let fila=document.getElementById("fila")
    productos.forEach(function(producto){
        

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-2")
    imagen.src=producto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    let nombreProducto=document.createElement("h4")
    nombreProducto.textContent=producto.nombre

    let precioProducto=document.createElement("h5")
    precioProducto.textContent="$"+producto.precio


    let descripcionProducto=document.createElement("h6")
    descripcionProducto.textContent=producto.descripcion
   
    

    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")
    botonAmpliarInfo.textContent="Ver producto"

    //padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(descripcionProducto)
    tarjeta.appendChild(precioProducto)
    tarjeta.appendChild(botonAmpliarInfo)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)

})
   
}
