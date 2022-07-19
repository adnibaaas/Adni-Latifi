let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
  menu.classList.toggle("move");
};

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");
}
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "" || msg.value == "") {
    emptyerror();
  } else {
    sendmail(name.value, email.value, msg.value);
    success();
  }
});
validate();

function sendmail(name,email,msg){
    emailjs.send("service_324ru69","template_7ehz2oh",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function emptyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}

let header = document.querySelector('header')

window.addEventListener('scroll',() =>{
    header.classList.toggle('header-active', window.scrollY > 0)
})


let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=> {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
});