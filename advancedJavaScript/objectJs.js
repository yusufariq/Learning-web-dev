let mhs = {
  nama: 'Yusuf Ariq',
  umur: 24,
  ips: [3.0, 3.25, 3.5],
  alamat: {
    jalan: 'Jl. Bunga Raya',
    kota: 'Medan',
    provinsi: 'Sumatera Utara',
  },
}

// Function Declaration
function objectMhs(nama, umur) {
  let mhs = {}
  mhs.nama = nama
  mhs.umur = umur
  return mhs
}
var mhs2 = objectMhs('widodo', 21)

// Sebenarnya tidak masalah nama func diawali huruf besar atau tidak, hanya untuk pembeda mana func declaration dan mana func constructor
// Constructor
function Mahasiswa(nama, umur) {
  this.nama = nama
  this.umur = umur
}
// pakai new untuk constructor, tanpa new anggap dianggap func declaration
var mhs3 = new Mahasiswa('Erik', 19)

//this    adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function/object
//pakai function declaration : this mengembalikan object global
//pakai object literal : this mengembalikan object yang bersangkutan
//pakai constructor : this mengembalikan object yang baru dibuat

function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir
  this.trayek = trayek
  this.penumpang = penumpang
  this.kas = kas

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang)
    return this.penumpang
  }
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('angkot masih kosong!')
      return false
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined
        this.kas += bayar
        return this.penumpang
      }
    }
  }
}

var angkot1 = new Angkot('Yusuf Ariq', ['Sunggal', 'Pancing'], [], 0)
