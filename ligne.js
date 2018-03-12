

var draw;
var value= 'Circle';
//**  la carte
/*Déclaration d'une première couche raster pour l'affichage de la carte*/
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var source = new ol.source.Vector({wrapX: false});

var opacite = document.getElementById('opacite'); // variable pour recuperation de la valeur de l'opacité
/*Déclaration d'une deuxième couche vector pour l'affichage du du dessin*/
var vector = new ol.layer.Vector({
  opacity : opacite.value,
  source: source,
  style: newstyle
    });

var selectArc = new ol.interaction.Select({     //interaction select
      condition: ol.events.condition.pointerMove
    });

var translate = new ol.interaction.Translate({
      features: selectArc.getFeatures()
    });

var map = new ol.Map({

  interactions: ol.interaction.defaults().extend([selectArc]),

  layers: [raster, vector], //ajout des couches à la carte
  target: 'map',
  view: new ol.View({
  center: ol.proj.transform([-4.49702, 48.39888], 'EPSG:4326', 'EPSG:3857'), //zoom sur l'UBO
  zoom:14
     })
   });

function addInteraction() {
  draw = new ol.interaction.Draw({
    source: source,
    type: (value),
    geometryFunction: dessinLigne,
  });

  map.addInteraction(draw);
  map.removeInteraction(selectArc)

}// fin de la fonction addInteraction

//**fonction pour le deplacement de l'objet sur la carte
function deplacer(vector){
  map.addInteraction(selectArc);
  map.addInteraction(translate);
}
//fonction du dessin
function dessin(vector) {
 addInteraction(draw);

}

//fonction pour desactiver l'intercation du dessin
function supp(vector) {
  map.removeInteraction(draw);
  map.removeInteraction(selectArc)
}
