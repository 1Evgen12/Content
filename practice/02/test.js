let answer1 = '6', answer2 = 'жир', answer3 = 'звезда', answer4 = '4 года';
let count = 0;
let question1 = prompt("Сколько будет 2 + 2 * 2?\n1) 8.    2) 6.\n3) 4.    4) 2.\nВведите ответ")

if (question1 == answer1) {
    count += 10;
}
else {
    alert("Ошибка ввода данных.")
}

let question2 = prompt("Что у верблюда в горбу?\n1) Вода.  2) Мясо.\n3) Жир.   4) Кость.\nВведите ответ")
if (question2.toLowerCase() == answer2) {
    count += 10;
} else {
    alert("Ошибка ввода данных.")
}

let question3 = prompt("Солнце. Что это?\n1) Планета.  2) Комета.\n3) Астероид.     4) Звезда.\nВведите ответ")
if (question3.toLowerCase() == answer3) {
    count += 10;
} else {
    alert("Ошибка ввода данных.")
}

let question4 = prompt("Високосный год бывает раз в ...?\n1) 4 года.   2) 1 год.\n3) 3 года.   4) 5 лет.\nВведите ответ")
if (question4.toLowerCase() == answer4 || question4.includes('4')) {
    count += 10;
    alert(`Вы набрали ${count} баллов`);
} else {
    alert("Ошибка ввода данных.")
}