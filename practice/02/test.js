let answer1 = 2, answer2 = 3, answer3 = 4, answer4 = 1;
let count = 0;
let question1 = parseInt(prompt("Сколько будет 2 + 2 * 2?\n1) 8.    2) 6.\n3) 4.    4) 2.\nВведите номер ответа"))

if (!isNaN(question1) && (question1 > 0 && question1 <= 4)) {
    if (question1 == answer1)
        count += 10;
}
else {
    alert("Ошибка ввода данных.")
}

let question2 = parseInt(prompt("Что у верблюда в горбу?\n1) Вода.  2) Мясо.\n3) Жир.   4) Кость.\nВведите номер ответа"))
if (!isNaN(question2) && (question2 > 0 && question2 <= 4)) {
    if (question2 == answer2)
        count += 10;
} else {
    alert("Ошибка ввода данных.")
}

let question3 = parseInt(prompt("Солнце. Что это?\n1) Планета.  2) Комета.\n3) Астероид.     4) Звезда.\nВведите номер ответа"))
if (!isNaN(question3) && (question3 > 0 && question3 <= 4)) {
    if (question3 == answer3)
        count += 10;
} else {
    alert("Ошибка ввода данных.")
}

let question4 = parseInt(prompt("Високосный год бывает раз в ...?\n1) 4 года.   2) 1 год.\n3) 3 года.   4) 5 лет.\nВведите номер ответа"))
if (!isNaN(question4) && (question4 > 0 && question4 <= 4)) {
    if (question4 == answer4)
        count += 10;
    alert(`Вы набрали ${count} баллов`);
} else {
    alert("Ошибка ввода данных.")
}