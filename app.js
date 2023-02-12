const ratings=document.querySelectorAll(".rating");
const btn =document.getElementById("submit");
const panelContainer=document.querySelector(".panel-container")
let selectRating="Geri bildirim seçmediniz!"

ratings.forEach((rating)=>{
    rating.addEventListener("click",(e)=>{
        // console.log(e.target)
        if(e.target.parentNode.classList.contains("rating")){
            removeActive()
            rating.classList.add("active")
            // console.log(e.target.nextElementSibling)
            selectRating=e.target.nextElementSibling.innerHTML
        }else{
            selectRating
        }
    })
})
function removeActive() {
    for(const rating of ratings){
        rating.classList.remove("active")
    }
}

btn.addEventListener("click",()=>{
    panelContainer.innerHTML=`
    <i class="fas fa-heart"></i>
    <strong>Geri bildiriminiz bizim için çok değerli. </strong> </br>
    <strong>Geri bildiriminiz: <span style="color:red"> ${selectRating}</span> </strong>
    <p>Geri bildiriminizi kendimizi geliştirmek için kullanacağız. </p>
    `
})