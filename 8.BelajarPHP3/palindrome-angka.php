<?php

function palindrome($number){ 
      
    $temp = $number;   
    $new = 0;   
    while (floor($temp)) {   
        $d = $temp % 10;   
        $new = $new * 10 + $d;   
        $temp = $temp/10;
        
    }   
    if ($new == $number){   
        return 1;   
    } 
    else{ 
        return 0; 
    } 
} 

function palindrome_angka($angka) {
  // tulis kode di sini
  $angka++;
  if(palindrome($angka) == 1){
    return $angka;
  }else{ 
    return palindrome_angka($angka);
    
  }
   
  
}

// TEST CASES
echo palindrome_angka(8)."<br>"; // 9
echo palindrome_angka(10)."<br>"; // 11
echo palindrome_angka(117)."<br>"; // 121
echo palindrome_angka(175)."<br>"; // 181
echo palindrome_angka(1000)."<br>"; // 1001