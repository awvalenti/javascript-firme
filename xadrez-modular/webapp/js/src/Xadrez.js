define([
  'XadrezUtils',
  'Jogador'
],
function(
  XadrezUtils,
  Jogador
) {
  function Xadrez(nomeJogadorBrancas, nomeJogadorPretas) {
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

    this._jogadores = [new Jogador('BRANCAS', nomeJogadorBrancas), new Jogador('PRETAS', nomeJogadorPretas)];
    this._contadorMovimentos = 0;
    this._indiceJogadorAtual = 0;
  }

  Xadrez.prototype.getPeca = function(codigoPosicao) {
    return this._matriz[extrairLinha(codigoPosicao)][extrairColuna(codigoPosicao)];
  };

  Xadrez.prototype.getContadorMovimentos = function() {
    return this._contadorMovimentos;
  };

  Xadrez.prototype.moverPeca = function(origem, destino) {
    var linhaOrigem = extrairLinha(origem),
        colunaOrigem = extrairColuna(origem),
        linhaDestino = extrairLinha(destino),
        colunaDestino = extrairColuna(destino);

    if (linhaOrigem < 0 || linhaOrigem >= 8 || colunaOrigem < 0 || colunaOrigem >= 8 ||
        linhaDestino < 0 || linhaDestino >= 8 || colunaDestino < 0 || colunaDestino >= 8) {
      throw new Error('Movimento invalido: de ' + origem + ' para ' + destino);
    }

    var pecaOrigem = this._matriz[linhaOrigem][colunaOrigem];

    this._matriz[linhaDestino][colunaDestino] = pecaOrigem;
    this._matriz[linhaOrigem][colunaOrigem] = 'VAZIO';

    ++this._contadorMovimentos;

    ++this._indiceJogadorAtual;
    this._indiceJogadorAtual %= 2;
  };

  return Xadrez;

});