console.log("TEST")
let tabs = document.querySelectorAll(".aside__header")
let vmmap = document.querySelector("#TEST")
// let zoominBtn = document.querySelector("#zoomin")
// let zoomoutBtn = document.querySelector("#zoomout")
let btns = document.querySelectorAll(".vmmapBtn")

let scale = 1;
let xIndex = 0;
let yIndex = 0;

// translate(0,0)
Array.from(tabs).map(function(tab){
    tab.addEventListener('click', function(){
        deactive()
        this.classList.add("active")
        document.querySelectorAll(`#${this.id}`)[1].classList.add("tab_active")
    })
})
console.log(btns)

Array.from(btns).map(function(btn){
    btn.addEventListener("click", function(){
        if(btn.id === "zoomin"){
            scale += .1;
        }
        
        if(btn.id === "zoomout"){
            scale -= .1;
        }
        
        if(btn.id === "up"){
            yIndex += 100;
        }
        
        if(btn.id === "down"){
            yIndex -= 100;
        }
        
        if(btn.id === "right"){
            xIndex -= 100;
        }
        
        if(btn.id === "left"){
            xIndex += 100;
        }
        
        vmmap.style.transform = `translate(${xIndex}px,${yIndex}px) scale(${scale})`
        console.log(typeof vmmap.getAttribute('translate'))
        console.log(vmmap.getAttribute('translate'))
        console.log(scale, xIndex, yIndex)
    })
})

function deactive() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector(".tab_active").classList.remove("tab_active")
}

// zoominBtn.addEventListener("click", function(){
//     console.log(vmmap.getAttribute("transform"))
//     scale += .1;
//     vmmap.style.transform = `scale(${scale})`
// })
// zoomoutBtn.addEventListener("click", function(){
//     scale -= .1;
//     vmmap.style.transform = `scale(${scale})`
// })
