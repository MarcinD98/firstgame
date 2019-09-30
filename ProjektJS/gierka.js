var cardsA = ["cr7.jpg","david.jpg","hk.jpg","leomessi.jpg","marco.jpg","pb.jpg","pierre.jpg","rl9.jpg","cr7.jpg","david.jpg","hk.jpg","leomessi.jpg","marco.jpg","pb.jpg","pierre.jpg","rl9.jpg"];

var polishTeam = ["am.jpg","gk.jpg","kb.jpg","kg.jpg","kp.jpg","lf.jpg","lp.jpg","ws.jpg","am.jpg","gk.jpg","kb.jpg","kg.jpg","kp.jpg","lf.jpg","lp.jpg","ws.jpg"];

var i=0;
var cardsB = new Array(16);
var cards = cardsA;

var visibilityTime = 2000;
var chosenLevel = false;
var chosenCards = false;

var mySound;
mySound = new sound("sounds/yay.mp3");

var seconds = 0;
var timer1 = 0;
var points = 0;
var counter = 0;

var firstCard = false;
var firstCardNumber;
var block = false;

window.onload = newGame(cards);

c0 = document.getElementById("c0");
c0.addEventListener("click", function() { reveal(0); });

c1 = document.getElementById("c1");
c1.addEventListener("click", function() { reveal(1); });

c2 = document.getElementById("c2");
c2.addEventListener("click", function() { reveal(2); });

c3 = document.getElementById("c3");
c3.addEventListener("click", function() { reveal(3); });

c4 = document.getElementById("c4");
c4.addEventListener("click", function() { reveal(4); });

c5 = document.getElementById("c5");
c5.addEventListener("click", function() { reveal(5); });

c6 = document.getElementById("c6");
c6.addEventListener("click", function() { reveal(6); });

c7 = document.getElementById("c7");
c7.addEventListener("click", function() { reveal(7); });

c8 = document.getElementById("c8");
c8.addEventListener("click", function() { reveal(8); });

c9 = document.getElementById("c9");
c9.addEventListener("click", function() { reveal(9); });

c10 = document.getElementById("c10");
c10.addEventListener("click", function() { reveal(10); });

c11 = document.getElementById("c11");
c11.addEventListener("click", function() { reveal(11); });

c12 = document.getElementById("c12");
c12.addEventListener("click", function() { reveal(12); });

c13 = document.getElementById("c13");
c13.addEventListener("click", function() { reveal(13); });

c14 = document.getElementById("c14");
c14.addEventListener("click", function() { reveal(14); });

c15 = document.getElementById("c15");
c15.addEventListener("click", function() { reveal(15); });


menu1 = document.getElementById("championsLeague");
menu1.addEventListener("click", function() { championsLeague(); });
menu1.addEventListener("click", function() { clicked1(); });

menu2 = document.getElementById("polishTeam");
menu2.addEventListener("click", function() { polish(); });
menu2.addEventListener("click", function() { clicked2(); });

level1 = document.getElementById("level1");
level1.addEventListener("click", function() { changeLevel(1) ;});
level1.addEventListener("click", function() { clicked3(); });

level2 = document.getElementById("level2");
level2.addEventListener("click", function() { changeLevel(2) ;});
level2.addEventListener("click", function() { clicked4(); });

level3 = document.getElementById("level3");
level3.addEventListener("click", function() { changeLevel(3); });
level3.addEventListener("click", function() { clicked5(); });




function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
};


function newGame(cards)
{   
    for (j=0;j<16;j++)
    {   
        var number = Math.floor(Math.random()*(16-i));
        
        if (cards.length != 0)
        {
            cardsB[j] = cards[number];
            cards.splice(number,1);
            i++;
        }
    }
}


function clicked1()
{   
    if($("#polishTeam").css("color", "white") && seconds == 1)
    {   
        $("#championsLeague").css("color", "yellowgreen");
        $("#polishTeam").css("color", "white");
    }
}

function clicked2()
{   
    if($("#championsLeague").css("color", "white") && seconds == 1)
    {
        $("#polishTeam").css("color", "yellowgreen");
        $("#championsLeague").css("color", "white");
    }
}

function clicked3()
{
    $("#level1").css("color", "yellowgreen");
    $("#level2").css("color", "white");
    $("#level3").css("color", "white");
}

function clicked4()
{
    $("#level2").css("color", "yellowgreen");
    $("#level1").css("color", "white");
    $("#level3").css("color", "white");
}

function clicked5()
{
    $("#level3").css("color", "yellowgreen");
    $("#level1").css("color", "white");
    $("#level2").css("color", "white");
}

function changeLevel(nr)
{   
    chosenLevel = true;
    switch(nr)
    {
        case 1:
            visibilityTime = 1500; 
            break;
        case 2:
            visibilityTime = 700;
            break;
        case 3:
            visibilityTime = 300;
            break;
        default:
            visibilityTime = 1000;
            break;
    }
} 

function polish()
{   
    if(seconds == 0)
    {   
        chosenCards = true;
        i = 0;
        clearTimeout(timer1);
        seconds = 0;
        timer();
        score();

        polishTeam = ["am.jpg","gk.jpg","kb.jpg","kg.jpg","kp.jpg","lf.jpg","lp.jpg","ws.jpg","am.jpg","gk.jpg","kb.jpg","kg.jpg","kp.jpg","lf.jpg","lp.jpg","ws.jpg"];
        newGame(polishTeam);
    }
}


function championsLeague()
{   
    if(seconds==0)
    {   
        chosenCards = true;
        i = 0;
        clearTimeout(timer1);
        seconds = 0;
        timer();
        score();

         cardsA = ["cr7.jpg","david.jpg","hk.jpg","leomessi.jpg","marco.jpg","pb.jpg","pierre.jpg","rl9.jpg","cr7.jpg","david.jpg","hk.jpg","leomessi.jpg","marco.jpg","pb.jpg","pierre.jpg","rl9.jpg"];
        newGame(cardsA);
    }
}


function timer()
{  
    if (seconds <10)
        {
            $("#timer").html("0"+seconds);
            $("#timer").css("color", "yellowgreen");
        }
    else if (seconds>=10 && seconds<=20)
        {
            $("#timer").html(seconds);
            $("#timer").css("color", "orange");
        }
    else
        {
            $("#timer").html(seconds);
            $("#timer").css("color", "red");
        }
    seconds++;

timer1 = setTimeout(function() { timer() }, 1000);
}


function score()
{
    $("#score").html(points);
}



function reveal(nr)
{   
    if(chosenLevel == false || chosenCards == false)
    {alert("Choose your settings at the left menu :)");}
    
    if(block == false && chosenLevel == true && chosenCards == true)
    {   
        block = true;
        var img = "url(img/"+cardsB[nr];
        $("#c"+nr).css("background-image", img); 

        if(firstCard == false)
        {   
            //pierwsza odkryta karta
            firstCard = true;
            firstCardNumber = nr;
            block = false;
        }
        else
        {   
            //druga odkryta karta
            if(cardsB[firstCardNumber] == cardsB[nr] && firstCardNumber != nr)
            {
                setTimeout(function() { sameCards(firstCardNumber, nr) }, visibilityTime);
                counter++;
                points++;
                score();
                if(counter == 8) 
                {
                clearTimeout(timer1);
                mySound.play();
                setTimeout(function() { win() }, 900);
                }
            }
            else if (firstCardNumber == nr)
            {      
                alert("Ops, you clicked on the same card again");
                points++;
                setTimeout(function() { differentCards(firstCardNumber, nr) }, visibilityTime);
                score();
            }
            else
            {   
                points++;
                score();
                setTimeout(function() { differentCards(firstCardNumber, nr) }, visibilityTime);
            }
                firstCard = false;
        } 
    }    
}

function sameCards(nr1, nr2)
{
    $("#c"+nr1).css("visibility", "hidden");
    $("#c"+nr2).css("visibility", "hidden");
    block = false;
}

function differentCards(nr1, nr2)
{   
    $("#c"+nr1).css("background-image", "url(img/back.jpg)" ); 
    $("#c"+nr2).css("background-image", "url(img/back.jpg)" ); 
    block = false;
}

function win()
{
    if(counter == 8)
    {   
        if(seconds < 22 && points< 21)
        {
            $(".container").addClass("endGame");
            $(".container").html("Wow! Great job!<br/> Your score: "+points+" points</br> It took you: "+(seconds-1)+" seconds!<br/> <p onclick='location.reload()'>Play again</p>");
        }
        else
        {
            $(".container").addClass("endGame");
            $(".container").html("Could be better!<br/> Your score: "+points+" points</br> It took you: "+(seconds-1)+" seconds!<br/> <p onclick='location.reload()'>Play again</p>");
        }
    }
}


