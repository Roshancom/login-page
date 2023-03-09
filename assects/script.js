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
 <span onclick="homaPageLoginHandler()" > Already register</span>
</div>
</section>`;

const logInPage = `<section id="Login_page">
<div class="heading">
Login
</div>

<div class="form_wrapper"> 
 <form id="login_form" onsubmit="preventSubmitForm(event)">
  
    <label class="login_label" for="title" >Email :</label>
    <input id="mail_validation" type="text" placeholder="Type your Email"> 
    <br>
    <span id="emailError"></span>
  
    <label class="login_label" for="title" >Password :</label>
    <input id="password_validation" type="text" placeholder="Type your Password">
    <br>
    <span id="passwordError"></span>
    
    <div class="forgot_password">
    <span onclick="signUpHandler()">Forgot Password?</span>
    </div>
    <button class="btn" type="submit" id="login_btn" >Login</button>
    <div class="message">
    Not a member? <span onclick="signUpHandler()">Signup</span>
    </div>
    </form>
    </div>
</section>`;

const landingPage = ` <section id="landingPage_section">
<nav id="navbar">
    <h1 class="logo">logo</h1>
    <div class="nav_div">
        <a href="">Home</a>
        <a href="">Documentation</a>
        <a href="">Blog</a> 
        <a href="">Contact</a>
    </div>
    <div id="logOff_btn_wrapper">
        <button class="logOff_btn" onclick="logOffHandler()">Log off</button>
      </div>
</nav>
<div id="container">
    <div class="heading_wrapper">
        <h1>code better <br><span>be creative</span></h1>
        <div class="artical">
            <h3> Write Code That Stands the Test of Time</h3>
           <ul>
             <li>Treat Your Code the Way You Want Others’ Code to Treat You</li>
             <li>Good Code Is Easily Read and Understood</li>
             <li>Good Code Has a Well Thought-out Layout and Architecture to Make Managing State Obvious</li>
             <li>Good Code Doesn’t Reinvent the Wheel, It Stands on the Shoulders of Giants</li>
             <li> Don’t Cross the Streams!</li>
             <li>When Possible, Let the Computer Do the Work</li>
            </ul>
         </div>
        </div>
      </div>
     <div class="footer">
    <button class="btn">more Info</button>
    <div>
       <h2>Welcome to the page : <span id="userName"/></h2>
    </div>
</div>
</section>`;

//display home page and landing page even after refresh
const displayLandingPage = ()=>{ 
const autherize = JSON.parse(localStorage.getItem("isAuth"));
if (autherize) {
  displayPage.innerHTML = landingPage;
  const userName = document.getElementById("userName");
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  userName.innerHTML = userInfo;
} else {
  displayPage.innerHTML = homePage;
}
}
//Events handler  {
const signUpHandler = () => {
  displayPage.innerHTML = registerPage;
};

const homaPageLoginHandler = () => {
  displayPage.innerHTML = logInPage;
};

const registerHandler = () => {
  const validationMessage = {
    fName: "FirstName field is required!",
    lName: "LastName field is required!",
    email: "Email field is required!",
    password: "Password field is required!",
  };

  //collected data from user and store in localStorage.
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //set Data in sessionStorage
  if (fName && lName && email && password) {
    const userInfo = { fName, lName, email, password };
    // const users =[userInfo];
    // users.push(userInfo);
    // localStorage.setItem("user", JSON.stringify(users));
    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    storedData.push(userInfo);

    localStorage.setItem("user", JSON.stringify(storedData));
  }

  //registration form validation
  const fNameError = document.getElementById("fNameErrorMsg");
  const lNameError = document.getElementById("lNameErrorMsg");
  const emailError = document.getElementById("emailErrorMsg");
  const passwordError = document.getElementById("passwordErrorMsg");
  let errorMessageInRegisterForm = [];

  if (!fName) {
    errorMessageInRegisterForm.push({ fName: validationMessage.fName });
  } else {
    errorMessageInRegisterForm.push({ fName: "" });
  }

  if (!lName) {
    errorMessageInRegisterForm.push({ lName: validationMessage.lName });
  } else {
    errorMessageInRegisterForm.push({ lName: "" });
  }

  if (!email) {
    errorMessageInRegisterForm.push({ email: validationMessage.email });
  } else {
    errorMessageInRegisterForm.push({ email: "" });
  }

  if (!password) {
    errorMessageInRegisterForm.push({ password: validationMessage.password });
  } else {
    errorMessageInRegisterForm.push({ password: "" });
  }

  if (fName && lName && email && password) {
    displayPage.innerHTML = logInPage;
  }

  //display error messaage.
  fNameError.innerHTML = errorMessageInRegisterForm[0]["fName"];
  lNameError.innerHTML = errorMessageInRegisterForm[1]["lName"];
  emailError.innerHTML = errorMessageInRegisterForm[2]["email"];
  passwordError.innerHTML = errorMessageInRegisterForm[3]["password"];
};

//check email and password, if correct display landing page.
const loginHandler = () => {
  const validationMessage = {
    email: "Email field is required!",
    password: "Password field is required!",
  };
  const errorMessageInLoginForm = [];

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailValidation = document.getElementById("mail_validation").value;
  const passwordValidation = document.getElementById(
    "password_validation"
  ).value;



  //target all stored data from localStorage
  const userName = document.getElementById("userName");
  let registerData = JSON.parse(localStorage.getItem("user"));

  for (let i = 0; i < registerData.length; i++) {
    if (
      emailValidation === registerData[i].email &&
      passwordValidation === registerData[i].password &&
      emailValidation !== "" &&
      passwordValidation !== ""
    ) {
      localStorage.setItem("isAuth", JSON.stringify(true));

      localStorage.setItem("userInfo",JSON.stringify(`${registerData[i].fName} ${registerData[i].lName}`));
      displayLandingPage();
      
      
    }

    if (!emailValidation || emailValidation !== registerData[i].email) {
      errorMessageInLoginForm.push({ email: validationMessage.email });
    } else {
      errorMessageInLoginForm.push({ email: "" });
    }

    if (
      !passwordValidation ||
      passwordValidation !== registerData[i].password
    ) {
      errorMessageInLoginForm.push({ password: validationMessage.password });
    } else {
      errorMessageInLoginForm.push({ password: "" });
    }

 
    emailError.innerHTML = errorMessageInLoginForm[0]["email"];
    passwordError.innerHTML = errorMessageInLoginForm[1]["password"];
  }
};

//event trigger after login
const preventSubmitForm = (event) => {
  event.preventDefault();
  loginHandler();
};

let logOffHandler = () => {
  
  localStorage.removeItem("userInfo");
    localStorage.setItem("isAuth", JSON.stringify(false));

    displayPage.innerHTML = homePage;
  // }
};
displayLandingPage();