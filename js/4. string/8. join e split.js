// split e join

let frase1 = "img1,img2,img2";
frase1.split(","); // ['img1', 'img2', 'img2']

let frase2 = "img1,img2;img2";
frase2.split(/[,;]/); // ['img1', 'img2', 'img2']

let frase3 = ["o", "gato", "é", "branco", "e", "preto"];
frase3.join("-"); // // o-gato-é-branco-e-preto
