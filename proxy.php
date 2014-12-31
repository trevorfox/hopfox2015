<?php
$file = file_get_contents($_GET['requrl']);
$json = json_decode($file);
echo $json->html;
?>
