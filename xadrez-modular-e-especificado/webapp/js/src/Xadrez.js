// Xadrez tem uma dependencia: a classe Posicao
define([
  'src/Posicao'
],
function(Posicao) {
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
    var posicao = new Posicao(codigoPosicao);

    return this._matriz[posicao.getLinha()][posicao.getColuna()];
  };

  Xadrez.prototype.pecasCapturadas = function() {
    return this._pecasCapturadas;
  };

  Xadrez.prototype.vez = function() {
    return this._vez;
  };

  Xadrez.prototype.moverPeca = function(codigoOrigem, codigoDestino) {
    var origem = new Posicao(codigoOrigem),
        destino = new Posicao(codigoDestino);

    if (!(origem.ehValida() && destino.ehValida())) return false;

    var resultado = this._executarMovimento(origem.getLinha(), origem.getColuna(), destino.getLinha(), destino.getColuna());

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

  return Xadrez;

});
