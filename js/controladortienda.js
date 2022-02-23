//importacion de elementos
import {llenarTienda} from "./controladorllenartienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"

//llamo a la funcion llenar tienda
llenarTienda()

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
//llamo funtion ampliarInfoProducto
let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    ampliarInfoProducto(event)
   
})