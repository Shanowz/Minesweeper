var mode = 1;

var donMode = new DonnesMode(mode);

var tableau = InitTableau(donMode.nbLin, donMode.nbCol);
PlacerBombes(tableau, donMode);
CreerTableGraphique(tableau, donMode);

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

