<?php

	// Allow cross-origin requests
	header("Access-Control-Allow-Origin: https://cearlab.github.io/blockbyblock.github.io/");

	// Change the 3 variables below
	$yourName = 'Federico Oliva';
	$yourEmail = 'federico.oliva.it@gmail.com';
	$subject = 'New subscription - BlockByBlock Workshop';

	if (isset($_POST['choice']) && isset($_POST['email'])) {
		$ch = $_POST['choice'];
		$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			echo "Invalid email address";
			exit();
		}

		if ($ch == "contact" && isset($_POST['name'])) {
			$name = htmlspecialchars($_POST['name']);
			$message = "From: " . $name . "\n Email: " . $email . "\r\n";
			$message .= "Hello there! Thanks for subscribing to the Workshop mailing list! Stay tuned for more information!";
			$subject = "New subscription - BlockByBlock Workshop";
		} else {
			$message = "\n Email: " . $email;
		}

		$headers = "From: $email\r\n";
		$headers .= "Reply-To: $email\r\n";
		$headers .= "Return-Path: $email\r\n";

		$mailit = mail($yourEmail, $subject, $message, $headers);

		if ($mailit) {
			echo "success";
		} else {
			error_log("Mail failed to send to $yourEmail", 0);
			echo "error";
		}
	} else {
		echo "Missing required fields";
	}
?>
