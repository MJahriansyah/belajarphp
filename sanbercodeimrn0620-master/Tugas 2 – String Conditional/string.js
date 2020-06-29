// Tugas 2 - String Conditional - String
// Section 1
    console.log('Soal No. 1 (Membuat kalimat)');
    var word = 'JavaScript';
    var second = 'is';
    var third = 'awesome';
    var fourth = 'and';
    var fifth = 'I';
    var sixth = 'love';
    var seventh = 'it!';
    console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);
    // sample output
    // JavaScript is awesome and I love it! 
// Section 2
    console.log('Soal No.2 Mengurai kalimat (Akses karakter dalam string)');
    var sentence = "I am going to be React Native Developer";
    var firstWord = sentence[0];
    var secondWord = `${sentence[2]}${sentence[3]}`;
    // ${sentence.split(" ")[2]}
    var thirdWord = `${sentence[5]}${sentence[6]}${sentence[7]}${sentence[8]}${sentence[9]}`; // lakukan sendiri 
    var fourthWord = `${sentence[11]}${sentence[12]}`; // lakukan sendiri 
    var fifthWord = `${sentence[14]}${sentence[15]}`; // lakukan sendiri 
    var sixthWord = `${sentence[17]}${sentence[18]}${sentence[19]}${sentence[20]}${sentence[21]}`; // lakukan sendiri 
    var seventhWord = `${sentence[30]}${sentence[31]}${sentence[32]}${sentence[33]}${sentence[34]}${sentence[35]}${sentence[36]}${sentence[37]}${sentence[38]}`; // lakukan sendiri 
    console.log('First Word: ' + firstWord);
    console.log('Second Word: ' + secondWord);
    console.log('Third Word: ' + thirdWord);
    console.log('Fourth Word: ' + fourthWord);
    console.log('Fifth Word: ' + fifthWord);
    console.log('Sixth Word: ' + sixthWord);
    console.log('Seventh Word: ' + seventhWord); 
    // sample output
    // First word: I
    // Second word: am
    // Third word: going
    // Fourth word: to
    // Fifth word: be
    // Sixth word: React
    // Seventh word: Developer 
// Section 3
    console.log('Soal No. 3 Mengurai Kalimat (Substring)');
    var sentence2 = 'wow JavaScript is so cool';
    var firstWord2 = sentence2.substring(0, 3);
    var secondWord2 = sentence2.substring(4, 14); // do your own! 
    var thirdWord2 = sentence2.substring(15, 17); // do your own! 
    var fourthWord2 = sentence2.substring(18, 20); // do your own! 
    var fifthWord2 = sentence2.substring(21, 25); // do your own! 
    console.log('First Word: ' + firstWord2);
    console.log('Second Word: ' + secondWord2);
    console.log('Third Word: ' + thirdWord2);
    console.log('Fourth Word: ' + fourthWord2);
    console.log('Fifth Word: ' + fifthWord2);
    // sample output
    // First Word: wow
    // Second Word: JavaScript
    // Third Word: is
    // Fourth Word: so
    // Fifth Word: cool 
// Section 4
    console.log('Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String');
    var sentence3 = 'wow JavaScript is so cool';
    var firstWord3 = sentence3.substring(0, 3);
    var secondWord3 = sentence2.substring(4, 14); // do your own! 
    var thirdWord3 = sentence2.substring(15, 17);; // do your own! 
    var fourthWord3 = sentence2.substring(18, 20);; // do your own! 
    var fifthWord3 = sentence2.substring(21, 25); ; // do your own! 

    var firstWordLength = firstWord3.length
    var secondWordLength = secondWord3.length
    var thirdWordLength = thirdWord3.length
    var fourtWordLength = fourthWord3.length
    var fifthWordLength = fifthWord3.length
    // lanjutkan buat variable lagi di bawah ini 
    console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength);
    console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
    console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
    console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourtWordLength);
    console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength); 
    // sample output
    // First Word: wow, with length: 3
    // Second Word: JavaScript, with length: 10
    // Third Word: is, with length: 2
    // Fourth Word: so, with length: 2
    // Fifth Word: cool, with length: 4