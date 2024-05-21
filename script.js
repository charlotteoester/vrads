/* Funktion til navigationsbaren */
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


/* Billedkarrusel */

const carousel = document.querySelector(".menu_carousel");


let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);



//Der er ikke nogen aktive knapper på det tidspunkt, hvor koden kører:
let activeButton = null;

// VARIABLER
// Henter alle knapper med class "hjerterytme-btn" og laver en fælles variabel kaldet puls_buttons
const puls_buttons = document.querySelectorAll('.hjerterytme-btn'); 

// Funktion til at håndtere knap klik
function handleButtonClick(btn) {
    let activeButton = document.querySelector('.active'); // Vi bruger document.querySelector('.active') for at finde den knap, der i forvejen har 'active' class

    // Hvis en knap allerede er blevet klikket på og har fået "active" class, skal "active"-class fjernes fra den knap
    if (activeButton) {
        activeButton.classList.remove('active');
        activeButton.style.backgroundColor = ""; // Opdater baggrundsfarve for den aktive knap
    }

    // Den knap, som klikkes på, får tilføjet "active" class
    btn.classList.add('active');
    btn.style.backgroundColor = "#811F25"; // Når en knap er aktiv, dvs. har fået class "active", skal baggrundsfarven ændres fra gennemsigtig til en mørk rød
    
}

// Vi tilføjer en eventlistener til hver knap i puls_buttons, som starter funktionen "handleButtonClick"
puls_buttons.forEach(function(btn) { 
    btn.addEventListener('click', function() {
        handleButtonClick(btn);
    });
});

// Kilde: For at lave denne kode, brugte vi ChatGPT og ligeledes hjælp fra ChatGPT til at forklare det, vi ikke kunne gennemskue på egen hånd 