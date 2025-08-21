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
    const posts = await response.json();
    console.log(`Posts by user ${userId}:`, posts.slice(0, 3));
}

fetchUsers();
fetchUserPosts(1);