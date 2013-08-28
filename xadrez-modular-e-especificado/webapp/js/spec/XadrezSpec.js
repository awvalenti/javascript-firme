// XadrezSpec tem uma dependencia: a classe Xadrez
define([
  'src/Xadrez'
],
function(
  Xadrez
) {
  describe('um xadrez', function() {
    var xadrez = null;

    beforeEach(function() {
      xadrez = new Xadrez();
    });

    describe('em seu estado inicial', function() {
      it('deve conter as pecas nos lugares certos', function() {
        expect(xadrez.naPosicao('a1')).toBe('TORRE');
        expect(xadrez.naPosicao('b1')).toBe('CAVALO');
        expect(xadrez.naPosicao('c1')).toBe('BISPO');
        expect(xadrez.naPosicao('d1')).toBe('RAINHA');
        expect(xadrez.naPosicao('e1')).toBe('REI');
        expect(xadrez.naPosicao('f1')).toBe('BISPO');
        expect(xadrez.naPosicao('g1')).toBe('CAVALO');
        expect(xadrez.naPosicao('h1')).toBe('TORRE');

        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(function(letra) {
          ['3', '4', '5', '6'].forEach(function(numero) {
            expect(xadrez.naPosicao(letra + numero)).toBe('VAZIO');
          });
        });
      });

      it('deve estar sem pecas capturadas', function() {
        expect(xadrez.pecasCapturadas().length).toBe(0);
      });

      it('deve estar na vez das BRANCAS', function() {
        expect(xadrez.vez()).toBe('BRANCAS');
      });
    });

    describe('apos um movimento de PEAO das BRANCAS', function() {
      beforeEach(function() {
        xadrez.moverPeca('e2', 'e4');
      });

      it('deve alterar a posicao do PEAO', function() {
        expect(xadrez.naPosicao('e2')).toBe('VAZIO');
        expect(xadrez.naPosicao('e4')).toBe('PEAO');
      });

      it('deve mudar para a vez das PRETAS', function() {
        expect(xadrez.vez()).toBe('PRETAS');
      });

      describe('apos um movimento de CAVALO das PRETAS', function() {
        beforeEach(function() {
          xadrez.moverPeca('g8', 'f6');
        });

        it('deve alterar a posicao do CAVALO', function() {
          expect(xadrez.naPosicao('g8')).toBe('VAZIO');
          expect(xadrez.naPosicao('f6')).toBe('CAVALO');
        });

        it('deve mudar para a vez das BRANCAS', function() {
          expect(xadrez.vez()).toBe('BRANCAS');
        });
      });

    });

    describe('deve bloquear movimentos invalidos', function() {
      it('para codigos invalidos', function() {
        expect(xadrez.moverPeca('a0', 'e4')).toBe(false);
        expect(xadrez.vez()).toBe('BRANCAS');

        expect(xadrez.moverPeca('e2', 'e0')).toBe(false);
        expect(xadrez.vez()).toBe('BRANCAS');

        expect(xadrez.moverPeca('i1', 'h1')).toBe(false);
        expect(xadrez.vez()).toBe('BRANCAS');
      });

      it('para peoes querendo avancar tres casas', function() {
        expect(xadrez.moverPeca('e2', 'e5')).toBe(false);
        expect(xadrez.naPosicao('e2')).toBe('PEAO');
        expect(xadrez.naPosicao('e5')).toBe('VAZIO');
        expect(xadrez.vez()).toBe('BRANCAS');

        expect(xadrez.moverPeca('a2', 'a5')).toBe(false);
        expect(xadrez.naPosicao('a2')).toBe('PEAO');
        expect(xadrez.naPosicao('a5')).toBe('VAZIO');
        expect(xadrez.vez()).toBe('BRANCAS');
      });
    });

    describe('apos uma sequencia de movimentos', function() {
      beforeEach(function() {
        xadrez.moverPeca('e2', 'e4');
        xadrez.moverPeca('e7', 'e5');
        xadrez.moverPeca('f1', 'a6');
      });

      it('pecas devem estar nas posicoes esperadas', function() {
        expect(xadrez.naPosicao('e2')).toBe('VAZIO');
        expect(xadrez.naPosicao('e4')).toBe('PEAO');
        expect(xadrez.naPosicao('e7')).toBe('VAZIO');
        expect(xadrez.naPosicao('e5')).toBe('PEAO');
        expect(xadrez.naPosicao('f1')).toBe('VAZIO');
        expect(xadrez.naPosicao('a6')).toBe('BISPO');
        expect(xadrez.naPosicao('b8')).toBe('CAVALO');
      });

      describe('apos CAVALO capturar BISPO', function() {
        beforeEach(function() {
          xadrez.moverPeca('b8', 'a6');
        });

        it('pecas devem estar nas posicoes esperadas', function() {
          expect(xadrez.naPosicao('b8')).toBe('VAZIO');
          expect(xadrez.naPosicao('a6')).toBe('CAVALO');
        });

        it('BISPO deve estar capturado', function() {
          expect(xadrez.pecasCapturadas().length).toBe(1);
          expect(xadrez.pecasCapturadas()).toContain('BISPO');
        });
      });
    });

  });
});
