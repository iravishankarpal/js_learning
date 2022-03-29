
document.getElementById("rock").onclick = function() {myCard("rock")};
document.getElementById("paper").onclick = function() {myCard("paper")};
document.getElementById("scisser").onclick = function() {myCard("scisser")};


function myCard(card){
    var playerChoses = card;
    // console.log(playerChoses);
    var hightlight = document.getElementById(playerChoses);
    hightlight.classList.toggle("show");
    
    
    
    var robotRandomNO = Math.floor((Math.random() * 3));
    let robotOption = ['R.rock','R.paper','R.scissor'];
    var RobotChooses = robotOption[robotRandomNO] ;
    var BothightLightCard = document.getElementById(RobotChooses);
    BothightLightCard.classList.toggle("show");
    var RobotChosesClear = RobotChooses.split(".")[1];
    console.log(RobotChooses)
    // console.log(typeof(RobotChosesClear))
    deside(RobotChosesClear,playerChoses)
    // deside win or losed
    function deside(r,p){
        var r = r;
        var  p = p;
        if(p="rock"){
            if(r='rock'){
                draw()

            }
            if(r='paper'){
                loss()
                
            }
            if(r='scissor'){
                win()
            }
            
        }
        if(p="paper"){
            if(r='rock'){
                win()
                
            }
            if(r='paper'){
                draw()
            }
            if(r='scissor'){
                loss()
            }
            
        }
        if(p="scissor"){
            if(r='rock'){
                loss()
            }
            if(r='paper'){
                win()
            }
            if(r='scissor'){
                draw()
            }
            
        }

    }


    var computerWinCount = document.getElementById('robotWin')
    var PlayerWinCount = document.getElementById('PlayerWin')
    document.getElementById('Result')
    PlayerWin = 0;
    computerWinCount = 0;

    function draw(){   
        console.log('draw')
        document.getElementById('Result').innerHtml="It's a draw"
        resetcolor()
        
    }
    function win(){
        console.log('you win')
        document.getElementById('Result').innerHtml="you win"
        PlayerWinCount++;
        document.getElementById('PlayerWin').innerHtml=PlayerWinCount
        resetcolor()
    }
    function loss(){
        console.log('you loss')
        document.getElementById('Result').innerHtml=("you loss")
        computerWinCount++;
        document.getElementById('robotWin').innerHtml=computerWinCount
        resetcolor()
    }

    function resetcolor(){

        setTimeout(function(){
            hightlight.classList.toggle("show");
            BothightLightCard.classList.toggle("show");
        }, 700);
        
    }
    


}