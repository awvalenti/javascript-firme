function Xadrez() {
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
  return {
    length: 0
  };
};

Xadrez.prototype.vez = function() {
  return this._vez;
};

Xadrez.prototype.mover = function(origem, destino) {
  this._matriz[extrairLinha(destino)][extrairColuna(destino)] = this._matriz[extrairLinha(origem)][extrairColuna(origem)];
  this._matriz[extrairLinha(origem)][extrairColuna(origem)] = 'VAZIO';
  this._vez = this._vez === 'BRANCAS' ? 'PRETAS' : 'BRANCAS';
};

function extrairLinha(codigoPosicao) {
  return 8 - (codigoPosicao.charCodeAt(1) - '0'.charCodeAt());
}

function extrairColuna(codigoPosicao) {
  return codigoPosicao.charCodeAt() - 'a'.charCodeAt();
}
