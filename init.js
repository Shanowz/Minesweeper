partie = null;
function init() {
    fenetre_accueil();
}

function fenetre_accueil(){
    //création de la fenêtre et ajout dans le body
    var fen = document.createElement("div");
    document.body.appendChild(fen);
    fen.setAttribute("style", "position:absolute; top: 200px; width:60%; left: 20%; border: 1px black solid; border-radius: 10px;");

    //ajout d'un titre à la fenêtre
    var titre_popup = document.createElement("h2");
    titre_popup.innerHTML = "Modes de jeux: ";
    titre_popup.id = "titre_popup";
    fen.appendChild(titre_popup);


}

function selection_parties(){
    var form = document.createElement("form");
    var choix_possibles = ["Easy", "Medium", "Warrior", "Custom"];

    for(var i=0, item; item=choix_possibles[i]; i++){
        var label = document.createElement("label");
        form.appendChild(label);
        label.setAttribute("for", item);
        label.innerHTML = item + " mode "


        var select = document.createElement("input");
        form.appendChild(select_list);

        select_list.setAttribute("type", "radio");
        select_list.setAttribute("name", "partie");
        select_list.setAttribute("value", item);
    }


    return select_list;
}