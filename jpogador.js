//ATIVIDADE 2

//classe do objeto
class Jogador{
  constructor(nome, pontuacao){
    this.nome=nome;
    this.pontuacao=pontuacao;
}
//metodo
ganharPontos(valor){
    this.pontuacao+=valor;
    console.log(`${this.nome} ganhou ${valor} pontos! Total: ${this.pontuacao}`);
 }
}
//objetos
const jogador1=new Jogador("Luz", 67);
const jogador2=new Jogador("Teixeira", 69);
const jogador3=new Jogador("Zago", 33);
//testando
console.log(jogador1);
console.log(jogador2);
console.log(jogador3); 