class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

function getValue(x, y) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let w = +document.getElementById("width-in").value;
    let h = +document.getElementById("height-in").value;
    let red = +document.getElementById("red").value;
    let green = +document.getElementById("green").value;
    let blue = +document.getElementById("blue").value;
    if (isNaN(w) || isNaN(h) || isNaN(red) || isNaN(green) || isNaN(blue)) {
        alert("Chiều dài, chiều rộng và màu chỉ có thể là số!!!")
    } else if (w > 0 && w < 1340 && h > 0 && h < 980 && red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        let rectangle = new Rectangle(w, h);
        let area = rectangle.getArea();
        let perimeter = rectangle.getPerimeter();
        document.getElementById("value-out").innerHTML = "Diện tích: " + area + "   Chu vi: " + perimeter;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillRect(x, y, w, h);
    } else {
        alert("Mã màu có giá trị từ 0 đến 255 -- Chỉ vẽ được hình chữ nhật có kích thước chiều dài < 1340 và chiều rộng < 980!!!");
    }
}
