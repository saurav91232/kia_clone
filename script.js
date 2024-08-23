document.querySelector("#drop").addEventListener("mouseover",function(){
    document.querySelector(".dropdown").style.display="flex";
    
})
document.querySelector(".dropdown").addEventListener("mouseleave",function(){
    document.querySelector(".dropdown").style.display="none";
    
})
document.querySelector("#drop1").addEventListener("mouseover",function(){
    document.querySelector(".dropdown2").style.display="flex";
    
})
document.querySelector(".dropdown2").addEventListener("mouseleave",function(){
    document.querySelector(".dropdown2").style.display="none";
    
})
var z=0;
document.querySelector("#drop").addEventListener("click",function(){
    if(z==0){
    document.querySelector(".dropdown").style.display="flex";
    z++;
    }
    else if(z==1){
        document.querySelector(".dropdown").style.display="none"; 
        z--;
    }
})
var i=0;
document.querySelector(".circle").addEventListener("click",function(){
   
    if(i==0){
        document.querySelector(".sideoverlay").style.display="flex";
        i++;
    }
    
    
    else if(i==1){
        i--;
        document.querySelector(".sideoverlay").style.display="none";
    }
    

})

document.querySelector(".nav").addEventListener("mouseover",function(){
    document.querySelector(".centernav img").setAttribute("src","kialogo.png");
})
document.querySelector(".nav").addEventListener("mouseleave",function(){
    document.querySelector(".centernav img").setAttribute("src","logo2.png");
})

gsap.to(".nav",{
    scrollTrigger:{
        trigger:".nav",
        start:"top 50%",
        // backgroungColor:"#fff"
        color:"#fff"
    }
})

