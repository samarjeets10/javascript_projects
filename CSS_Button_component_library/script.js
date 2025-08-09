
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

function like (btn, likeCount) {
    btn.classList.add('active');
    return likeCount =+ 1;
}

function dislike (btn, likeCount) {
    btn.classList.remove('active');
    return likeCount -= 1;
};


const tabs = document.querySelectorAll('.tab');
const all_content = document.querySelectorAll('.code-content .content');

tabs.forEach( (tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        all_content.forEach((content) => {
            content.classList.remove('active');
        })
        all_content[index].classList.add('active');
    })
})


const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const getCodeBtn = document.querySelectorAll('.codeBtn');

getCodeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        openOverlay();
    })
})

closeBtn.addEventListener('click', () => {
    closeOverlay();
})

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeOverlay();
    }
})


function openOverlay() {
    overlay.classList.add('open');
    document.querySelector('body').classList.add('lock-scroll');
}

function closeOverlay () {
    overlay.classList.remove('open');
    document.querySelector('body').classList.remove('lock-scroll');
}

