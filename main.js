function reiniciar(){
    location.reload()
}



function calcularIMC(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let respuesta = document.getElementById('respuesta');
    let sugerencia = document.getElementById('sugerencia');

if(peso < 0 ){
    peso = peso * (-1);
    console.log('estamos multiplicando por menos 1');
}

if(altura < 0){
    console.log('¿Es usted un pigmalion?')
    altura = altura * (-1);
}


   //calcular imc
    let imc = peso / (altura *2);


if(imc <= 18.5){
    respuesta.innerHTML =  "Esta por debajo el peso normal " + "</br>" +  "Su indice de Masa corporal es " + imc;
    sugerencia.innerHTML = "Deberías cunsultar con un Profesional";

} else if(imc >= 25){
    respuesta.innerHTML = "Esta por Encima el peso normal" + "</br>" + "Su indice de Masa corporal es " + imc;
    sugerencia.innerHTML = "Deberías cunsultar con un Profesional";
}   else if(imc >= 18.5 && imc <= 25){
    
    respuesta.innerHTML =  "Esta dentro el peso normal para su altura" + "</br>" + "Su indice de Masa corporal es " + imc;
    
}

    

    
}



// function mensajeForm(){
//     let mens = document.getElementById('mensajeForm');

//     mens.innerText = "Gracias por comunicarsse con Nosotrs!";
// }