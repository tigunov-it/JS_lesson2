let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

function mat(a, b) {
    if (a > 0 && b > 0)
        res = a - b;
    else if (a < 0 && b < 0)
        res = a * b;
    else if (a < 0 && b > 0)
        res = a + b;
    else if (a > 0 && b < 0)
        res = a + b;
    return res;
        }

mat(a, b);
alert(res);