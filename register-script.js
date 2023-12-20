// register-script.js
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation for all fields
    if (username && email && password) {
        // Redirect to the todo list after successful registration
        localStorage.setItem("isLoggedIn", "true");
        
        fetch("http://127.0.0.1:5000/register/", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
                user_email: email,
            }),
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });

        //redirectToTodoList();
    } else {
        alert('Please fill in all fields.');
    }
});

function redirectToTodoList() {
    window.location.href = 'list.html';
}
