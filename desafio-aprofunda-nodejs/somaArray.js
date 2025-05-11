function somaArray(arr) {
  return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(somaArray([1, 2, 3, 4, 5])); 