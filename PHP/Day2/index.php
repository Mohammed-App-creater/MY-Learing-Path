<?php

require 'Database.php';
require 'function.php';
$config = require('config.php');
$id = $_GET['id'];
$dns ='mysql:' . http_build_query( $config['database'], '', ';');

$db = new Database($config['database'], 'root', '199605');

$query = "SELECT * FROM stud where id = ?";
$posts = $db -> query($query, [$id]) -> fetchAll();

dd($posts);
