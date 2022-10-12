// adicionando método 1

let pessoa = {
  nome: "John",
  sobrenome: "Doe",
  nomeCompleto: function () {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.nomeCompleto(); // John Doe
