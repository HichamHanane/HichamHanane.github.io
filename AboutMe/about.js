AOS.init();
let aboutslideBtn = document.getElementById('about-slide-btn');
let educationBtn = document.getElementById('education-btn');
let experienceBtn = document.getElementById('experience-btn');

aboutslideBtn.onclick=()=>{
    console.log('hello');
    document.querySelector('.about-above-box').classList.add('slide-animation');
}   


educationBtn.onclick=()=>{
    if(educationBtn.classList[1]== 'fa-caret-down'){
        document.querySelector('#education-content').classList.add('content-animation-show');
        educationBtn.classList.remove('fa-caret-down');
        document.querySelector('#education-content').classList.remove('content-animation-hide');
        educationBtn.classList.add('fa-caret-up');
        return;
    }
    if(educationBtn.classList[1]== 'fa-caret-up'){
        educationBtn.classList.remove('fa-caret-up');
        document.querySelector('#education-content').classList.add('content-animation-hide');
        educationBtn.classList.add('fa-caret-down');
        document.querySelector('#education-content').classList.remove('content-animation-show');

        return;
    }
    
    // educationBtn.classList.remove('fa-caret-down')
    // educationBtn.classList.add('fa-caret-up')
}
experienceBtn.onclick=()=>{
    if(experienceBtn.classList[1]== 'fa-caret-down'){
        document.querySelector('#experience-content').classList.add('content-animation-show');
        experienceBtn.classList.remove('fa-caret-down');
        document.querySelector('#experience-content').classList.remove('content-animation-hide');
        experienceBtn.classList.add('fa-caret-up');
        return;
    }
    if(experienceBtn.classList[1]== 'fa-caret-up'){
        experienceBtn.classList.remove('fa-caret-up');
        document.querySelector('#experience-content').classList.add('content-animation-hide');
        experienceBtn.classList.add('fa-caret-down');
        document.querySelector('#experience-content').classList.remove('content-animation-show');

        return;
    }
    
    // educationBtn.classList.remove('fa-caret-down')
    // educationBtn.classList.add('fa-caret-up')
}