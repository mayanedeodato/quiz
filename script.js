let acertos = [3,1,5,2,4];
let op_escolhida = [];
let qnt_certas = 0;

function resposta(num_prgnt, selecionada){
    op_escolhida [num_prgnt] = selecionada.value;

    id="p" + num_prgnt;

    labels = document.getElementById(id);
    labels[3].style.backgroundcolor = "white";
    labels[5].style.backgroundcolor = "white";
    labels[7].style.backgroundcolor = "white";
}
    function corrigir(){
    qnt_certas = 0;
    for(i=0; i < acertos.length;i++){
        if (acertos[i]==op_escolhida[i]){
            qnt_certas++;
        }
    }
    document.getElementById("result").innerHTML = qnt_certas;
}