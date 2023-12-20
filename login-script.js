document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation for demonstration purposes
    if (username && password) {
        // Set login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        response = fetch("http://127.0.0.1:5000/login/", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(function (response) {
            if(response.status === 201) {
                redirectToTodoList();
            }else {
                alert("blogai");
            };
        });
        console.log(response);
        //window.location.href = 'index.html';
    };
});

function redirectToTodoList() {
    window.location.href = 'list.html';
};
