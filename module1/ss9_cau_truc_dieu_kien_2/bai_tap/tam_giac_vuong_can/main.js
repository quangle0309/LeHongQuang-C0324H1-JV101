let gioLam = +prompt("Nhập vào số giờ làm việc:");
let luong = +prompt("Nhập vào tiền lương của bạn:");

if (gioLam >= 200) {
    document.write("Tiền thưởng của bạn là: " + (luong * 0.2));
} else if (gioLam >= 100) {
    document.write("Tiền thưởng của bạn là: " + (luong * 0.1));
} else {
    document.write("Bạn không được thưởng");
}

