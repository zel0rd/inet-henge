console.log("TEST")
let tabs = document.querySelectorAll(".aside__header")

Array.from(tabs).map(function(tab){
    tab.addEventListener('click', function(){
        deactive()
        this.classList.add("active")
        document.querySelectorAll(`#${this.id}`)[1].classList.add("tab_active")
    })
})



function deactive() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector(".tab_active").classList.remove("tab_active")
}
