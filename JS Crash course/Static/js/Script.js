

function indays(){
    var d = new Date()
    console.log(d)
    var birthyear= prompt("year of birth");
    var day = (d.getFullYear()-birthyear) * (365*24*3600);
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode(day+" Seconds")
    h1.setAttribute('id', 'day');
    h1.appendChild(textAnswer)
    
    document.getElementById('flex-result').appendChild(h1)
}

function reset() {
    // document.getElementById('flex-result').removeChild();
    document.getElementById('flex-result').remove();
}

//  cat image generate
function gencat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/891.gif";
    div.appendChild(image)
    console.log(div)
} 

//  challange 3 RPS
function rpfGame(UserOption)
{  
   var userChoice, botChoice;
   
   userChoice = UserOption.id
   botChoice = botdata() // bot choice
  
   result = checkwinner(userChoice, botChoice); // [0,1] human lost| bot win
   
   message = finalmessage(result) //{'message' : 'you won', 'color': 'green'}
   
   UserResponse(userChoice, botChoice, message)
   
}

function botdata()
{
    let lst = ['Rock', 'Paper', 'Scissors']
    return lst[Math.floor(Math.random()*3)]
}

function checkwinner(userChoice, botChoice){
    var database={
        'Rock': {'Scissors': 1, 'Rock': 0, 'Paper':-1},
        'Paper': {'Scissors': -1, 'Rock': 1, 'Paper':0},
        'Scissors': {'Scissors': 0, 'Rock': 1, 'Paper':-1}
    }

    var userscore = database[userChoice][botChoice]
   
    return userscore;
}

function finalmessage(userscore){
    if (userscore === 0){  
        return {'message': 'match tie' ,'color':'yellow'}
    }
    else if(userscore ===1)
    {   
        return {'message': 'Match won' ,'color': 'green'}
    }
    else if(userscore ===-1)
    {
        return {'message': 'Match loss' ,'color': 'red'}
    }    
}


function UserResponse(userChoice, botChoice, message)
{
    
    var image = {
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissors': document.getElementById('Scissors').src,
    }
    
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissors').remove();

    var userdiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    
    userdiv.innerHTML = "<img src='"+image[userChoice]+"' height=200 width=200 style='box-shadow: 0px 10px 20px rgb(3, 50, 233, 1)'> ";
    botdiv.innerHTML = "<img src='"+image[botChoice]+"'height=200 width=200 style='box-shadow: 0px 10px 20px rgb(173, 50, 50)'>"; 
    messagediv.innerHTML = "<h1 style=color:"+ message.color +">"+ message.message+"</h 1>"

    console.log(userdiv)
    document.getElementById('RPS').appendChild(userdiv)
    document.getElementById('RPS').append(botdiv)
    document.getElementById('RPS').append(messagediv)

}

//  challange 4 change the color of alll buttons

var buttons = document.getElementsByTagName("button")


var copyAllButtions = [];
for (let i=0;i<buttons.length;i++)
{
    copyAllButtions.push(buttons[i].classList[1])
    
}

console.log(copyAllButtions)

function buttonColorChange(buttonThingy)
{
    if (buttonThingy.value==='Red'){ RedButton();}
    else if (buttonThingy.value==='Green') {GreenButton();}
    else if (buttonThingy.value==='Random') {RandonButton();}
    else if (buttonThingy.value==='Reset') {ResetButton();}
}

function RedButton()
{
    for(let i=0;i<copyAllButtions.length;i++){
        
        buttons[i].classList.remove(buttons[i].classList[1]); 
        buttons[i].classList.add('btn-danger');
    }
}
function GreenButton()
{
    for(let i=0;i<copyAllButtions.length;i++){
        buttons[i].classList.remove(buttons[i].classList[1]); 
        buttons[i].classList.add('btn-success');
    }
}
function ResetButton()
{
    for(let i=0;i<copyAllButtions.length;i++){
        
        buttons[i].classList.remove(buttons[i].classList[1]); 
        buttons[i].classList.add(copyAllButtions[i]);
    }
}

function RandonButton()
{
    console.log('randoms')
    var choice = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
    for (let i=0;i<copyAllButtions;i++){
        var randomno = Math.floor(Math.random()*4);
        buttons[i].classList.remove(buttons[i].classList[1]); 
        buttons[i].classList.add(choice[randomno]);
    }   
}

