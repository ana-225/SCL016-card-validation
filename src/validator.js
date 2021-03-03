const validator = {
  isValid: (cardNumber)=>{
      let convertir = cardNumber.split("").reverse();
      let suma = 0;
      let n = 0;

      for(let i = 0; i<convertir.length; i++){
        
          if (i % 2 == 1){
              n = Number(convertir[i]) * 2;
              if (n >= 10){
                  n = (n - 10) + 1;

              }

          }

          else{
              n = Number(convertir[i]); 
          }
      
      suma = suma + n; 
        }
      return suma % 10 === 0 ? true : false;
  },

  maskify: (cardNumber) => {
     let maskifyNumber = cardNumber;
     let finalNumber = '';
    //  console.log(maskifyNumber);
     
     for (let i= 0; i< maskifyNumber.length; i++){
        //  console.log(maskifyNumber.length);
        //  console.log(maskifyNumber[i]);

         if (i< maskifyNumber.length -4){
            //  console.log("enmascarando")
             finalNumber = finalNumber +"#";
            //  console.log(finalNumber);
            
         }
          else{
            finalNumber= finalNumber + maskifyNumber[i];
            
         }
        //  console.log(finalNumber);
     }

     
 return finalNumber;
     
 }

}


export default validator;