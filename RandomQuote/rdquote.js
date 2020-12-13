var quoteBtn = document.getElementById('quote-btn');
var quote = document.querySelector('.quote');
var author = document.querySelector('.author');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        quoteBtn.addEventListener('click', () => {
            let random = Math.floor(Math.random() * json.length);

            quote.innerHTML = json[random].body;
            author.innerHTML = json[random].email;
        })
    })
    .catch(err => console.log('rejected:', err.message));