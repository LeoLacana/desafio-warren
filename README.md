# Desafio Warren Tech Academy

## Feito por Leonardo Oliveira Lacana

## Codificado em javascript, utizando Visual Studio Code.

### 1 Desafio:

Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.

Existem 120 números reversíveis abaixo de 1000.

Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.

### 2 Desafio:

Um professor de programação, frustrado com a falta de disciplina de seus alunos, decidi cancelar a aula se menos de x alunos estiverem presentes quando a aula for iniciada. O tempo de chegada varia entre:

 - Normal: tempoChegada <= 0
 - Atraso: tempoChegada > 0
 
 Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).

### 3 Desafio:

Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

## Como Rodar os Desafios

- Garanta que a máquina esteja com Node instalado

  ```bash
git clone git@github.com:LeoLacana/desafio-warren.git
```

Após executar o comando para rodar o arquivo do desafio, deve-se informar o(s) parâmetro(s) do argoritmo.

  ```bash
node desafio-01.js

- Após isso deve-se digitar um número inteiro positivo.
Exemplo: 1000
```

  ```bash
node desafio-02.js

- Após isso deve-se digitar um número inteiro positivo.
Exemplo: 3

- Depois deve-se digitar uma lista de inteiros separados por vírgulo (obs.: não colocar espaços entre os mesmos).
Exemplo: -1,0,2,3,4
```

  ```bash
node desafio-03.js

- Após isso deve-se digitar um número inteiro positivo.
Exemplo: 10

- Depois deve-se digitar uma lista de inteiros positivos separados por vírgulo (obs.: não colocar espaços entre os mesmos).
Exemplo: 2,3,4
```