const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    fetch("http://127.0.0.1:5000/add-task/", {
        method: "POST",
        body: JSON.stringify({
            user_id: 1,
            task_content: inputBox.value,
            completed: false
        }),
        headers: {
            "Content-type": "application/json", 
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = 'index.html';
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
