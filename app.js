//NOMES SEMPRE MAIÚSCULO

let nomePrimeiraLetra1 = nome1.slice(0 , 1)

let restanteNome1 = nome1.slice(1)

let nomePrimeiraLetra2 = nome2.slice(0 , 1)

let restanteNome2 = nome2.slice(1)

let primeiraLetraMaiuscula1 = nomePrimeiraLetra1.toUpperCase();

let primeiraLetraMaiuscula2 = nomePrimeiraLetra2.toUpperCase();

let nomeCorrigido1 = primeiraLetraMaiuscula1 + restanteNome1

let nomeCorrigido2 = primeiraLetraMaiuscula2 + restanteNome2

document.querySelectorAll("h2")[1].innerHTML = nomeCorrigido1

document.querySelectorAll("h2")[2].innerHTML = nomeCorrigido2

//DADO 1

let randomNumber1 = 1

let randomDice1 = 'img/dice.'+randomNumber1+'.png'

let image1 = document.querySelectorAll('img') [0]

image1.setAttribute('src', randomDice1)

// DADO 2

let randomNumber2 = 1

let randomDice2 = 'img/dice.'+randomNumber2+'.png'

let image2 = document.querySelectorAll('img') [1]

image2.setAttribute('src', randomDice2)

// PLACAR

let player1 = nomeCorrigido1

let player2 = nomeCorrigido2

let placar1 = 0

let placar2 = 0

let player1win = randomNumber1 > randomNumber2

let player2win = randomNumber1 < randomNumber2

if (player1win) {
    placar1++
} 

if (player2win) {
    placar2++
} 

document.querySelector('p').innerHTML = nomeCorrigido1+' '+placar1+' X '+placar2+' '+nomeCorrigido2

// GANHADOR


let empate = randomNumber2 === randomNumber1

if (player1win) {
   document.querySelector('h2').innerHTML = nomeCorrigido1+' Ganhou!!!'
} else {
    document.querySelector('h2').innerHTML = nomeCorrigido2+' Ganhou!!!'
}

if (empate) {
    document.querySelector('h2').innerHTML = "Empate"
}

// repetir com o onclick

document.getElementsByTagName('button')[0].onclick = function(){

    let randomNumber1 = Math.floor(Math.random() * 6) +1

    let randomDice1 = 'img/dice.'+randomNumber1+'.png'

    let image1 = document.querySelectorAll('img') [0]

    image1.setAttribute('src', randomDice1)

    let randomNumber2 = Math.floor(Math.random() * 6) +1

    let randomDice2 = 'img/dice.'+randomNumber2+'.png'

    let image2 = document.querySelectorAll('img') [1]

    image2.setAttribute('src', randomDice2)

    let player1win = randomNumber1 > randomNumber2

    let player2win = randomNumber1 < randomNumber2

    let empate = randomNumber2 === randomNumber1

    if (player1win) {
        placar1++
    }

    if (player2win) {
        placar2++
    }

    document.querySelector('p').innerHTML = nomeCorrigido1+' '+placar1+' X '+placar2+' '+nomeCorrigido2

    if (player1win) {
    document.querySelector('h2').innerHTML = nomeCorrigido1+' Ganhou!!!' 
    } else {
        document.querySelector('h2').innerHTML = nomeCorrigido2+' Ganhou!!!' 
    }

    if (empate) {
        document.querySelector('h2').innerHTML = "Empate"
    }
}
