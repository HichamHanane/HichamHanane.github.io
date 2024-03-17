AOS.init();

let project_slideBtn = document.getElementById('projects-slide-btn');



project_slideBtn.onclick=()=>{
    document.querySelector('.project-above-box').classList.add('slide-animation');
}