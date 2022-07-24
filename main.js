var URL = "https://api.thecatapi.com/v1/images/search";
var imagen = document.querySelector("img");
var button = document.querySelector("button");

function peticionGatito(){
        fetch(URL)
    .then(function (response){
        //Esta funcion se ejecuta si salio bien la peticion
        // console.log(res);
        return response.json();
    })
    .then(function (data){
        console.log(data[0].url);
        imagen.src = data[0].url
    })
    .catch(function (err){
        //Esta funcion se ejcuta cuando algun error sale
        console.log(err);
    });
   }
document.addEventListener("DOMContentLoaded", function(){
    peticionGatito();
});
button.addEventListener("click", function(){
    peticionGatito();
});
//GET

