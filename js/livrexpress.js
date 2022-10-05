/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.addEventListener("load", function() {
    window.document.querySelector("#btn_envoyer").addEventListener("click", PrimeFinAnnee, PrimeFinAnneeSansAccidents);
    window.document.querySelector("#btn_envoyer").addEventListener("click", afficheElem);
    window.document.querySelector("#btn_envoyer").addEventListener("click", PrimeFinAnneeSansAccidents);
    });
    
function recupValeur(id){
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)){
        window.document.querySelector(id).value=0;
        return 0;
    }
    else if (valeur<0){
        window.document.querySelector(id).value=0;
        return 0;
    }
    else{
        return valeur;
    }
}

function afficheElem(){
    let display;
    if(recupValeur("#lst_nbAccident")===1){
        display = "none";
    }
    else{
        display = "block";
    }
    return elem= window.document.querySelector("#aipaslseumfrero").style.display = display;
}

function PrimeAnciennete(annee){
    const annee4=300;
    const anneesupp=30;
    const debutprime=4;
    let resultat=0;
    if (annee>=0){
    if (annee>=debutprime){
        resultat+=annee4;
        if(annee>=debutprime){
            resultat+=(anneesupp*(annee-debutprime));
        }
    }
    return resultat;
    }
    else{
        throw "Un nombre négatif à été entré !";
    }
}

function PrimeKilometre(km){
    const plafond = 900;
    const prixKm = 0.01;
    let resultat=0;
    if (km>=0){
        if(km*prixKm<plafond){
            resultat=km*prixKm;
        }
        else{
            resultat=plafond;
        }
        return resultat;
    }
    else{
        throw "Un nombre négatif à été entré !"
    }
}

function PrimeTotale(km,annee){
    return primeTot= PrimeKilometre(km)+PrimeAnciennete(annee);
}

function PrimeFinAnnee(){
    let nbAccident = recupValeur("#lst_nbAccident");
    let nbKm = recupValeur("#nbKm");
    let anciennete = recupValeur("#anciennete");
    
    
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

function PrimeFinAnneeSansAccidents(){
    let nbKm = recupValeur("#nbKm");
    let anciennete = recupValeur("#anciennete");
    
    document.querySelector("#siNoAccident").innerHTML = PrimeTotale(nbKm,anciennete);
    return PrimeTotale(nbKm,anciennete);
}