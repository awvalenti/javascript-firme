function Xadrez() {
  this._pecasCapturadas = [];
  this._vez = 'BRANCAS';
  this._matriz = [
    ['TORRE' , 'CAVALO', 'BISPO' , 'RAINHA', 'REI'   , 'BISPO' , 'CAVALO', 'TORRE' ],
    ['PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  ],
    ['VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' ],
    ['VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' ],
    ['VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' ],
    ['VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' , 'VAZIO' ],
    ['PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  , 'PEAO'  ],
    ['TORRE' , 'CAVALO', 'BISPO' , 'RAINHA', 'REI'   , 'BISPO' , 'CAVALO', 'TORRE' ]
  ];
}

Xadrez.prototype.naPosicao = function(codigoPosicao) {
  return this._matriz[extrairLinha(codigoPosicao)][extrairColuna(codigoPosicao)];
};

Xadrez.prototype.pecasCapturadas = function() {
  return this._pecasCapturadas;
};

Xadrez.prototype.vez = function() {
  return this._vez;
};

Xadrez.prototype.mover = function(origem, destino) {
  if (!(valido(origem) && valido(destino))) return false;

  var resultado = this._executarMovimento(extrairLinha(origem), extrairColuna(origem), extrairLinha(destino), extrairColuna(destino));

  if (resultado) this._vez = this._vez === 'BRANCAS' ? 'PRETAS' : 'BRANCAS';

  return resultado;
};

Xadrez.prototype._executarMovimento = function(linhaOrigem, colunaOrigem, linhaDestino, colunaDestino) {
  var pecaOrigem = this._matriz[linhaOrigem][colunaOrigem];
  var pecaDestino = this._matriz[linhaDestino][colunaDestino];

  if (pecaOrigem === 'PEAO' && linhaOrigem - linhaDestino > 2) return false;
  if (pecaDestino !== 'VAZIO') this._pecasCapturadas.push(pecaDestino);

  this._matriz[linhaDestino][colunaDestino] = pecaOrigem;
  this._matriz[linhaOrigem][colunaOrigem] = 'VAZIO';

  return true;
};

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
