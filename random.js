// import fetch from 'node-fetch';
function getRandomCocktail(){
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(response => response.json())
  .then(data => displayCocktail(data));
} 

getRandomCocktail();

function displayCocktail(data){
 
    const cocktailInfo = data.drinks[0];
    const h1 = document.createElement('h1');
    h1.classList.add('cocktailHeader');
    h1.innerText = cocktailInfo.strDrink;
    document.body.append(h1);

    const img = document.createElement('img');
    img.classList.add('cocktailImg');
    img.src = cocktailInfo.strDrinkThumb;
    document.body.append(img);

    const ul = document.createElement('ul');
    ul.classList.add('cocktailUl')
    ul.innerText = "Ingredients"
    document.body.append(ul);

    for(let i =1; i < 15; i++){
      if(cocktailInfo[`strIngredient${i}`] === null){
        break;
      }
      else{
        if(cocktailInfo[`strMeasure${i}`] === null){
          let li = document.createElement('li');
          li.innerText = cocktailInfo[`strIngredient${i}`];
          ul.append(li);
        }
        else{
          let li = document.createElement('li');
          li.classList.add('cocktailLi');
          let measure = cocktailInfo[`strMeasure${i}`]
          let ingredient = cocktailInfo[`strIngredient${i}`]
          li.innerText = measure + " " + ingredient;
          ul.append(li);
          
        }
    }
    }
    const instructions = document.createElement('p');
    instructions.classList.add('cocktailInstructions')
    instructions.innerText = cocktailInfo.strInstructions;
    document.body.append(instructions);

    
  }
   