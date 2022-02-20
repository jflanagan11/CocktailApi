// import fetch from 'node-fetch';
function getRandomCocktail(){
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(response => response.json())
  .then(data => displayCocktail(data));
} 

getRandomCocktail();

function displayCocktail(data){
    const cocktailInfo = data.drinks[0];
    document.body.append(cocktailInfo.strDrink)
    // console.log(cocktailInfo.strDrink);
    // console.log(cocktailInfo.strInstructions);
    for(let i =1; i < 15; i++){
      if(cocktailInfo[`strIngredient${i}`] === null){
        break;
      }
      else{
        if(cocktailInfo[`strMeasure${i}`] === null){
          document.body.append(cocktailInfo[`strIngredient${i}`]);
        }
        else{
          document.body.append(cocktailInfo[`strMeasure${i}`]);
          document.body.append(cocktailInfo[`strIngredient${i}`]);
        }
    }
    }
    
  }
   