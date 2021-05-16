let userName = prompt("Enter your name:", "Ivan");
let userAge = prompt("Enter your age:", "18");


if (userAge < 18) {
    alert("You are not allowed to visit this website.")
} else if (userAge > 22 ) {
    alert(Welcome, $userName);
} else {
    if (confirm("Are you sure you want to continue?")) {
        alert("Welcome, " + userName);
    } else {
        alert("You are not allowed to visit this website.");
    }

}
