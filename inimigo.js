//ATIVIDADE 3

//classe arma
class Arma{
  constructor(nome, poder){
    this.nome=nome;
    this.poder=poder;
  }
}
//classe do inimigo
class Inimigo{
  constructor(nome, vida, dano){
    this.nome=nome;
    this.vida=vida;
    this.dano=dano;
  }
  //metodo
  receberDano(valor){
    this.vida-=valor;
    if (this.vida<=0){
      this.vida=0;
      console.log(`${this.nome} foi derrotado!`);
    } else {
      console.log(`${this.nome} agora tem ${this.vida} de vida`);
      }
    }
}

//classe do jogador
class Jogador{
  constructor(nome, vida, arma){
    this.nome=nome;
    this.vida=vida;
    this.arma=arma;
  }

  //sistema de atq
  atacar(alvo){
    console.log(`${this.nome} ataca ${alvo.nome} com ${this.arma.nome}!`);
    alvo.receberDano(this.arma.poder);
  }
}

const Excalibur=new Arma("Espada Excalibur", 67);
const Saber=new Jogador("Saber", 100, Excalibur);
const inimigo = new Inimigo("Dragão de gelo", 50, 15);
//testando
Saber.atacar(inimigo);
Saber.atacar(inimigo);