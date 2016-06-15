function creePartie(mode) {
    var donMode = new DonnesMode(mode);

    var tableau = InitTableau(donMode.nbLin, donMode.nbCol);
    PlacerBombes(tableau, donMode);
    PlacerChifffresBombes(tableau, donMode);
    CreerTableGraphique(tableau, donMode);

    var table = document.getElementById("maTable").addEventListener("click", gereClickCase);
}

function gereClickCase(e)
{
    var i = Math.floor(e.target.id / donMode.nbCol);
    var j = e.target.id % donMode.nbCol;

    e.target.className = "click";
    var td = e.target;
    if(tableau[i][j] < 0)
    {
        if(tableau[i][j] == -2)
        {
            var image = document.createElement("img");
            image.setAttribute("src", "Image/mine.png");
            image.setAttribute("alt", "bomb");
            td.appendChild(image);
        }
    }
    else
    {
        td.appendChild(document.createTextNode(tableau[i][j]));
    }

    console.log(i + " " + j);

}

/*var i= 0, j=0;
while(i < donMode.nbLin)
{
    j=0;
    while(j < donMode.nbCol)
    {
        console.log("Valeur "+ i + " " + j + " : " + tableau[i][j]);
        j++;
    }
    i++;
}*/

