let list = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let moves = 0;
let correctMoves = 0;
accuracy = 0;
let lastFlipped;
rules = document.getElementById("ruleset");
win = document.getElementById("win")
overview = document.getElementById("overview")

function setAccuracy()
{
    if (moves==0)
    {
        accuracy = "0%"
    }
    else
    {
    accuracy = (parseInt((correctMoves/moves)*10000))/100+"%";
    }
    console.log(accuracy)
}

function initialize()
{
    setAccuracy()
    rules.style.visibility = "hidden";
    win.style.visibility = "hidden";
    shuffle()
    update()
}

function checkWin()
{
    if (correctMoves>=8)
    {
        win.style.visibility = "visible";
    }
}

function update()
{
    overview.innerHTML = "Score: "+moves+" Matches: "+correctMoves+" Accuracy: "+accuracy;
}

function shuffle (){
    for(let x = 0; x < 500; x++){
        let numberOne = Math.floor(Math.random()*16);
        let numberTwo = Math.floor(Math.random()*16);
        let temp = list[numberTwo];
        list[numberTwo] = list[numberOne];
        list[numberOne] = temp;
    }
}

function toggleRulesetVisibility()
{
    if (rules.style.visibility=="hidden")
    {
        rules.style.visibility = "visible"
    }
    else
    {
        rules.style.visibility = "hidden"
    }
}

function display(position){
    moves++;
    update()
    let card = document.getElementById(position);
    if (list[position] == 1){
        card.setAttribute("src","Pikachu.webp");
    }
    if (list[position] == 2){
        card.setAttribute("src","snorlax.webp");
    }
    if (list[position] == 3){
        card.setAttribute("src","jiggypuff.webp");
    }
    if (list[position] == 4){
        card.setAttribute("src","magikarp.webp");
    }
    if (list[position] == 5){
        card.setAttribute("src","rick.jpg");
    }
    if (list[position] == 6){
        card.setAttribute("src","umbreon.webp");
    }
    if (list[position] == 7){
        card.setAttribute("src","bill.jpg");
    }
    if (list[position] == 8){
        card.setAttribute("src","eveee.jpg");
    }
}
function engine(position){
    display(position);
    let card = document.getElementById(position);
    if (lastFlipped != null){
        if (check(card,lastFlipped))
        {
            correctMoves++;
            setAccuracy()
            update()
            checkWin()
        }
        else{
            let last = lastFlipped;
            setTimeout(() => {
            card.setAttribute("src","pokemoncard.png");
            last.setAttribute("src","pokemoncard.png");
        }, 250);
        setAccuracy()
        update()
        checkWin()
        }
        lastFlipped = null;
    }
    else {
        lastFlipped = card;
    }
}

function reset(){
    for (let x = 0; x<16; x++){
        let card = document.getElementById(x);
        card.setAttribute("src","pokemoncard.png");
    }
    shuffle();
    score = 0;
    moves = 0;
    correctMoves = 0;
    setAccuracy();
    update();
    lastFlipped = null
}

function check(cardOne, cardTwo){
    if (cardOne.getAttribute("src") == cardTwo.getAttribute("src")){
        return true;
    }
    return false;
}

