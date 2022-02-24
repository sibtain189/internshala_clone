
import {sidebar} from "../components/sidebar.js"
document.getElementById("sidebar").innerHTML = sidebar()

let parent = document.getElementById("main");






var data = [
  {
    title: "MyCareerMyChoice",
    description: "Say no to career stereotypes! Say yes to being you!",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "1-6months",
    stipend: "Minimum ₹10,000",
    joining: "24 Feb'22",
  },
  {
    title: "7-day Virtual Charity Drive (Openings: 1000)",
    description: "Hamari Pahchan NGO",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "Unpaid",
    joining: "3 Mar'22",
  },
  {
    title: "UNV India V-Force Volunteeringe",
    description: "United Nations Volunteer",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "4 weeks",
    stipend: "Unpaid",
    joining: "23 Mar'22",
  },
  {
    title: "Campus Ambassador",
    description: "Monexo FinTech Private Limited",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "Performance Based",
    joining: "5 Mar'22",
  },
  {
    title: "Fundraising",
    description: "Tare Zameen Foundation",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "1 month",
    stipend: "₹ 1000 /month + Incentives",
    joining: "3 Mar'22",
  },
  {
    title: "Marketing",
    description: "Confluence Educational Services Private Limited",
    location: "Hyderabad",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 15000 /month",
    joining: "3 Mar'22",
  },
  {
    title: "Software Development",
    description: "Mogi I/O",
    location: "Delhi",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 10000 /month",
    joining: "8 Mar'22",
  },
  {
    title: "Teaching (English)",
    description: "Level Up Academy",
    location: "Delhi",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 10000-15000 /month",
    joining: "8 Mar'22 ",
  },
  {
    title: "Graphic Design",
    description: "Cyphere",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "2 months",
    stipend: "₹ 8000-10000 /month",
    joining: "8 Mar'22 ",
  },
  {
    title: "MyCareerMyChoice",
    description: "Woovly India Private Limited",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 8000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Flutter Development",
    description: "Cogent Web Services",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Operations",
    description: "Desh Ki Baat Foundation",
    location: "Delhi",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "Unpaid",
    joining: "12 Mar'22",
  },
  {
    title: "Customer Service",
    description: "Woovly India Private Limited",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Business Development (Sales)",
    description: "Labour Law Advisor",
    location: "Jaipur",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 6000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Blockchain Software Development",
    description: "Relinns Technologies",
    location: "Chandigarh, Dharamshala, Una, Mohali, Hamirpur",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 9000 /month",
    joining: "15 Mar'22",
  },
  {
    title: "Android App Development",
    description: "Believable",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹10000 lump sum",
    joining: "15 Mar'22",
  },
  {
    title: "Human Resources (HR)",
    description: "Talent Scout Management Solutions",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 5000 /month",
    joining: "11 Mar'22",
  },
  {
    title: "Mobile App Development",
    description: "Hamari Pahchan NGO",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 15000 /month",
    joining: "8 Mar'22",
  },
  {
    title: "Audit (Operations)",
    description: "PlanetSpark",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "4 weeks",
    stipend: "₹ 9000 /month",
    joining: "13 Mar'22",
  },
  {
    title: "Commercial Operations",
    description: "Softcell Technologies Limited",
    location: "Pune",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "15 Mar'22",
  },
  {
    title: "Digital Marketing",
    description: "Dhosa Retail Private Limited",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "1 month",
    stipend: "₹ 4000 /month + Incentives",
    joining: "8 Mar'22",
  },
  {
    title: "Android App Development",
    description: "CITS Worldwide",
    location: "Hyderabad",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 15000 /month",
    joining: "13 Mar'22",
  },
  {
    title: "Software Development",
    description: "Mogi I/O",
    location: "Delhi",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 10000 /month",
    joining: "8 Mar'22",
  },
  {
    title: "Marketing Lead Generation",
    description: "Expertrons",
    location: "Pune",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 10000-15000 /month",
    joining: "8 Mar'22 ",
  },
  {
    title: "Brand Solutions Management",
    description: "Confluencr",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "2 months",
    stipend: "₹ 8000-10000 /month",
    joining: "8 Mar'22 ",
  },
  {
    title: "Web Development",
    description: "JMV Systems",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹ 8000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Flutter Development",
    description: "Cogent Web Services",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "CA/ICWA Traineeship",
    description: " CEAT Limited",
    location: "Mumbai",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Customer Service",
    description: "Woovly India Private Limited",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 15000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Business Development (Sales)",
    description: "Labour Law Advisor",
    location: "Jaipur",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 6000 /month",
    joining: "12 Mar'22",
  },
  {
    title: "Blockchain Software Development",
    description: "Relinns Technologies",
    location: "Chandigarh, Dharamshala, Una, Mohali, Hamirpur",
    starting: "Starts immediately",
    duration: "6 months",
    stipend: "₹ 9000 /month",
    joining: "15 Mar'22",
  },
  {
    title: "Android App Development",
    description: "Believable",
    location: "Work From Home",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "₹10000 lump sum",
    joining: "15 Mar'22",
  },
  {
    title: "Human Resources (HR)",
    description: "Talent Scout Management Solutions",
    location: "Bangalore",
    starting: "Starts immediately",
    duration: "3 months",
    stipend: "Unpaid",
    joining: "3rd March",
  },
];
localStorage.setItem("data",JSON.stringify(data))

let internshipData = (data,parent)=>
// function internshipData()
 {
     
  data.map((el) => {
    // console.log("object");
    let carddiv = document.createElement("div");

    let title = document.createElement("h5");
    title.textContent = el.title;

    let des = document.createElement("p");
    des.textContent = el.description;

    let location = document.createElement("p");
    location.textContent = el.location;

    let starting = document.createElement("p");
    starting.textContent = el.starting;

    let duration = document.createElement("p");
    duration.textContent = el.duration;

    let stipend = document.createElement("p");
    stipend.textContent = el.stipend;

    let joining = document.createElement("p");
    joining.textContent = el.joining;

    let newdiv = document.createElement("div");
    newdiv.setAttribute("id","newdiv")

    let para1 =  document.createElement("p");
    para1.innerText= "START"

    let para2 =  document.createElement("p");
    para2.innerText= "🗓DURATION"

    let para3 =  document.createElement("p");
    para3.innerText= "STIPEND"

    let para4 =  document.createElement("p");
    para4.innerText= "⏳ Apply By" 

    let detaildiv = document.createElement("div");
    detaildiv.textContent= "Views details > "
    detaildiv.setAttribute("id","detaildiv")

    detaildiv.onclick=()=>{
      // console.log("object");
      window.location.href="";
    }
    


    let startdiv = document.createElement("div");

    let durdiv = document.createElement("div");

    let stipdiv = document.createElement("div");

    let joindiv = document.createElement("div");

    startdiv.append(para1,starting)
    durdiv.append(para2,duration)
    stipdiv.append(para3,stipend)
    joindiv.append(para4,joining)



    newdiv.append(startdiv, durdiv, stipdiv, joindiv)

    carddiv.append(title, des, location,newdiv,detaildiv );
  
    parent.append(carddiv)
});
}
// let parent = document.getElementById("main");
internshipData(data, parent);

let wfh_checkbox = document.getElementById("wfh")

wfh_checkbox.oninput= function checkboxfilter(parent){
   
  let filteredData = [];
  if(wfh_checkbox.checked){
    data.map(function(item){
      if(item.location == "Work From Home"){
        filteredData.push(item)
      }
    })

  }
  internshipData(filteredData,parent)
}

// export { internshipData };
