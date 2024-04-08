function changeMoney() {
    let moneyInput = document.getElementById("moneyIn").value;
    let input = document.getElementById("in").value;
    let output = document.getElementById("out").value;
    if (input == "USD" && output == "VND") {
        document.getElementById("result").innerHTML ="result: "+ (moneyInput * 23000) + "VND";
    } else if (input == "USD" && output == "USD") {
        document.getElementById("result").innerHTML ="result: " + moneyInput + "$";
    } else if (input == "VND" && output == "USD") {
        document.getElementById("result").innerHTML ="result: " + (moneyInput / 23000) + "$";
    } else {
        document.getElementById("result").innerHTML ="result: " + moneyInput + "VND"
    }
}