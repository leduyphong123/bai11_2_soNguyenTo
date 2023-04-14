let number = parseInt(prompt("nhap so luong nguyen to"));
let N = 2;
let count = 0;
if (number > 20) {
    number = 20;
}
for (N; N < 1000; N++) {
    if (count < number) {
        if (checkValue(N) == true) {
            document.write(N + "<br/>");
            count++;
        }
    }
}

function checkValue(N) {
    if (N == 2) {
        return true;
    } else {

        for (let i = 2; i < N; i++) {
            if (N % i == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}