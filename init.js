partie = null;
function init() {


    //s'il n'y a pas de get dans l'url, affiche une "fenêtre popup"
    if($_GET("partie") == undefined){
        fenetre_accueil();

    //sinon appelle le constructeur de la partie correspondant au $_GET("partie") nb: cf function $_GET()
    }else{
        console.log("partie en "+$_GET("partie")+" mode");
        switch ( $_GET("partie")){
            case "Easy":
                break;

            case "Medium":
                break;

            case "Warrior":
                break;

            case "Custom":
                break;

        }

        //création d'un bouton abandonner ===> peut être mieux de faire ça dans la création de la partie
        var bouton = document.createElement("a");
        bouton.innerHTML = "abandonner";
        bouton.href = "main.html";
        bouton.textAlign = "center";
        document.body.appendChild(bouton);

    }



}

function fenetre_accueil(){
    //création de la fenêtre et ajout dans le body
    var fen = document.createElement("div");
    fen.id = "popup";
    document.body.appendChild(fen);


    //ajout d'un titre à la fenêtre
    var titre_popup = document.createElement("h2");
    titre_popup.innerHTML = "Modes de jeux: ";
    titre_popup.id = "titre_popup";
    fen.appendChild(titre_popup);

    //ajout d'un form dans la popup pour selectionner le mode de jeux
    var formu = selection_parties();
    fen.appendChild(formu);

}

function selection_parties(){
    var form = document.createElement("form");
    form.action = "";
    var choix_possibles = ["Easy", "Medium", "Warrior", "Custom"];

    for(var i=0, item; item=choix_possibles[i]; i++){
        var label = document.createElement("label");
        form.appendChild(label);
        label.setAttribute("for", item);
        label.innerHTML = item + " mode ";

        var select = document.createElement("input");
        form.appendChild(select);
        select.type = "radio";
        select.name = "partie";
        select.value = item;
        select.checked="";

        var br = document.createElement("br");
        form.appendChild(br);
    }

    //bouton submit
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "OK!";
    form.appendChild(submit);

    return form;
}

function cree_partie(){
    console.log("partie créée");
}

//fonction en js pour recuperer un get comme dans php
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
