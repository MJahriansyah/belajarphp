<?php

class Ape extends Animal{
    public $suara = "Auooo";
    function yell(){
        echo $this->suara."<br>";
    }
}

