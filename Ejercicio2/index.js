const axios = require (`axios`);

//  2.- Escribe una función que reciba como parámetro un ID
//         para realizar una petición a la API para hallar un 
//         autor con el ID especificado. La función debe retornar
//         una promesa con la respuesta del servidor. 
        
        
function dos(id){
    let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`+id 
axios.get(URL)

.then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    
});
}
dos(5109)
