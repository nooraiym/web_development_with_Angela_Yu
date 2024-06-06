/* function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name}, мне ${age} и это моя первая программа.`);
    
    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (i = 0; i < skills.length; i++) {
            alert(`Я владею: ${skills[i]}`);
        }
        showSkills();
    
    let age = prompt('Сколько вам лет?', '');
    switch (age) {
        case '18':
            alert('У тебя отличные шансы стать разработчиком!');
            break;
        case '100':
            alert('Достаточно преклонный возраст для изучения чего-то нового.');
            break;
        default:
            alert('Круто, продолжай учиться!');
            break;
    }
    console.log(alert());

    function calcPow(num) {
        return num ** 2;
    }
    console.log(calcPow(4)); 
    }
}

myFirstApp('Nuraiym', 25); */


function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name}, мне ${age} и это моя первая программа`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (i = 0; i < skills.length; i++)
        alert(`Я владею: ${skills[i]}`);
    }
    showSkills();

    function checkAge() {
        let userAge = prompt('Сколько вам лем?', '');
        if (userAge > 18) {
            alert('У тебя отличные шансы стать разработчиком!');
        } else if (userAge < 18) {
            alert('Круто что ты так рано задумался о професии');
        } else if (age > 100) {
            alert('Вам правда больше ста? Может, попробуете еще раз?');
        }
    }
    checkAge();
    
    function calcPow(num) {
            return num ** 2;
    }
    console.log(calcPow(4)); 
}

myFirstApp('Jana', 27);