let view = document.getElementById("numberIn");
function inputValue(value) {
    view.value += value;
}
function output() {
    let num = eval(view.value);
    view.value = num;
}
function xoa() {
    view.value = "";
}