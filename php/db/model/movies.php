<?php
require_once("model/connect.php");

function GetMovies(){
  global $db;

  //prepare the query to prevent SQL Injection that hacks and kills our database
  $stmt = $db->prepare('SELECT * FROM `movies`');
  $stmt->execute();
  //SELECT all the movies from the sheet
  //$result = $db->query('SELECT * FROM `movies`');
  return $stmt->fetchAll();
  //var_dump($result->fetchAll());
}

function AddMovie($name='Babe'){
  global $db;
  // try {
  //   $result = $db->query("INSERT INTO `movies` (`id`, `movie_name`) VALUES (NULL, '".$name."')");
  //   var_dump($result);
  // } catch (Exception $e){
  //   echo $e->getMessage();
  // }
  // return false;
  //prepare the query and check :m_name to see if there's special character problems
  var_dump($name);
  $stmt = $db->prepare("INSERT INTO `movies` (`id`, `movie_name`) VALUES (NULL, :m_name)", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(":m_name"=>$name));
  //var_dump($stmt->lastInsertId());

  //return the last inserted id
  return $db->lastInsertId();

  //INSERT a new movie to the sheet
  //$result = $db->query("INSERT INTO `movies` (`id`, `movie_name`) VALUES (NULL, '".$name."')");
}

function UpdateMovie($mn="default", $id=NULL){
  global $db;

  if($id == NULL){
    return false;
  }

  $stmt = $db->prepare("UPDATE `movies` SET `movie_name` = :movie_name WHERE `movies`.`id` = :id;", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(
    ":movie_name"=>$mn,
    ":id"=>$id
  ));
}



function DeleteMovie($id=NULL){
  global $db;

  if($id == NULL){
    return false;
  }

  $stmt = $db->prepare("DELETE FROM `movies` WHERE `movies`.`id` = :id", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(
    ":id"=>$id
  ));
}
?>