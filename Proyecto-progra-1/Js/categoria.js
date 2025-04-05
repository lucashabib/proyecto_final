function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let categoria = getQueryParam('category');

if (categoria) {
    let url = `https://fakestoreapi.com/products/category/${categoria}`;
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            // Acá ya tenemos los datos finales y es donde debemos escribir nuestro código.
            console.log(data);
        
            // Asignar directamente data al arrayDeProductos
            let allDecategoria = data;

            let section = document.querySelector('.Recomendados');

            let productosCate = '';

            for (let i = 0; i < allDecategoria.length; i++) {
                productosCate += `<div class="productov">
                                    <img src=${allDecategoria[i].image} alt='${allDecategoria[i].title}' />
                                    <p>${allDecategoria[i].title}</p>
                                    <p>Category: ${allDecategoria[i].category}</p>
                                    <p>Price: $${allDecategoria[i].price}</p>
                                    <!-- <p>${allDecategoria[i].description}</p> --> 
                                        <!--Eso se agregaria al div de cada producto para demostrar la descripcion, pero queda muy larga y no se ve bien entonces no se mostramos como una decision de estilo -->
                                    <a href="producto.html?id=${allDecategoria[i].id}" class="agregar-carrito">Ver detalle</a>
                                  </div>`;
            }
            

            section.innerHTML = productosCate;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
}


    



    










