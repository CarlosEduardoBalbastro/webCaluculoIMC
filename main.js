function reiniciar(){
    location.reload()
}



function calcularIMC(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let respuesta = document.getElementById('respuesta');
    let sugerencia = document.getElementById('sugerencia');
    let pesoMinMax = document.getElementById('mensajePeso');
    let alturaMinMax = document.getElementById('mensajeAltura');






if(peso > 0 && peso <= 1000 || altura > 0 && altura < 5){

   //calcular imc
   let imc = peso / (altura *2);


   if(imc <= 18.5){
       respuesta.innerHTML =  "Esta por debajo el peso normal " + "</br>" +  " Su índice de Masa corporal es " + imc;
       sugerencia.innerHTML = "Deberías consultar con un Profesional";
   
   } else if(imc >= 25){
       respuesta.innerHTML = "Esta por Encima el peso normal" + "</br>" + " Su índice de Masa corporal es " + imc;
       sugerencia.innerHTML = "Deberías consultar con un Profesional";
   }   else if(imc >= 18.5 && imc <= 25){
       
       respuesta.innerHTML =  "Esta dentro el peso normal para su altura" + "</br>" + "Su índice de Masa corporal es " + imc;
       
   }
   
}

if(peso < 0 || peso >= 1000 ){
    
    if(peso < 0){
        pesoMinMax.innerText = "Usted pesa menos de 0 gramos, ¿esta seguro que no es un espiritu?";
    }else if (peso >= 1000){
        pesoMinMax.innerText = "Pesas Mas de 1000Kg, quizas necesitas un cambio de balanza!";
    }
}

if(altura < 0 || altura >= 5){
    if(altura < 0){
        alturaMinMax.innerText = "Tienes menos de 0 centímetros, ¿Acaso Usted es un átomo cuántico?";
    }else if (altura >= 5){
        alturaMinMax.innerText = "Tienes mas de 5 metros deberias jugar en la NBA!";
    }
}



    

    
}



// function mensajeForm(){
//     let mens = document.getElementById('mensajeForm');

//     mens.innerText = "Gracias por comunicarsse con Nosotrs!";
// }