// hieronder worden de variabele aangemaakt voor de navigatie en de menuknop
var button = document.querySelector(".hamburger");

var nav = document.querySelector("nav")

// de fucntie 'togglemenu' wordt aangemaakt, en de nav variabele krijgt een actie toegewezen,
// deze actie staat in de CSS als .toonMenu,
// de 'button' variabele krijgt de actie toegewezen die ervoor zorgt dat de functie van het .toonMenu
// wordt geactiveerd, dmv een click

function toggleMenu(event) {
    nav.classList.toggle("toonMenu");
}
button.addEventListener("click", toggleMenu);


// hieronder heb ik variabelen aangemaakt ter betrekking tot de kleurkeuze-sectie

var section = document.querySelector("section:nth-of-type(5)"); // de achtergrond(kleur)

var heading = document.querySelector(".heading"); // de h1(kleur)

var kleurkeuze = document.querySelector(".kleurkeuze"); // de image van de iphone(kleur)

// hieronder zijn de variabelen voor de kleurenknoppen waarmee van kleur wordt veranderd
var rood = document.querySelector(".rood");

var blauw = document.querySelector(".blauw");

var groen = document.querySelector(".groen");

var paars = document.querySelector(".paars");

var goud = document.querySelector(".goud");

var zwart = document.querySelector(".zwart");

// var zijkant = document.querySelector(".zijkant");

// var voorkantfoto = document.querySelector(".voorkantfoto");

// hier beginnen de functies die zijn aangemaakt om de kleur te veranderen,
// ze zijn allemaal hetzelfde, behalve dat de kleurnamen steeds veranderen

// ik maak een fucntie voor de achtergrondkleur, de image, en de h1 tekst.

// de variabele 'section', die gelinkt is aan de .section class in de html, 
// krijgt via de classList de "achtergrondPaars" uit de CSS
// dan zet ik op de variabele 'paars' (de button) een opdracht om bij een klik de bovenstaande functie aan te roepen,
// de paarse button zorgt er dus voor dat de achtergrondkleur veranderd naar paars(zoals in de CSS)
function achtergrondPaars() {
    section.classList = ("achtergrondPaars")
    }
    paars.addEventListener("click", achtergrondPaars);

// hier gebeurt hetzelfde als hierboven, alleen veranderd bij deze functie de image
// het spreekt voorzich: bij een klik op de paarse button, veranderd de image van source en krijg je dus de paarse telefoon te zien
    function kiespaars() {
    kleurkeuze.src = "4e_sectie/paars.png"
    }
    paars.addEventListener("click", kiespaars);

// hier gebeurt nogsteeds hetzelfde, maar dan bij de h1 tekst
// bij klik op de paarse button, veranderd de h1 van kleur(zoals beschreven in de CSS)
    function headingPaars() {
        heading.classList = ("headingPaars")
        }
        paars.addEventListener("click", headingPaars);

// de functies voor alle andere kleuren hieronder zijn hetzelfde 

function achtergrondGroen() {
    section.classList = ("achtergrondGroen")
    }
    groen.addEventListener("click", achtergrondGroen);

    function kiesgroen() {
    kleurkeuze.src = "4e_sectie/groen.png"
    }
    groen.addEventListener("click", kiesgroen);

    function headingGroen() {
        heading.classList = ("headingGroen")
        }
        groen.addEventListener("click", headingGroen);

function achtergrondBlauw() {
    section.classList = ("achtergrondBlauw")
    }
    blauw.addEventListener("click", achtergrondBlauw);

    function kiesblauw() {
    kleurkeuze.src = "4e_sectie/blauw.png"
    }
    blauw.addEventListener("click", kiesblauw);

    function headingBlauw() {
        heading.classList = ("headingBlauw")
        }
        blauw.addEventListener("click", headingBlauw);

function achtergrondRood() {
    section.classList = ("achtergrondRood")
    }
    rood.addEventListener("click", achtergrondRood);
    
    function kiesrood() {
    kleurkeuze.src = "4e_sectie/rood.png"
    }
    rood.addEventListener("click", kiesrood);

    function headingRood() {
        heading.classList = ("headingRood")
        }
        rood.addEventListener("click", headingRood);

function achtergrondGoud() {
    section.classList = ("achtergrondGoud")
    }
    goud.addEventListener("click", achtergrondGoud);
    
    function kiesgoud() {
    kleurkeuze.src = "4e_sectie/goud.png"
    }              
    goud.addEventListener("click", kiesgoud);

    function headingGoud() {
        heading.classList = ("headingGoud")
        }
        goud.addEventListener("click", headingGoud);

function achtergrondZwart() {
    section.classList = ("achtergrondZwart")
    }
    zwart.addEventListener("click", achtergrondZwart);
    
    function kieszwart() {
    kleurkeuze.src = "4e_sectie/zwart.png"
    }
    zwart.addEventListener("click", kieszwart);

    function headingZwart() {
        heading.classList = ("headingZwart")
        }
        zwart.addEventListener("click", headingZwart);


// hier komt de functie om de watch te zien vanaf de zijkant

// function zijkantfoto() {
//     voorkantfoto.src = "watch_belowheader/WATCH2"
//     }
//     zijkant.addEventListener("click", zijkantfoto);