// Tugas 2 - String Conditional - Conditional
// Section 1 if-else
    var nama = "John"
    var peran = ""

    // sample output
    // Output untuk Input nama = '' dan peran = ''
    // "Nama harus diisi!"
    nama = "";
    peran = "";
    console.log('case 1')
    if(nama === '' && peran === '') console.log('Nama harus diisi!');

    //Output untuk Input nama = 'John' dan peran = ''
    // "Halo John, Pilih peranmu untuk memulai game!"
    nama = "John";
    peran = "";
    console.log('case 2')
    if (nama !== '' && peran === '') console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);

    //Output untuk Input nama = 'Jane' dan peran 'Penyihir'
    // "Selamat datang di Dunia Werewolf, Jane"
    // "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"
    nama = "Jane";
    peran = "Penyihir";
    console.log('case 3')
    if (nama !== '' && peran !== '') console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);

    //Output untuk Input nama = 'Jenita' dan peran 'Guard'
    // "Selamat datang di Dunia Werewolf, Jenita"
    // "Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
    nama = "Jane";
    peran = "Guard";
    console.log('case 4')
    if (nama !== ''){
        console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
        if (peran === 'Guard') {
            console.log(`Halo ${peran} ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
        }
    }

    //Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
    // "Selamat datang di Dunia Werewolf, Junaedi"
    // "Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" 
    nama = "Junaedi";
    peran = "Werewolf";
    console.log('case 4')
    if (nama !== '') {
        console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
        if (peran === 'Werewolf') {
            console.log(`Halo ${peran} ${nama}, Kamu akan memakan mangsa setiap malam!`)
        }
    }
// Section 1 switchcase
var hari = 1;
var bulan = 5;
var tahun = 1945;

const generateBulan = bulan => {
    switch (bulan) {
        case 1: { bulan = 'Januari'; break; }
        case 2: { bulan = 'Februari'; break; }
        case 3: { bulan = 'Maret'; break; }
        case 4: { bulan = 'April'; break; }
        case 5: { bulan = 'Mei'; break; }
        case 6: { bulan = 'Juni'; break; }
        case 7: { bulan = 'Juli'; break; }
        case 8: { bulan = 'Agustus'; break; }
        case 9: { bulan = 'September'; break; }
        case 10: { bulan = 'Oktober'; break; }
        case 11: { bulan = 'November'; break; }
        case 12: { bulan = 'Desember'; break; }
        default: { console.log('Tidak terjadi apa-apa'); }
    }
    return bulan;
}

const generateDate = (hari, bulan, tahun) => {
    let text;
    let error = [];
    if(hari >= 1 && hari <= 31){
        text = `${hari}`;
    }else{
        error.push({
            message: 'assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)'
        }) 
    }
    if(bulan >= 1 && bulan <= 12){
        text = `${text} ${generateBulan(bulan)}`;
    }else{
        error.push({
            message: 'assign nilai variabel bulan disini! (dengan angka antara 1 - 12)'
        }) 
    }
    if(tahun >= 1900 && tahun <= 2200){
        text = `${text} ${tahun}`;
    }else{
        error.push({
            message: 'assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)'
        }) 
    }
    if (error.length > 0) {
        error.forEach(er => {
            console.log(er.message);
        });
    }else{
        return text;
    }
}

hari = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

console.log(generateDate(hari, bulan, tahun));

// Output
// 21 Januari 1945