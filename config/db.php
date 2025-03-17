<?php
    try {
        $dbh = new PDO("mysql:host=localhost;dbname=expense_tracker", "root", "");
    } catch (PDOException $e) {
        print("Error: ". $e->getMessage());
    }