// Javascript for index page

// ====== MAIN ======

addEventListeners();


// ====== LISTENERS ======

// Listener for new post button

function addEventListeners () {
    addNewPostListener();
}

function addNewPostListener () {
    const newPostBtn = document.querySelector('.addBtn');

    newPostBtn.addEventListener('click', () => {
        window.location.href = '/new';
    })
}