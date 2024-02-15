let qntpequeno:number = 1;
let qntmedio:number = 2;
let qntgrande:number = 10;

let precodapequena:number = 10;
let precodamedia:number = 12;
let precodagrande:number = 15;

let valorarrecadadodapequena:number = (qntpequeno * precodapequena);
let valorarrecadadodamedia:number = (qntmedio * precodamedia);
let valorarrecadadodagrande:number = (qntgrande * precodagrande);
let valortotalarrecadado:number = (valorarrecadadodapequena+valorarrecadadodamedia+valorarrecadadodagrande);

console.log("O valor arreadado da camisa pequena foi R$"+valorarrecadadodapequena);
console.log("O valor arreadado da camisa média foi R$"+valorarrecadadodamedia);
console.log("O valor arreadado da camisa grande foi R$"+valorarrecadadodagrande);
console.log("O valor total arrecadado foi de R$"+valortotalarrecadado);