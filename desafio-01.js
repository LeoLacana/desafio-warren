// função para verificar se todos os numeros são impares
function isOdd(allNumbers) {
  for (let i = 0; i < allNumbers.length; i += 1) {
    if (parseInt(allNumbers[i]) % 2 === 0) {
      return false;
    }
  }
  return true;
}

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
          console.log(`${n} + ${inverseNewN}: ${sum}`);
        };
      };
    }
    n += 1;
  }
  console.log('Quantidade: ' + count);
}

reverseNumberSum(1000000);
