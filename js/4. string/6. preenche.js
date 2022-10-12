// preenche string com outra

let text = "5";
let padstart_1 = text.padStart(2, "0"); // 05
let padstart_2 = text.padStart(3, "0"); // 005
let padstart_3 = text.padStart(4, "0"); // 0005

let padded_1 = text.padEnd(2, "0"); // 50
let padded_2 = text.padEnd(3, "0"); // 500
let padded_3 = text.padEnd(4, "0"); // 5000
