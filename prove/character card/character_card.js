const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "snortleblat.webp",

  attacked() {
    if (this.health > 0) {
      this.health -= 20;

      if (this.health <= 0) {
        this.health = 0;
        alert(`Character Died.`);
      }

      renderCharacter();
    }
  },

  levelUp() {
    this.level += 1;
    renderCharacter();
  }
};

function renderCharacter() {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterClass").textContent = `Class: ${character.class}`;
  document.querySelector("#characterLevel").textContent = `Level: ${character.level}`;
  document.querySelector("#characterHealth").textContent = `Health: ${character.health}`;

  const img = document.querySelector("#characterImage");
  img.setAttribute("src", character.image);
  img.setAttribute("alt", character.name);
}

document.querySelector("#attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelUpBtn").addEventListener("click", function () {
  character.levelUp();
});

renderCharacter();