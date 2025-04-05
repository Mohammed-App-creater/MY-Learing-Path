<?php

$url = $_SERVER['REQUEST_URI'];

$route = [
    "/" => "Controllers/Home.php",
    "/about" => "Controllers/About.php",
    "/contact" => "Controllers/Contact.php",
];

if(array_key_exists($url, $route)) {
    require $route[$url];
}else{
    http_response_code(404);
    require('Controllers/404.php');
}
