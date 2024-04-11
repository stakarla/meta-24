const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        const botoes = document.querySelectorAll(".botao");
        const textos = document.querySelectorAll(".aba-conteudo");
        
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].onclick = function () {
        
                for (let j = 0; j < botoes.length; j++) {
                    botoes[j].classList.remove("ativo");
                    textos[j].classList.remove("ativo");
                }
        …    segundos %= 60;
            minutos %= 60;
            horas %= 24;
         
         return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
        }
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
