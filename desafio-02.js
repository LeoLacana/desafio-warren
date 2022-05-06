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
    
    function classDay(x, tempoChegada) {
      const normal = tempoChegada.filter((tempo) => parseInt(tempo) <= 0)
      if (normal.length >= x) {
        console.log(`\nA ${normal.length} alunos no horário, então a aula será normal`);
      } else {
        console.log(`\nA apenas ${normal.length} alunos no horário, então a aula será cancelada`);
      }
    }
    
    classDay(resp, horariosDeEntrada);
  });
});
