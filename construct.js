

var donMode;
var tableau;
var tableauBoolDecouvert;

function creePartie(mode) {
    donMode = new DonnesMode(mode);

    tableau = InitTableau(donMode.nbLin, donMode.nbCol, tableauBoolDecouvert);
    PlacerBombes(tableau, donMode);
    PlacerChifffresBombes(tableau, donMode);
    CreerTableGraphique(tableau, donMode);

    /*var table = document.getElementById("maTable").addEventListener("mousedown", gereClickGaucheCase);
    var table = document.getElementById("maTable").addEventListener("contextmenu", gereClickDroiteCase);*/
}

$(function () {

    $('#maTable').mousedown(gereClick);

    function gereClick(e) {
        if (e.which === 1) {
            gereClickGaucheCase(e);
        }
        else {
            gereClickDroiteCase(e);
        }
    }

});


