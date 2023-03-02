
const displayPage = document.getElementById("main_container");

const landingPage = ` <section id="landing_page">
<div class="landing_div">
  <h1>Landing Page</h1>
</div>
</section>`

const homePage = `<section id="home_page">
<div id="home_div">
 <h1>Home Page</h1>
 <div class="homePage_button_wrapper">
     <button class="btn" onclick="signUpButton()" >Signup</button>
     <button class="btn" onclick="registerButton()" >Login</button>
   </div>
</div>
</section>`;


const logInPage = `<section id="register_page">
<div class="heading">
Login
</div>
<div class="form_wrapper"> 

<form action="">
<div class="form_field">
<label class="login_label" for="title" class="required">Email :</label>
<input type="text" placeholder="Type your Email"> 
</div>
<div class="form_field">
<label class="login_label" for="title" class="required">Password :</label>
<input type="text" placeholder="Type your Password">
</div>
<div class="forgot_password">
Forgot Password?
</div>
<button class="btn" onclick="landingButton()">Login</button>
<div class="message">
Not a member? <span onclick="signUpButton()">Signup</span>
</div>
</form>
</div>
</section>`;

const registerPage = `<section id="login_page">
<div class="heading">
Register
</div>
<div class="form_wrapper">

<form action="" id="register_form" >
<label for="title" class="login_label">First Name :</label>
<input id="fName" type="text" placeholder = "First Name">
<label for="title" class="login_label" >Last Name :</label>
<input id="lName" type="text" placeholder = "Last Name">
<label for="title" class="login_label" >Email :</label>
<input id="email" type="text" placeholder = "Email">
<label for="title" class="login_label" >Password :</label>
<input id="password" type="text" placeholder="Password">
</form>
<div class="register_button_wrapper">
<button class="btn" onclick="registerButton()">Register</button>
</div>
</div>
</section>`;


displayPage.innerHTML = homePage;

const signUpButton = () => {
   console.log("hello")
    displayPage.innerHTML = registerPage;
};


const registerButton = () => {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let infoObj = {fName,lName,email,password};
    
    localStorage.setItem("info",infoObj);


    displayPage.innerHTML = logInPage;
};

const logInButton = () => {
    console.log("y")
  displayPage.innerHTML = homePage;
};
 

const landingButton = ()=> {
    console.log("z")
    displayPage.innerHTML = landingPage;
}