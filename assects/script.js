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
   <input id="fName" type="text" placeholder = "First Name" onkeydown="clearfNameSpan()">
   <br>
   <span id="fNameErrorMsg"  class= "error"></span>

   <label for="title" class="login_label" >Last Name :</label>
   <input id="lName" type="text" placeholder = "Last Name" onkeydown="clearlNameSpan()" >
   <br>
   <span id="lNameErrorMsg" class= "error" ></span>

   <label for="title" class="login_label" >Email :</label>
   <input id="email" type="email" placeholder = "Email" onkeydown="clearEmailSpan()" >
   <br>
   <span id="emailErrorMsg" class= "error" ></span>

   <label for="title" class="login_label" >Password :</label>
   <div id="image_wrapper">
   <input id="password" type="password" placeholder="Password" onkeydown="clearPasswordSpan()" >
   <img src="./assects/hidden.png" alt="show password" id="hiddenImage" style="display: block" onclick="changeRegisterPageHiddenImage()">
    <img src="./assects/show.png" alt="show password" id="showImage" style="display: none" onclick="changeRegisterPageShowImage()"> 
    </div>
   <br>
   <span id="passwordErrorMsg" class= "error" ></span>

 </form>

 <div class="register_button_wrapper">
   <button class="btn" onclick="registerHandler()">Register  </button>
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
    <input id="mail_validation" type="email" placeholder="Type your Email" onkeydown="deleteEmailError()" > 
    <br>
    <span id="emailError" class="error"></span>
  
    <label class="login_label" for="title" >Password :</label>
    <div id="image_wrapper">
    <input id="password_validation" type="password" placeholder="Type your Password" onkeydown="deletePassword()" >
    <img src="./assects/hidden.png" alt="show password" id="hiddenImage" style="display: block" onclick="changeLoginPageHiddenImage()">
    <img src="./assects/show.png" alt="show password" id="showImage" style="display: none" onclick="changeLoginPageShowImage()"> 
    </div>
    <br>
    <span id="passwordError" class="error"></span>
    
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
const displayLandingPage = () => {
  const autherize = JSON.parse(localStorage.getItem("isAuth"));
  if (autherize) {
    displayPage.innerHTML = landingPage;
    const userName = document.getElementById("userName");
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userName.innerHTML = userInfo;
  } else {
    displayPage.innerHTML = homePage;
  }
};
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
  const fName = document.getElementById("fName").value.trim();
  const lName = document.getElementById("lName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  //set Data in localStorage
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
    wrongEmail: "please enter correct Email",
    wrongPassword: "please enter correct Password",
  };
  let errorMessageInLoginForm = [];

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailValidation = document
    .getElementById("mail_validation")
    .value.trim();
  const passwordValidation = document
    .getElementById("password_validation")
    .value.trim();

  if (!emailValidation) {
    errorMessageInLoginForm.push({ email: validationMessage.email });
  } else {
    errorMessageInLoginForm.push({ email: "" });
  }

  if (!passwordValidation) {
    errorMessageInLoginForm.push({ password: validationMessage.password });
  } else {
    errorMessageInLoginForm.push({ password: "" });
  }

  if (emailValidation !== "" && passwordValidation !== "") {
    errorMessageInLoginForm = [];
    //target all stored data from localStorage
    let registerData = JSON.parse(localStorage.getItem("user"));

    let filteredRegisteredData = registerData.filter(
      (item) =>
        item.email === emailValidation && item.password === passwordValidation
    );
    
    if (filteredRegisteredData.length) {
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem(
        "userInfo",
        JSON.stringify(
          `${filteredRegisteredData[0].fName} ${filteredRegisteredData[0].lName}`
        )
      );

      displayLandingPage();
    } else {
      if (
        !registerData.filter((item) => item.email === emailValidation).length
      ) {
        errorMessageInLoginForm.push({ email: validationMessage.wrongEmail });
      } else {
        errorMessageInLoginForm.push({ email: "" });
      }
      if (
        !registerData.filter((item) => item.password === passwordValidation).length
          
      ) {
        errorMessageInLoginForm.push({
          password: validationMessage.wrongPassword,
        });
      } else {
        errorMessageInLoginForm.push({ password: "" });
      }
    }
  }
  
  if (errorMessageInLoginForm.length > 0) {
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

const changeRegisterPageHiddenImage = () => {
  const passwordImg = document.getElementById("password");
  const hiddenImage = document.getElementById("hiddenImage");
  const showImage = document.getElementById("showImage");
  hiddenImage.style.display = "none";
  showImage.style.display = "block";
  passwordImg.setAttribute("type", "text");
};
const changeRegisterPageShowImage = () => {
  const passwordImg = document.getElementById("password");
  const hiddenImage = document.getElementById("hiddenImage");
  const showImage = document.getElementById("showImage");
  showImage.style.display = "none";
  hiddenImage.style.display = "block";
  passwordImg.setAttribute("type", "password");
};

const changeLoginPageHiddenImage = () => {
  const hiddenImage = document.getElementById("hiddenImage");
  const showImage = document.getElementById("showImage");
  hiddenImage.style.display = "none";
  showImage.style.display = "block";
  document.getElementById("password_validation").setAttribute("type", "text");
};

const changeLoginPageShowImage = () => {
  const hiddenImage = document.getElementById("hiddenImage");
  const showImage = document.getElementById("showImage");
  showImage.style.display = "none";
  hiddenImage.style.display = "block";
  document
    .getElementById("password_validation")
    .setAttribute("type", "password");
};

//clean register error message after click in input field.
const clearfNameSpan = () =>
  (document.getElementById("fNameErrorMsg").innerHTML = "");

const clearlNameSpan = () =>
  (document.getElementById("lNameErrorMsg").innerHTML = "");

const clearEmailSpan = () =>
  (document.getElementById("emailErrorMsg").innerHTML = "");

const clearPasswordSpan = () =>
  (document.getElementById("passwordErrorMsg").innerHTML = "");


//clean login error message after click in input field.
const deleteEmailError = () => {
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = "";
};

const deletePassword = () => {
  const passwordError = document.getElementById("passwordError");
  passwordError.innerHTML = "";
};
