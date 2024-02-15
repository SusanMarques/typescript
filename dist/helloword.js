"use strict";
let pao = 0.12;
let broa = 1.50;
let qntpaes = 5;
let qntbroas = 10;
let arrecadacaoDia = (pao * qntpaes) + (broa * qntbroas);
let porcentagem = (10 / 100) * arrecadacaoDia;
console.log("O total arrecadado foi de R$" + arrecadacaoDia); // total arrecadado
console.log("valor a arrecadar na poupança R$" + porcentagem); // 10% 
