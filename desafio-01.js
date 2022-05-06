var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// função para verificar se todos os numeros são impares
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
    var count = 0;
    var n = 12;
    while (n < limit) {
      if (n.toString()[n.toString().length - 1] !== '0') {
        var newN = n.toString();
        var inverseNewN = '';
        for (let i = 0; i < newN.length; i += 1) {
          inverseNewN += newN[newN.length - 1 - i];
        }
        if ((parseInt(inverseNewN) + n) % 2 !== 0) {
          const sum = parseInt(inverseNewN) + n;
          if (isOdd(sum.toString())) {
            count += 1;
            console.log(`Número: ${n} - Reverso: ${inverseNewN} - Soma: ${sum}`);
          };
        };
      }
      n += 1;
    }
    console.log(`Existem ${count} números reversíveis abaixo de ${limit}`);
  }

  reverseNumberSum(resp);
});


