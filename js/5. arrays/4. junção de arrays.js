// junção de arrays

let frutas = ["🥥", "🍅", "🥝"];
let animais = ["🐶", "🐱", "🐭"];

// junta as listas formando uma só
frutas.contat(animais); //-> ['🥥', '🍅', '🥝', '🐶', '🐱', '🐭']

// junta as listas formando uma só
[(frutas, animais)].flat(); //-> ['🥥', '🍅', '🥝', '🐶', '🐱', '🐭']

// junta as frutas em uma string separado por praço um traço
frutas.join("-"); //-> "🥥-🍅-🥝-🍓-🍒-🍇";
