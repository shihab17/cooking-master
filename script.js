const searchMeal = () => {
    const shearchedMeal = document.getElementById("shearchingMeal").value;
    document.getElementById("shearchingMeal").value = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${shearchedMeal}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => meals(data.meals))
        .catch(err => {
            document.getElementById("errorHandale").style.display = "block";
            document.getElementById('error').innerText = "No Data Found";
        });
}
const handleErrors = (res) => {
    if (!res.ok) throw new Error(res.error);
    return res;
}
const meals = (meals) => {
    meals.forEach(meal => {
        const masterDiv = document.getElementById("master");
        const mealDiv = document.createElement("div");
        const showMeal = `
        <div class="meal"> 
        <img onclick="mealDetails(${meal.idMeal})" src="${meal.strMealThumb}" alt="">
        <h5 onclick="mealDetails(${meal.idMeal})">${meal.strMeal}</h5>
        </div>`
        mealDiv.innerHTML = showMeal;
        masterDiv.appendChild(mealDiv);
    });
}
const mealDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            meal(data.meals[0]);
        })
}

const meal = (detailMeal) => {
    const mealDetails = document.getElementById('mealDetails');
    mealDetails.style.display = "block";
    const h2 = document.getElementById('mealName');
    h2.innerText = detailMeal.strMeal;
    document.getElementById('mealThumb').src = detailMeal.strMealThumb;
    // list of Ingredients
    document.getElementById('strMeasure1').innerText = detailMeal.strMeasure1;
    document.getElementById('strMeasure2').innerText = detailMeal.strMeasure2;
    document.getElementById('strMeasure3').innerText = detailMeal.strMeasure3;
    document.getElementById('strMeasure4').innerText = detailMeal.strMeasure4;
    document.getElementById('strMeasure5').innerText = detailMeal.strMeasure5;
    document.getElementById('strMeasure6').innerText = detailMeal.strMeasure6;
    document.getElementById('strMeasure7').innerText = detailMeal.strMeasure7;
    document.getElementById('strMeasure8').innerText = detailMeal.strMeasure8;
    document.getElementById('strMeasure9').innerText = detailMeal.strMeasure9;
    document.getElementById('strMeasure10').innerText = detailMeal.strMeasure10;
    document.getElementById('strMeasure11').innerText = detailMeal.strMeasure11;
    document.getElementById('strMeasure12').innerText = detailMeal.strMeasure12;
    document.getElementById('strMeasure13').innerText = detailMeal.strMeasure13;
    document.getElementById('strMeasure14').innerText = detailMeal.strMeasure14;
    document.getElementById('strMeasure15').innerText = detailMeal.strMeasure15;
    document.getElementById('strMeasure16').innerText = detailMeal.strMeasure16;
    document.getElementById('strMeasure17').innerText = detailMeal.strMeasure17;
    document.getElementById('strMeasure18').innerText = detailMeal.strMeasure18;
    document.getElementById('strMeasure19').innerText = detailMeal.strMeasure19;
    document.getElementById('strMeasure20').innerText = detailMeal.strMeasure20;
}

