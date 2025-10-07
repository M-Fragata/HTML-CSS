
function jogo(a) {
    const maquina = Math.random()
    /*
    pedra = 1/3
    papel = 2/3
    tesoura = 3/3
    */
    if (maquina <= 1/3) {
        if (a == 'rock') {
            alert(`Adversário: pedra - você: pedra - Empatou!`)
        } else if (a == 'paper') {
            alert('Adversário: pedra - você: papel - Ganhou!')
        } else if (a == 'scissors')
            alert('Adversário: pedra - você: tesoura - Perdeu!')
    } else if (maquina <= 2/3) {
        if (a == 'rock') {
            alert(`Adversário: papel - você: pedra - Perdeu!`)
        } else if (a == 'paper') {
            alert('Adversário: papel - você: papel - Empatou!')
        } else if (a == 'scissors')
            alert('Adversário: papel - você: tesoura - Ganhou!') 
    } else if (maquina < 3/3) {
        if (a == 'rock') {
            alert(`Adversário: tesoura - você: pedra - Ganhou!`)
        } else if (a == 'paper') {
            alert('Adversário: tesoura - você: papel - Perdeu!')
        } else if (a == 'scissors')
            alert('Adversário: tesoura - você: tesoura - Empatou!')        
    }
}

function rock() {
    jogo('rock')
}

function paper() {
    jogo('paper')
}

function scissors() {
    jogo('scissors')
}