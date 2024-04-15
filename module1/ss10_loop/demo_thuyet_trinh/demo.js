// document.write(1);
// document.write(2);
// document.write(3);
// document.write(4);
// document.write(5);
// document.write(6);
// document.write(7);
// document.write(8);
// document.write(9);
// document.write(10);
//
//
// for (let i = 1; i <= 10; i++) {
//     document.write(i)
// }

// for (let n = 1; n <= 10; n++) {
//     console.log("Bảng cửu chương của: " + n)
//     for (let j = 1; j <= 10; j++) {
//         console.log(n + " x " + j + " = " + (n*j));
//     }
//     console.log("========================");
// }

// let i = 0;
// while ( i <= 10) {
//     console.log(i);
//     i++
// }
//
// let d = 0;
// do {
//     console.log(d)
//     d++
// } while (d <= 10);

// // Tìm số chẵn đầu tiên trong mảng và in ra
// const myArray = [1, 3, 5, 6, 7, 8, 9];
// let firstEvenNumber;
//
// for (let i = 0; i < numbers.length; i++) {
//     if (myArray[i] % 2 === 0) {
//         firstEvenNumber = myArray[i];
//         break; // Kết thúc vòng lặp ngay khi tìm thấy số chẵn đầu tiên
//     }
// }
// console.log("Số chẵn đầu tiên trong mảng là:", firstEvenNumber);

// In ra các số lẻ từ 1 đến 10, bỏ qua các số chẵn
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Bỏ qua các số chẵn và tiếp tục vòng lặp
//     }
//     console.log(i);
// }

// //for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// //while
// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++
// }
//
// //do..while
// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i < 10);
let sum = 0;
for (let i = 1;i < 20; i+=2) {
        sum += i;
}
console.log(sum);
