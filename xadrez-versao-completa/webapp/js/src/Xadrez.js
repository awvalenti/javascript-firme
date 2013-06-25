function Xadrez() {
  this._vez = 'BRANCAS';
}

Xadrez.prototype.naPosicao = function(posicao) {
  return {
    a1: 'TORRE',
    b1: 'CAVALO',
    c1: 'BISPO',
    d1: 'RAINHA',
    e1: 'REI',
    e2: 'VAZIO',
    e4: 'PEAO',
    f1: 'BISPO',
    g1: 'CAVALO',
    h1: 'TORRE'
  }[posicao];
};

Xadrez.prototype.pecasCapturadas = function() {
  return {
    length: 0
  };
};

Xadrez.prototype.vez = function() {
  return this._vez;
};

Xadrez.prototype.mover = function() {
  this._vez = this._vez === 'BRANCAS' ? 'PRETAS' : 'BRANCAS';
};
