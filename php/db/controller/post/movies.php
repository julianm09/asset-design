<?php
//make the rules
if(isset($_POST['movie_name'])){
  $lastid = AddMovie($_POST['movie_name']);
  echo json_encode($lastid);
}
?>