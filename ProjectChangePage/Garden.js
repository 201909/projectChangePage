AFRAME.registerComponent("garden",{
    init:function(){
        this.click()
    },
    click:function(){
        window.addEventListener("click",()=>{
            var thumbnail = document.querySelector("#garden")
            thumbnail.setAttribute("visible", false)
            var garden = document.querySelector("#background")
            garden.setAttribute("material", {src:"images/Garden.jpeg"})
            
        })
    }
})