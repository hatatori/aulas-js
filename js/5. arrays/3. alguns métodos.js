// alguns métodos de array

let frutas = ["🥥", "🍅", "🥝", "🍓", "🍒", "🍇"];

// alguns métodos array
frutas.push("🍎"); // adiciona uma maçã no final da lista
frutas.unshift("🍎"); // adiciona uma maçã no começo da lista
frutas.pop(); // remove o último item da lista
frutas.sort(); // organiza em ordem alfabética ou crescente
frutas.shift(); // remove o o primeiro item da lista
frutas.slice(0, 3); // seleciona o intervalo, do 0 até o 2
frutas.splice(0, 3); // remove o intervalo da lista do 0 até o 2
frutas.includes("🦊"); // false ; Verifica se determinado item está contido na lista
frutas.indexOf("🥝"); // 2 ; retorna a posição do item
frutas.map((e) => "Animal: " + e); // percorre o laço
