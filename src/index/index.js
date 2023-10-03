// Javascript for index page

// ====== VARIABLES ======

const messagesEndpoint = 'http://127.0.0.1:3000/messages';


// ====== MAIN ======

addEventListeners();
updateMessages();


// ====== LISTENERS ======

function addEventListeners () {
    addNewPostListener();
}

function addNewPostListener () {
    const newPostBtn = document.querySelector('.addBtn');

    newPostBtn.addEventListener('click', () => {
        window.location.href = '/new';
    })
}


// ====== FUNCTIONS ======

async function updateMessages () {
    // Get messages from server
    const response = await fetch(messagesEndpoint);
    const messages = await response.json();

    const postsDiv = document.querySelector('.postsDiv');

    messages.forEach((message, index) => {
        const newPost = document.createElement('p');
        newPost.classList.add('post');

        const userSpan = document.createElement('span');
        userSpan.innerText = message.user + ':';
        userSpan.classList.add('user');
        newPost.appendChild(userSpan);

        const messageSpan = document.createElement('span');
        messageSpan.innerText = message.message;
        messageSpan.classList.add('message');
        newPost.appendChild(messageSpan);

        postsDiv.appendChild(newPost);
    });
}