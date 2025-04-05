let url = 'https://fakestoreapi.com/products';

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // Acá ya tenemos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        
        // Asignar directamente data al arrayDeProductos
        let arrayDeProductos = data;

        // El elemento HTML donde quiero hacer la modificación 
        let recomendados = document.querySelector('.Recomendados');
        let ProductosPopulares = document.querySelector('.Productos');
        let PrendasPopulares = document.querySelector('.Prendas');


        // variables vacias para despues agregrles la informacion de cada seccion

        let allRecomendados = '';
        let allProductosPopulares = '';
        let allPrendasPopulares = '';



        let Navegar = document.querySelector('.Navegacion');

        let navegacion = ''

        //Contador de cuantos elementos hay asi es parejo en cada seccion 
        let contadorDePrendas = 0;
        let contadorDePopulares = 0;
        let contadorDeRecomendados = 0;





// se recorre el array deproductos uno por uno y se filtran en base a que categoria es cada progducto, despues se agregan a la variable vacia corespondiente y por ultimo al elemento html que seleccione al principio 
        for (let i = 0; i < arrayDeProductos.length; i++) {

            if ((arrayDeProductos[i].category == `men's clothing`|| arrayDeProductos[i].category == `women's clothing`) && (contadorDePrendas < 4)){
                allPrendasPopulares += `<div class ="productov">
                                        <a href="producto.html?id=${arrayDeProductos[i].id}">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p> ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        </a>
                                        <!-- <p> $${arrayDeProductos[i].description}</p> --> 
                                        <!--Eso se agregaria al div de cada producto para demostrar la descripcion, pero queda muy larga y no se ve bien entonces no se mostramos como una decision de estilo -->
                                        <a href="producto.html?id=${arrayDeProductos[i].id}" class= "agregar-carrito" >Ver detalle</a>
        
                            
                                      </div>`;
                contadorDePrendas++;
            }else if ((arrayDeProductos[i].category == `jewelery`) && (contadorDePopulares < 4)) {
                 allProductosPopulares += `<div class ="productov">
                                        <a href="producto.html?id=${arrayDeProductos[i].id}">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p> ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        </a>
                                        <!-- <p> $${arrayDeProductos[i].description}</p> --> 
                                        <!--Eso se agregaria al div de cada producto para demostrar la descripcion, pero queda muy larga y no se ve bien entonces no se mostramos como una decision de estilo -->
                                        
                                        <a href="producto.html?id=${arrayDeProductos[i].id}" class= "agregar-carrito" >Ver detalle</a>
                                    </div>`;
                                    
                contadorDePopulares++; 

            

            }else if ((arrayDeProductos[i].category == `electronics`) && ( contadorDeRecomendados < 4)) {
                allRecomendados += `<div class ="productov" >
                                        <a href="producto.html?id=${arrayDeProductos[i].id}">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p> ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        </a>
                                        <!-- <p> $${arrayDeProductos[i].description}</p> --> 
                                        <!--Eso se agregaria al div de cada producto para demostrar la descripcion, pero queda muy larga y no se ve bien entonces no se mostramos como una decision de estilo -->
                                        
                                        <a href="producto.html?id=${arrayDeProductos[i].id}" class= "agregar-carrito" >Ver detalle</a>
                                    </div>`;
                contadorDeRecomendados++;
            }






        }

        
       
        recomendados.innerHTML = allRecomendados;
        ProductosPopulares.innerHTML = allProductosPopulares;
        PrendasPopulares.innerHTML = allPrendasPopulares;

        

    })
    .catch(function(e) {
        console.log(e);
    });

    console.log("localstorage: ", localStorage)


    
