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

 <form  id="register_form" >

   <label for="title" class="login_label">First Name :</label>
   <input id="fName" type="text" placeholder = "First Name">
   <br>
   <span id="fNameErrorMsg"></span>

   <label for="title" class="login_label" >Last Name :</label>
   <input id="lName" type="text" placeholder = "Last Name">
   <br>
   <span id="lNameErrorMsg"></span>

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
 <form id="login_form">
  
    <label class="login_label" for="title" >Email :</label>
    <input id="mail_validation" type="text" placeholder="Type your Email"> 
    <br>
    <span id="emailError"></span>
  
    <label class="login_label" for="title" >Password :</label>
    <input id="password_validation" type="text" placeholder="Type your Password">
    <br>
    <span id="passwordError"></span>

    <div class="forgot_password">
      <span onclick="signUpButton()">Forgot Password?</span>
    </div>
    <button class="btn" id="login_btn">Login</button>
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




const registerHandler = () => {

  const validationMessage = {
    fName: "FirstName field is required!",
    lName: "LastName field is required!",
    email: "Email field is required!",
    password: "Password field is required!"
  };

  //collected data from user and store in localStorage.
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let infoObj = { fName, lName, email, password };
  localStorage.setItem("info", JSON.stringify(infoObj));


    //registration form validation
  const fNameError = document.getElementById("fNameErrorMsg");
  const lNameError = document.getElementById("lNameErrorMsg");
  const emailError = document.getElementById("emailErrorMsg");
  const passwordError = document.getElementById("passwordErrorMsg");
  let errorMessageInRegisterForm = [];
  
  if (!fName) {
    errorMessageInRegisterForm.push({ "fName": validationMessage.fName });
  } else{errorMessageInRegisterForm.push({"fName":""})}

  if (!lName) {
    errorMessageInRegisterForm.push({ "lName": validationMessage.lName });
  }else{errorMessageInRegisterForm.push({"lName":""})}


  if (!email) {
    errorMessageInRegisterForm.push({ "email": validationMessage.email });
  }else{errorMessageInRegisterForm.push({"email":""})}


  if (!password) {
    errorMessageInRegisterForm.push({ "password": validationMessage.password });
  }else{errorMessageInRegisterForm.push({"password":""})}


  if (fName && lName && email && password) {
    displayPage.innerHTML = logInPage;
  }


  fNameError.innerHTML = errorMessageInRegisterForm[0]["fName"];
  lNameError.innerHTML = errorMessageInRegisterForm[1]["lName"];
  emailError.innerHTML = errorMessageInRegisterForm[2]["email"];
  passwordError.innerHTML = errorMessageInRegisterForm[3]["password"];

};


//check email and password, if correct display landing page.
const landingHandler = (event) => {

  event.preventDefault();

  const validationMessage = {
    email: "Email field is required!",
    password: "Password field is required!"
  }
  const errorMessageInLoginForm = [];

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailValidation = document.getElementById("mail_validation").value;
  const passwordValidation = document.getElementById(
    "password_validation"
  ).value;

  const registerData = JSON.parse(localStorage.getItem("info"));

  //validation statements 
  if (
    emailValidation === registerData.email &&
    passwordValidation === registerData.password &&
    emailValidation !== "" &&
    passwordValidation !== ""
  ) {displayPage.innerHTML = landingPage;} 
  

  if (!emailValidation)
   {
   errorMessageInLoginForm.push({"email": validationMessage.email})
  } else{errorMessageInLoginForm.push({"email": ""})}

  
  if (!passwordValidation) 
  {
    errorMessageInLoginForm.push({"password": validationMessage.password})
  }else { errorMessageInLoginForm.push({"password": "" })} 
  
  
 
  emailError.innerHTML = errorMessageInLoginForm[0]["email"];
  passwordError.innerHTML = errorMessageInLoginForm[1]["password"];

  
  
};