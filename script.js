const user_question= document.querySelector('#input_question');
const user_name= document.querySelector('#input_name');
const user_email= document.querySelector('#input_email');
const user_number= document.querySelector('#input_number');
const btn= document.querySelector('#btn_submit');

btn.addEventListener('click',()=>{
    event.preventDefault();
    let xhttp = new XMLHttpRequest();
    xhttp.open('post','functions.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`user_question=${ user_question.value} & user_name=${ user_name.value} & user_email=${ user_email.value}& user_number=${ user_number.value}`);
    // получить ответ
    xhttp.onreadystatechange = function () {
        if (this.status ==200 && this.readyState ==4) {
                response = JSON.parse(this.responseText);
                // Возращяем массив в которых произошла ошибка
                const values = Object.values(response);
                values.forEach(element => {
                     document.querySelector(`#input_${element}`).style.backgroundColor='red'
                     console.log('Ошибка в поле :'+element );
                });
                whiteInput = ()=>{
                    values.forEach(element =>{
                        document.querySelector(`#input_${element}`).style.backgroundColor='white';

                    })
                }
              setTimeout('whiteInput()', 3000); 

            }
    }
   
});