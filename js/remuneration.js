/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const fixe = 1100;
const Xspirit = 350;
const Multitec = 180;
const S20 = 140;

function remuneration(){
    let nbAncien = parseInt(window.document.querySelector("#lst_nbAncien").value);
    let nbXSpirit = parseInt(window.document.querySelector("#num_XSpirit").value);
    let nbMultitec = parseInt(window.document.querySelector("#num_Multitec").value);
    let nbS20 = parseInt(window.document.querySelector("#num_S20").value);
    let remuneration;
    
    if(nbAncien<5){
        remuneration = fixe;
    }
    else if (nbAncien>=5 && nbAncien<10){
        remuneration = fixe+(fixe*0.03);
    }
    else{
        remuneration = fixe+(fixe*0.06);
    }
    
    if(nbXSpirit>50){
        remuneration += (Xspirit*0.06)*(nbXSpirit-50);
    }
    
    if (nbMultitec>50){
        remuneration += ((Multitec*0.04)*20)+((Multitec*0.06)*30)+((Multitec*0.1)*(nbMultitec-50));
    }
    else if (nbMultitec>20 && nbMultitec<=50){
        remuneration += ((Multitec*0.04)*20)+((Multitec*0.06)*(nbMultitec-20));
    }
    else{
        remuneration += ((Multitec*0.04)*nbMultitec);
    }
    remuneration += ((S20*0.02)*nbS20);
    
    
    
//    for(let cpt=0;cpt<nbXSpirit;cpt++){
//        pas fou niveau opti
//    }
}
window.addEventListener("load",function(){
    window.document.querySelector("#btn_envoyer").addEventListener("click",validEnvoi);
});