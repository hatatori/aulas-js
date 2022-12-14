// Alguns mΓ©todos de objetos

let frutas = {
  coco: "π₯₯",
  kiwi: "π₯",
  morango: "π",
  cereja: "π",
  uva: "π",
};

Object.keys(frutas); // ['coco', 'kiwi', 'morango', 'cereja', 'uva']
Object.values(frutas); // ['π₯₯', 'π₯', 'π', 'π', 'π']

// mais complexos
Object.entries(frutas);
/*
['coco', 'π₯₯']
['kiwi', 'π₯']
['morango', 'π']
['cereja', 'π']
['uva', 'π']
*/

// inverso do entries
entries = new Map([
  ["coco", "π₯₯"],
  ["kiwi", "π₯"],
]);
obj = Object.fromEntries(entries);
