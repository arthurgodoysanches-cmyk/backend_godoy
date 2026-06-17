function podeVotar(idade){
    if(idade >= 16){
        return "Pode votar";
    } else {
        return "Não pode votar";
    }
}

console.log(podeVotar(16)); 