
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll('.like-glyph');

function liked(event) {
  const like = event.target;
mimicServerCall('url')
.then(function() {
if (like.innerText === EMPTY_HEART) {
  like.innerText = FULL_HEART;
  hearts.className = 'full-heart';
} else {
  like.innerText = EMPTY_HEART;
  like.className = '';
}
})
.catch(function(error) {
  const banner = document.querySelector('#modal');
  banner.className = '';
  banner.innerText = error;
  setTimeout(() => banner.className = 'hidden', 3000);
});
}

for (const heart of hearts) {
  heart.addEventListener('click', liked)
}

// ***** Got lost around here *****

function mimicServerCall(url="http://NonExistent_mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 1000);
  });
}


// const banner = document. getElementById("modal"). style. display = "none";

// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// const likes = document.querySelector('.like');
// const heart = document.querySelector('.like-glyph');

// heart.addEventListener('click', liked);

// function liked() {
//   const like = heart.textContent;
//   if(like==EMPTY_HEART) {
//     heart.textContent = FULL_HEART;
//   } else {
//     heart.textContent = EMPTY_HEART;
//   }
// }










//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
