// ARRAY OF GAME OBJECTS
const games = [
    {
        title: "Minecraft",
        image: "images/minecraft.jpg",
        description: "A sandbox game where players can build, explore, and survive in a blocky world. What I really enjoy about Minecraft, is the limitless possibilities. If you can think it, you can do it. I really enjoy the logistical challenges that come with gathering resources, managing your time, completing challenges, and creating systems the aid your survival.",
        gallery: [
            "images/minecraft1.png",
            "images/minecraft2.jpg",
            "images/minecraft3.avif"
        ]
    },
    {
        title: "Skyrim",
        image: "images/skyrim.jpg",
        description: "An open-world RPG where players explore a fantasy world, complete quests, and battle dragons. I have always loved playing Skyrim. The open-world aspect allows you to feel free as you play, and the medieval time frame is always fascinating. The story lines and quests are thrilling, and there is such character within the world.",
        gallery: [
            "images/skyrim1.jpg",
            "images/skyrim2.jpg",
            "images/skyrim3.jpg"
        ]
    },
    {
        title: "Assassin's Creed Valhalla",
        image: "images/valhalla.jpg",
        description: "An action-adventure game set in the Viking age with exploration, combat, and storytelling. This game combines most of my favorite aspects of Minecraft and Skyrim. You have to manage resources and complete quests to build up a viking civilization, but you also get to run around and create your own story as you discover new places, find new things, and conquer new lands.",
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

const imageViewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const closeViewer = document.getElementById("close-viewer");

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

    // 🔥 CLICK EVENT FOR FULLSCREEN
    img.addEventListener("click", function() {
        viewerImg.src = imageSrc;
        imageViewer.style.display = "flex";
    });

    galleryContainer.appendChild(img);
    });

    modal.style.display = "block";
}

// FUNCTION: CLOSE MODAL
function closeGallery() {
    modal.style.display = "none";
}

// FUNCTION: CLOSE IMAGE VIEWER
function closeImageViewer() {
    imageViewer.style.display = "none";
}

// EVENT LISTENERS
nextBtn.addEventListener("click", nextGame);
prevBtn.addEventListener("click", prevGame);
galleryBtn.addEventListener("click", openGallery);
closeModal.addEventListener("click", closeGallery);
closeViewer.addEventListener("click", closeImageViewer);

// INITIAL LOAD
displayGame(currentGameIndex);