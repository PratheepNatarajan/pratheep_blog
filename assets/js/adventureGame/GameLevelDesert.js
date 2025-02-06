import Background from './Background.js';
import GameObject from './GameObject.js';
import Player from './Player.js';
import Character from './Character.js';
import Item from './Item.js';
import Npc from './Npc.js';

class GameLevelDesert {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    let width = window.innerWidth; // Use `window.innerWidth` instead of `GameEnv.innerWidth`
    let height = window.innerHeight; // Use `window.innerHeight` instead of `GameEnv.innerHeight`

    // Add dialogue box to the DOM
    this.createDialogueBox();

    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; 
    const image_data_desert = {
      name: 'desert',
      greeting: "Welcome to the desert! It is hot and dry here, but there are many adventures to be had!",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 }
    };

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi, I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // NPC data for Questgiver
    const sprite_src_questgiver = path + "/images/gamify/questgiver.png";
    const sprite_data_questgiver = {
      id: 'Questgiver',
      greeting: "Hello! I'm the Questgiver! Are you ready for a task?",
      src: sprite_src_questgiver,
      SCALE_FACTOR: 25,
      ANIMATION_RATE: 50,
      pixels: { height: 256, width: 352 },
      INIT_POSITION: { x: (width / 3), y: (height / 3) },
      orientation: { rows: 4, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      quest: {
        title: "New Adventure",
        description: "A tickler is near, please help!",
        reward: "30 gold"
      }
    };

    // Initialize the Player and NPC
    this.player = new Player(sprite_data_chillguy);
    this.questgiver = new Npc(sprite_data_questgiver);

    // Initialize objects array without sprite_data_item
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_questgiver }
    ];

    // Debugging to check objects initialization
    console.log("GameLevelDesert objects:", this.objects);

    // Add event listener for quest interaction
    this.addInteractionListener();
  }

  // Create a dialogue box
  createDialogueBox() {
    const dialogueBox = document.createElement('div');
    dialogueBox.id = 'dialogue-box';
    dialogueBox.style.position = 'absolute';
    dialogueBox.style.bottom = '20px';
    dialogueBox.style.left = '20px';
    dialogueBox.style.width = '300px';
    dialogueBox.style.padding = '10px';
    dialogueBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    dialogueBox.style.color = 'white';
    dialogueBox.style.borderRadius = '10px';
    dialogueBox.style.display = 'none'; // Initially hidden
    dialogueBox.style.zIndex = '1000';
    document.body.appendChild(dialogueBox);
  }

  // Show the dialogue box with specific content
  showDialogue(content) {
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.innerHTML = content;
    dialogueBox.style.display = 'block';
  }

  // Hide the dialogue box
  hideDialogue() {
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.style.display = 'none';
  }

  // Add interaction listener
  addInteractionListener() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'e') {  // 'E' key to interact with NPC
        const distance = this.calculateDistance(
          this.player.position,
          this.questgiver.data.INIT_POSITION
        );

        if (distance < 100) { // Example interaction range
          const quest = this.questgiver.data.quest;
          const questContent = `
            <h3>${quest.title}</h3>
            <p>${quest.description}</p>
            <p><strong>Reward:</strong> ${quest.reward}</p>
          `;
          this.showDialogue(questContent);
        }
      } else if (event.key === 'q') { // 'Q' key to close the dialogue
        this.hideDialogue();
      }
    });
  }

  // Helper function to calculate distance between two positions
  calculateDistance(pos1, pos2) {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  update() {
    // Your game update loop code here.
  }
}

export default GameLevelDesert;

