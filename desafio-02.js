function classDay(x, tempoChegada) {
  const normal = tempoChegada.filter((tempo) => tempo <= 0)
  if (normal.length >= x) {
    console.log("Aula normal");
  } else {
    console.log("Aula cancelada");
  }
}

classDay(2, [-2, 1, 2, 3, 4]);
