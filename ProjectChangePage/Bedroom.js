AFRAME.registerComponent("garden",{
    init:function(){
        this.click()
    },
    click:function(){
        window.addEventListener("click",()=>{
            var thumbnail_bedroom = document.querySelector("#bedroom")
            thumbnail_bedroom.setAttribute("visible", false)
            var bedroom = document.querySelector("#background")
            bedroom.setAttribute("material", {src:"images/Bedroom.jpeg"})
            
        })
    }
})