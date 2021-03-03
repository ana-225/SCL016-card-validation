import validator from './validator.js';
// En html aparece mi id de validar boton para que js este atento a cuando suceda el evento y relice la funcion en este caso el id validacion y escribe en html lo que esta entre comillias
document.getElementById("validarBoton").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("validacion").innerHTML = "Tarjeta Valida";

function myFunction(){

    let cardNumber = document.getElementById("ingresarNumero").value;
    
    const isValid = validator.isValid(cardNumber);


//     console.log(isValid);

    let maskify = validator.maskify(cardNumber);
    

// para verificar si la tarjeta es valida y aparezca el mensaje en html
    if (isValid === true) {

        
            document.getElementById("validacion").innerHTML = "Tarjeta Valida";
            document.getElementById("validacion").style.color="green";

            

    
    }
    else {
       
            document.getElementById("validacion").innerHTML = "Tarjeta Invalida";
            document.getElementById("validacion").style.color="red";
            
          

            
    }
    
    
//     console.log(maskify);
//     enmascarado de los digitos ingresados ecepto los ultimos cuatro

document.getElementById("ingresarNumero").value= maskify;

 }
 





