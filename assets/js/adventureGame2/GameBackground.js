const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = 800;
canvas.height = 600;

const mazeImage = new Image();
mazeImage.src = 'images/gamify/deepseadungeon.jpeg'; // Replace with actual maze image

const player = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    speed: 5,
    color: 'blue'
};

const walls = [
    { x: 100, y: 100, width: 200, height: 20 },
    { x: 300, y: 200, width: 20, height: 200 }
    // Add more wall objects as needed
];

function drawMaze() {
    ctx.drawImage(mazeImage, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawWalls() {
    ctx.fillStyle = 'black';
    walls.forEach(wall => {
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
}

function detectCollision(x, y) {
    return walls.some(wall =>
        x < wall.x + wall.width &&
        x + player.width > wall.x &&
        y < wall.y + wall.height &&
        y + player.height > wall.y
    );
}

window.addEventListener('keydown', (e) => {
    let newX = player.x;
    let newY = player.y;
    
    if (e.key === 'ArrowUp') newY -= player.speed;
    if (e.key === 'ArrowDown') newY += player.speed;
    if (e.key === 'ArrowLeft') newX -= player.speed;
    if (e.key === 'ArrowRight') newX += player.speed;
    
    if (!detectCollision(newX, newY)) {
        player.x = newX;
        player.y = newY;
    }
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawWalls();
    drawPlayer();
    requestAnimationFrame(update);
}

mazeImage.onload = update;
