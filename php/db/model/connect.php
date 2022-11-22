<?php
//connect to the spreadsheet mdiatest
try {
  $db = new PDO("mysql:dbname=mdiatest;host=localhost:3306", "root", "root");
} catch (Exception $e){
  echo $e->getMessage();
}

?>