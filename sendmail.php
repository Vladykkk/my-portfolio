<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage("ua", "phpmailer/language/");
$mail->IsHTML(true);

// Від кого письмо
$mail->setFrom("rubakvlad7@gmail.com", "Рибак Владислав");

// Кому відправити
$mail->addAddress("rubakvlad5@gmail.com");

// Тема письма
$mail->Subject = "Contact Information";

// Тіло письма
$body = "<h1>Somebody send information</h1>";

if (trim(!empty($_POST["name"]))){
	$body .= "<p><strong>Ім'я та Прізвище:</strong>".$_POST["name"]."</p";
}
if (trim(!empty($_POST["email"]))){
	$body .= "<p><strong>E-mail:</strong>".$_POST["email"]."</p";
}
if (trim(!empty($_POST["number"]))){
	$body .= "<p><strong>Номер телефону:</strong>".$_POST["number"]."</p";
}
if (trim(!empty($_POST["message"]))){
	$body .= "<p><strong>Повідомлення:</strong>".$_POST["message"]."</p";
}

$mail->Body = $body;

// Відправляємо
if (!$mail->send()){
	$message = "Error";
} else {
	$message = "Message was send";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
?>