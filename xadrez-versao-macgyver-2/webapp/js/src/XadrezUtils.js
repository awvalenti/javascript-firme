function extrairLinha(codigoPosicao) {
  return 8 - (codigoPosicao.charCodeAt(1) - '0'.charCodeAt());
}

function extrairColuna(codigoPosicao) {
  return codigoPosicao.charCodeAt() - 'a'.charCodeAt();
}

function valido(codigoPosicao) {
  var linha = extrairLinha(codigoPosicao), coluna = extrairColuna(codigoPosicao);
  return linha >= 0 && linha < 8 && coluna >= 0 && coluna < 8;
}
