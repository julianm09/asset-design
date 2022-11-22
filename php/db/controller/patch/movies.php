<?php
  //then make the rules for the get request

  if(isset($_PATCH['movie_name']) && isset($_PATCH['id'])){
    UpdateMovie($_PATCH['movie_name'], $_PATCH['id']);
    echo "updated!";
  }
?>