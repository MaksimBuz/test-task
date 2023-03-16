<?php 

$name= $_POST['user_name'];
$user_question= $_POST['user_question'];
$user_email= $_POST['user_email'];
$user_number= $_POST['user_number'];

// Функция для валидации
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$name=test_input($name);
$user_question=test_input($user_question);
$user_email=test_input($user_email);
$user_number=test_input($user_number);
$array_error=[

];
// Валидация вопроса
if (strlen($user_question)< 10 || strlen($user_question) > 170) {

    $array_error['1']='question';
}

// Валидация эмайл
if (filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
    echo "E-mail адрес '$user_email' указан верно.\n";
}
else {
    $array_error['2']='email';
}

// Валидация телефона
if (preg_match( '/^\s?(\+\s?7|8)([- ()]*\d){10}$/', $user_number)) {
  
}
else {
    $array_error['3']='number';
}


$json = json_encode($array_error);
echo $json;


?>