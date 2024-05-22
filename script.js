/* Funktion til navigationsbaren */
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// For at kode navigationsbaren, er denne video benyttet som hjælp
https://www.youtube.com/watch?v=U8smiWQ8Seg
//


/* Billedkarrusel */

// Vælg carousel-elementet fra DOM'en
const carousel = document.querySelector(".menu_carousel");

// Definer variabler til at spore drag status og positioner
let isDragStart = false, prevPageX, prevScrollLeft;

// Funktion til at starte drag
const dragStart = (e) => {
    isDragStart = true; // Sæt drag status til true
    prevPageX = e.pageX; // Gem den nuværende X-position af musen
    prevScrollLeft = carousel.scrollLeft; // Gem den nuværende scroll position af carousel
}

// Funktion til at håndtere drag-bevægelsen
const dragging = (e) => {
    if(!isDragStart) return; // Hvis drag ikke er startet, gør ingenting
    e.preventDefault(); // Forhindre standard handlinger (som at markere tekst)
    let positionDiff = e.pageX - prevPageX; // Beregn forskellen i X-positionen siden drag startede
    carousel.scrollLeft = prevScrollLeft - positionDiff; // Opdater scroll positionen af carousel
}

// Funktion til at stoppe drag
const dragStop = () => {
    isDragStart = false; // Sæt drag status til false
}

// Tilføj event listeners til carousel elementet
carousel.addEventListener("mousedown", dragStart); // Når musen trykkes ned, start drag
carousel.addEventListener("mousemove", dragging); // Når musen bevæges, udfør dragging
carousel.addEventListener("mouseup", dragStop); // Når musen slippes, stop drag

// Kilde: denne kode er lavet ved hjælp af følgende video
// https://www.youtube.com/watch?v=7HPsdVQhpRw&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2&index=6



//Der er ikke nogen aktive knapper på det tidspunkt, hvor koden kører:
let activeButton = null;

// VARIABLER
// Henter alle knapper med class "hjerterytme-btn" og laver en fælles variabel kaldet puls_buttons
const puls_buttons = document.querySelectorAll('.knap'); 

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
    btn.style.backgroundColor = "#172E4D"; // Når en knap er aktiv, dvs. har fået class "active", skal baggrundsfarven ændres fra gennemsigtig til en mørk rød
    
}

// Vi tilføjer en eventlistener til hver knap i puls_buttons, som starter funktionen "handleButtonClick"
puls_buttons.forEach(function(btn) { 
    btn.addEventListener('click', function() {
        handleButtonClick(btn);
    });
});

// Kilde: For at lave denne kode, brugte vi ChatGPT og ligeledes hjælp fra ChatGPT til at forklare det, vi ikke kunne gennemskue på egen hånd 




//tidslinje
window.addEventListener('scroll', () => {
    const circle = document.querySelector('.circle');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const maxPosition = window.innerWidth - circle.offsetWidth;

    const scrollPercentage = scrollPosition / maxScroll;
    const circlePosition = maxPosition * scrollPercentage;

    circle.style.left = `${circlePosition}px`;
});

//kilde: chatGPT har hjulpet med at få cirklen til at bevæge sig horisontalt, når man scroller ned på siden












//Animationer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');            
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));