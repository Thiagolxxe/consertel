<?php
include("/class/PHPMailer-master/src/PHPMailer.php");
include("/class/PHPMailer-master/src/SMTP.php");
include("/class/PHPMailer-master/src/Exception.php");

$nomeUser = filter_input(INPUT_POST,"nome",FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser = filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
$foneUser = filter_input(INPUT_POST,"telefone",FILTER_SANITIZE_SPECIAL_CHARS);
$mensageUser = filter_input(INPUT_POST,"mensagem",FILTER_SANITIZE_SPECIAL_CHARS);

$mail = new \PHPMailer\PHPMailer\PHPMailer();


    //Server settings
    $mail->SMTPDebug = 2;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.ipsemarketing.com.br';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ola@ipsemarketing.com.br';                     //SMTP username
    $mail->Password   = 'Ipse2020x@';                               //SMTP password
    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($emailUser);
    $mail->addAddress('arte6@ipse.ag');     //Add a recipient
   
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contato Site';
    $mail->Body    = "
    Nome: {$nameUser}<br>
    Telefone: {$foneUser}<br>
    E-mail: {$emailUser}<br>
    Mensagem: {$mensageUser}
    ";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Mensagem Enviada <a href="/">Voltar</a>';
