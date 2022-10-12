// adicionando método 2

let pessoa = {
  nome: "Ana",
  sobrenome: "Lima",
  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.nomeCompleto(); // Ana Lima
