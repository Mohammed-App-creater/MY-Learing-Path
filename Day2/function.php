<?php

function dd($value){
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
    die();
}

function abort($code = "404"){
    http_response_code($code);
    require "Day3/View/". $code . ".view.php";

}

function authentication($condition, $states=404){
    if($condition) {
        abort($states);
    }
}