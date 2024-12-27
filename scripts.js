


let imagem = document.querySelector(".imagem-copo") 
let circulo = document.querySelector(".circulo")


function trocarImagem(endereco){

   
 imagem.src = endereco
}

function trocarCor(cor){
    circulo.style.background = cor
}
