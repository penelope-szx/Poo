//ATIVIDADE 1

//classe do objeto
class Carro {
  constructor(marca, velocidade) {
    this.marca=marca;
    this.velocidade=velocidade;
}
//metodo
acelerar() {
  this.velocidade+=60;
  console.log(`${this.marca} acelerou! Velocidade atual: ${this.velocidade}km/h`);
 }
}
//objetos
const carro1 = new Carro("Fusca",67);
const carro2 = new Carro("Ferrari",50);
//testando
carro1.acelerar();
carro2.acelerar();

console.log(carro1);
console.log(carro2);