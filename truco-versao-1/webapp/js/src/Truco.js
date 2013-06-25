function Jogador() {
  this._mao = [1, 2, 3];
}

Jogador.prototype.getMao = function() {
  return this._mao;
};

function Truco() {
  this._jogador1 = new Jogador();
  this._jogador2 = new Jogador();
  this._mesa = [];
}

Truco.prototype.getMaoJogador1 = function() {
  return this._jogador1.getMao();
};

Truco.prototype.getMaoJogador2 = function() {
  return this._jogador2.getMao();
};

Truco.prototype.jogarUmaCarta = function() {
  return this._jogador1._mao.pop();
};

Truco.prototype.getMesa = function() {
  return this._mesa;
};
