var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumArray(summableArray) { // função para somar todos os elemento do array
  return summableArray.reduce( (accum, curr) => accum + curr );
}

leitor.question("Informe um número\n", function (answer) {
  const numeroBase = parseInt(answer); // número base
  leitor.question("Informe o vetor\n", function (answer) {
    const arrayBase = answer.split(',').map(ans => parseInt(ans)); // array base
    leitor.close();

    let response = [];

    function desafio(newArray, arrayBase) { // parâmetros newArray é um array vazio e o parâmetro arrayBase é o input do array base
      for (let i = 0; i < arrayBase.length; i += 1) {
        let newNewArray = newArray.map(a => a);
        newNewArray.push(arrayBase[i])
        if (sumArray(newNewArray) === numeroBase) { // condicional para verificar se a soma bate com o input do número base
          response.push(newNewArray);
        }
        if (sumArray(newNewArray) > numeroBase) { // condicional para verificar se a soma ja passou do número base, se sim finaliza a função
          break;
        }
        desafio(newNewArray, arrayBase); // roda novamente a função para percorrer todas as formas
      }
    }

    desafio([], arrayBase);

    response = response.map(res => String(res.sort())) // aqui é feita ordenão de cada array
    response = response.filter((prev, curr) => { // aqui é removida a redundância
      return response.indexOf(prev) === curr;
    })

    let smallestArraySize = response[response.length - 1].split(',').length; // aqui é setado na variável o tamanho do menor array

    let smallestArrays = response.filter(res => res.split(',').length === smallestArraySize); // aqui é filtrado os arrays de menor tamanho tomando como base a variável smallestArraySize
    smallestArrays = smallestArrays.map(small => small.split(',').map(sml => parseInt(sml))); // aqui basicamente converte todos os elementos em inteiros

    console.log(`\n${numeroBase}`);
    smallestArrays.forEach(small => console.log(small));
  });
});