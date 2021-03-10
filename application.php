<?php

$sendto   = "780413@mail.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
$subject  = "Заказ на предоставление риэлторских услуг";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заказ на предоставление риэлторских услуг</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Спасибо за Ваш заказ!</h2>\r\n\";";
    echo "<p> В ближайшее время с Вами свяжется наш менеджер.</p>\r\n";
} else {
    echo "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Ошибка отправки заказа!</h2>\r\n\";";
    echo "<p>Приносим свои извинения. Мы работаем над исправлением ситуации. </p>\r\n";}


