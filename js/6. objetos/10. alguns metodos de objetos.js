// Alguns métodos de objetos

let frutas = {
  coco: "🥥",
  kiwi: "🥝",
  morango: "🍓",
  cereja: "🍒",
  uva: "🍇",
};

Object.keys(frutas); // ['coco', 'kiwi', 'morango', 'cereja', 'uva']
Object.values(frutas); // ['🥥', '🥝', '🍓', '🍒', '🍇']

// mais complexos
Object.entries(frutas);
/*
['coco', '🥥']
['kiwi', '🥝']
['morango', '🍓']
['cereja', '🍒']
['uva', '🍇']
*/

// inverso do entries
entries = new Map([
  ["coco", "🥥"],
  ["kiwi", "🥝"],
]);
obj = Object.fromEntries(entries);
