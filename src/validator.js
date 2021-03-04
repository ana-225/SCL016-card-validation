const validator = {
    isValid: (cardNumber) => {
        let convertir = cardNumber.split("").reverse();
        let suma = 0;
        let n = 0;

        for (let i = 0; i < convertir.length; i++) {
//  se multiplicaran las posiciones pares
            if (i % 2 == 1) {
// se ejecutara lo siguiente
                n = Number(convertir[i]) * 2;
                if (n >= 10) {
                    n = (n - 10) + 1;
                }
            }
// para numeros impares = 0 en la consola
            else {
                n = Number(convertir[i]);
            }
// se realiza la suman todos los numeros 
            suma = suma + n;
        }
        return suma % 10 === 0 ? true : false;
    },

    maskify: (cardNumber) => {
        let maskifyNumber = cardNumber;
        let finalNumber = '';
        //  console.log(maskifyNumber); es el numero que ingresa el usuario
            for (let i = 0; i < maskifyNumber.length; i++) {
            //  console.log(maskifyNumber.length); se contabiliza la cifra ingresada
            //  console.log(maskifyNumber[i]);
            if (i < maskifyNumber.length - 4) {
                //  console.log("enmascarando")
                finalNumber = finalNumber + "#";
                //  console.log(finalNumber);
            }
            else {
                finalNumber = finalNumber + maskifyNumber[i];
            }
            // console.log(maskifyNumber[i]); el numero que ingreso el usuario separado
            //  console.log(finalNumber);enmascarado de numero
        }
            return finalNumber;
    }
}
export default validator;