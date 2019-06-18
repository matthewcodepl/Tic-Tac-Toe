const player1 = 'fa-circle-o';
const player2 = 'fa-times';
let round = 1;


const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(box => box.addEventListener('click', pick))

function pick(event) {
    const turn = round % 2 === 0 ? player2 : player1l
    event.targer.addclassList(turn);

}