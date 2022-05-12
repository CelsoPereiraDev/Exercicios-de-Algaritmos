function numerosPrimos(numero) {
  const numeros = new Array();
  for (let i = 0; i <= numero; i++) {
    if (primo(i)) {
      numeros.push(i);
    }
  }
  return numeros;
}
function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}
