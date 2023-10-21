let subject_name = document.querySelector(".course_name");
let subject_image = document.querySelector(".course_img");
subject_name.innerText = JSON.parse(localStorage.getItem("current_page")).currentCourseName;
subject_image.src = JSON.parse(localStorage.getItem("current_page")).currentCourseImg;

console.log(JSON.parse(localStorage.getItem("current_page")).currentCourseName
)