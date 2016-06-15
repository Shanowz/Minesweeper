
function DonnesMode(mode)
{
    switch(mode)
    {
        case 1: this.nbBombes = 10;
                this.nbCol = 8;
                this.nbLin = 8;
            break;
        case 2: this.nbBombes = 40;
                this.nbCol = 16;
                this.nbLin = 16;
            break;
        case 3: this.nbBombes = 99;
                this.nbCol = 30;
                this.nbLin = 16;
    }
}

function InitTableau(nbLin, nbCol)
{
    var i, j;
    var tableau = [];

    i=0;
    while(i<nbLin)
    {
        tableau[i] = [];

        j=0;
        while(j<nbCol)
        {
            tableau[i][j] = -1;
            j++;
        }

        i++;
    }

    return tableau;
}

function PlacerBombes(tableau, donMode)
{
    var i, j, bombesGen;

    bombesGen = 0;
    i=0;
    while(i<donMode.nbLin)
    {
        j=0;
        while(j<donMode.nbCol)
        {
            while(bombesGen < donMode.nbBombes)
            {
                var col = Math.floor(Math.random() * (donMode.nbCol - 1));
                var lin = Math.floor(Math.random() * (donMode.nbLin - 1));

                if(tableau[lin][col] === -1)
                {
                    tableau[lin][col] = -2;
                    bombesGen++;
                }
            }
            j++;
        }
        i++;
    }
}

function CreerTableGraphique(tableau, donMode)
{
    var table = document.getElementById("maTable");

    var i, j;

    i=0;
    while(i<donMode.nbLin)
    {
        var tr = document.createElement("tr");
        j=0;
        while(j<donMode.nbCol)
        {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(tableau[i][j]));
            tr.appendChild(td);

            j++;
        }
        table.appendChild(tr);
        i++;
    }
}










