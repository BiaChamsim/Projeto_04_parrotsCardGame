
let qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));
let cartas = document.querySelector(".cards")

while( (qtdCartas % 2) === 1 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));
}

for (let index = 0; index < qtdCartas; index++) {
    cartas.innerHTML += `        
    <div class="card" onclick="flipCard(this)">
        <div class="face"> 
         <img src="/imagens/front.png"> 
        </div>

    <div class="backFace face">
        <img src="./imagens/bobrossparrot.gif">
    </div>
    </div>`
}

function flipCard(card) {
    card.querySelector(".face").classList.toggle("frontFlip")  
    card.querySelector(".backFace").classList.toggle("backFlip")  
}
