
document.getElementById("rock").onclick = function() {myCard("rock")};
document.getElementById("paper").onclick = function() {myCard("paper")};
document.getElementById("scisser").onclick = function() {myCard("scisser")};
let computerWinCount = document.getElementById('robotWin')
let PlayerWinCount = document.getElementById('PlayerWin')
document.getElementById('Result')
 PlayerWinCount = 0;
 computerWinCount = 0;


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
    // console.log(RobotChooses)
    // console.log(typeof(RobotChosesClear))
    deside(RobotChosesClear,playerChoses)
    // deside win or losed
    function deside(bot,pl){
        var r = bot;
        var  p = pl;
        if(p==="rock"){
            if(r==='rock'){
                draw()

            }
            if(r==='paper'){
                loss()
                
            }
            if(r==='scissor'){
                win()
            }
            
        }
        if(p==="paper"){
            if(r==='rock'){
                win()
                
            }
            if(r==='paper'){
                draw()
            }
            if(r==='scissor'){
                loss()
            }
            
        }
        if(p==="scissor"){
            if(r==='rock'){
                loss()
            }
            if(r==='paper'){
                win()
            }
            if(r==='scissor'){
                draw()
            }
            
        }

    }



    function draw(){   
        // console.log('draw')
        document.getElementById('Result').innerHTML="It's a draw"
        resetcolor()
        
    }
    function win(){
        // console.log('you win')
        document.getElementById('Result').innerHTML="you win"
        PlayerWinCount++;
        document.getElementById('PlayerWin').innerHTML=`Your score ${PlayerWinCount}`
        resetcolor()
    }
    function loss(){
        // console.log('you loss')
        document.getElementById('Result').innerHTML="you loss";
        computerWinCount++;
        document.getElementById('robotWin').innerHTML=`Bot score ${computerWinCount}`;
        resetcolor()
    }

    function resetcolor(){

        setTimeout(function(){
            hightlight.classList.toggle("show");
            BothightLightCard.classList.toggle("show");
        }, 150);
        
    }
    


}
// document.getElementById('Result').innerHTML
