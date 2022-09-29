/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.addEventListener("load", function() {
    window.document.querySelector("#btn_envoyer").addEventListener("click", PrimeFinAnnee);
    });

function PrimeAnciennete(annee){
    const annee4=300;
    const anneesupp=30;
    const debutprime=4;
    let resultat=0;
    if (annee>=debutprime){
        resultat+=annee4;
        if(annee>=debutprime){
            resultat+=(anneesupp*(annee-debutprime));
        }
    }
    return resultat;
}

function PrimeKilometre(km){
    const plafond = 900;
    const prixKm = 0.01;
    let resultat=0;
    if(km*prixKm<plafond){
        resultat=km*prixKm;
    }
    else{
        resultat=plafond;
    }
    return resultat;
}

function PrimeTotale(km,annee){
    return primeTot= PrimeKilometre(km)+PrimeAnciennete(annee);
}

function PrimeFinAnnee(){
    let nbAccident = parseInt(document.querySelector("#lst_nbAccident").value);
    let nbKm = document.querySelector("#nbKm").value;
    let anciennete = document.querySelector("#anciennete").value;
    
    
    let primeFinale = PrimeTotale(nbKm,anciennete);
    if (nbAccident===2){
        primeFinale/=2;
    }
    else if (nbAccident===3){
        primeFinale/=3;
    }
    else if (nbAccident===4){
        primeFinale/=4;
    }
    else if (nbAccident===5){
        primeFinale=0;
    }
    document.querySelector("#resultSimu").innerHTML = primeFinale;
    return primeFinale;
}