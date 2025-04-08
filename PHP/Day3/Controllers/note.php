<?php

require 'Day3/ResponsCode.php';
$heading = "Note";
$config = require('Day2/config.php');
$db = new Database($config['database']);
$Current_user = 1;
$note = $db ->query("SELECT * FROM notes where id = :id", ["id" => $_GET['id']]) -> findOrAbort();



authentication(($note['user_id'] != $Current_user), ResponsCode::FORBIDDEN);

require("Day3/View/note.view.php");