const axios = require (`axios`);

//  1.- Escribe una función que reciba como parámetros nombre,
//         nacionalidad, biografía, género y edad para hacer una
//         petición a la API para crear un autor nuevo. 
//         La función debe retornar el autor nuevo en una promesa. 


function uno(nombre, apellido, nacionalidad, biografia, genero, edad){
let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
axios.post(URL,{
    
    "name": nombre,
    "last_name": apellido,
    "nacionalidad": nacionalidad,
    "biography": biografia,
    "gender": genero,
    "age": edad,
    "is_alive": true
    
})
.then((response)=>{
    console.log(response.data);
})
.catch((error)=>{
    console.log(error.response.data);
})
}
uno(`Jacobo`, `Zonana`, `USA`, `Hola`, `M`, 41)
