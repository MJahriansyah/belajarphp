<?php

function papan_catur($angka) {
    for($i = 0; $i < $angka; $i++){
        if($i % 2 == 0){
            echo "#";
            echo "&nbsp";

        }else{
            echo "&nbsp";
        }
        for($j = 0; $j < $angka-1; $j++){
           echo "#";
           echo "&nbsp";
        }
        echo "<br>";
    }

}

// TEST CASES
echo"Papan catur 4<br>";
echo papan_catur(4); 
/*
# # # #
 # # #
# # # #
 # # #
 */
echo"Papan catur 8<br>";

echo papan_catur(8);
/* 
# # # # # # # #
 # # # # # # # 
# # # # # # # #
 # # # # # # # 
# # # # # # # #
*/
echo"Papan catur 5<br>";

echo papan_catur(5); 
/*
# # # # #
 # # # #
# # # # #
 # # # # 
# # # # #
*/
