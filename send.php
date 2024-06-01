<?php

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $name = htmlspecialchars($name);
    $surname = htmlspecialchars($surname);
    $phone = htmlspecialchars($phone);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    $name = urldecode($name);
    $surname = urldecode($surname);
    $phone = urldecode($phone);
    $email = urldecode($email);
    $message = urldecode($message);

    $name = trim($name);
    $surname = trim($surname);
    $phone = trim($phone);
    $email = trim($email);
    $message = trim($message);

    if (mail("mrblaseyt1337@gmail.com",
        "Новое письмо",
        "Имя: ".$name."\n".
        "Фамилия: ".$surname."\n".
        "Номер телефона: ".$phone."\n".
        "Email: ".$email."\n".
        "Сообщение: ".$message,
        "From: no-reply@mydomain.ru \r\n")
    
    ) {
        echo ('Письмо успешно отправлено!');
    }

    else {
        echo ('Есть ошибки! Проверьте данные');
    }

?>