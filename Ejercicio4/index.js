const axios = require (`axios`);


// 4.- Escribe una función que reciba como parámetro un ID
//         para realizar una petición a la API para eliminar un
//         autor con el ID especificado. La función debe retornar
//         una promesa con la respuesta del servidor.

function cuatro(id){
let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
  axios.delete(URL,{

    })
    .then((response)=>{
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
}

cuatro(5144)
