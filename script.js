// function handleErrors(res) {
//     if (!res.ok) throw new Error(res.error);
//     return res;
//   }
const handleErrors = (res)=>{
    if (!res.ok) throw new Error(res.error);
    return res;
}
const searchMeal = () => {
    const category = document.getElementById("shearchingMeal").value;
    document.getElementById("shearchingMeal").value="";
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(handleErrors)
    .then(res=> res.json())
    .then(data=> meals(data.meals))
    .catch(err => console.log("err"));
}
// function searchMeal(){
//     const category = document.getElementById("shearchingMeal").value;
//     document.getElementById("shearchingMeal").value="";
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     .then(handleErrors)
//     .then(res=> res.json())
//     .then(data=> meals(data.meals))
//     .catch(err => console.log("err"));
    
// }
const meals = (meals) => {
    meals.forEach(meal => {
        // console.log(meal);
        const masterDiv = document.getElementById("master");
        const mealDiv = document.createElement("div");
        const test = `
        <img onclick="test()" src="${meal.strMealThumb}" alt="">
        <h3 onclick="test()">${meal.strMeal}</h3>
        `
        
        mealDiv.innerHTML=test;
        masterDiv.appendChild(mealDiv);
    });
}

function test(){
    console.log("clicked")
}

{/* <img onclick="test()" src="${meal.strMealThumb}" alt="">
<h3 onclick="test()">${meal.strMeal}</h3> */}