let inp1=document.getElementById("inp1")
function display(values){
    inp1.value+=values
}
function calculater(){
    if(inp1.value==""){
        inp1.value=""
    }
    else{
        inp1.value=eval(inp1.value)
    }
}
function empty(){
    inp1.value=''
}
function del(){
    inp1.value=inp1.value.substr(0,inp1.value.length-1)
}
inp1.addEventListener("keydown",()=>{
    if(event.key=='Enter'){
        if(inp1.value==""){
        inp1.value=""
    }
    else{
        inp1.value=eval(inp1.value)
    }
    }
})
let calculater_box=document.getElementById("calculater_box")
calculater_box.addEventListener("mouseover",()=>{
    calculater_box.style.boxShadow="0px 0px 40px"
})
calculater_box.addEventListener("mouseleave",()=>{
    calculater_box.style.boxShadow="0px 0px 20px"
})
