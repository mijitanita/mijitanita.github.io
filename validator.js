const validator = {
  isValid,
  maskify,
};
function isValid(cardnumber) {
  if (cardnumber === null || cardnumber.length < 16 || /^([aA-zZ])*$/.test(cardnumber)){
    
    return false;
  }

  const array = cardnumber.split("");
  
  if (typeof parseInt(array[0]) === "number") {
    //revisar
    //onsole.log("datos válidos");
    //console.log(array);
  }

  let suma = 0;
  let prod = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      prod = array[i] * 2;
      //console.log(prod);
      if (prod < 10) {
        array[i] = prod;
      } else {
        array[i] = prod - 9;
      // console.log(array);
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    suma += parseInt(array[i]);
    if(suma % 10 === 0){
      return true;
    }else{
      false;
    }
    

  }
}
function maskify(cardnumber) {
  if(cardnumber.length===1){
    return cardnumber
  }
  const tarjetavalida= cardnumber.toString();
  const parte1 = tarjetavalida.slice(0,cardnumber.length-4);
  const parte2 = tarjetavalida.slice(cardnumber.length-4,cardnumber.length);
  const numeromascara = parte1.replace(/./g,"#") + parte2;
  //console.log(numeromascara);
  return numeromascara;
}
export default validator;
