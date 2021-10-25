<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../PHPMailer/vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$company = $data["company"];
$phone = $data["phone"];
$message = $data["message"];

$body = "<div style='text-align: center;'> <br><br> <div style='font-size: 20px;'> " . "Nombre: " . $name . "<br/>Correo: " . $email . "<br/>Compañia: " . $company . "<br/>Telefono: " . $phone . "<br/><br/><br/>Mensaje: " . $message . "</div> <br><br><br><br></div>";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mx60.hostgator.mx';                    //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'hello@beirat.mx';                      //SMTP username
    $mail->Password   = 'Control2580!';                         //SMTP password
    $mail->SMTPSecure = 'ssl';                                  //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('hello@beirat.mx', 'Beirat');

    $mail->addAddress('jaime.rico@tequilaplus.com', 'Jaime Rico');


    //Content
    $mail->isHTML(true);                                         //Set email format to HTML
    $mail->Subject = 'New lead';
    $mail->Body    = $body;

    $mail->send();
    echo 'Message has been sent';
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
