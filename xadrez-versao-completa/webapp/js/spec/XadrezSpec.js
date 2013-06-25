describe('um xadrez', function() {
  var xadrez = null;

  beforeEach(function() {
    xadrez = new Xadrez();
  });

  describe('em seu estado inicial', function() {
    it('deve conter as pecas nos lugares corretos', function() {
      expect(xadrez.naPosicao('a1')).toBe('TORRE');
      expect(xadrez.naPosicao('b1')).toBe('CAVALO');
      expect(xadrez.naPosicao('c1')).toBe('BISPO');
      expect(xadrez.naPosicao('d1')).toBe('RAINHA');
      expect(xadrez.naPosicao('e1')).toBe('REI');
      expect(xadrez.naPosicao('f1')).toBe('BISPO');
      expect(xadrez.naPosicao('g1')).toBe('CAVALO');
      expect(xadrez.naPosicao('h1')).toBe('TORRE');

      ['2', '3', '4', '5', '6'].forEach(function(numero) {
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(function(letra) {
          expect(xadrez.naPosicao(letra + numero)).toBe('VAZIO');
        });
      });
    });

    it('deve estar sem pecas capturadas', function() {
      expect(xadrez.pecasCapturadas().length).toEqual(0);
    });

    it('deve estar na vez das BRANCAS', function() {
      expect(xadrez.vez()).toBe('BRANCAS');
    });
  });

  describe('apos uma jogada de peao', function() {
    beforeEach(function() {
      xadrez.mover('e2', 'e4');
    });

    it('altera a posicao do peao', function() {
      expect(xadrez.naPosicao('e2')).toBe('VAZIO');
      expect(xadrez.naPosicao('e4')).toBe('PEAO');
    });

    it('muda para a vez das PRETAS', function() {
      expect(xadrez.vez()).toBe('PRETAS');
    });
  });
});
