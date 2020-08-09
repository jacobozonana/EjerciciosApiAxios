const axios = require (`axios`);

// Escribe el código que permita hacer las operaciones elementales
// de la siguiente API genérica (Hay que leer con GET, Crear con POST, Editar con Put y borrar con DELETE):
        //  https://goodreads-devf-aaron.herokuapp.com/docs/ 
    // Recuerda probar con Postman
    // cómo hay que hacer las peticiones a la API
    // para ver qué y cómo responde el servidor.

// GET

function get(){
let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
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
get()

// POST

// function pos(){
//     let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`
// axios.post(URL,{
//     "name": "Jacobo",
//     "last_name": "Zonana Nagar",
//     "nacionalidad": "USA",
//     "biography": "=)",
//     "gender": "M",
//     "age": 41,
//     "is_alive": false
//     })
// .then(function(response){
//     console.log(response);
    
// })
// .catch(function(error){
//     console.log(error)
// });
// }
// pos()

// PUT

// function put(){
//     let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/5109/`
// axios.put(URL,{
   
    
//     "name": "Jacobo",
//     "last_name": "ZonanaNagar",
//     "nacionalidad": "USA",
//     "biography": "=)",
//     "gender": "M",
//     "age": 41,
//     "is_alive": true
   
// })
// .then((response)=>{
//     console.log(response.data);
// })
// .catch((error)=>{
//     console.log(error.response.data);
// })
// }

// put()

// DEL

// function del(){
//     let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/6742/`
//     axios.delete(URL,{
        
//     })
//     .then((response)=>{
//         console.log(response.data);
//     })
//     .catch((error)=>{
//         console.log(error.response.data);
//     })
// }

// del()





