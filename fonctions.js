
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

    var i, j, k;

    k=0;
    i=0;
    while(i<donMode.nbLin)
    {
        var tr = document.createElement("tr");
        j=0;
        while(j<donMode.nbCol)
        {
            var td = document.createElement("td");
            td.setAttribute("id", k.toString());
            td.setAttribute("class", "nonClick");


            /*if(tableau[i][j] == -2)
            {
                var image = document.createElement("img");
                image.setAttribute("src", "Image/mine.png");
                image.setAttribute("alt", "bomb");
                td.appendChild(image);
            }
            else
            {
                td.appendChild(document.createTextNode(tableau[i][j]))
            }*/

            tr.appendChild(td);

            j++;
            k++;
        }
        table.appendChild(tr);
        i++;
    }
}

function PlacerChifffresBombes(tableau, donMode)
{
    var i, j, nb_bombes;

    i=0;
    while(i<donMode.nbLin)
    {
        j=0;
        while(j<donMode.nbCol)
        {
            if(tableau[i][j] != -2)
            {
                nb_bombes=CompteBombesAutour(tableau, i, j, donMode);

                if(nb_bombes != 0)
                {
                    tableau[i][j] = nb_bombes;
                }
                else
                    tableau[i][j] = "0";
            }

            j++;
        }
        i++;
    }
}

/**
 * @return {number}
 */
function CompteBombesAutour(tableau, i, j, donMode)
{
    var k, l, condk, condl, templ, compteur=0;

    if(i != 0 && i != (donMode.nbLin)-1)
    {
        k=i-1;
        condk=k+3;
    }
    else
    {
        if(i==0)
            k=i;
        else                //condition qui vont déterminer le nombre de fois ou on va boucler
            k=i-1;          //pour trouver le nombre de bombes autour de ma case.
                            //Je pars du principe que si la case ne se trouve pas sur les extremes(haut, bas, gauche ou droite),
        condk=k+2;          //on va boucler 9 fois. Dans le cas contraire on bouclera 6 ou 4 fois selon la position.
    }

    if(j != 0 && j != (donMode.nbCol)-1)
    {
        l=j-1;
        condl=l+3;
    }
    else
    {
        if(j==0)
            l=j;
        else
            l=j-1;

        condl=l+2;
    }

    templ=l;
    while(k<condk)
    {
        l=templ;
        while(l<condl)
        {
            if(k != i || l != j)
            {
                if(tableau[k][l] == -2)
                compteur++;
            }
            l++;
        }
        k++;
    }

    return compteur;
}








