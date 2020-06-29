<?php
function pasangan_terbesar($angka){
// kode di sini
$nilai = [];

for ($i=0; $i < strlen($angka); $i++) { 
   $nilai[] =  substr($angka,$i,1).substr($angka,$i+1,1)."&nbsp";  
}
$nilai = max($nilai);

return "Pasangan terbesar (".$angka.") adalah :". $nilai."<br>";
}



// TEST CASES
echo pasangan_terbesar(641573); // 73
echo pasangan_terbesar(12783456); // 83
echo pasangan_terbesar(910233); // 91
echo pasangan_terbesar(71856421); // 85
echo pasangan_terbesar(79918293); // 99