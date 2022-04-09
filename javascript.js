
let qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));
let cartas = document.querySelector(".cards")
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"]
let primeiraCarta;
let segundaCarta;
let podeVirar = true;
let qtdJogadas = 0;


while( (qtdCartas % 2) === 1 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = Number(prompt("Com quantas cartas entre 4 e 14 você quer jogar?"));
}

function comparador() { 
	return Math.random() - 0.5; 
}

gifs = gifs.sort(comparador)

let gifsEscolhidos = gifs.slice(0, qtdCartas / 2)
gifsEscolhidos = gifsEscolhidos.concat(gifsEscolhidos)

gifsEscolhidos = gifsEscolhidos.sort(comparador)

for (let index = 0; index < qtdCartas; index++) {
    cartas.innerHTML += `        
    <div class="card" onclick="flipCard(this)">
        <div class="face"> 
         <img src="/imagens/front.png"> 
        </div>

    <div class="backFace face">
        <img src="./imagens/${gifsEscolhidos[index]}">
    </div>
    </div>`
}



function flipCard(card) { 
    if(podeVirar){
        card.querySelector(".face").classList.add("frontFlip")  
        card.querySelector(".backFace").classList.add("backFlip")  
        console.log(card.querySelector(".backFlip > img").getAttribute("src"))
    
        if(primeiraCarta === undefined) {
            primeiraCarta = card;
    
        } else{
            segundaCarta = card;
            verificarIgualdade();
        }   

        qtdJogadas ++;
    }

}

function verificarIgualdade(){
    const parteTrasPrimeira = primeiraCarta.querySelector(".backFlip > img").getAttribute("src") 
    const parteTrasSegunda = segundaCarta.querySelector(".backFlip > img").getAttribute("src")

    if(parteTrasPrimeira === parteTrasSegunda){
        primeiraCarta.removeAttribute("onclick")
        segundaCarta.removeAttribute("onclick")
        primeiraCarta = undefined
        segundaCarta = undefined
        
        verificaFimJogo();

    } else{
        setTimeout(function(){
            primeiraCarta.querySelector(".face").classList.remove("frontFlip")  
            primeiraCarta.querySelector(".backFace").classList.remove("backFlip") 
            segundaCarta.querySelector(".face").classList.remove("frontFlip")  
            segundaCarta.querySelector(".backFace").classList.remove("backFlip") 
            primeiraCarta = undefined
            segundaCarta = undefined
            podeVirar = true
        }, 1000)

        podeVirar = false
    }

}

function verificaFimJogo(){
    const qtdCartasComPares = document.querySelectorAll(".frontFlip").length 

    if(qtdCartas === qtdCartasComPares){
        
        setTimeout(function (){
                alert(`Você ganhou em ${qtdJogadas} jogadas!`)
        }, 500)

    }
}

