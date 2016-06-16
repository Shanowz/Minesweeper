var donMode;
var tableau;

function creePartie(mode) {
    donMode = new DonnesMode(mode);

    tableau = InitTableau(donMode.nbLin, donMode.nbCol);
    PlacerBombes(tableau, donMode);
    PlacerChifffresBombes(tableau, donMode);
    CreerTableGraphique(tableau, donMode);

    var table = document.getElementById("maTable").addEventListener("click", gereClickCase);
}

function gereClickCase(e)
{

    if(e.target.className != "click")
    {
        var image;

        var i = Math.floor(e.target.id / donMode.nbCol);
        var j = e.target.id % donMode.nbCol;

        if(tableau[i][j] == -2)
        {
            var listTD = document.querySelectorAll("td");

            i=0;
            while(i < listTD.length)
            {
                if(listTD[i].className == "nonClick")
                {
                    listTD[i].className = "click";

                    if(tableau[Math.floor(i/donMode.nbCol)][i%donMode.nbCol] == -2)
                    {
                        image = document.createElement("img");
                        image.setAttribute("src", "Image/mine.png");
                        image.setAttribute("alt", "bomb");
                        listTD[i].appendChild(image);
                    }
                    else if(tableau[Math.floor(i/donMode.nbCol)][i%donMode.nbCol] > 0)
                    {
                        listTD[i].appendChild(document.createTextNode(tableau[Math.floor(i/donMode.nbCol)][i%donMode.nbCol]));
                    }
                    console.log(listTD[i].className);
                }
                i++;
            }
        }
        else
        {
            e.target.className = "click";
            var td = e.target;

            if(tableau[i][j] < 0)
            {
                if(tableau[i][j] == -2)
                {
                    image = document.createElement("img");
                    image.setAttribute("src", "Image/mine.png");
                    image.setAttribute("alt", "bomb");
                    td.appendChild(image);
                }
            }
            else if(tableau[i][j] > 0)
            {
                td.appendChild(document.createTextNode(tableau[i][j]));
            }

            console.log(i + " " + j);
        }


    }


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

