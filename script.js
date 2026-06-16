// typing effect
const text = "Sarah Salik 💖";
let i = 0;

function type(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,100);
}
}

type();

// floating cursor glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
