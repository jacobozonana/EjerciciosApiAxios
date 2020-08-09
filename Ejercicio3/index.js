const axios = require (`axios`);

//  3.- Escribe una función que reciba como parámetros nombre,
//         nacionalidad, biografía, género y edad para hacer una
//         petición a la API para modificar un autor existente.
//         Al ejecutar La función, esta debe retornar el autor 
//         modificado en una promesa.

function tres(id, nombre, apellido, nacionalidad, biografia, genero, edad){
    let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/` 
 axios.put(URL,{
     
    "name": nombre,
    "last_name": apellido,
    "nacionalidad": nacionalidad,
    "biography": biografia,
    "gender": genero,
    "age": edad,
    "is_alive": false
    })
.then(function(response){
    console.log(response);
    
})
.catch(function(error){
    console.log(error)
});
}
tres(5109,`jacobo`, `zonana`, `USA`, `vamos avanzando`, `M`, 14)
