document.getElementById("but").addEventListener("click",myFunction);

var arr = JSON.parse(localStorage.getItem("details"))||[];
function myFunction(event){
    event.preventDefault()
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;

    var obj = {
        mail:mail,password:password,firstName:firstName,lastName:lastName,
    }
    arr.push(obj)
    localStorage.setItem("details",JSON.stringify(arr))

    if(mail===""||password===""||firstName===""||lastName===""){
        alert("please fill all the fields")
    }else{
        window.location.href="personal_details.html"
        
    }
}