// Tugas 3 – Looping
console.log('Tugas 3 – Looping');
var no = 0;
// case 1 - while
    console.log('CASE 1');
    // Looping Pertama
    console.log('LOOPING PERTAMA')
    no = 1;
    while(no >= 1){
        no += 1;
        console.log(`${no++} - I love coding`);
        if (no > 20 ){
            break;
        }
    }
    // looping kedua
    console.log('LOOPING KEDUA')
    no = 21;
    while (no >= 1) {
        no -= 1;
        console.log(`${no--} - I will become a mobile developer`);
        if (no < 2) {
            break;
        }
    }

    // Output
    // LOOPING PERTAMA
    // 2 - I love coding
    // 4 - I love coding
    // 6 - I love coding
    // 8 - I love coding
    // 10 - I love coding
    // 12 - I love coding
    // 14 - I love coding
    // 16 - I love coding
    // 18 - I love coding
    // 20 - I love coding
    // LOOPING KEDUA
    // 20 - I will become a mobile developer
    // 18 - I will become a mobile developer
    // 16 - I will become a mobile developer
    // 14 - I will become a mobile developer
    // 12 - I will become a mobile developer
    // 10 - I will become a mobile developer
    // 8 - I will become a mobile developer
    // 6 - I will become a mobile developer
    // 4 - I will become a mobile developer
    // 2 - I will become a mobile developer
// Case 2 - for
    console.log('CASE 2');
    // SYARAT:
    // A.Jika angka ganjil maka tampilkan Santai
    // B.Jika angka genap maka tampilkan Berkualitas
    // C.Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
    console.log('OUTPUT');
    for (let index = 1; index <= 20; index++) {
        if (index% 2 == 0) {
            console.log(`${index} - Berkualitas`)
        } else if (index % 3 == 0){
            console.log(`${index} - I Love Coding`)
        }else{
            console.log(`${index} - Santai`)
        }
    }
    //     OUTPUT
    // 1 - Santai
    // 2 - Berkualitas
    // 3 - I Love Coding
    // 4 - Berkualitas
    // 5 - Santai
    // 6 - Berkualitas
    // 7 - Santai
    // 8 - Berkualitas
    // 9 - I Love Coding
    // 10 - Berkualitas
    // 11 - Santai
    // 12 - Berkualitas
    // 13 - Santai
    // 14 - Berkualitas
    // 15 - I Love Coding
    // 16 - Berkualitas
    // 17 - Santai
    // 18 - Berkualitas
    // 19 - Santai
    // 20 - Berkualitas
// Case 3 - Membuat Persegi Panjang #
    console.log('CASE 3')
    for (let lebar = 0; lebar < 4; lebar++) {
        var text = '';
        text = '#';
        for (let panjang = 0; panjang < 7; panjang++) {
            text += '#';
        }
        console.log(text);
    }
    // ########
    // ########
    // ########
    // ######## 
// Case 4 - Membuat Tangga
    console.log('CASE 4')
    for (let tangga = 0; tangga < 7; tangga++) {
        var stairs = '';
        for (let pagar = 0; pagar < tangga+1; pagar++) {
            stairs += '#';
        }
        console.log(stairs)
    }
    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######
// Case 5 - Membuat Papan Catur
    console.log('CASE 5')
    for (let caturver = 1; caturver < 9; caturver++) {
        var block = '';
        if (caturver % 2 == 0) {
            for (let caturhor = 1; caturhor < 9; caturhor++) {
                if (caturhor % 2 == 0) {
                    block += ' ';
                } else {
                    block += '#';
                }
            }
            console.log(block)
        } else {
            for (let caturhor = 1; caturhor < 9; caturhor++) {
                if (caturhor % 2 == 0) {
                    block += '#';
                }else{
                    block += ' ';
                }
            }
            console.log(block)
        }
    }
    //  # # # #
    // # # # # 
    //  # # # #
    // # # # # 
    //  # # # #
    // # # # # 
    //  # # # #
    // # # # # 