// substituição

let mensagem = "Maria é rica";
let mensagem2 = "O computador precisa de reparos";

mensagem.replace("é", "3"); // Amanda 3 rica
mensagem.replace(/a/g, "4").replace(/e/g, "3"); // M4ri4 é ric4
mensagem.replace(/[ae]/g, "3"); //M3ri3 é ric3

mensagem2.replace("computador", "teclado"); // O teclado precisa de reparos

// mais complexo
t = { a: "4", e: "3", i: "1", o: "0" };
mensagem2.replace(/[aeio]/g, (e) => t[e]); // 0 c0mput4d0r pr3c1s4 d3 r3p4r0s
