export function ampliarInfoProducto(event){

    //console.log(event.target.classList)
    
    if(event.target.classList.contains("btn")){
        console.log(event.target.parentElement.querySelector("h1").textContent)
    }

}