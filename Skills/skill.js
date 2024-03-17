AOS.init();

let skills_slideBtn = document.getElementById('skills-slide-btn');



skills_slideBtn.onclick=()=>{
    document.querySelector('.skills-above-box').classList.add('slide-animation');
}