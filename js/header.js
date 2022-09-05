var btn = document.getElementById('dropbtn');
var dropContent = document.getElementById('myDropdown');
function myFunction() {
    dropContent.classList.toggle("show");
}
  
// Закройте выпадающее меню, если пользователь щелкает за его пределами
function myFunction2(){
    dropContent.classList.toggle("show");
}


var acc2 = document.getElementsByClassName("accordion2");
var b;

for (b = 0; b < acc2.length; b++) {
  acc2[b].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel2 = this.nextElementSibling;
    if (panel2.style.maxHeight){
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    } 
  });
}

const iconMenu = document.querySelector('.header__menu');
if(iconMenu){
    
    const menuBody = document.querySelector('.header__mob-wrp');
    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active3');
        menuBody.classList.toggle('active3');
    })
}