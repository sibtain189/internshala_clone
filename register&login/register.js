import footer from "../../code file/components/footer.js";
import navbar from "../../code file/components/navbar.js";
import logn from "../register&login/components/login.js";
document.querySelector("#divi").innerHTML=logn();
document.querySelector("footer").innerHTML = footer();
document.querySelector("header").innerHTML = navbar();
document.querySelector(".logo").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document.getElementById("but").addEventListener("click", myFunction);
 var arr = JSON.parse(localStorage.getItem("details")) || [];
function myFunction(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;

  var obj = {
    mail: mail,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };
  arr.push(obj);
   localStorage.setItem("details", JSON.stringify(arr));

  if (mail === "" || password === "" || firstName === "" || lastName === "") {
    alert("please fill all the fields");
  } else {
    alert("Sign Up success")
    window.location.href = "personal_details.html";
  }
}

// ---------------------
document.getElementById("bu").addEventListener("click", openForm);
document.getElementById("bun").addEventListener("click", openForm); //change krna h jab navbar milega

function openForm(event) {
  event.preventDefault();
  document.getElementById("myForm").style.display = "block";
}


// ---------------------------------------------------------
document.querySelector("#btns").addEventListener("click", theFunction);

function theFunction(event) {
  event.preventDefault();
  let  mail = document.getElementById("em").value;
  let ps = document.getElementById("ps").value;

  let flag;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].mail === mail && arr[i].password === ps) {
      alert("login Successfull");
      window.location.href="../internship_page/card.html"
      
      

       flag = true;
      break;
      
    } else {
      flag = false;
    }
  }
  if (flag===false) {
    alert("wrong credentials");
    
    
  }
}
