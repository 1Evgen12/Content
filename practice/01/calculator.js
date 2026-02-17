var calculateButton = document.getElementById("Btn");

calculateButton.addEventListener("click", function () {
    var n = parseInt(document.getElementById("numberOfPeople").value)
    var bill = parseInt(document.getElementById("bill").value)
    var percent = parseInt(document.getElementById("percent").value)

    var s1 = document.getElementById('tips')
    var s2 = document.getElementById('totalAmount')
    var s3 = document.getElementById('perPersonAmount')

    if (isNaN(n) || isNaN(bill) || isNaN(percent) ||
        n <= 0 || bill <= 0 || percent < 0) {
        alert("Ошибка ввода данных.")
        return
    }
    else {
        var tips = (percent / 100 * bill);
        s1.innerText = tips.toFixed(2);
        s2.innerText = (bill + tips).toFixed(2);
        s3.innerText = ((bill + tips) / n).toFixed(2);
    }
});



