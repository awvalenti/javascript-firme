var xadrez = new Xadrez();
console.log('Ao comecar, e2 tinha', xadrez.getPeca('e2'), 'e e4 tinha', xadrez.getPeca('e4'));

xadrez.moverPeca('e2', 'e4');

console.log('Apos mover de e2 para e4, e2 fica com', xadrez.getPeca('e2'), 'e e4 fica com', xadrez.getPeca('e4'));
