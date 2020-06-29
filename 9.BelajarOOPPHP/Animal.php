<?php
class Animal{
    public $nama;
    public $legs = 2;
    public $blood = "false";
    
    function __construct($nama){
        $this->nama = $nama;
    }
    function name(){
        
        return $this->nama."<br>" ;
    }
    function set_legs($legs){
        return $this->legs = $legs;
    }
    function legs(){
        return $this->legs."<br>";
    }
    function cold_blooded(){
        return $this->blood."<br>";
    }
}






// index.php


