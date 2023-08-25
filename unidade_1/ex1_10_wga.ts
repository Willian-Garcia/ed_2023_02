//P.1.10. Repita o exercício P.1.9 utilizando um bloco do while.

console.log("Multiplos de 3");
let multiploX:number = 100;
do{
    if(multiploX % 3 == 0){
        console.log(multiploX);
    }
    multiploX=multiploX-1;
}while(multiploX >= 0)