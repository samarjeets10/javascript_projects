
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
    document.body.classList.add('dark-Mode');
}

function darkModeOff () {
    modeBtn.classList.remove('active');
    document.body.classList.remove('dark-Mode');
};


// Like and Unlike Button :


const countLike = document.getElementById('like-count');
const likeBtn = document.getElementById('likeBtn');

let isActive = localStorage.getItem("likeStatus") === "true";
let likeCount = localStorage.getItem('likeCount') || 0;

if (isActive === true) {
    like();
    countLike.textContent = `${likeCount}`;
}

likeBtn.addEventListener('click', () => {
    isActive = !isActive;
    console.log(isActive);

    if (isActive) {
        like();
    } else {
        dislike();
    }

    countLike.textContent = `${likeCount}`;

    //  Save to Local Storage :

    localStorage.setItem("likeStatus", isActive);
    localStorage.setItem("likeCount", likeCount);
});

function like () {
    likeBtn.classList.add('active');
    likeCount++;
}

function dislike () {
    likeBtn.classList.remove('active');
    likeCount--;
}


