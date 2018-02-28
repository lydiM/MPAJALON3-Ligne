
var strokeSelect = document.getElementById('menuC'); // variable de recuperation de la couleur
var largeur = document.getElementById('epaisseur');//variable pour recuperation de l'epaisseur
var newstyle=function changestyle(){
    var ligneStyle;
    ligneStyle = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({color: strokeSelect.value , width: largeur.value})
                           })

                ];

    return ligneStyle;
}
