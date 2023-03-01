const displayPage = document.getElementById("main_container");

const welcomePage = `<section id="welcome_page">
<div id="welcome_div">
    <h1>welcome Page</h1>
    <button id="signUp_btn">signUp</button>
</div>
</section>`;

displayPage.innerHTML = welcomePage;

const registerPage = `<section id="register_page">
<div id="register_div">
    <h1>Register Here</h1>
    <form action="">
        <label for="title">Email :</label>
        <input type="text" placeholder="Email">
        <label for="title">Password :</label>
        <input type="text" placeholder="Password">
    </form>
    <button id="register_btn">Register</button>
</div>
</section>`;

const logInPage = `<section id="login_page">
<div id="login_div">
    <form action="">
        <label for="title">First Name :</label>
        <input type="text" placeholder = "First Name">
        <label for="title">Last Name :</label>
        <input type="text" placeholder = "Last Name">
        <label for="title">Email :</label>
        <input type="text" placeholder = "Email">
        <label for="title">Password :</label>
        <input type="text" placeholder="Password">
    </form>
    <button id="login_btn">logIn</button>
</div>
</section>`;

const signUpButton = document.getElementById("signUp_btn");
console.log(signUpButton);
const logInButton = document.getElementById("login_btn");
console.log(logInButton);
const registerButton = document.getElementById("register_btn");





signUpButton.addEventListener("click",()=>{
    displayPage.innerHTML = registerPage;
    
})

registerButton.addEventListener("click",()=>{
    displayPage.innerHTML = logInPage;
})

