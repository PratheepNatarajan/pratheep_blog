---
layout: base
title: Adventure Game
permalink: /gamify/adventureGame
---

<style>
/* Existing CSS styling */
#custom-prompt {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f0f8ff; /* Light blue background */
    border-radius: 12px;
    border: 1px solid #87ceeb; /* Sky blue border */
    padding: 25px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    z-index: 1000;
}

#custom-prompt-box {
    text-align: center;
    position: relative;
    padding: 40px 20px 20px;
}

#custom-prompt-message {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #4682b4;
}

/* Quest Progress Bar */
#questProgressContainer {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background-color: #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

#questProgressBar {
    height: 20px;
    width: 0%;
    background-color: #4caf50;
    text-align: center;
    line-height: 20px;
    color: white;
    font-weight: bold;
    transition: width 0.5s ease-in-out;
}

/* NPC Tracker Button style */
#npcTrackerButton {
    position: relative;
    display: block;
    margin: 15px auto;
    background-color: #4682b4;
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    z-index: 1000;
}

#npcTrackerButton:hover {
    background-color: #5a9bd3;
}
</style>

<!-- Quest Progress UI -->
<div id="questProgressContainer">
    <div id="questProgressBar">0%</div>
</div>

<!-- Score & Stats -->
<div id="score" style="position: absolute; top: 75px; left: 10px; color: black; font-size: 20px; background-color: white;">
   Time: <span id="timeScore">0</span>
</div>

<div id="stats-container" style="position: absolute; top: 120px; left: 10px; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 10px; border-radius: 5px;">
    <div>Balance: <span id="balance">0</span></div>
    <div>Chat Score: <span id="chatScore">0</span></div>
    <div>Questions Answered: <span id="questionsAnswered">0</span></div>
    
    <!-- NPC Tracker Button added below the stats -->
    <button id="npcTrackerButton">NPC Tracker</button>
</div>

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id='gameCanvas'></canvas>
</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/adventureGame/GameControl.js';
    import Prompt from '{{site.baseurl}}/assets/js/adventureGame/Prompt.js';
    import { getStats } from '{{site.baseurl}}/assets/js/adventureGame/StatsManager.js';

    const path = "{{site.baseurl}}";
    GameControl.start(path);
    GameControl.startTimer();
    Prompt.initializePrompt();

    window.submitAnswer = submitAnswer;
    window.showCustomPrompt = showCustomPrompt;
    window.closeCustomPrompt = closeCustomPrompt;

    window.onload = function() {
        getStats();
    };
</script>

<script>
    function updateQuestProgress(current, total) {
        const progressBar = document.getElementById("questProgressBar");
        let progressPercent = (current / total) * 100;
        progressBar.style.width = progressPercent + "%";
        progressBar.textContent = `${current} / ${total}`;
    }

    // Adjust the animation rate for the questgiver">
    

    document.addEventListener("DOMContentLoaded", function() {
        const questgiver = document.querySelector("npc2.png");
        if (questgiver) {
            questgiver.style.animationDuration = "100s"; // Adjusted animation rate
             console.log(".npc2 element found.");
        }
        else
        {
             console.log(".npc2 element not found.");
        }
    });

    // Adjusting the NPC sprite's SCALE_FACTOR
 /*   document.addEventListener("DOMContentLoaded", function() {
        const npcElement = document.querySelector(".npc-sprite");
        if (npcElement) {
            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;
            const npcOriginalSize = 1024; // Original sprite size

            const scaleFactor = Math.min(
                canvasWidth / (npcOriginalSize * 4), // Adjust proportionally
                canvasHeight / (npcOriginalSize * 4)
            );

            npcElement.style.transform = `scale(${scaleFactor})`;
        }
    });*/
</script>


