let name = document.getElementById("name");
let Email = document.getElementById("email");
let Phone = document.getElementById("phone");
let Company = document.getElementById("company");
let Message = document.getElementById("message");
let sendbutton = document.getElementById("sendbutton");


let popupbox = document.getElementById("popupbox");
let popuph1 = document.getElementById("popuph1");
let popuph2 = document.getElementById("popuph2");
let popuphp = document.getElementById("popuphp");
let closeit = document.getElementById("closeit");

sendbutton.addEventListener('click',(e)=> {
    e.preventDefault();
    fetch("https://traveller-jt36.onrender.com/comments",{
        method:"POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
            Name : name.value,
            Email : Email.value,
            Phone : Phone.value,
            Company : Company.value,
            Message : Message.value
        })
    })
    if(name.value) {
        popuph1.textContent = "Thanks for your feedback.";
        popupbox.style.visibility = "visible";
    } else {
        popuph1.textContent = "Please fill all the fields to give feedback";
        popupbox.style.visibility = "visible";
    }
    
    
})

closeit.addEventListener('click',(e)=> {
    popupbox.style.visibility = "hidden"
})

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
