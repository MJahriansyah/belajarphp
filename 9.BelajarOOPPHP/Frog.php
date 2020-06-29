<?php


class Frog extends Animal{
    public $lompat = "hop hop";

     function jump(){
         $this->set_legs(4);
        echo $this->lompat."<br>".$this->legs;
        
    }
}

