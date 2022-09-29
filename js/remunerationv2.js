/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


    //var decalaration
const salairefixe = 1100, prixS = 140, prixM = 180, prixXS= 350;

window.addEventListener("load", function() {
    window.document.querySelector("#btn_envoyer").addEventListener("click", simulSalaire);
    });
   
    
    
    
    

    function simulSalaire(){
        let nbventeS = document.querySelector("#num_S20").value;
        let nbventeM = document.querySelector("#num_Multitec").value;
        let nbventeXS = document.querySelector("#num_XSpirit").value;
        
        let salaire = PrimeAnciennete(salairefixe) + calccomS(nbventeS) + calccomM(nbventeM) + calccomXS(nbventeXS);
        console.log("salaire :" + salaire);
        document.querySelector("#resultSimu").innerHTML = salaire;
        return (salaire); 
    }
    



function calccomS(nbventeS){
    let comS = 0;
    comS = (prixS * nbventeS)/50;
    return comS;
}
    
function calccomM(nbventeM){
    let comM;
    if(nbventeM<20){
        comM = (prixM*nbventeM)/25;
    }
    else if(nbventeM>20){
        comM = ((prixM*(nbventeM - 20))/(100/6))+ ((prixM*0.04)*20);
        
        if(nbventeM > 50){
            comM = comM + (prixM*(nbventeM - 50))/(10); //pas bon
        }
    }
    return comM;
}
function calccomXS(nbventeXS){
    let comXS = 0;
    if(nbventeXS > 50){
        comXS = (prixXS*(nbventeXS-50))/(100/6);
    }
    return comXS;
}

function PrimeAnciennete(fixe){
    let salaireAncien;
    const ancienSup10=1.06;
    const ancienInf10Sup5=1.03;
    switch(parseInt(document.querySelector("#lst_nbAncien").value)){
        case 1:
            salaireAncien = fixe;
            break;
        case 2:
            salaireAncien=fixe * ancienInf10Sup5;
            break;
        case 3:
            salaireAncien=fixe*ancienSup10;
            break;
    }
    return salaireAncien;
}

