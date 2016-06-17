

var donMode;
var tableau;
var tableauBoolDecouvert;
var win = false;
var lose = false;
var caseNonDecouverte;

function creePartie(mode) {
    donMode = new DonnesMode(mode);
    caseNonDecouverte = donMode.nbLin * donMode.nbCol;

    tableau = InitTableau(donMode.nbLin, donMode.nbCol);
    tableauBoolDecouvert = InitTableauBool(donMode.nbLin, donMode.nbCol);

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

        console.log(caseNonDecouverte);

        if(lose)
        {
            console.log("you lose");
        }
        else if(win)
        {
            console.log("you win");
        }
    }

});


