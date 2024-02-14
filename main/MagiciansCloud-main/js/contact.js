$(function() {
    $("#btnHoria").click(function(){
        var uton = "Horia", nume = $("#nameH").val(), email = $("#emailH").val(), message = $("#messageH").val();
        functieJS(uton, nume, email, message);
    });
    $("#btnSorin").click(function(){
        var uton = "Sorin", nume = $("#nameS").val(), email = $("#emailS").val(), message = $("#messageS").val();
        functieJS(uton, nume, email, message);
    });
    $("#btnRazvan").click(function(){
        var uton = "Razvan", nume = $("#nameR").val(), email = $("#emailR").val(), message = $("#messageR").val();
        functieJS(uton, nume, email, message);
    });
    $("#btnIulian").click(function(){
        var uton = "Iulian", nume = $("#nameI").val(), email = $("#emailI").val(), message = $("#messageI").val();
        functieJS(uton, nume, email, message);
    });
});

function functieJS(uton, nume, email, message){
    var mesaj = "Textul pentru " + uton + " este: de la " + nume + ", cu emailul: " + email + ", mesajul: " + message;
    var titlu = document.getElementById('mesaj'); 
    titlu.style.display = "block";
    $("#mesaj").html(mesaj);
}

function showTab(tabId, numeid) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.ascuns');
    var selectedTab = document.getElementById(tabId);
    var element = document.getElementById(numeid);

    var titlu = document.getElementById('titluid'); 
    titlu.style.display = "none";
    var elemmesaj = document.getElementById('mesaj');
    elemmesaj.style.display = "none";

    var elementeMeniu = document.getElementById("meniu").getElementsByTagName("li");
    for (var i = 0; i <elementeMeniu.length; i++){
        elementeMeniu[i].style.color = "black";
    }
    element.style.color = 'red'

    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}