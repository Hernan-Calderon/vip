<?php

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre: ".$nombre."<br>Teléfono: ".$telefono."<br>Correo: ".$correo."<br>Mensaje".$mensaje; 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'hernanalonsocalderon@gmail.com';                     // SMTP username
    $mail->Password   = '3136241945Hh';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('hernanalonsocalderon@gmail.com', 'Contacto');
    $mail->addAddress('hernan.1701625243@ucaldas.edu.co');     // Add a recipient
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Mensaje Contacto';
    $mail->Body    = $contenido;    

    $mail->send();
    echo '<a href="../../index.html" target="_blank">Mensaje enviado con éxito</a>';
    
} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
}
