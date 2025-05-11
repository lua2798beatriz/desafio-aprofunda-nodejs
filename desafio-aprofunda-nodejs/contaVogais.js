function contaVogais(texto) {

  const textoMinusculo = texto.toLowerCase();

  const vogais = ['a', 'e', 'i', 'o', 'u'];

  let contador = 0;

  for (let char of textoMinusculo) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

console.log(contaVogais("Node.js é incrível")); 