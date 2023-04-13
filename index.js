let number = parseInt(prompt("nhap so luong nguyen to"));
let N = 2;
let count = 0;
if (number > 20) {
    number = 20;
}
for (N; N < 1000; N++) {
    if (count < number) {
        checkSNT(N);
        if (checkSNT(N) == true) {
            document.write(N + "<br/>");
            count++;
        }
    } else {
        break;
    }
}

function checkSNT(value) {
    if (value == 2) {
        return true;
    } else {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                return false;
            } else {
                return true;
            }
        }
    }

}