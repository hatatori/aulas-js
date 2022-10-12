// encontrar string

let str = "O carro bateu com outro carro";
str.search("carro"); // 2
str.indexOf("carro"); // 2
str.lastIndexOf("carro"); // 24 -> encontra a posição do último valor do 'carro'
str.match(/car/g); // ['car', 'car']
str.includes("carro"); // true
str.startsWith("A carro"); // false
