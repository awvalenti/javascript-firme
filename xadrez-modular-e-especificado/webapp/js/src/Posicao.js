// Posicao nao tem nenhuma dependencia. Nesse caso, o vetor de dependencias pode ser omitido.
define(function() {
  function Posicao(codigoPosicao) {
    this._linha = 8 - (codigoPosicao.charCodeAt(1) - '0'.charCodeAt());
    this._coluna = codigoPosicao.charCodeAt() - 'a'.charCodeAt();
  }

  Posicao.prototype.ehValida = function() {
    return this._linha >= 0 && this._linha < 8 && this._coluna >= 0 && this._coluna < 8;
  };

  Posicao.prototype.getLinha = function() {
    return this._linha;
  };

  Posicao.prototype.getColuna = function() {
    return this._coluna;
  };

  return Posicao;

  // TODO Poderia fazer um cache de posicoes para evitar instanciar objetos toda hora
});
