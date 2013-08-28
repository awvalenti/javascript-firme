// O ponto de entrada da aplicacao chama-se main. Main deve chamar a funcao
// requirejs para carregar os modulos necessarios ao inicio da aplicacao.
//
// Aqui, estamos fazendo tres chamadas a requirejs porque os modulos do Jasmine nao
// aceitam carregamento assincrono. Normalmente, faz-se apenas uma chamada.
//
// spec-runner-main.js esta' no diretorio webapp/js. Esse passa a ser o caminho-base
// (baseUrl). Todos os caminhos referenciados a partir de entao passam a ser relativos
// a esse. Veja os caminhos mencionados abaixo: */jasmine, */jasmine-html e spec/XadrezSpec.
//
// Se necessario, baseUrl tambem pode ser configurado manualmente da seguinte maneira:
//     requirejs.config({ baseUrl: 'meu-caminho-base' });

requirejs(['lib/jasmine-1.3.1/jasmine'], function() {
requirejs(['lib/jasmine-1.3.1/jasmine-html'], function() {

requirejs([
  'spec/XadrezSpec'
],
function() {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});

});
});
