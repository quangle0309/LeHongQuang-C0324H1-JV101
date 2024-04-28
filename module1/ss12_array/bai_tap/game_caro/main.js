let isPlayer1 = true;
let arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = [];
    for (let j = 0; j < 30; j++) {
        arr[i].push("");
    }
}
const rows = 20;
const cols = 30;

function drawBoard() {
    let board = "";
    for (let i = 0; i < rows; i++) {
        board += "<tr style='font-size: 30px'>";
        for (let j = 0; j < cols; j++) {
            board += `<th style="border: 2px solid blue; color: #8e17ef" id="th${i}-${j}" width="50px" height="50px" onclick="play(${i}, ${j})">${arr[i][j]}</th>`;
        }
        board += "</tr>"
    }
    document.getElementById("board-main").innerHTML = board;
}

function play(i, j) {
    if (arr[i][j] === "") {
        if (!isPlayer1) {
            arr[i][j] = "X";
            checkWin("X");
        } else {
            arr[i][j] = "O";
            checkWin("O");
        }
        isPlayer1 = !isPlayer1;
        drawBoard();
    }
}

function checkWin(char) {
    //kiểm tra đường chéo thuận
    for (let i = 0; i < rows - 4; i++) {
        for (let j = 0; j < cols - 4; j++) {
            if (arr[i][j] === char) {
                if (arr[i + 1][j + 1] === char &&
                    arr[i + 2][j + 2] === char &&
                    arr[i + 3][j + 3] === char &&
                    arr[i + 4][j + 4] === char
                ) {
                    for (let k = 0; k < 5; k++) {
                        document.getElementById(`th${i + k}-${j + k}`).style.color = "#FF0000";
                    }
                    alert(char + " Là người thắng");
                    resetGame();
                    return;
                }
            }
        }
    }

    //kiểm tra hàng ngang
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols - 4; j++) {
            if (arr[i][j] === char) {
                if (
                    arr[i][j + 1] === char &&
                    arr[i][j + 2] === char &&
                    arr[i][j + 3] === char &&
                    arr[i][j + 4] === char
                ) {
                    for (let k = 0; k < 5; k++) {
                        document.getElementById(`th${i}-${j + k}`).style.color = "#FF0000";
                    }
                    alert(char + " Là người thắng");
                    resetGame();
                    return;
                }
            }
        }
    }

    //kiểm tra hàng dọc
    for (let i = 0; i < rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === char) {
                if (
                    arr[i + 1][j] === char &&
                    arr[i + 2][j] === char &&
                    arr[i + 3][j] === char &&
                    arr[i + 4][j] === char
                ) {
                    for (let k = 0; k < 5; k++) {
                        document.getElementById(`th${i + k}-${j}`).style.color = "#FF0000";
                    }
                    alert(char + " Là người thắng");
                    resetGame();
                    return;
                }
            }
        }
    }

    //kiểm tra đường chéo nghịch
    for (let i = 0; i < rows - 4; i++) {
        for (let j = 4; j < cols; j++) {
            if (arr[i][j] === char) {
                if (
                    arr[i + 1][j - 1] === char &&
                    arr[i + 2][j - 2] === char &&
                    arr[i + 3][j - 3] === char &&
                    arr[i + 4][j - 4] === char
                ) {
                    for (let k = 0; k < 5; k++) {
                        document.getElementById(`th${i + k}-${j - k}`).style.color = "#FF0000";
                    }
                    alert(char + " Là người thắng");
                    resetGame();
                    return;
                }
            }
        }
    }
}
function resetGame() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr[i][j] = "";
        }
    }
    drawBoard();
}
drawBoard();
