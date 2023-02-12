<?php
  // Cargar la librería PHPMailer
  require 'phpmailer/PHPMailerAutoload.php';

  // Crear una nueva instancia de PHPMailer
  $mail = new PHPMailer;

  // Configurar el servidor SMTP
  $mail->isSMTP();
  $mail->Host = 'ferozo.com'; //Host
  $mail->SMTPAuth = true; //Autenticacion SMTP
  $mail->Username = 'contacto@contacto.com.ar'; //Usuario
  $mail->Password = 'password'; //Contraseña
  $mail->SMTPSecure = 'ssl'; //Protocolo
  $mail->Port = 465; //Puerto

  // Establecer el remitente y el destinatario
  $mail->setFrom($_POST['email'],$_POST['nombre']);
  $mail->addAddress('contacto@contacto.com.ar'); //Aqui va el correo donde van a llegar los mensajes.

  // Establecer el asunto y el cuerpo del mensaje
  $mail->Subject='Enviado por '.$_POST['nombre'];
  $mail->Body = "Nombre: {$_POST['nombre']}\nEmail: {$_POST['email']}\nMensaje: {$_POST['mensaje']}";

  // Enviar el mensaje y comprobar si se ha enviado correctamente
  if (!$mail->send()) {
    $response = array('error' => 'EL MENSAJE NO SE HA PODIDO ENVIAR. Error: ' . $mail->ErrorInfo);
    echo json_encode($response);
  } else {
    $response = array('message' => 'EL MENSAJE SE HA ENVIADO CORRECTAMENTE.');
    echo json_encode($response);
  }
