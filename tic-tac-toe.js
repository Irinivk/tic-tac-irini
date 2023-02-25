window.addEventListener('DOMContentLoaded', e => {

    const gameboard = document.querySelector('.game-board')
    const newGame = document.querySelector('.New-Game')
    const giveUp = document.querySelector('.Give-Up')
    const square = document.querySelectorAll('.squares')
    const hel = document.querySelector('h1')

    let winningPattern = [
        // [0, 1, 2],
        // [0, 3, 6],
        // [2, 5, 8],
        // [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        // [0, 4, 8],
        // [2, 4, 6],
    ];

    b0 = document.getElementById("square-0");
    b1 = document.getElementById("square-1");
    b2 = document.getElementById("square-2");
    b3 = document.getElementById("square-3");
    b4 = document.getElementById("square-4");
    b5 = document.getElementById("square-5");
    b6 = document.getElementById("square-6");
    b7 = document.getElementById("square-7");
    b8 = document.getElementById("square-8");

    let xTurn = true;
    let count = 0;


    function winChecker() {
        // console.log(b0)
        if (((b0.innerText === b1.innerText) && (b1.innerText === b2.innerText) && (b0.innerText === b2.innerText))) {
            return hel.innerText = `Winner: ${b0.innerText}`

            // return

        }
        else if (((b0.innerText === b3.innerText) && (b3.innerText === b6.innerText) && (b0.innerText === b6.innerText))) {
            return hel.innerText = `Winner: ${b0.innerText}`
            // square.disabled
            // return
        }
        else if (((b0.innerText === b4.innerText) && (b0.innerText === b8.innerText) && (b4.innerText === b8.innerText))) {
            return hel.innerText = `Winner: ${b0.innerText}`
            // square.disabled
            // return
        }
        else if (((b2.innerText === b4.innerText) && (b4.innerText === b6.innerText) && (b2.innerText === b6.innerText))) {
            return hel.innerText = `Winner: ${b2.innerText}`
            // square.disabled
            // return
        }
        else if (((b2.innerText === b5.innerText) && (b2.innerText === b8.innerText) && (b5.innerText === b8.innerText))) {
            return hel.innerText = `Winner: ${b2.innerText}`
            // square.disabled
            // return
        }
        else if (((b6.innerText === b7.innerText) && (b6.innerText === b8.innerText) && (b7.innerText === b8.innerText))) {
            return hel.innerText = `Winner: ${b6.innerText}`
            // square.disabled
            // return
        }
        else if (((b3.innerText === b5.innerText) && (b5.innerText === b4.innerText) && (b3.innerText === b4.innerText))) {
            return hel.innerText = `Winner: ${b3.innerText}`
            // square.disabled
            // return
        }
        else if (((b1.innerText === b4.innerText) && (b1.innerText === b7.innerText) && (b4.innerText === b7.innerText))) {
            return hel.innerText = `Winner: ${b1.innerText}`
        }
    }
    square.forEach((element) => {
        element.addEventListener("click", e => {
            // console.log(element)

            if (element.innerText.length) return
            // console.log(element.children)
            if (!hel.innerText.includes('X') && !hel.innerText.includes('O') && !(count >= 10)) {
                if (xTurn) {
                    xTurn = false;
                    //Display X

                    element.innerText = 'X'
                    // element.disabled = true;
                } else {
                    xTurn = true;
                    //Display Y

                    element.innerText = 'O'
                    // element.disabled = true;
                }

            }

            //Increment count on each click
            count += 1;

            winChecker();

            if (count === 10) {
                hel.innerText = 'Winner: None'
            }
            //Check for win on every click

        });
    });

    newGame.addEventListener('click', e => {
        square.forEach(e => {
            e.innerText = ''
            hel.innerText = ''
            count = 0
        })
    })

    giveUp.addEventListener('click', e => {
        count = 10

        return hel.innerText = 'Winner: None'
    })

})