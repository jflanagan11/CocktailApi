import fetch from 'node-fetch';
function getRandomCocktail(){
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(response => response.json())
  .then(data => displayCocktail(data));
} 

getRandomCocktail();

function displayCocktail(data){
    const cocktailInfo = data.drinks[0];
    console.log(cocktailInfo.strDrink);
    console.log(cocktailInfo.strInstructions);
  }
    // console.log(cocktailInfo.strInstructions);
    
//     let name = document.createElement('h2');
//     name.innerText(cocktailInfo.strDrink)
//     // let name = cocktailInfo.strDrink
//     // let instructions = cocktailInfo.strInstructions
//     // let picture = cocktailInfo.strDrinkThumb

//     // let drinkDisplay = document.querySelector('#drink-display')

// 