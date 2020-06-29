<?php
function ubah_huruf($string){
//kode di sini
$huruf =[
    "a" => 1,
    "b" => 2,
    "c" => 3,
    "d" => 4,
    "e" => 5,
    "f" => 6,
    "g" => 7,
    "h" => 8,
    "i" => 9,
    "j" => 10,
    "k" => 11,
    "l" => 12,
    "m" => 13,
    "n" => 14,
    "o" => 15,
    "p" => 16,
    "q" => 17,
    "r" => 18,
    "s" => 19,
    "t" => 20,
    "u" => 21,
    "v" => 22,
    "w" => 23,
    "x" => 24,
    "y" => 25,
    "z" => 26,
    1  =>"a",
    2 =>"b",
    3 =>"c",
    4 =>"d",
    5 =>"e",
    6 =>"f",
    7 =>"g",
    8 =>"h",
    9 =>"i",
    10=>"j",
    11=>"k",
    12=>"l",
    13=>"m",
    14=>"n",
    15=>"o",
    16=>"p",
    17=>"q",
    18=>"r",
    19=>"s",
    20=>"t",
    21=>"u",
    22=>"v",
    23=>"w",
    24=>"x",
    25=>"y",
    26=>"z"
    
];
$arr = [];
for ($i=0; $i < strlen($string) ; $i++) { 
    $arr[] =  $huruf[substr($string,$i,1)];
}
$arr2 =[];
for ($x=0; $x < count($arr) ; $x++) { 
    $arr2[]= $huruf[$arr[$x]+1];
}
return implode($arr2)."<br>";

}

// TEST CASES
echo ubah_huruf('wow'); // xpx
echo ubah_huruf('developer'); // efwfmpqfs
echo ubah_huruf('laravel'); // mbsbwfm
echo ubah_huruf('keren'); // lfsfo
echo ubah_huruf('semangat'); // tfnbohbu
