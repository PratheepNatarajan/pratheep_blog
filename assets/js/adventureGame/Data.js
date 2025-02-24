import GameEnv from './GameEnv.js';
import GameLevelWater from './GameLevelWater.js';
import GameLevelPrison from './GameLevelPrison.js';
import GameLevelishan from './GameLevelishan.js';
import GameLevelForest from './GameLevelForest.js';
import { getStats } from "./StatsManager.js";

class Data {
    constructor() {
        this.itemsCollected = 0;  // Initialize itemsCollected as an instance property
    }

    setPlayerItem() {
        this.itemsCollected++;
        console.log(this.itemsCollected);
        
        // Update NPC greeting when both items are collected
        if (this.itemsCollected === 2) {
            const questGiver = GameEnv.gameObjects.find(obj => obj.canvas?.id === 'Questgiver');
            if (questGiver) {
                questGiver.spriteData.greeting = "You found both keys! Now you can escape the dungeon.";
            }
        }
    }

    getPlayerItem() {
        return this.itemsCollected;
    }
}

export default Data;