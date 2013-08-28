// Jogador nao tem nenhuma dependencia. Nesse caso, o vetor de dependencias pode ser omitido.
define(function() {

  function Jogador(corPecas, nomeJogador) {
    this._corPecas = corPecas;
    this._nomeJogador = nomeJogador;
  }

  return Jogador;
});
