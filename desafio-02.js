var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var resp;
var horariosDeEntrada;

leitor.question("Qual o mínimo de alunos?\n", function (answer) {
  resp = parseInt(answer);
  
  leitor.question("Quais são os horários de entradas?\n", function (answer) {
    horariosDeEntrada = answer.split(',');
    leitor.close();
    
    function classDay(x, tempoChegada) { // parâmetros x é o mínimo de alunos e o tempoChegada são os horários de cada aluno
      const normal = tempoChegada.filter((tempo) => parseInt(tempo) <= 0) // aqui filtra só os numero menores ou iguais a 0
      if (normal.length >= x) { // condicional para verificar se a quantidade de alunos que chegaram no horário bate com o mínimo de alunos
        console.log(`\nA ${normal.length} alunos no horário, então a aula será normal`);
      } else {
        console.log(`\nA apenas ${normal.length} alunos no horário, então a aula será cancelada`);
      }
    }
    
    classDay(resp, horariosDeEntrada);
  });
});
