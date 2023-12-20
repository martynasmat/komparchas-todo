document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation for demonstration purposes
    if (email && password) {
        // Set login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        fetch("http://127.0.0.1:5000/login/", {
            method: "POST",
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });

        redirectToTodoList();
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
