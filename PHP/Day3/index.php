<?php

$url = parse_url($_SERVER['REQUEST_URI'])['path'];

$route = [
    "/" => "Controllers/Home.php",
    "/about" => "Controllers/About.php",
    '/note' => "Controllers/Note.php",
    "/notes" => "Controllers/Notes.php",
    "/contact" => "Controllers/Contact.php",
];

if(array_key_exists($url, $route)) {
    require $route[$url];
}else{
    http_response_code(404);
    require('Day3/View/404.view.php');
}
