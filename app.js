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

let player1 = nome1

let player2 = nome2

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

document.querySelector('p').innerHTML = nome1+' '+placar1+' X '+placar2+' '+nome2

// GANHADOR


let empate = randomNumber2 === randomNumber1

if (player1win) {
   document.querySelector('h2').innerHTML = nome1+' Ganhou!!!'
} else {
    document.querySelector('h2').innerHTML = nome2+' Ganhou!!!'
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

    document.querySelector('p').innerHTML = nome1+' '+placar1+' X '+placar2+' '+nome2

    if (player1win) {
    document.querySelector('h2').innerHTML = nome1+' Ganhou!!!' 
    } else {
        document.querySelector('h2').innerHTML = nome2+' Ganhou!!!' 
    }

    if (empate) {
        document.querySelector('h2').innerHTML = "Empate"
    }
}
