var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var accMob = document.getElementsByClassName("accordion-mob");
var i;

for (i = 0; i < accMob.length; i++) {
  accMob[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelMob = this.nextElementSibling;
    if (panelMob.style.maxHeight){
      panelMob.style.maxHeight = null;
    } else {
      panelMob.style.maxHeight = panelMob.scrollHeight + "px";
    } 
  });
}

const iconMenu2 = document.querySelector('.catalog-drop-top');
const icon = document.querySelector('.catalog-drop-icon');
if(iconMenu2){
    const menuBody2 = document.querySelector('.catalog-drop-wrp');
    iconMenu2.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        iconMenu2.classList.toggle('active3');
        menuBody2.classList.toggle('active3');
        icon.classList.toggle('catalog-drop-icon2');
    })
}
