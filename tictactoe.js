function init()
{
  console.log("JS loaded");

  //defining the currentPlayer now
  var currentPlayer = "x";
  var grid;
  var playerX= []
  var playerO=[]
  var count = 0;
  console.log(currentPlayer);

  var listener = function( event )
  {

    count++;
    if(count>8)
    {
      alert("Its a draw!");
      location.reload(true)
    }


    grid = document.getElementById(event.toElement.id);


    if (currentPlayer == "x")
    {
      playerX.push(grid.id);

      checkForWinnersX();
    }
    else if(currentPlayer == "o")
    {
        playerO.push(grid.id);
        checkForWinnersO();
    }

      //getting id of the indivdual grid


      //checking what is the currentplayer now
      if (currentPlayer == "o")
      {
        //change the currentplayer to X
        currentPlayer = "x";
        //changing backgrond blue on the grid
        grid.style.background = "#9683ec"; //blue
        //adding O text to grid
        grid.innerText = "O";
      }
      else if(currentPlayer = "x")
      {
        //change the currentplayer to O
        currentPlayer = "o";
        //changing background to red on the grid
        grid.style.background = "#eea2ad"; //pink
        //adding X text to grid
        grid.innerText = "X";
      }
      console.log("current player is "+ currentPlayer);

      //removing click event from the grid
      grid.removeEventListener("click", listener);

  }

  //for loop to add click event to every grid
  for(i=1;i<10;i++)
  {
    var id;
    switch (i)
    {
      case 1:
        id = "a";
        break;
      case 2:
        id = "b";
        break;
      case 3:
        id = "c";
        break;
      case 4:
        id = "d";
        break;
      case 5:
        id = "e";
        break;
      case 6:
        id = "f";
        break;
      case 7:
        id = "g";
        break;
      case 8:
        id = "h";
        break;
      case 9:
        id = "i";
        break;
      default:
        break;
    }
    //adding click event to every grid
    document.getElementById(id).addEventListener("click", listener);
  }



var winningCombination = [["a","b","c"], ["d","e","f"],["g","h","i"], ["a","d","g"], ["b","e","h"],
                          ["c","f","i"], ["a","e","i"], ["c","e","g"]];

var first = false;
var second = false;
var third = false;


function checkForWinner(player)
{
  if(player == x)
  {

  }
  else if(player == o)
  {

  }
}

function checkForWinnersX()
{
  for(i=0; i < winningCombination.length; i++)
  {

    for(j=0; j<winningCombination[i].length; j++)
    {
      for(z=0; z<playerX.length; z++)
      {
        if(winningCombination[i][j] == playerX[z])
        {

          if(j==0)
          {
            first = true;
            console.log("first :"+first);
          }
          else if(j==1)
          {
            second = true;
            console.log("second :"+second);
          }
          else if(j==2)
          {
            third = true;
            console.log("third :"+third);
          }

          console.log(first && second && third);
          if(first && second && third)
          {
            alert("X wins the game!");
            location.reload(true);
          }

        }


      }

    }
    first = false;
    second = false;
    third = false;
  }

}

function checkForWinnersO()
{
  for(i=0; i < winningCombination.length; i++)
  {

    for(j=0; j<winningCombination[i].length; j++)
    {
      for(z=0; z<playerO.length; z++)
      {
        if(winningCombination[i][j] == playerO[z])
        {

          if(j==0)
          {
            first = true;
            console.log("first :"+first);
          }
          else if(j==1)
          {
            second = true;
            console.log("second :"+second);
          }
          else if(j==2)
          {
            third = true;
            console.log("third :"+third);
          }


          if(first && second && third)
          {
            alert("O wins the game!");
            location.reload(true)
          }

        }


      }

    }
    first = false;
    second = false;
    third = false;
  }

}
}



window.addEventListener("load",init,false);
