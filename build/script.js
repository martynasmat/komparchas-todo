document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        toggleLogin();
    });

    function toggleLogin() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            logout();
        } else {
            if (username) {
                localStorage.setItem("isLoggedIn", "true");
                redirectToTodoList(); // Redirect to the todo list after successful login
            }
        }
    }

    function redirectToRegister() {
        window.location.href = 'register.html';
    }

    function redirectToTodoList() {
        window.location.href = 'list.html';
    }

    function logout() {
        localStorage.setItem("isLoggedIn", "false");
        redirectToLogin(); // Redirect to the login page after logout
    }

    function redirectToLogin() {
        window.location.href = 'index.html';
    }

    // Other functions related to tasks, adding tasks, deleting tasks, etc., can be included here or in separate scripts.
});
