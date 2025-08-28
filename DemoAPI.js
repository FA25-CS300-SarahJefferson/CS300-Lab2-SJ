// ========================================
// API Integration Demo for Students
// Fetching Data from External APIs
// ========================================

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log("First 3 users:", users.slice(0, 3));
}

async function fetchUserPosts(userId = 1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
// Converts to json
    const posts = await response.json();
    console.log(`Posts by user ${userId}:`, posts.slice(0, 3));
}

fetchUsers();
fetchUserPosts(1);


//Dog Data api
async function dogData() {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const dogTypes = await data.json();
    console.log("Dog data: ", dogTypes);
}

dogData();

// Cat Data API
async function catData() {
    const data = await fetch('https://api.thecatapi.com/v1/breeds');
    const catTypes = await data.json();
    console.log("Cat data: ", catTypes.slice(0, 3));
}

catData();

// TV Show Data
async function tvShowData() {
    const data = await fetch('https://api.tvmaze.com/shows');
    const tvShows = await data.json();
    console.log("TV Show data: ", tvShows.slice(0, 5));
}

tvShowData();

// Trivia API
async function triviaData() {
    const data = await fetch('https://opentdb.com/api.php?amount=10');
    const trivia = await data.json();
    console.log("Trivia data: ", trivia);
}

triviaData();

// Meals
async function mealData() {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const meal = await data.json();
    console.log("Meal data: ", meal);
}

mealData();
