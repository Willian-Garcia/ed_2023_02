//P.1.9. Repita o exercício P.1.8 mas utilizando um bloco while, imprimindo os números em ordem decrescente.

console.log("Multiplos de 3");
let multiploA:number = 100;
while(multiploA >= 0){
    if(multiploA % 3 == 0){
        console.log(multiploA);
    }
    multiploA=multiploA-1;
}
