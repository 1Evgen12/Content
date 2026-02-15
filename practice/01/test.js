let n = parseInt(prompt("Сколько человек платят? "));
let price = parseInt(prompt("Введите счет: "))
let percent = parseInt(prompt("Введите % чаевых: "));

let tips = (percent / 100 * price);
alert(`Чаевые: ${tips}`)
alert((price + tips) / n);