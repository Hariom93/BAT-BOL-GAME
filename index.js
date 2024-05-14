
  
      let scoreStr = localStorage.getItem('Score');
      let score;
      resetScore();
      
      function resetScore(scoreStr)
      {
        score = scoreStr ? JSON.parse(scoreStr)  : {
          Won: 0,
          Tie: 0,
          Lose: 0,
        };
        score.displayScore = function(){
          return `Won : ${score.Won} , Lose : ${score.Lose} , Tie : ${score.Tie}`;
        };
        getresult();
        }

          
      function generateComputerChoice() {
     let randomNumber = Math.random() * 3;
     if (randomNumber > 0 && randomNumber <= 1) {
       return 'Bat';
      }
      else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Bol';
      }
      else {
        return 'Stump';
      }
    }
    
    
    function matchresult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Bat') {
          score.Tie++;
          return 'Tie a match';
        }
        else if (computerMove === 'Bol') {
          score.Won++;
          return 'User won';
        }
        else if (computerMove === 'Stump') {
          score.Lose++;
          return 'Computer won';
        }
      }


      else if (userMove === 'Bol') {
        if (computerMove === 'Bat') {
          score. Lose++;
          return 'Computer won';
        }
        else if (computerMove === 'Bol') {
          score.Tie++;
          return 'Tie a match'
        }
        else if (computerMove === 'Stump') {
          score.Won++;
          return 'User won'
        }
      }


      else if (userMove === 'Stump') {
        if (computerMove === 'Bat') {
          score.Won++;
          return 'User won'
        }
        else if (computerMove === 'Bol') {
          score.Lose++;
          return 'Computer won'
        }
        else if (computerMove === 'Stump') {
          score.Tie++;
          return 'Tie a match'
        }
      }
    }
    

    function getresult(userMove, computerMove, result) {
        
      localStorage.setItem('Score', JSON.stringify(score));

      document.querySelector('.user-move').innerText = userMove!== undefined ? `Your choice is ${userMove}`:'';
    
      document.querySelector('.computer-move').innerText =userMove!== undefined ?`and Computer choice is ${computerMove}`:'';
 
      document.querySelector('.result').innerText = userMove!== undefined ? result:'';
        
      document.querySelector('.score').innerText =  score.displayScore();
    }
   
    alert(`                   Press - BAT , BOL and STUMP
           Rules -:
        1. Your choice is BAT and computer choice is BOLL you WON
        2. Your choice is BAT and computer choice is STUMP computer WON
        3. Your choice is BAT and computer choice is BAT match TIE
              
        4. Your choice is BOL and computer choice is STUMP you WON
        5. Your choice is BOL and computer   choice is BAT computer WON
        6. Your choice is BOL and computer choice is BOL MATCH TIE

        7. Your choice is STUMP and computer choice is BAT you WON
        8. Your choice is STUMP and computer choice is BOLL computer WON
        9. Your choice is STUMP and computer choice is STUMP match TIE `);
