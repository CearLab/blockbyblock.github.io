<?php
// Change the 3 variables below
$yourName = 'Federico Oliva';
$yourEmail = 'federico.oliva.it@gmail.com';
$subject = 'New subscription - BlockByBlock Worskhop';

$ch = $_POST['choice'];
$email = $_POST['email'];

if($ch=="contact")
{

$message = "From: ".$_POST[$yourName]."\n Email: $email \r\n";
$message = $message.$_POST['Hello there! Thanks for subscribing to the Workshop mailing list! Stay tuned for more information!'];
$subject = "New subscription - BlockByBlock Workshop";

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
