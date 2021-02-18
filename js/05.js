function mathOperation (a, b, operation) {
    a = +prompt("Введите первое число");
    b = +prompt("Введите второе число");
    operation = prompt("Введите оператор");

    switch (operation) {
        case "+":
            res = a + b;
            break;
    }
    switch (operation) {
        case "-":
            res = a - b;
            break;
    }
    switch (operation) {
        case "/":
            res = a / b;
            break;
    }
    switch (operation) {
        case "*":
            res = a * b;
            break;
    }
    return res;
}

alert("Требуется ввести два числа и необходимую операцию: + (плюс), - (минус) / (разделить), * (умножить)")
mathOperation();
alert(res);