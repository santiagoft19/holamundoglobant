//importacion de elementos
import {llenarTienda} from "./controladorllenartienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"
import {agregarCarrito} from"./agregarAlCarrito.js"
import {verCarrito} from"./verCarrito.js"

let producto={}
let carrito=[]
//llamo a la funcion llenar tienda
llenarTienda()

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
//llamo funtion ampliarInfoProducto
let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    modalInfoProducto.show()
   
})

let botonAgregarCarrito=document.getElementById("botonAgregarProducto")
botonAgregarCarrito.addEventListener("click",function(){
    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto

    carrito.push(producto)
    

    modalInfoProducto.hide()
    agregarCarrito(carrito)
})

let botonVerCarrito=document.getElementById("botorCarrito")
botonVerCarrito.addEventListener("click",function(){

    verCarrito(carrito)
})