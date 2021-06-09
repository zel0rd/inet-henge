console.log("TEST")
let tabs = document.querySelectorAll(".aside__header")
let vmmap = document.querySelector("#TEST")
// let zoominBtn = document.querySelector("#zoomin")
// let zoomoutBtn = document.querySelector("#zoomout")
let btns = document.querySelectorAll(".vmmapBtn")

let xInit = -1894;
let yInit = -1675;
let scaleInit = 1.7;

// translate(0,0)
Array.from(tabs).map(function(tab){
    tab.addEventListener('click', function(){
        deactive()
        this.classList.add("active")
        document.querySelectorAll(`#${this.id}`)[1].classList.add("tab_active")
    })
})

Array.from(btns).map(function(btn){
    btn.addEventListener("click", function(){
        // -1894.294936249315,-1675.
        let scale = scaleInit;
        let xIndex = xInit;
        let yIndex = yInit;
        if(vmmap.getAttribute('transform') !== null){
            xIndex = Number(vmmap.getAttribute('transform').split(" ")[0].replace("translate","").replace("(","").replace(")","").split(",")[0])
            yIndex = Number(vmmap.getAttribute('transform').split(" ")[0].replace("translate","").replace("(","").replace(")","").split(",")[1])
            scale= Number(vmmap.getAttribute('transform').split(" ")[1].replace("scale","").replace("(","").replace(")",""))
        }

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

        if(btn.id === "init"){
            xIndex = xInit
            yIndex = yInit
            scale = scaleInit
        }
        
        // vmmap.style.transform = `translate(${xIndex}px,${yIndex}px) scale(${scale})`
        vmmap.setAttribute("transform",`translate(${xIndex},${yIndex}) scale(${scale})`)
        // console.log(typeof vmmap.getAttribute('transform'))
        // console.log(vmmap.getAttribute('transform'))
        // console.log(scale, xIndex, yIndex)
    })
})

setInitPos();

function setInitPos() {
    vmmap.setAttribute("transform",`translate(${xInit},${yInit}) scale(${scaleInit})`)
}

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
