<?php

$recepient = "";
$sitename = "Мастерская красоты";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$services= trim($_POST["services"]);
$message = "Имя: $name \nТелефон: $phone ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");