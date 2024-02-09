let pao: number=  0.12
let broa: number= 1.50
let  qtdpaes: number= 5 
let  qtdbroas :number=10

let arrecadacaodia:number = (pao*qtdpaes*0.12) + (broa*qtdbroas*1.50)

let poupanca:number= (10/100)*arrecadacaodia


console.log("Total arrecadado com a venda dos pães e broas: R$"arrecadacaodia)
console.log("Valor a ser guardado na conta de poupança: R$", poupanca)
