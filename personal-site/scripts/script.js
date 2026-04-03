// ARRAY OF GAME OBJECTS
const games = [
    {
        title: "Minecraft",
        image: "images/minecraft.jpg",
        description: "A sandbox game where players can build, explore, and survive in a blocky world.",
        gallery: [
            "images/minecraft1.png",
            "images/minecraft2.jpg",
            "images/minecraft3.avif"
        ]
    },
    {
        title: "Skyrim",
        image: "images/skyrim.jpg",
        description: "An open-world RPG where players explore a fantasy world, complete quests, and battle dragons.",
        gallery: [
            "images/skyrim1.jpg",
            "images/skyrim2.jpg",
            "images/skyrim3.jpg"
        ]
    },
    {
        title: "Assassin's Creed Valhalla",
        image: "images/valhalla.jpg",
        description: "An action-adventure game set in the Viking age with exploration, combat, and storytelling.",
        gallery: [
            "images/valhalla1.jpg",
            "images/valhalla2.jpg",
            "images/valhalla3.jpg"
        ]
    }
];

// TRACK CURRENT GAME
let currentGameIndex = 0;

// SELECT DOM ELEMENTS
const gameImage = document.getElementById("game-image");
const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const galleryBtn = document.getElementById("gallery-btn");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const galleryContainer = document.getElementById("gallery-container");

// FUNCTION: DISPLAY GAME
function displayGame(index) {
    const game = games[index];

    gameImage.src = game.image;
    gameTitle.textContent = game.title;
    gameDescription.textContent = game.description;
}

// FUNCTION: SHOW NEXT GAME
function nextGame() {
    currentGameIndex++;

    // CONDITIONAL WRAP-AROUND
    if (currentGameIndex >= games.length) {
        currentGameIndex = 0;
    }

    displayGame(currentGameIndex);
}

// FUNCTION: SHOW PREVIOUS GAME
function prevGame() {
    currentGameIndex--;

    // CONDITIONAL WRAP-AROUND
    if (currentGameIndex < 0) {
        currentGameIndex = games.length - 1;
    }

    displayGame(currentGameIndex);
}

// FUNCTION: OPEN MODAL + LOAD GALLERY
function openGallery() {
    const game = games[currentGameIndex];

    // CLEAR OLD IMAGES
    galleryContainer.innerHTML = "";

    // LOOP THROUGH IMAGES (ARRAY METHOD)
    game.gallery.forEach(function(imageSrc) {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Game screenshot";

        galleryContainer.appendChild(img);
    });

    modal.style.display = "block";
}

// FUNCTION: CLOSE MODAL
function closeGallery() {
    modal.style.display = "none";
}

// EVENT LISTENERS
nextBtn.addEventListener("click", nextGame);
prevBtn.addEventListener("click", prevGame);
galleryBtn.addEventListener("click", openGallery);
closeModal.addEventListener("click", closeGallery);

// INITIAL LOAD
displayGame(currentGameIndex);