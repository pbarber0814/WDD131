
const games = [
    {
        title: "Minecraft",
        image: "images/minecraft.jpg",
        description: "A sandbox game where players can build, explore, and survive in a blocky world. What I really enjoy about Minecraft, is the limitless possibilities. If you can think it, you can do it. I really enjoy the logistical challenges that come with gathering resources, managing your time, completing challenges, and creating systems the aid your survival.",
        gallery: [
            {
                src: "images/minecraft1.png",
                alt: "Minecraft landscape with trees and sunlight"
            },
            {
                src: "images/minecraft2.jpg",
                alt: "Minecraft character fighting enemies"
            },
            {
                src: "images/minecraft3.avif",
                alt: "Minecraft castle build at night"
            }

        ]
    },
    {
        title: "Skyrim",
        image: "images/skyrim.jpg",
        description: "An open-world RPG where players explore a fantasy world, complete quests, and battle dragons. I have always loved playing Skyrim. The open-world aspect allows you to feel free as you play, and the medieval time frame is always fascinating. The story lines and quests are thrilling, and there is such character within the world.",
        gallery: [
            {
                src: "images/skyrim1.jpg",
                alt: "Dragon perched atop burial crypt"
            },
            {
                src: "images/skyrim2.jpg",
                alt: "Adventurer walking through the woods"
            },
            {
                src: "images/skyrim3.jpg",
                alt: "Landscape shot of small settlement infront of mountain range"
            }

        ]
    },
    {
        title: "Assassin's Creed Valhalla",
        image: "images/valhalla.jpg",
        description: "An action-adventure game set in the Viking age with exploration, combat, and storytelling. This game combines most of my favorite aspects of Minecraft and Skyrim. You have to manage resources and complete quests to build up a viking civilization, but you also get to run around and create your own story as you discover new places, find new things, and conquer new lands.",
        gallery: [
            {
                src: "images/valhalla1.jpg",
                alt: "Vikings an their ship beneath a settlement build upon a large rocky overhang"
            },
            {
                src: "images/valhalla2.jpg",
                alt: "Viking warrior stands atop a hill overlooking a small english settlement"
            },
            {
                src: "images/valhalla3.jpg",
                alt: "Viking warrior wielding a sword and shield stands infront of a large castle"
            }
                      
        ]
    }
];

let currentGameIndex = 0;

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

function displayGame(index) {
    const game = games[index];

    gameImage.src = game.image;
    gameTitle.textContent = game.title;
    gameDescription.textContent = game.description;
}

function nextGame() {
    currentGameIndex++;

    if (currentGameIndex >= games.length) {
        currentGameIndex = 0;
    }

    displayGame(currentGameIndex);
}

function prevGame() {
    currentGameIndex--;

    if (currentGameIndex < 0) {
        currentGameIndex = games.length - 1;
    }

    displayGame(currentGameIndex);
}

function openGallery() {
    const game = games[currentGameIndex];

    galleryContainer.innerHTML = "";

    game.gallery.forEach(function(image) {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    img.addEventListener("click", function() {
        viewerImg.src = image.src;
        viewerImg.alt = image.alt;
        imageViewer.style.display = "flex";
    });

    galleryContainer.appendChild(img);
    });

    modal.style.display = "block";
}

function closeGallery() {
    modal.style.display = "none";
}

function closeImageViewer() {
    imageViewer.style.display = "none";
}

nextBtn.addEventListener("click", nextGame);
prevBtn.addEventListener("click", prevGame);
galleryBtn.addEventListener("click", openGallery);
closeModal.addEventListener("click", closeGallery);
closeViewer.addEventListener("click", closeImageViewer);

displayGame(currentGameIndex);