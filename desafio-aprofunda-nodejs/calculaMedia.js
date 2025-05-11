function calculaMedia(notas) {
  
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  
  
  const media = soma / notas.length;
  

  const status = media >= 7 ? "Aprovado" : "Reprovado";
  
  
  return `${status} - Média: ${media.toFixed(1)}`;
}

console.log(calculaMedia([8, 7, 6])); 
console.log(calculaMedia([5, 6, 4])); 