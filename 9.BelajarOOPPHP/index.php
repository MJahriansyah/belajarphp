<?php

require("Animal.php");
require("Ape.php");
require("Frog.php");

$sheep = new Animal("shaun");

echo $sheep->name(); // "shaun"
echo $sheep->legs(); // 2
echo $sheep->cold_blooded(); // false

echo "<br>";
echo "<br>";
$kodok = new Frog("buduk");
$kodok->jump(); // "hop hop"
echo $kodok->legs();

echo "<br>";
echo "<br>";
$sungokong = new Ape("kera sakti");
$sungokong->yell(); // "Auooo"
echo $sungokong->legs();