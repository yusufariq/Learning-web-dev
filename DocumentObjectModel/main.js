// mau masuk ke tag title, pakai document.
//console.log(document.title)

document.title = 'wadidaw'

//.append untuk isian body
const body = document.body
body.append('Hello World')


// masih belum muncul
const h1 = document.createElement('h1') // <h1></h1>
h1.textContent = "<marquee>ini h1 bro</marquee>" // <h1>ini h1 bro</h1>

// kalau mau muncul harus di append ke body
body.append(h1)


const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee scrollamount="30">Yusuf Ariq</marquee>'
const namaKamu = document.createElement('b')
namaKamu.innerText = '<marquee>siapa namanya? dimana rumahnya?</marquee>'


body.append(namaSaya)
body.append(namaKamu)