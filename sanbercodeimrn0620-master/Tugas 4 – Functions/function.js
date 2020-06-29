// Tugas 4 – Functions
// case 1
/*
    Tulis code function di sini 
*/
console.log('soal 1')
function teriak(){
    return "Halo Sanbers!";
}

console.log(teriak()) 
// output
// "Halo Sanbers!" 
// case 2
/*
    Tulis code function di sini
*/
console.log('soal 2')
function kalikan(a, b){
    return a*b;
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) 
// Output
// 48
// case 3
/* 
    Tulis kode function di sini
*/
console.log('soal 3')
function introduce(nama, umur, alamat, hobi){
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 
// output
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 