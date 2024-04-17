// script.js
function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'flex';
}

function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function login(event) {
    event.preventDefault();
    const gmail = document.getElementById('gmail').value;
    const emailUsername = gmail.split('@')[0]; // Extracting the part before '@'
    localStorage.setItem('userEmail', emailUsername); // Storing the email username in localStorage
    updateLoginStatus();
    closeLoginPopup();
}

function logout() {
    localStorage.removeItem('userEmail'); // Clearing the user email from storage
    updateLoginStatus();
}

function updateLoginStatus() {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('logoutButton').textContent = userEmail + ' (Logout)';
    } else {
        document.getElementById('loginButton').style.display = 'block';
        document.getElementById('logoutButton').style.display = 'none';
    }
}

window.onload = function() {
    updateLoginStatus(); // Update login status when the page loads
}
