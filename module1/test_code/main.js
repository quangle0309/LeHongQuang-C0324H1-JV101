let giohang = [];

function themvaogiohang(button) {
    let parentDiv = button.parentElement;
    let tenSanPham = parentDiv.querySelector('a').innerText;
    let donGia = parentDiv.querySelector('span').innerText;
    let soLuongInput = parentDiv.querySelector('input[name="soluong"]');
    let soLuong = parseInt(soLuongInput.value);

    if (isNaN(soLuong) || soLuong <= 0) {
        alert("Số lượng không hợp lệ");
        return;
    }


    let index = giohang.findIndex(item => item.tenSanPham === tenSanPham);

    if (index !== -1) {

        giohang[index].soLuong += soLuong;
    } else {

        giohang.push({
            tenSanPham: tenSanPham,
            donGia: donGia,
            soLuong: soLuong
        });
    }


    capNhatGioHang();
}

function capNhatGioHang() {
    let tableBody = document.getElementById('dssp');
    tableBody.innerHTML = '';


    giohang.forEach(function(sanPham, index) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${sanPham.tenSanPham}</td>
            <td>${sanPham.donGia}</td>
            <td>${sanPham.soLuong}</td>
            <td><input type="text" name="ghichu" placeholder="Ghi chú"></td>
            <td>${parseInt(sanPham.donGia) * parseInt(sanPham.soLuong)}đ</td>
            <td><button onclick="xoaSanPham(this)">Xóa</button></td>
        `;
        tableBody.appendChild(newRow);
    });

    capNhatTongDonHang();
}

function capNhatTongDonHang() {
    let tongTien = 0;
    for (let sanPham of giohang) {
        tongTien += +parseInt(sanPham.donGia) * +parseInt(sanPham.soLuong);
    }

    let tongDonHangCell = document.getElementById('tongtien');
    tongDonHangCell.innerText = tongTien + '000';
}

function xoaSanPham(button) {
    let row = button.parentElement.parentElement;
    let index = row.rowIndex - 1; // -1 vì chỉ số
    row.remove();
    giohang.splice(index, 1);

    for (let i = index; i < giohang.length; i++) {
        let tableRow = document.getElementById("dssp").rows[i];
        tableRow.cells[0].innerText = i + 1;
    }

    capNhatTongDonHang();
}

function capNhatTongDonHang() {
    let tongTien = 0;
    let length = giohang.length;
    for (let i = 0; i < length; i++) {
        tongTien += +parseInt(sanPham.donGia) * +parseInt(sanPham.soLuong);
    }

    let tongDonHangCell = document.getElementById('tongtien');
    tongDonHangCell.innerText = tongTien + '000';
}