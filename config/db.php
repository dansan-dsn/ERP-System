<?php
    $host = ['local_server' => 'localhost', 'hosted_server' => ''];

    $current_host = ($_SERVER['HTTP_HOST'] == 'localhost') ? $host['local_server'] : $host['hosted_server'];

    try {
        $dbh = new PDO("mysql:host=$current_host;dbname=expense_tracker;charset=utf8", "root", "");
    } catch (PDOException $e) {
        if($current_host == "localhost") {
            print("Error: ". $e->getMessage());
        } else {
            print("Database Error");
        }
    }