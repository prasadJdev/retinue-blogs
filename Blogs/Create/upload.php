
<?php

var_dump($_FILES);

foreach ($_FILES['myFiles']['tmp_name'] as $key => $values) {
  $targetPath = 'uploads/'.basename($_FILES['myFiles']['name'][$key]);
  move_uploaded_file($values,$targetPath);
  echo('http://theretinue.atspace.cc/Blogs/create/'.$targetPath);
}

?>

<?php
/*
var_dump($_FILES);

foreach ($_FILES["myFiles"]["tmp_name"] as $key => $value) {
  $targetPath = 'uploads/'.basename($_FILES["myFiles"]["name"][$key]);
  move_uploaded_file($value,$targetPath);
}
*/
?>