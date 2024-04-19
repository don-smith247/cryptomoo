function openMenu(){
    document.getElementById("container").style.right='0%';
    document.getElementById("menu").style.opacity='1'

}
function closeMenu(){
    document.getElementById("container").style.right='100%';
    document.getElementById("menu").style.opacity='0';
}

const text = "Transformative";

  let index = 0;
  function type() {
    document.querySelector(".typing-text").textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      index = 0;
    }
  }

setInterval(type, 90); 

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})