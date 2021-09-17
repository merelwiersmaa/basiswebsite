var kleurkeuze = document.querySelector(".kleurkeuze");

var rood = document.querySelector(".rood");

var blauw = document.querySelector(".blauw");

var groen = document.querySelector(".groen");

var paars = document.querySelector(".paars");

var wit = document.querySelector(".wit");

function kiespaars() {
kleurkeuze.src = "images/Asset 6.png"
}

paars.addEventListener("click", kiespaars)

function kiesgroen() {
    kleurkeuze.src = "images/Asset 4.png"
    }
    
    groen.addEventListener("click", kiesgroen)

function kiesblauw() {
        kleurkeuze.src = "images/Asset 5.png"
        }
        
        blauw.addEventListener("click", kiesblauw)

function kiesrood() {
            kleurkeuze.src = "images/Asset 3.png"
            }
            
            rood.addEventListener("click", kiesrood)

function kieswit() {
                kleurkeuze.src = "images/Asset 2.png"
                }
                
                wit.addEventListener("click", kieswit)
