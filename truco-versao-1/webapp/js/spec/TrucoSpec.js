describe('Truco', function() {
  var truco = null;
  var jogador1 = null;
  var jogador2 = null;

  beforeEach(function() {
    truco = new Truco();
//    jogador1 = truco.getJogador1();
//    jogador2 = truco.getJogador2();
  });

  it('jogadores devem comecar com tres cartas nas maos', function() {
    expect(truco.getMaoJogador1().length).toEqual(3);
    expect(truco.getMaoJogador2().length).toEqual(3);
  });

  describe('o jogador1, ao jogar uma carta', function() {
    beforeEach(function() {
      truco.jogarUmaCarta();
    });

    it('jogador1 fica com uma carta a menos', function() {
      expect(truco.getMaoJogador1().length).toEqual(2);
    });

    xit('passa a ter uma carta na mesa', function() {

    });

    xit('passa a ser a vez do jogador2', function() {

    });
  });

  xit('uma carta deve estar virada', function() {

  });

  xit('a carta seguinte \'a carta virada deve ser uma manilha', function() {

  });

});
