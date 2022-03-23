//importacion de elementos
import {llenarTienda} from "./controladorllenartienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"

let producto={}
//llamo a la funcion llenar tienda
llenarTienda()

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
//llamo funtion ampliarInfoProducto
let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    console.log(producto)
    modalInfoProducto.show()
   
})