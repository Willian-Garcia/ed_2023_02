function maior_menor_ifelse_wga(n1:number,n2:number):string{
    if(n1 == n2){
        return (`O número ${n1} é igual ao número ${n2}`);
    }else{
        if(n1 < n2){
            return (`O número ${n2} é maior que o número ${n1}`);
        }else{
            return (`O número ${n1} é maior que o número ${n2}`);
        }
    }
}
function maior_menor_switch_wga(n1:number,n2:number):string{
    let mn = true
    switch(mn){
        case n1 < n2 == true:
            return (`O número ${n2} é maior que o número ${n1}`);
        break
        case n1 > n2 == true:
            return (`O número ${n1} é maior que o número ${n2}`);
        break
        case n1 == n2 == true:
            return (`O número ${n1} é igual ao número ${n2}`);
} return "";
}

export{maior_menor_ifelse_wga,maior_menor_switch_wga}