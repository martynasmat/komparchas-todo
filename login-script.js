document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation for demonstration purposes
    if (email === 'admin@gmail.com' && password === 'admin') {
        // Set login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        redirectToTodoList();
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
