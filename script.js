let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');

//cria ordem aleatória de cores...

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor

let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel ();
    }
}

// função para clicar nas cores

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');

        checkOrder();
    }, 250);
}

// criar uma função que retorna as cores
let createElement = () => {
    if(color == 0 ){
        return green;
    }else if(color == 1){
        return red; 
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

// função para o próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let lose = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo! \nClique em OK para iniciar um novo JOGO.`)
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de inicio do JOGO!

let playGame = () =>{
    alert('Bem vindo(a) ao Genius! Iniciando novo JOGO!')
    score = 0;

    nextLevel();
}

//Eventos de click para o JOGO

green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();