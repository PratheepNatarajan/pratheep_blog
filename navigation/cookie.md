---
layout: base
title: Cookie Clicker
permalink: /cookie/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f9f9f9;
            color: #333;
        }
        #cookie {
            width: 200px;
            cursor: pointer;
            margin: 20px 0;
        }
        #score {
            font-size: 2rem;
            margin: 20px 0;
        }
        .button {
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            margin: 10px;
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Cookie Clicker</h1>
    <img id="cookie" src="../images/about/cookie.png" alt="Cookie">
    <div id="score">0</div>
    <button id="autoClicker" class="button" disabled>Buy Auto Clicker (10 cookies)</button>
    <button id="doubleCookies" class="button" disabled>Buy Double Cookies (50 cookies)</button>
    <script>
        let score = 0;
        let cookiesPerClick = 1;
        let autoClickerCost = 10;
        let doubleCookiesCost = 50;

        const cookie = document.getElementById('cookie');
        const scoreDisplay = document.getElementById('score');
        const autoClickerButton = document.getElementById('autoClicker');
        const doubleCookiesButton = document.getElementById('doubleCookies');

        // Update score display
        function updateScoreDisplay() {
            scoreDisplay.textContent = score;
            autoClickerButton.disabled = score < autoClickerCost;
            doubleCookiesButton.disabled = score < doubleCookiesCost;
        }

        // Click the cookie
        cookie.addEventListener('click', () => {
            score += cookiesPerClick;
            updateScoreDisplay();
        });

        // Buy Auto Clicker
        autoClickerButton.addEventListener('click', () => {
            if (score >= autoClickerCost) {
                score -= autoClickerCost;
                autoClickerCost *= 2;
                autoClickerButton.textContent = `Buy Auto Clicker (${autoClickerCost} cookies)`;
                updateScoreDisplay();

                setInterval(() => {
                    score += cookiesPerClick;
                    updateScoreDisplay();
                }, 1000);
            }
        });

        // Buy Double Cookies
        doubleCookiesButton.addEventListener('click', () => {
            if (score >= doubleCookiesCost) {
                score -= doubleCookiesCost;
                cookiesPerClick *= 2;
                doubleCookiesCost *= 2;
                doubleCookiesButton.textContent = `Buy Double Cookies (${doubleCookiesCost} cookies)`;
                updateScoreDisplay();
            }
        });

        // Initialize
        updateScoreDisplay();
    </script>
</body>
</html>
