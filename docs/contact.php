<?php
// Change the 3 variables below
$yourName = 'Federico Oliva';
$yourEmail = 'lvofrc95@gmail.com';
$subject = 'New subscription - word studio';

$ch = $_POST['choice'];
$email = $_POST['email'];

if($ch=="contact")
{

$message = "From: ".$_POST['name']."\n Email: $email \r\n";
$message = $message.$_POST['message'];
$subject = "New subscription - word studio";

}
else
{
	$message = "\n Email: $email ";
}


$mailit = mail($yourEmail, $subject, $message, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n");



		if ($mailit ) {
		echo "success";
		}
		else {
		echo "error";
		}


?>
