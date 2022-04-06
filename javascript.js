let qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));

while( (qtdCartas % 2) === 1 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));
}

console.log(qtdCartas)
