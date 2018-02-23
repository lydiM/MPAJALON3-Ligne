
//Recupération valeur menu contour

var strokeSelect = document.getElementById('menuC');
//document.getElementById('menuC').style.opacity = "0.3"
var largeur = document.getElementById('epai');
var newstyle=function changestyle(){

    var ligneStyle;

    ligneStyle = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({color: strokeSelect.value , width: largeur.value})
        })

    ];
//color.style.opacity = "0.3";
    return ligneStyle;
 ligneStyle.setOpacity(0.3);
}
