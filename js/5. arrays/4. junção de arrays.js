// junΓ§Γ£o de arrays

let frutas = ["π₯₯", "π", "π₯"];
let animais = ["πΆ", "π±", "π­"];

// junta as listas formando uma sΓ³
frutas.contat(animais); //-> ['π₯₯', 'π', 'π₯', 'πΆ', 'π±', 'π­']

// junta as listas formando uma sΓ³
[(frutas, animais)].flat(); //-> ['π₯₯', 'π', 'π₯', 'πΆ', 'π±', 'π­']

// junta as frutas em uma string separado por praΓ§o um traΓ§o
frutas.join("-"); //-> "π₯₯-π-π₯-π-π-π";
