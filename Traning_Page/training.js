const selected = document.querySelector(".selected")
const optionsContainer = document.querySelector(".options_container")

const optionList = document.querySelectorAll(".option")

selected.addEventListener("click",() =>{
    optionsContainer.classList.toggle("active")
})

optionList.forEach(ele =>{
    ele.addEventListener("click", () =>{
        selected.innerHTML = ele.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
    })
})


const slideShow = () => {
    let img_arr = ['images/images1.jpg','images/images3.jpg','images/images4.jpg','images/images5.jpg']
    let slide_img = document.getElementById('slideshow_img')
    let i=0;
    var x = setInterval(function(){
        if(i==img_arr.length){
            i=0;
        }
        slide_img.src = img_arr[i];
        i++;
    },2000)
}
slideShow();