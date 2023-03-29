<?php
  $con= mysqli_connect('fdb25.atspace.me','3455539_retinue','retinue.123','3455539_retinue');
  $db="3455539_retinue";
  mysqli_select_db($con,'3455539_retinue');
/*
if(isset($_POST['post_submit1'])){
    
      $postTitle = mysqli_real_escape_string($con,$_POST['postTitle']);
      $postSubTitle = mysqli_real_escape_string($con,$_POST['postSubTitle']);
      
      $postCategory = mysqli_real_escape_string($con,$_POST['postCategory']);
      $postSubCategory = mysqli_real_escape_string($con,$_POST['postSubCategory']);
      
      $postBody = $_POST['postBody'];
      print_r($postBody);
        $postinsertQuery = "INSERT INTO blogs(Title, SubTitle, Category, SubCategory, Body) VALUES ('$postTitle', '$postSubTitle', '$postCategory','$postSubCategory','$postBody')";
        $iquery = mysqli_query($con,$postinsertQuery);
        echo("Successfully Submitted ");
}
*/
  if(isset($_POST['post_submit'])){
     
      $postTitle = mysqli_real_escape_string($con,$_POST['postTitle']);
    
      $postSubTitle = mysqli_real_escape_string($con,$_POST['postSubTitle']);
      
      $postCategory = mysqli_real_escape_string($con,$_POST['postCategory']);
    
      $postSubCategory = mysqli_real_escape_string($con,$_POST['postSubCategory']);
      
      //$postBody = $_POST['postBody'];
    
      $postBody = mysqli_real_escape_string($con,$_POST['postBody']);
    
      $postShortDescription = mysqli_real_escape_string($con,$_POST['postShortDescription']);
  
      $postTags = mysqli_real_escape_string($con,$_POST['postTags']);
      
      $postKeywords = mysqli_real_escape_string($con,$_POST['postKeywords']);
      
      $postinsertQuery = "INSERT INTO blogs(Title, SubTitle, Category, SubCategory, Body, ShortDescription, Keywords, Tags) VALUES ('$postTitle', '$postSubTitle', '$postCategory','$postSubCategory','$postBody','$postShortDescription','$postKeywords','$postTags')";
   
      $iquery = mysqli_query($con,$postinsertQuery);
 
      if ($iquery) {
        echo("Successfully Submitted");
        }
        else {
          echo('Failed To Submit');
        }
  }



?>
