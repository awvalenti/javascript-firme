define(function() {
  // Esta classe nao possui nenhuma dependencia. Por isso, o vetor de dependencias e' omitido.

  function Jogador(corPecas, nomeJogador) {
    this._corPecas = corPecas;
    this._nomeJogador = nomeJogador;
  }

  return Jogador;
});
