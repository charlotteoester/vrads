/* -------------------------- Funktion til navigationsbaren -------------------------- */
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' //ændrer synligheden til synlig
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' //ændrer synligheden til skjult
}





/* -------------------------- Billedkarrusel -------------------------- */

// Vælger carousel-elementet fra DOM'en
const carousel = document.querySelector(".menu_carousel");

// Definerer variabler til at se drag status og positioner
let isDragStart = false, prevPageX, prevScrollLeft;

// Funktion til at starte drag
const dragStart = (e) => {
    isDragStart = true; // Sæt drag til true
    prevPageX = e.pageX; // Gem den nuværende X-position af musen
    prevScrollLeft = carousel.scrollLeft; // Gem den nuværende scroll position af carousel
}

// Funktion til drag-bevægelsen
const dragging = (e) => {
    if (!isDragStart) return; // Hvis drag ikke er startet, gør intet
    e.preventDefault(); // Forhindrer standard handlinger (som at markere tekst)
    let positionDiff = e.pageX - prevPageX; // Beregn forskellen i X-positionen siden drag startede
    carousel.scrollLeft = prevScrollLeft - positionDiff; // Opdater scroll positionen af carousel
}

// Funktion til at stoppe drag
const dragStop = () => {
    isDragStart = false; // Sæt drag status til false
}

// Tilføjer event listeners til carousel
carousel.addEventListener("mousedown", dragStart); // Når musen trykkes ned, start drag
carousel.addEventListener("mousemove", dragging); // Når musen bevæges, udfør dragging
carousel.addEventListener("mouseup", dragStop); // Når musen slippes, stop drag









//kilde: chatGPT har hjulpet med at få cirklen til at bevæge sig horisontalt, når man scroller ned på siden













