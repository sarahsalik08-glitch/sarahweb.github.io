const text = "Hi, I'm Sarah 👩‍💻";
let i = 0;

function type(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,80);
}
}

type();
