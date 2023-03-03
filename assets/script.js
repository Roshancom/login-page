const displayPage = document.getElementById("main_container");


const homePage = `<section id="home_page">
<div id="home_div">
<h1>Home Page</h1>
<div class="homePage_button_wrapper">
<button class="btn" onclick="signUpHandler()" >Signup</button>
<button class="btn" onclick="homaPageLoginHandler()" >Login</button>
</div>
</div>
</section>`;


const registerPage = `<section id="Register_page">
<div class="heading">
Register
</div>
<div class="form_wrapper">

<form action="" id="register_form" >
<label for="title" class="login_label">First Name :</label>
<input id="fName" type="text" placeholder = "First Name">
<br>
<span id="fNameErrorMsg"></span>
<label for="title" class="login_label" >Last Name :</label>
<input id="lName" type="text" placeholder = "Last Name"><br>
<br>
<span id="lNameErrorMsg" style=" color: red"></span>
<label for="title" class="login_label" >Email :</label>
<input id="email" type="text" placeholder = "Email">
<br>
<span id="emailErrorMsg"></span>
<label for="title" class="login_label" >Password :</label>
<input id="password" type="text" placeholder="Password">
<br>
<span id="passwordErrorMsg"></span>
</form>
<div class="register_button_wrapper">
<button class="btn" onclick="registerHandler()">Register</button>
</div>
</div>
</section>`;



const logInPage = `<section id="Login_page">
<div class="heading">
Login
</div>

<div class="form_wrapper"> 
<form onsubmit="return handleSubmit()">
<div class="form_field">
<label class="login_label" for="title" >Email :</label>
<input id="mail_validation" type="text" placeholder="Type your Email"> 

</div>
<div class="form_field">
<label class="login_label" for="title" >Password :</label>
<input id="password_validation" type="text" placeholder="Type your Password">

</div>

<div class="forgot_password">
<span onclick="signUpButton()">Forgot Password?</span>
</div>
<button class="btn" type="submit" >Login</button>
<div class="message">
Not a member? <span onclick="signUpHandler()">Signup</span>
</div>
</form>
</div>
</section>`;



const landingPage = ` <section id="landing_page">
<div class="landing_div">
  <h1>Landing Page</h1>
</div>
</section>`;
//first page
displayPage.innerHTML = homePage;

//Events handler
const signUpHandler = () => {
  displayPage.innerHTML = registerPage;
};

const homaPageLoginHandler = () => (displayPage.innerHTML = logInPage);
const validationMessage={
  "fName":"FirstName field is required!",
  "lName":"LastName field is required!",
  "email": "email field is required",
  "password": "password field is required"
}
//collect data from user and store in localStorage.
const registerHandler = () => {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let infoObj = { fName, lName, email, password };

  localStorage.setItem("info", JSON.stringify(infoObj));
  let errorMessage = [];

  if(!fName){
    errorMessage.push({"fName":validationMessage.fName})
    //errrorMessage = "FirstName field is required!";
  }
  if(!lName){
    errorMessage.push({"lName":validationMessage.lName})
    //errorMessage = "LastName field is required!";
  }
  if(!email){
    errorMessage.push({"email":validationMessage.email})
    //errorMessage = "LastName field is required!";
  }
  if(!password){
    errorMessage.push({"password":validationMessage.password})
    //errorMessage = "LastName field is required!";
  }
  if(fName && lName && email && password){
    displayPage.innerHTML = logInPage;
  }
  const fNameError = document.getElementById("fNameErrorMsg");
  fNameError.innerHTML =errorMessage[0]['fName'];
  const lNameError = document.getElementById("lNameErrorMsg");
  lNameError.innerHTML =errorMessage[1]['lName'];
  const emailError = document.getElementById("emailErrorMsg");
  emailError.innerHTML =errorMessage[2]['email']; 
  const passwordError = document.getElementById("passwordErrorMsg");
  passwordError.innerHTML =errorMessage[3]['password'];
};

//check email and password, if correct display landing page.

const landingHandler = () => {
  const passwordValidation = document.getElementById(
    "password_validation"
  ).value;

  const emailValidation = document.getElementById("mail_validation").value;
  const storeData = { emailValidation, passwordValidation };
  const registerData = JSON.parse(localStorage.getItem("info"));

  // if (
  //   emailValidation === registerData.email &&
  //   passwordValidation === registerData.password &&
  //   emailValidation !== "" &&
  //   passwordValidation !== ""
  // ) {
  //   displayPage.innerHTML = landingPage;
  // } else if (emailValidation !== registerData.email) {
  //   alert("Please")
  // } else if (passwordValidation !== registerData.password) {
  //   alert("Please enter correct password");
  // } else if (emailValidation == "" && emailValidation == "") {
  //   alert("Please enter email and password");
  // }

  const handleSubmit = () =>{
    formValidation();
    displayPage.innerHTML = landingPage;
  }
 
  const formValidation = (emailValidation) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailValidation.match(mailformat)) {
      // const errorMessage = "invalid email";
      return true;
    } else {
      const errorMessage = "You have entered an invalid email address!"
      //alert("You have entered an invalid email address!");
      return false;
    }
  };
};
