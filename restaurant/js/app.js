// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    newArr=[];
    menuItems.forEach((element)=>{
        let myElement =`       <article class="menu-item">
        <img src="${element.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${element.title}</h4>
            <h4 class="price">${element.price} RON</h4>
          </header>
          <p class="item-text">
            ${element.desc}
          </p> ${element.category   }
        </div>
      </article>`
      newArr.push(myElement);
    }) 
    let myMeniu=newArr.join('');
    sectionCenter.innerHTML = myMeniu;
   
}
function displayMenuButtons() {
    
   
}