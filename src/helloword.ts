let pao:number = 0.12;
let broa:number = 1.50;

let qntpaes: number = 5;
let qntbroas:number = 10;

let arrecadacaoDia: number = (pao * qntpaes) + (broa * qntbroas);
let porcentagem: number = (10/100) * arrecadacaoDia;

console.log("O total arrecadado foi de R$"+arrecadacaoDia) // total arrecadado
console.log("valor a arrecadar na poupança R$"+porcentagem) // 10% 