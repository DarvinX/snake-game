document.addEventListener("DOMContentLoaded", function() {
    console.log("js loaded");
    const boardDim = 8; //initial 8x8 board
    const unitDim = 20 / 8;
    const drawDeplay = 500;
    let snakeBody = [0, 1, 2, 3];
    var headPosition = 3;
    var headMoveAmount = boardDim;

    for (let i = 0; i < boardDim * boardDim; i++) { //draw the board
        let unit = document.createElement("i");
        unit.id = i;
        unit.style.height = unitDim + "rem";
        unit.style.width = unitDim + "rem";
        document.querySelector(".game-board").appendChild(unit);
    }

    let drawSnake = setInterval(function() {
        document.getElementById(snakeBody.shift()).style.background = "blue";
        //console.log("drawing snake body");
        console.log(snakeBody);

        for (let cell of snakeBody) {
            console.log("drawing cell", cell);
            document.getElementById(cell).style.background = "red";
        }
        snakeBody.push(++headPosition);
    }, drawDeplay)

    window.addEventListener("keypress", function(key) {
        if (key.defaultPrevented) {
            return;
        }

        switch (key.code) {
            case "KeyW":
            case "ArrowUp":
                headPosition -= 8;
                break;
            case "KeyS":
            case "ArrowDown":
                headPosition -= 8;
                break;
            case "KeyA":
            case "ArrowLeft":
                headPosition -= 8;
                break;
            case "KeyD":
            case "ArrowRight":
                headPosition -= 8;
                break;

        }
    })
})