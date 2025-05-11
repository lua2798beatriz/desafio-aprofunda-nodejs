function ePalindromo(str) {
  const textoLimpo = str
    .toLowerCase()
    .normalize("NFD")                
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z0-9]/g, "");     

 
  const textoInvertido = textoLimpo.split('').reverse().join('');

  
  return textoLimpo === textoInvertido;
}


console.log(ePalindromo("Ame a ema"))   
console.log(ePalindromo("Olá mundo"))  