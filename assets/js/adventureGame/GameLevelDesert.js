// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
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
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    
    // NPC data for Questgiver
    const sprite_src_questgiver = path + "/images/gamify/npc1.png"; // Make sure to use the correct path
    const sprite_data_questgiver = {
        id: 'Questgiver',
        greeting: "Hello! I'm the Questgiver! Are you ready for a task?",
        src: sprite_src_questgiver,
        SCALE_FACTOR: 6,  // Adjust as needed for scaling
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 3), y: (height / 3)}, // Adjust this based on where you want it
        orientation: {rows: 4, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // Stationary NPC by default
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        quest: {
            title: "New Adventure",
            description: "tickler coming pls help he is near",
            reward: "30 gold"
        }
      };

    // Player data for item
    const sprite_src_item = path + "/images/gamify/item.png"; // be sure to include the path
    const ITEM_SCALE_FACTOR = 5;
    const sprite_data_item = {
        id: 'Item',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_item,
        SCALE_FACTOR: ITEM_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 200, y: height - (height/ITEM_SCALE_FACTOR) }, 
        pixels: {height: 160, width: 160},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        left: {row: 1, start: 0, columns: 1 },
        right: {row: 1, start: 0, columns: 1 },
        up: {row: 1, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 }
    };

    /*const sprite_src_item = path + "/images/gamify/item.png"; // be sure to include the path
    const ITEM_SCALE_FACTOR = 5;
    const sprite_data_item = {
        /*id: 'Item',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_item,
        SCALE_FACTOR: ITEM_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 200, y: height - (height/ITEM_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };*/

      


    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Item, data: sprite_data_item},
      { class: Npc, data: sprite_data_questgiver}
    ];
  }

}

export default GameLevelDesert;