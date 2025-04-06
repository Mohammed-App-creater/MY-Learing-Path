<?php

$config = require('Day2/config.php');
$db = new Database($config['database']);
$notes = $db ->query("SELECT * FROM notes where user_id = 1") -> getAll();

$heading = "My Notes";
require("Day3/View/notes.view.php");