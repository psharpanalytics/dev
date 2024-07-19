let homescoreEl = document.getElementById("homescore")
let guestscoreEl = document.getElementById("guestscore")
let endgameEl = document.getElementById("endgame")
let winnerEl = document.getElementById("winner")
let radioEl = document.getElementById("qtr1")


//console.log(homescoreEl)
let currenthomescore= 0
let currentguestscore= 0


/// home score buttons
function plusone() {
    currenthomescore += 1
    homescoreEl.textContent = currenthomescore
}


function plustwo() {
    currenthomescore += 2
    homescoreEl.textContent = currenthomescore
}


function plusthree() {
    currenthomescore += 3
    homescoreEl.textContent = currenthomescore
}

function plussix() {
    currenthomescore += 6
    homescoreEl.textContent = currenthomescore
}

/// guest buttons
function plusoneguest() {
    currentguestscore += 1
    guestscoreEl.textContent = currentguestscore
}


function plustwoguest() {
    currentguestscore += 2
    guestscoreEl.textContent = currentguestscore
}


function plusthreeguest() {
    currentguestscore += 3
    guestscoreEl.textContent = currentguestscore
}

function plussixguest() {
    currentguestscore += 6
    guestscoreEl.textContent = currentguestscore
}


function resetboard() {
    homescoreEl.textContent = 0
    currenthomescore= 0
    
    guestscoreEl.textContent = 0
    currentguestscore= 0
    winnerEl.textContent = ""
    
    document.getElementById("qtr1").checked = true
}


function getwinner(){
    let result;
    if (currenthomescore > currentguestscore)
    {
        result = "Home Team";
        
    }
    else if (currenthomescore == currentguestscore)
    {
        result = "Tied Game";
    }
    else result = "Guest Team"
    return result;
    
}

function displaywinner() {
    winnerEl.textContent = "The winner is: " + getwinner()
    }

function endGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'newgame') {
            button.disabled = true;
        }
    });
}

document.getElementById('endgame').addEventListener('click', endGame);
document.getElementById('newgame').addEventListener('click', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });
});
