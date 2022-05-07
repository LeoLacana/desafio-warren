var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// função para verificar se todos os dígitos do número são impar
function isOdd(number) {
  for (let i = 0; i < number.length; i += 1) {
    if (parseInt(number[i]) % 2 === 0) {
      return false;
    }
  }
  return true;
}

leitor.question("Qual o número limite?\n", function (answer) {
  var resp = answer;
  leitor.close();

  function reverseNumberSum(limit) {
    var count = 0; // contador de números
    var n = 12; // o menor numero reversível setado aqui
    while (n < limit) { // começo do laço com condicional do número ser menor que o limite
      if (n.toString()[n.toString().length - 1] !== '0') { // condicional do número não poder terminar com 0
        var newN = n.toString();
        var inverseNewN = ''; // criando variável para armazenar o numero invertido
        for (let i = 0; i < newN.length; i += 1) { // laço para criar o numero invertido
          inverseNewN += newN[newN.length - 1 - i];
        }
        if ((parseInt(inverseNewN) + n) % 2 !== 0) { // condicional da soma do numero mais o inverso ser impar
          const sum = parseInt(inverseNewN) + n;
          if (isOdd(sum.toString())) { // condicional para validar se todos dígitos da soma são impar
            count += 1; // acrescentar no contador
            console.log(`Número: ${n} - Reverso: ${inverseNewN} - Soma: ${sum}`);
          };
        };
      }
      n += 1; // aqui avança para o próximo número
    }
    console.log(`Existem ${count} números reversíveis abaixo de ${limit}`);
  }

  reverseNumberSum(resp);
});


