import data from '../data/data.js';


document.addEventListener("DOMContentLoaded", () => {
    //Checkbox
    let defaultOption = document.querySelector(".header__inner-list");
    let selectWrap = defaultOption.parentNode;
    
    defaultOption.addEventListener("click", () => {
        selectWrap.classList.toggle("active");
    });
    
    let selectItems = document.querySelectorAll(".header__inner-select-list li");
    
    selectItems.forEach((item) => {
        item.addEventListener("click", () =>{
            let currentele = item.innerHTML;
            defaultOption.innerHTML = currentele;
            selectWrap.classList.remove("active");
        });
    });


// create card component
const content = document.getElementById('content');
let currentIndex = 0;


function displayCards() {

  content.style.opacity = 0;
  setTimeout(()=> {
    content.innerHTML = ""; // Очистить предыдущие карточки

    for (let i = currentIndex; i < currentIndex + 4; i++) {
      const item = data[i % data.length]; // Циклическое получение данных
  
      const div = document.createElement('li');
      div.classList.add('birge__card-group-list-item');
  
      const img = document.createElement('img');
      img.classList.add('birge__card-group-list-item-image')
      img.src = item.image;
      div.appendChild(img);
  
      const p = document.createElement('h3');
      p.classList.add('birge__card-group-list-item-heading')
      p.textContent = item.prof;
      div.appendChild(p);
  
      content.appendChild(div);
      if (currentIndex % 4 === 0) {
        vacant.classList.add('active');
      } else {
        resume.classList.add('active');
      }
    }
    content.style.opacity=1;
  }, 300)
 
}
displayCards()
const vacant = document.querySelector('.vacansi')
const resume = document.querySelector('.resume')

vacant.addEventListener('click', ()=> {
  currentIndex = (currentIndex + 4) % data.length;
  displayCards()
  vacant.classList.add('vacansi__active')
  resume.classList.remove('resume__active')
  
})

resume.addEventListener('click', ()=> {
  currentIndex = (currentIndex - 4 + data.length) % data.length;
  displayCards()
  resume.classList.add('resume__active')
  vacant.classList.remove('vacansi__active')
})
});