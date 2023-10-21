let openShopping = document.querySelector('.shopping_cart');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

console.log("ahha");



let btn = document.querySelectorAll(".border-btn");
let listImg = document.querySelectorAll(".course_img img");
let courseName = document.querySelectorAll(".course_name");
console.log(courseName);
console.log(listImg);
console.log(btn)
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {

        localStorage.setItem("current_page", JSON.stringify({
            currentCourseName: courseName[i].innerText,
            currentCourseImg: listImg[i].src 
        }));
          window.location.href="./chem.html";
    }
    )
}


