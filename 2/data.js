//constant, konstanta, nilai yang tidak dapat diubah
const nama = "Yusuf Ariq";
//let, nilainya bisa diubah
let usia = 24;

let biodata = document.getElementById('biodata');

// console.log(nama);
// console.log(usia);
// kalau mau memanggil variabel dalam string (``), harus memakai ${} << kalau pengen banyak kalimat+didalamnya terdapat varibel
// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
//bisa juga sepert ini
// console.log('nama saya adalah', nama, 'usia saya adalah', usia)

// jika ingin dua kata atau lebih, pakai huruf besar di huruf awal kata
function generateBiodata() {
    // variabel kosong, akan bernilai jika validasi if berjalan
    let generasi;

    if (usia >= 19 && usia < 60) {
        generasi = "generasi dewasa";
    } else if (usia > 10 && usia <= 18) {
        generasi = "generasi remaja";
    } else if (usia >= 60) {
        generasi = "generasi lansia";
    }
    else {
        generasi = "generasi anak anak";
    }
    return biodata.innerHTML = generasi;
}


console.log(nama);
console.log(usia);

generateBiodata();