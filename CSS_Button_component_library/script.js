
// Dark and Light Mode Btn :

const modeBtn = document.querySelector('.mode-btn');
let darkModeStatus = localStorage.getItem("darkModeStatus") === "true";

if (darkModeStatus === true) {
    darkModeOn();
}

modeBtn.addEventListener('click', () => {
    darkModeStatus = !darkModeStatus;
    console.log(darkModeStatus);

    if (darkModeStatus === true) {
        darkModeOn();
    } else {
        darkModeOff();
    }

    localStorage.setItem("darkModeStatus", darkModeStatus);
});


function darkModeOn () {
    modeBtn.classList.add('active');
    document.body.classList.add('dark');
}

function darkModeOff () {
    modeBtn.classList.remove('active');
    document.body.classList.remove('dark');
};


// Like and Unlike Button :


const countLike = document.querySelectorAll('.like-count');
const likeBtn = document.querySelectorAll('.likeBtn');

likeBtn.forEach((btn, index) => {


    let isActive = localStorage.getItem(`likeStatus-${index}`) === "true";
    let likeCount = parseInt(localStorage.getItem(`likeCount-${index}`)) || 0;

    if (isActive === true) {
        like(btn, index);
    }

    countLike[index].textContent = `${likeCount}`;

    btn.addEventListener('click', () => {
        isActive = !isActive;
        console.log(isActive);

        if (isActive) {
            likeCount = like(btn, likeCount);
        } else {
            likeCount = dislike(btn, likeCount);
        }

        countLike[index].textContent = `${likeCount}`;

        //  Save to Local Storage :

        localStorage.setItem(`likeStatus-${index}`, isActive);
        localStorage.setItem(`likeCount-${index}`, likeCount);
    });


});

function like (btn, _likeCount) {
    btn.classList.add('active');
    return likeCount =+ 1;
}

function dislike (btn, likeCount) {
    btn.classList.remove('active');
    return likeCount -= 1;
};




// Code pop up Window open and close :

const codeBtn = document.querySelectorAll('.codeBtn');
const codeWindow = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.close-btn');


codeBtn.forEach(function (btn) {
    btn.addEventListener('click', () => {
        codeWindow.classList.add("active");
        document.body.classList.add('lock-scroll');
    })
});

closeBtn.addEventListener('click', () => {
    codeWindow.classList.remove("active");
    document.body.classList.remove('lock-scroll');
});

