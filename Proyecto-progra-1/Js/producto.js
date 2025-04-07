function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

//se busca el parametro (id) y lo guardamos en una variable llamada ProductoID

let ProductoId = getQueryParam('id');

//luego hago un if para coresponder que haya un id en la variable y busco la informacion especifica del profucto usando el fetch(url) con la url teniendo el parametro espesifico
if (ProductoId) {
    let url = `https://fakestoreapi.com/products/${ProductoId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);

            
         
//capturamos los elementos html con los que vamos a trabajar 
            let fotoProducto = document.querySelector('.foto');
            let textoProducto = document.querySelector('.texto-producto');
            let titulo = document.querySelector('.titulo')
            let informacionProducto = document.querySelector(`.informacion`)
            let precio = document.querySelector(`.precio`)

          
//les agrego la informacion del producto a los elemetnso html 
            fotoProducto.src =data.image;
            titulo.textContent =data.title
            informacionProducto.textContent = data.description
            precio.textContent='$'+data.price




        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}

// creo un array vacio para ir completando con los datos que vas agregando
let carrito = [];
//Recupero el storage
let recuperoStorage = localStorage.getItem('cartItems');
//Veo si hay algo en el storage
if(recuperoStorage != null){
    // Hago parse
    let recuParse = JSON.parse(recuperoStorage)
    carrito = recuParse

}


//seleccionamos el elemnto con clase "agregar-carrito"
let agregar = document.querySelector(`.agregar-carrito`);


// Agregamos un event listener para el evento 'click' en el botón de agregar al carrito
agregar.addEventListener(`click`, function(e) {
// evitamos el comportamiento predeterminado del evento 
    e.preventDefault()

//agrefgamos un producto al array "carrito" y convertimos ese array a una cadena JSON 
    carrito.push(ProductoId)
    let carritoString = JSON.stringify(carrito)

//guardamos la cadena JSON en el LocalStorage 
    localStorage.setItem('cartItems', carritoString)
  

    alert('Producto agregado al carrito')
    console.log("carrito:", carrito)
    console.log("localstorage: ", localStorage)

})





