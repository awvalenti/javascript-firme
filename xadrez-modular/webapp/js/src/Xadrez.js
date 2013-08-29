// Xadrez tem duas dependencias: Posicao e Jogador
define([
  'Posicao',
  'Jogador'
],
function(
  Posicao,
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
    var posicao = new Posicao(codigoPosicao);

    return this._matriz[posicao.getLinha()][posicao.getColuna()];
  };

  Xadrez.prototype.getContadorMovimentos = function() {
    return this._contadorMovimentos;
  };

  Xadrez.prototype.moverPeca = function(codigoOrigem, codigoDestino) {
    var origem = new Posicao(codigoOrigem),
        destino = new Posicao(codigoDestino);

    if (!(origem.ehValida() && destino.ehValida())) {
      throw new Error('Movimento invalido: de ' + origem + ' para ' + destino);
    }

    var pecaOrigem = this._matriz[origem.getLinha()][origem.getColuna()];

    this._matriz[destino.getLinha()][destino.getColuna()] = pecaOrigem;
    this._matriz[origem.getLinha()][origem.getColuna()] = 'VAZIO';

    ++this._contadorMovimentos;

    ++this._indiceJogadorAtual;
    this._indiceJogadorAtual %= 2;
  };

  return Xadrez;

});