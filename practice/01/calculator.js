let n = parseInt(prompt("Сколько человек платят? "));
let price = parseInt(prompt("Введите счет: "))
let percent = parseInt(prompt("Введите % чаевых: "));

if (isNaN(n) || isNaN(price) || isNaN(percent) ||
    n <= 0 || price <= 0 || percent < 0) {
    alert("Ошибка ввода данных.")
}
else {
    let tips = (percent / 100 * price);

    alert(`Счёт: ${price} руб.\n
        Чаевые: ${tips} руб. (${percent}%)\n
        Итого: ${price + tips} руб.\n
        Количество человек: ${n}\n
        С каждого: ${Math.round((price + tips) / n)} руб.`
    )
}
