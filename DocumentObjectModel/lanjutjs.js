// jangan lupa variabel ini agar bisa append
const body = document.body
const btn1 = document.getElementById('btn1')
//.querySelector bebas untuk id(#) ataupun class(.) atau langsung tag (tapi nanti jadi tidak spesific)
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

function gantiWarna() {
    btn1.style.background = 'aqua'
}

//text btn di html disini
const defaultText = 'Klik saya 2'
btn2.textContent = defaultText

function clickButton() {
    btn2.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'HALO WASSUP'
    body.append(newText)
}


function ubahText() {
    btn2.textContent = 'hihihi'
    const newText2 = document.createElement('h1')
    newText2.textContent = 'Klik gw bro'
    body.append(newText2)
}

function oriText() {
    btn2.textContent = defaultText
    const newText3 = document.createElement('h1')
    newText3.textContent = 'Yahhh gajadi'
    newText3.style.background = 'aqua'
    body.append(newText3)
}