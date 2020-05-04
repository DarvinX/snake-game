document.addEventListener("DOMContentLoaded", function() {
    const boardDim = 80; //initial 8x8 board
    const unitDim = 20 / boardDim;
    const initBodyLength = 10;
    const updatePositionDeplay = 150;
    const refreshRate = 24;
    const boardBackgroundColor = "blue";
    const snakeBodyColor = "red";
    let snakeBody = [];
    var headPosition = 0;
    var headPositionChange = 1;
    var headMoveAmount = boardDim;
    var shouldMove = false;

    // Draw the game board
    for (let i = 0; i < boardDim * boardDim; i++) {
        let unit = document.createElement("i");
        unit.id = i;
        unit.style.height = unitDim + "rem";
        unit.style.width = unitDim + "rem";
        document.querySelector(".game-board").appendChild(unit);
    }

    // Draw the snake every 250 ms
    let drawSnake = setInterval(() => {
        if (!shouldMove) {
            return;
        }
        console.log("snake drawn");
        for (let cell of snakeBody) {
            try {
                document.getElementById(cell).style.background = snakeBodyColor;
            } catch {}
        }
        // Check if it's special condition
        checkOver();
    }, (1000 / refreshRate));

    // Update snake position
    let updateSnakePosition = setInterval(() => {
        console.log("first", snakeBody)
        if (!shouldMove) {
            return;
        }
        console.log("snake position updated");
        if (snakeBody.length == 0) {
            for (let i = 0; i < initBodyLength; i++) {
                snakeBody.push(i);
                headPosition = i;
            }
        }
        if (shouldMove) {
            console.log("shouldMove:");
            headPosition += headPositionChange;
            document.getElementById(snakeBody.shift()).style.background = boardBackgroundColor;
            snakeBody.push(headPosition);
            console.log("head position", headPosition);
            console.log("should be pushed here", snakeBody);
        }
    }, updatePositionDeplay);

    window.addEventListener("keydown", function(key) {

            if (key.defaultPrevented) {
                return;
            }
            console.log("key detected", key.code);

            switch (key.code) {
                case "KeyW":
                case "ArrowUp":
                    headPositionChange = -boardDim;
                    shouldMove = true;
                    break;
                case "KeyS":
                case "ArrowDown":
                    headPositionChange = boardDim;
                    shouldMove = true;
                    break;
                case "KeyA":
                case "ArrowLeft":
                    headPositionChange = -1;
                    shouldMove = true;
                    break;
                case "KeyD":
                case "ArrowRight":
                    headPositionChange = 1;
                    shouldMove = true;
                    break;

            }

            key.preventDefault();
        })
        // update the positions of the snake


    function checkOver() {
        console.log("checking conditions");
        if (headPosition > boardDim * boardDim || headPosition < 0) {
            alert("GAME OVER!!");
            for (let i = 0; i < initBodyLength; i++) {
                snakeBody.push(i);
                headPosition = i;
            }

            clearInterval(drawSnake);
            clearInterval(updateSnakePosition);
            shouldMove = false;
        }
    }

})